"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsFromAppSheet = void 0;
const getClientsFromAppSheet = async (_, res) => {
    try {
        const apiKey = process.env.APPSHEET_API_KEY;
        const appId = process.env.APPSHEET_APP_ID;
        const tableName = process.env.APPSHEET_CLIENTS_TABLE || "Clients";
        if (!apiKey) {
            return res.status(500).json({ error: "APPSHEET_API_KEY is not configured" });
        }
        if (!appId) {
            return res.status(500).json({ error: "APPSHEET_APP_ID is not configured" });
        }
        // https://www.appsheet.com/api/v2/apps/85a0a91a-2bca-4c1f-bdf5-f07450840000/tables/Clients/Action
        const endpoint = `https://www.appsheet.com/api/v2/apps/${appId}/tables/${tableName}/Action`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ApplicationAccessKey: apiKey,
            },
            body: JSON.stringify({
                Action: "Find",
                Properties: {},
                Rows: [],
            }),
        });
        const data = (await response.json());
        if (!response.ok) {
            return res.status(response.status).json({
                error: "AppSheet request failed",
                details: data,
            });
        }
        return res.json(data.Rows || []);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return res.status(500).json({ error: message });
    }
};
exports.getClientsFromAppSheet = getClientsFromAppSheet;
