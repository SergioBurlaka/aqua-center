import { FC, PropsWithChildren } from 'react';

import { Button, ConfigProvider, type ButtonProps } from 'antd';

const RedButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff3541',
        },
      }}
    >
      <Button {...props} type="primary">
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default RedButton;
