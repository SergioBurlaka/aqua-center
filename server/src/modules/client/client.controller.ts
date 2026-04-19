import { Request, Response } from "express"

type AppSheetFindResponse = {
  Rows?: unknown[]
  rows?: unknown[]
  [key: string]: unknown
}

export const getClientsFromAppSheet = async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.APPSHEET_API_KEY
    const appId = process.env.APPSHEET_APP_ID
    const tableName = process.env.APPSHEET_CLIENTS_TABLE || "Clients"

    if (!apiKey) {
      return res.status(500).json({ error: "APPSHEET_API_KEY is not configured" })
    }

    if (!appId) {
      return res.status(500).json({ error: "APPSHEET_APP_ID is not configured" })
    }
    // https://www.appsheet.com/api/v2/apps/85a0a91a-2bca-4c1f-bdf5-f07450840000/tables/Clients/Action
    const endpoint = `https://www.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/Action`

    const requestBody = {
      Action: "Find",
      Properties: {},
      Rows: [],
    }

    console.log("[AppSheet] Request", {
      endpoint,
      tableName,
      action: requestBody.Action,
    })

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApplicationAccessKey: apiKey,
      },
      body: JSON.stringify(requestBody),
    })

    const rawBody = await response.text()
    let data: AppSheetFindResponse | unknown[] = {}

    try {
      data = JSON.parse(rawBody) as AppSheetFindResponse | unknown[]
    } catch {
      console.error("[AppSheet] Failed to parse JSON response")
    }

    const rows = Array.isArray(data)
      ? data
      : Array.isArray(data.Rows)
        ? data.Rows
        : Array.isArray(data.rows)
          ? data.rows
          : []

    console.log("[AppSheet] Response", {
      status: response.status,
      ok: response.ok,
      rowsCount: rows.length,
      keys: Object.keys(data),
      sampleRow: rows[0] ?? null,
      rawPreview: rawBody.slice(0, 400),
    })

    if (!response.ok) {
      return res.status(response.status).json({
        error: "AppSheet request failed",
        details: data,
      })
    }
    const isDebug = req.query.debug === "true"
    if (isDebug) {
      return res.json({
        rows,
        rowsCount: rows.length,
        status: response.status,
        keys: Object.keys(data),
        payload: data,
      })
    }
    return res.json(rows)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unexpected error"
    return res.status(500).json({ error: message })
  }
}

