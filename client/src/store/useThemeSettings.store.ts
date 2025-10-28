import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ThemeSettingsSider = {
  isSiderCollapse: boolean;
  setSiderCollapse: (isSiderCollapse: boolean) => void;
};

export const useThemeSettingsStore = create<ThemeSettingsSider>()(
  devtools(
    persist(
      (set) => ({
        isSiderCollapse: false,
        setSiderCollapse: (isSiderCollapse) => {
          set({ isSiderCollapse });
        },
      }),
      { name: 'ThemeSettings' },
    ),
  ),
);
