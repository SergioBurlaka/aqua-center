import { Request, Response } from "express";

type AppSheetFindResponse = {
  Rows?: unknown;
  rows?: unknown;
  [key: string]: unknown;
};

const PROGRAM_ID_SAFE = /^[a-zA-Z0-9_-]+$/;
const APPSHEET_NAME_SAFE = /^[a-zA-Z0-9 _-]+$/;

function buildIrrigationProgramsSelector(
  programId: string,
  tableName: string,
): string {
  if (!APPSHEET_NAME_SAFE.test(tableName) || tableName.length > 128) {
    throw new Error("Invalid APPSHEET_IRRIGATION_PROGRAMS_TABLE");
  }
  return `FILTER("${tableName}", [Program ID] = "${programId}")`;
}

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

export const getIrrigationProgramByProgramId = async (
  req: Request,
  res: Response,
) => {
  try {
    const raw =
      typeof req.query.program_id === "string"
        ? req.query.program_id
        : typeof req.query.programId === "string"
          ? req.query.programId
          : undefined;

    const programId = raw?.trim();
    if (!programId) {
      return res
        .status(400)
        .json({ error: "program_id query parameter is required" });
    }

    if (!PROGRAM_ID_SAFE.test(programId)) {
      return res.status(400).json({ error: "Invalid program_id format" });
    }

    const apiKey = process.env.APPSHEET_API_KEY;
    const appId = process.env.APPSHEET_APP_ID;
    const tableName =
      process.env.APPSHEET_IRRIGATION_PROGRAMS_TABLE || "Irrigation Programs";

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

    if (!APPSHEET_NAME_SAFE.test(tableName) || tableName.length > 128) {
      return res
        .status(500)
        .json({ error: "Invalid APPSHEET_IRRIGATION_PROGRAMS_TABLE" });
    }

    const endpoint = `https://www.appsheet.com/api/v2/apps/${appId}/tables/${encodeURIComponent(tableName)}/Action`;

    const requestBody = {
      Action: "Find",
      Properties: {
        Selector: buildIrrigationProgramsSelector(programId, tableName),
      },
      Rows: [] as unknown[],
    };

    console.log("[AppSheet] Irrigation Programs — request", {
      endpoint,
      tableName,
      programId,
      selector: requestBody.Properties.Selector,
    });

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
        console.error("[AppSheet] Irrigation Programs — fetch timed out", {
          fetchTimeoutMs,
          endpoint,
        });
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
        "[AppSheet] Irrigation Programs — JSON parse failed; raw excerpt:\n",
        rawBody.slice(0, 2000),
      );
    }

    const rows = extractAppSheetRows(data);

    console.log("[AppSheet] Irrigation Programs — response", {
      httpStatus: appSheetHttp.status,
      ok: appSheetHttp.ok,
      rowsExtracted: rows.length,
      topLevelKeys: topLevelKeys(data),
    });

    if (!appSheetHttp.ok) {
      return res.status(appSheetHttp.status).json({
        error: "AppSheet request failed",
        details: data,
      });
    }

    const isDebug = req.query.debug === "true";
    if (isDebug) {
      return res.json({
        programId,
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
