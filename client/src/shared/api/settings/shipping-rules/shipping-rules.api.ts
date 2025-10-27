import { apiClient } from '../../../lib';
import { ShippingRulesDto } from './shipping-rules.dtos';
import {
  ChangeStatusShippingRule,
  RuleSchemaType,
  ShippingRuleByIdProps,
  ShippingRulesParamsType,
  ShippingRuleToDeleteIds,
} from './shipping-rules.types';

export const ShippingRulesApi = {
  async getShippingRules(params: ShippingRulesParamsType) {
    return apiClient.post<{ data: { date: ShippingRulesDto[] } }>('/settings/shipping_rules', { ...params });
  },
  async getShippingRulesList(params: ShippingRulesParamsType) {
    return apiClient.post<{ data: { date: ShippingRulesDto[] } }>('/settings/shipping_rules/list', { ...params });
  },

  async createShippingRules(params: RuleSchemaType) {
    return apiClient.post('/settings/shipping_rules/create', { ...params });
  },

  async editShippingRules(params: RuleSchemaType) {
    return apiClient.post('/settings/shipping_rules/edit', { ...params });
  },

  async deleteShippingRules(params: ShippingRuleToDeleteIds) {
    return apiClient.delete('/settings/shipping_rules/delete', { data: { ...params } });
  },

  async changeStatusShippingRules(params: ChangeStatusShippingRule) {
    return apiClient.post('/settings/shipping_rules/change_status', { ...params });
  },

  async getShippingRuleById(params: ShippingRuleByIdProps) {
    return apiClient.post('/settings/shipping_rule_conditions', { ...params });
  },
};
