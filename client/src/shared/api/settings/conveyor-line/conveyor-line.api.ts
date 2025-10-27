import { apiClient } from '../../../lib';
import { ConveyorLineGateRuleDto, ConveyorLinesGateRuleIdType } from './conveyor-line.dtos';
import {
  ConveyorLineGateRuleSetActiveType,
  CreateConveyorLineGateRuleType,
  UpdateConveyorLineGateRuleType,
} from './conveyor-line.types';

export const ConveyorLineGateRulesApi = {
  async getConveyorLineGateRules() {
    return apiClient.get<{ data: ConveyorLineGateRuleDto[] }>('/settings/conveyor_line_gate_rules');
  },
  async setConveyorLineGateRulesStatus(params: ConveyorLineGateRuleSetActiveType) {
    return apiClient.post('/settings/conveyor_line_gate_rule/set-is-active', { ...params });
  },

  async deleteConveyorLineGateRule(params: ConveyorLinesGateRuleIdType) {
    return apiClient.delete('/settings/conveyor_line_gate_rule', { data: { ...params } });
  },

  async createConveyorLineGateRule(params: CreateConveyorLineGateRuleType) {
    return apiClient.post('/settings/conveyor_line_gate_rule', { ...params });
  },
  async updateConveyorLineGateRule(params: UpdateConveyorLineGateRuleType) {
    return apiClient.post('/settings/conveyor_line_gate_rule/update', { ...params });
  },
};
