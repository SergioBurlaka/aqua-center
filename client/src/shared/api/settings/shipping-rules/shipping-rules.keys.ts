import { createQueryKeys } from '@lukemorales/query-key-factory';

import { ShippingRuleByIdProps, ShippingRulesParamsType } from './shipping-rules.types';

export const shippingRulesKeys = createQueryKeys('shippingRules', {
  shippingRules: (infiniteParams: ShippingRulesParamsType) => [infiniteParams],
  shippingRuleById: (infiniteParams: ShippingRuleByIdProps) => [infiniteParams],
  deleteShippingRule: null,
  createShippingRule: null,
  editShippingRule: null,
  changeActiveShippingRule: null,
});
