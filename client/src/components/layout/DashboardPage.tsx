import { FC, PropsWithChildren } from 'react';

import { Layout } from 'antd';

const DashboardPage: FC<PropsWithChildren> = ({ children }) => {
  return <Layout.Content className="m-0 p-6">{children}</Layout.Content>;
};

export default DashboardPage;
