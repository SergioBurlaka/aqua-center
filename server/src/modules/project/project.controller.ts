import { Request, Response } from "express";

type AppSheetFindResponse = {
  Rows?: unknown;
  rows?: unknown;
  [key: string]: unknown;
};

const CLIENT_ID_SAFE = /^[a-zA-Z0-9_-]+$/;
const APPSHEET_NAME_SAFE = /^[a-zA-Z0-9 _-]+$/;

function buildProjectsSelector(clientId: string, tableName: string): string {
  if (!APPSHEET_NAME_SAFE.test(tableName) || tableName.length > 128) {
    throw new Error("Invalid APPSHEET_PROJECTS_TABLE");
  }
  return `FILTER("${tableName}", [Client ID] = "${clientId}")`;
}

/** AppSheet sometimes returns Rows as a JSON string instead of an array. */
function coerceRowsField(value: unknown): unknown[] {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "string") {
    const t = value.trim();
    if (t.startsWith("[") || t.startsWith("{")) {
      try {
        const parsed = JSON.parse(t) as unknown;
        if (Array.isArray(parsed)) {
          return parsed;
        }
        if (parsed !== null && typeof parsed === "object") {
          return [parsed];
        }
      } catch {
        /* leave empty */
      }
    }
  }
  return [];
}

function extractAppSheetRows(
  data: AppSheetFindResponse | unknown[] | string,
): unknown[] {
  if (Array.isArray(data)) {
    return data;
  }
  if (typeof data === "string") {
    return coerceRowsField(data);
  }
  if (typeof data !== "object" || data === null) {
    return [];
  }
  const d = data as AppSheetFindResponse;
  if (d.Rows !== undefined) {
    return coerceRowsField(d.Rows);
  }
  if (d.rows !== undefined) {
    return coerceRowsField(d.rows);
  }
  return [];
}

function topLevelKeys(data: AppSheetFindResponse | unknown[]): string[] {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return [];
  }
  return Object.keys(data as object);
}

const MAX_LOG_RAW_BODY_CHARS = 100_000;

function truncateForLog(
  text: string,
  maxChars: number,
): { text: string; truncated: boolean } {
  if (text.length <= maxChars) {
    return { text, truncated: false };
  }
  return {
    text: `${text.slice(0, maxChars)}\n… truncated ${text.length - maxChars} chars`,
    truncated: true,
  };
}

export const getProjectsByClientId = async (req: Request, res: Response) => {
  try {
    // stderr + prefix: easier to spot in `docker compose logs -f server` than plain console.log
    console.error("[AppSheet] Projects — hit", {
      query: req.query,
      path: req.path,
    });

    const raw =
      typeof req.query.client_id === "string"
        ? req.query.client_id
        : typeof req.query.clientId === "string"
          ? req.query.clientId
          : undefined;

    const clientId = raw?.trim();
    if (!clientId) {
      return res
        .status(400)
        .json({ error: "client_id query parameter is required" });
    }

    if (!CLIENT_ID_SAFE.test(clientId)) {
      return res.status(400).json({ error: "Invalid client_id format" });
    }

    const apiKey = 'V2-Hvnsw-mW0z6-mOtYf-OoNWM-yQ5VZ-SAXtv-YMMqY-Z6euA';
    // const apiKey = process.env.APPSHEET_API_KEY;
    const appId = '2547f26d-bd0e-42af-8f22-4626251398ec';
    // const appId = process.env.APPSHEET_APP_ID;
    const tableName = process.env.APPSHEET_PROJECTS_TABLE || "Projects";

    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "APPSHEET_API_KEY is not configured" });
    }

    if (!appId) {
      return res
        .status(500)
        .json({ error: "APPSHEET_APP_ID is not configured" });
    }

    const endpoint = `https://www.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/Action`;

    const requestBody = {
      Action: "Find",
      Properties: {
        Selector: buildProjectsSelector(clientId, tableName),
      },
      Rows: [] as unknown[],
    };

    const requestBodyJson = JSON.stringify(requestBody, null, 2);

    console.log("[AppSheet] Projects — request", {
      endpoint,
      tableName,
      clientId,
      action: requestBody.Action,
      selector: requestBody.Properties.Selector,
    });
    console.log("[AppSheet] Projects — request body (JSON)\n", requestBodyJson);

    const fetchTimeoutMs = Math.min(
      Math.max(Number(process.env.APPSHEET_FETCH_TIMEOUT_MS) || 120_000, 5_000),
      300_000,
    );

    let appSheetHttp: globalThis.Response;
    try {
      appSheetHttp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ApplicationAccessKey: apiKey,
        },
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(fetchTimeoutMs),
      });
    } catch (err: unknown) {
      const name = err instanceof Error ? err.name : "";
      if (name === "TimeoutError" || name === "AbortError") {
        console.error("[AppSheet] Projects — fetch timed out", { fetchTimeoutMs, endpoint });
        return res.status(504).json({
          error: "AppSheet request timed out",
          timeoutMs: fetchTimeoutMs,
        });
      }
      throw err;
    }
    const rawBody = await appSheetHttp.text();
    let data: AppSheetFindResponse | unknown[] = {};
    
    try {
      data = JSON.parse(rawBody) as AppSheetFindResponse | unknown[];
    } catch {
      console.error(
        "[AppSheet] Projects — JSON parse failed; raw excerpt:\n",
        rawBody.slice(0, 2000),
      );
    }
    
    const rows = extractAppSheetRows(data);
    console.error("[AppSheet] Projects — rawBody", {
      bytes: rawBody.length,
      preview: rawBody.slice(0, 2000),
    });

    const rawForLog = truncateForLog(rawBody, MAX_LOG_RAW_BODY_CHARS);
    console.log("[AppSheet] Projects — response", {
      httpStatus: appSheetHttp.status,
      ok: appSheetHttp.ok,
      rawBodyLength: rawBody.length,
      rawBodyTruncated: rawForLog.truncated,
      rowsExtracted: rows.length,
      topLevelKeys: topLevelKeys(data),
    });
    console.log(
      "[AppSheet] Projects — response body (raw text)\n",
      rawForLog.text,
    );
    if (typeof data === "object" && data !== null) {
      console.log(
        "[AppSheet] Projects — response body (parsed JSON)\n",
        JSON.stringify(data, null, 2),
      );
    }

    if (!appSheetHttp.ok) {
      return res.status(appSheetHttp.status).json({
        error: "AppSheet request failed",
        details: data,
      });
    }

    const isDebug = req.query.debug === "true";
    if (isDebug) {
      return res.json({
        clientId,
        rows,
        rowsCount: rows.length,
        status: appSheetHttp.status,
        keys: topLevelKeys(data),
        payload: data,
        appSheetRequestBody: requestBody,
        appSheetResponseRaw: rawBody,
        appSheetParsed: data,
      });
    }

    return res.json(rows);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return res.status(500).json({ error: message });
  }
};
