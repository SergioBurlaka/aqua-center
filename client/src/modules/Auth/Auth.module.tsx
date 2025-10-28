import { FC } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout } from "./layout/Auth.layout";
import LoginPage from "./pages/Login/Login.page";

const AuthModule: FC = () => (
  <AuthLayout>
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </AuthLayout>
);

export default AuthModule;
