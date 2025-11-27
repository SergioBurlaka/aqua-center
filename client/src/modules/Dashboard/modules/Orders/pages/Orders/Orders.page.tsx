import { FC } from "react";

import { Card } from "antd";

import { DashboardPage } from "@components/layout";
import { useCredentialsStore } from "@store/credentials.store";

const OrdersPage: FC = () => {
  const { worker } = useCredentialsStore();
  console.log(worker);
  return (
    <DashboardPage>
      <Card
        className="flex h-full flex-col"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
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
      </Card>
    </DashboardPage>
  );
};

export default OrdersPage;
