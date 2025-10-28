import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CompanyShopStoreType = {
  permission: number[];
  setPermission: (permission: number[]) => void;
};

export const usePermissionsStore = create<CompanyShopStoreType>()(
  devtools(
    persist(
      (set) => ({
        permission: [],
        setPermission: (permission: number[]) => {
          set({ permission });
        },
      }),
      { name: 'Permissions' },
    ),
  ),
);
