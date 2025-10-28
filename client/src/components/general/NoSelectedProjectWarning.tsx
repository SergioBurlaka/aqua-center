import type { FC } from 'react';

import { Result } from 'antd';

export const NoSelectedProjectWarning: FC = () => (
  <Result status="warning" title="To view the data, please search an order." />
);
