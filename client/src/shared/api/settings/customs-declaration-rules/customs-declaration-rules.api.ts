import { apiClient } from '../../../lib';
import { CustomsDeclarationRulesDto } from './customs-declaration-rules.dtos';
import {
  CustomsDeclarationRulesParamsType,
  ChangeStatusCustomsDeclarationRule,
  CustomsDeclarationRuleToDeleteIds,
  CreateCustomDeclarationPropsType,
  UpdateCustomDeclarationPropsType,
} from './customs-declaration-rules.types';

export const CustomsDeclarationRulesApi = {
  async getCustomsDeclarationRules(params: CustomsDeclarationRulesParamsType) {
    return apiClient.post<{ data: { date: CustomsDeclarationRulesDto[] } }>('/settings/customs_declaration_rules', {
      ...params,
    });
  },
  async changeStatusCustomsDeclarationRules(params: ChangeStatusCustomsDeclarationRule) {
    return apiClient.post('/settings/customs_declaration_rules/change_status', { ...params });
  },

  async deleteCustomsDeclarationRules(params: CustomsDeclarationRuleToDeleteIds) {
    return apiClient.delete('/settings/customs_declaration_rules/delete', { data: { ...params } });
  },

  async createCustomsDeclarationRule(params: CreateCustomDeclarationPropsType) {
    return apiClient.post('/settings/customs_declaration_rules/create', { ...params });
  },
  async updateCustomsDeclarationRule(params: UpdateCustomDeclarationPropsType) {
    return apiClient.post('/settings/customs_declaration_rules/update', { ...params });
  },
};
