import { FC } from 'react';

import { Card, Result, Spin } from 'antd';

export const SuspenseFallback: FC = () => (
  <Card className="flex h-screen items-center justify-center rounded-none" bordered={false}>
    <div className="flex flex-col gap-6">
      <div className="h-auto w-full max-w-screen-md">Delikeys</div>
      <Result icon={<Spin size="large" />} title="Dashboard is loading..." />
    </div>
  </Card>
);
