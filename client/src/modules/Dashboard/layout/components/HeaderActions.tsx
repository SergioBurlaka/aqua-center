import { FC } from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { useCredentialsStore } from '@store/credentials.store';
import { Button, Tooltip } from 'antd';

import { useHandler } from '@shared/hooks/useHandler';

const Logout: FC = () => {
  const { setToken } = useCredentialsStore();

  const handleLogout = useHandler(() => {
    setToken();
  });

  return (
    <div className="flex items-center gap-2">
      <Tooltip title="Logout" placement="bottom">
        <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout} />
      </Tooltip>
    </div>
  );
};

export const HeaderActions: FC = () => (
  <div className="flex flex-row items-center gap-2 md:gap-4">
    <Logout />
  </div>
);
