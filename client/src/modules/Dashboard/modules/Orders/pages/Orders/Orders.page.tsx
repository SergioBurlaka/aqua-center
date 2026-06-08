import { FC, useMemo, useState } from "react";

import { Card, Form } from "antd";
import { FormProvider, useForm } from "react-hook-form";

import { FormSelect } from "@components/form/form-fields";
import { DashboardPage } from "@components/layout";
import {
  useClientsQuery,
  useProjectsByClientIdQuery,
} from "@shared/api/clients";
import { useCredentialsStore } from "@store/credentials.store";

type OrdersPageForm = {
  client_id: string | undefined;
  project_id: string | undefined;
};

const OrdersPage: FC = () => {
  const { worker } = useCredentialsStore();
  const { data: clients, isLoading, isError, error } = useClientsQuery();
  const [clientId, setClientId] = useState<string | undefined>();

  const {
    data: projects,
    isLoading: projectsLoading,
    isFetching: projectsFetching,
  } = useProjectsByClientIdQuery({ clientId });

  const formMethods = useForm<OrdersPageForm>({
    defaultValues: { client_id: undefined, project_id: undefined },
  });

  const clientOptions = useMemo(
    () =>
      (clients ?? []).map((client) => {
        const name = String(client.ClientName ?? "Unnamed client").trim();
        const id = String(client.client_id ?? "").trim();
        const label = id
          ? `${name || id}${name && id ? ` (${id})` : ""}`
          : name || id;
        return { value: client.client_id, label: label || client.client_id };
      }),
    [clients],
  );

  const projectOptions = useMemo(
    () =>
      (projects ?? []).map((project) => {
          const id = project["Projects ID"].trim();
          const name = (project["Project Name"] || "Unnamed project").trim();
          const label = id
            ? `${name || id}${name && id ? ` (${id})` : ""}`
            : name || id;
          return { value: id, label: label || id };
        })
        .filter((option) => option.value),
    [projects],
  );

  const projectsSelectLoading = projectsLoading || projectsFetching;

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
            padding: "1rem",
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
        {!isLoading && !isError && (
          <p className="text-sm text-gray-600">
            Total: {(clients ?? []).length}
          </p>
        )}
        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          {isError && (
            <p>
              Failed to load clients:{" "}
              {(error as Error)?.message || "Unknown error"}
            </p>
          )}
          {!isError && (
            <FormProvider {...formMethods}>
              <Form layout="vertical" className="max-w-md">
                <FormSelect
                  name="client_id"
                  label="Client"
                  cb={(client_id) => {
                    const id =
                      typeof client_id === "string" ? client_id : undefined;
                    setClientId(id);
                    formMethods.setValue("project_id", undefined);
                  }}
                  SelectProps={{
                    options: clientOptions,
                    loading: isLoading,
                    allowClear: true,
                    showSearch: true,
                    optionFilterProp: "label",
                    placeholder: "Select a client",
                  }}
                />
                <FormSelect
                  name="project_id"
                  label="Project"
                  SelectProps={{
                    options: projectOptions,
                    loading: projectsSelectLoading,
                    disabled: !clientId,
                    allowClear: true,
                    showSearch: true,
                    optionFilterProp: "label",
                    placeholder: clientId
                      ? "Select a project"
                      : "Select a client first",
                  }}
                />
              </Form>
            </FormProvider>
          )}
        </div>
      </Card>
    </DashboardPage>
  );
};

export default OrdersPage;
