import { FC, lazy } from "react";

import { useCredentialsStore } from "@store/credentials.store";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";

import AuthModule from "./Auth/Auth.module";

const DashboardModule = lazy(() => import("./Dashboard/Dashboard.module"));

const RootRoutes: FC = () => {
  const { token } = useCredentialsStore();

  if (token)
    return (
      <RouterRoutes>
        <Route path="/" element={<DashboardModule />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    );
  return (
    <RouterRoutes>
      <Route path="/auth/*" element={<AuthModule />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </RouterRoutes>
  );
};

export default RootRoutes;
