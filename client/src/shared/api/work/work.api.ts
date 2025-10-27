import { apiClient } from '../../lib';
import { TimeInfoDto, WorkLogProps } from './work.dtos';

export const WorkApi = {
  async getWorkLogTimeInfo() {
    return apiClient.get<{ data: TimeInfoDto[] }>('/work/time-info');
  },
  async closeUserOrderLog() {
    return apiClient.get('/work/close_user_order_log');
  },
  async changeWorkLogStatus(params: WorkLogProps) {
    return apiClient.post('/work/log', {
      ...params,
    });
  },
};
