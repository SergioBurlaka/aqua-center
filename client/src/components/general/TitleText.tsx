import { FC, PropsWithChildren } from 'react';

import { Typography } from 'antd';

import { clsxm } from '@utils/clsxm';

const TitleText: FC<PropsWithChildren<{ level?: 1 | 2 | 3 | 4 | 5; className?: string }>> = ({
  children,
  level = 3,
  className,
}) => (
  <Typography.Title level={level} className={clsxm('m-0', className)}>
    {children}
  </Typography.Title>
);

export default TitleText;
