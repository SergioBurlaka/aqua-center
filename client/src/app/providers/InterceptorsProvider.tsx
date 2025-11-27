import { FC, ReactElement } from "react";

import { useCredentialsStore } from "@store/credentials.store";
import { App } from "antd";

import { useEffectOnce } from "@shared/hooks/useEffectOnce";
import { setupInterceptors } from "@shared/lib";

export const InterceptorsProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { notification } = App.useApp();

  const { setToken } = useCredentialsStore();

  const cb = () => setToken();

  useEffectOnce(() => {
    setupInterceptors({
      notification,
      cb,
    });
  });

  return children;
};
