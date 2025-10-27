import { createQueryKeys } from '@lukemorales/query-key-factory';

export const companyAddressKeys = createQueryKeys('companyAddress', {
  getCompanyAddress: null,
  deleteCompanyAddress: null,
  createCompanyAddress: null,
  updateCompanyAddress: null,
});
