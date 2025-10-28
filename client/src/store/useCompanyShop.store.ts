import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { COMPANY_SHOP_SELECT_DEAFAULT_VALUE } from '@shared/constants';

type CompanyShopStoreType = {
  companyShopValue: string;
  setCompanyShopValue: (companyShopValue: string) => void;
};

export const useCompanyShopStore = create<CompanyShopStoreType>()(
  devtools(
    persist(
      (set) => ({
        companyShopValue: JSON.stringify({ shop_name: COMPANY_SHOP_SELECT_DEAFAULT_VALUE }),
        setCompanyShopValue: (companyShopValue) => {
          set({ companyShopValue });
        },
      }),
      { name: 'CompanyShop' },
    ),
  ),
);
