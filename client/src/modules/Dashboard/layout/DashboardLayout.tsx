import { type FC, type PropsWithChildren } from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useThemeSettingsStore } from "@store/useThemeSettings.store";
import { Button, Layout, theme } from "antd";

import { LayoutConstants } from "@shared/constants";

import { HeaderActions } from "./components/HeaderActions";

const { useToken } = theme;

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const antTheme = useToken();
  const { isSiderCollapse, setSiderCollapse } = useThemeSettingsStore();

  return (
    <Layout className="relative h-full min-h-screen">
      <Layout.Header
        className="sticky top-0 z-30 w-full px-8 shadow-md md:px-8"
        style={{
          height: LayoutConstants.HEADER_HEIGHT,
          backgroundColor: antTheme.token.colorBgContainer,
        }}
      >
        <div className="flex h-full items-center justify-between gap-4">
          <div className="flex h-full">
            <div className="mr-12 flex max-w-[250px] items-center">
              AQUA-CENTER
            </div>
          </div>
          <HeaderActions />
        </div>
      </Layout.Header>
      <Layout hasSider>
        <Layout.Sider
          width={130}
          collapsedWidth={60}
          trigger={null}
          collapsible
          collapsed={isSiderCollapse}
          style={{
            backgroundColor: antTheme.token.colorBgContainer,
          }}
        >
          <div className="absolute bottom-0 left-0 flex w-full justify-center py-2">
            <Button
              type="text"
              icon={isSiderCollapse ? <RightOutlined /> : <LeftOutlined />}
              onClick={() => setSiderCollapse(!isSiderCollapse)}
            />
          </div>
        </Layout.Sider>
        <Layout className="bg-[#ededed]">{children}</Layout>
      </Layout>
    </Layout>
  );
};
