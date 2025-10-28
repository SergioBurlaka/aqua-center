import type { FC, PropsWithChildren } from "react";

export const AuthLayout: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <main className="flex h-screen  flex-col px-10 ">
    <div className="container mx-auto flex flex-auto overflow-hidden	">
      <div className="flex min-w-[350px] grow flex-col justify-center">
        {children}
      </div>
    </div>
  </main>
);
