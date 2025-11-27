import type { FC, PropsWithChildren } from 'react';

import { configResponsive } from 'ahooks';
import { App, ConfigProvider, theme as antThemeConfig, type ThemeConfig } from 'antd';

const screenSM = 640;
const screenMD = 768;
const screenLG = 1024;
const screenXL = 1280;
const screenXXL = 1536;

configResponsive({
  xs: 0,
  sm: screenSM,
  md: screenMD,
  lg: screenLG,
  xl: screenXL,
  xxl: screenXXL,
});

export const AntThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const antTheme: ThemeConfig = {
    algorithm: antThemeConfig.defaultAlgorithm,
    token: {
      colorPrimary: '#f60',
      colorLink: '#f60',
      colorBgBase: '#fff',
      fontFamily: 'Plus Jakarta Sans',
      fontSize: 14,

      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,

      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,

      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,

      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,

      screenXXL,
      screenXXLMin: screenXXL,
    },
    components: {
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      },
    
    },
  };

  return (
    <ConfigProvider theme={antTheme} button={{ autoInsertSpace: false }}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
