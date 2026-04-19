import { FC } from "react";

import { Card } from "antd";

import { DashboardPage } from "@components/layout";
import { useClientsQuery } from "@shared/api/clients";
import { useCredentialsStore } from "@store/credentials.store";

const OrdersPage: FC = () => {
  const { worker } = useCredentialsStore();
  const { data: clients, isLoading, isError, error } = useClientsQuery();

  return (
    <DashboardPage>
      <Card
        className="flex h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] flex-col"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minHeight: 0,
            padding: '1rem',
            // paddingTop: 0,
            // paddingBottom: 6,
          },
        }}
      >

        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>{worker?.name}</p>
        <p>{worker?.email}</p>
        <p>{worker?.role}</p>
        <p>{worker?.brigadeId}</p>

        <h2 className="text-xl font-semibold">Clients</h2>
        {!isLoading && !isError && <p className="text-sm text-gray-600">Total: {(clients ?? []).length}</p>}
        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          {isLoading && <p>Loading clients...</p>}
          {isError && <p>Failed to load clients: {(error as Error)?.message || "Unknown error"}</p>}
          {!isLoading && !isError && (
            <ul className="mt-2 list-disc pl-5">
              {(clients ?? []).map((client, index) => (
                <li key={String(client["Client ID"] )}>
                  {String(client.Назва ?? "Unnamed client")}
                  {client["Client ID"] ? ` (${String(client["Client ID"])})` : ""}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </DashboardPage>
  );
};

export default OrdersPage;
