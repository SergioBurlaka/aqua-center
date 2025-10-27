import { createQueryKeys } from '@lukemorales/query-key-factory';

import { CustomsDeclarationRulesParamsType } from './customs-declaration-rules.types';

export const customsDeclarationRulesKeys = createQueryKeys('customsDeclarationRules', {
  customsDeclarationRules: (infiniteParams: CustomsDeclarationRulesParamsType) => [infiniteParams],
  changeActiveCustomsDeclarationRules: null,
  deleteCustomsDeclarationRules: null,
  createCustomsDeclarationRules: null,
  updateCustomsDeclarationRules: null,
});
