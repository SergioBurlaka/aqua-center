import { type FC } from "react";
import { DashboardLayout } from "./layout/DashboardLayout";
import OrdersPage from "./modules/Orders/pages/Orders/Orders.page";

const DashboardModule: FC = () => {
  return (
    <DashboardLayout>
      <OrdersPage />
    </DashboardLayout>
  );
};

export default DashboardModule;
