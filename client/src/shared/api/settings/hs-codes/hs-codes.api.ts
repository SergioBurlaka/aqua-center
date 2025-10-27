import { apiClient } from '../../../lib';
import { HsCodeTabDto } from './hs-codes.dtos';
import { HsCodeUpdate, InfiniteHsCodesParams } from './hs-codes.types';

export const HsCodesApi = {
  async getHsCodesTabsList() {
    return apiClient.get<{ data: HsCodeTabDto[] }>('/settings/hs-code-category/table-list');
  },
  async updateHsCodes(params: HsCodeUpdate) {
    return apiClient.post('/settings/hs-code-category/update', { ...params });
  },
  async getInfiniteHsCodes(params: InfiniteHsCodesParams) {
    return apiClient.post<{ data: { date: HsCodeTabDto[] } }>('/settings/hs-code-category/list', {
      ...params,
    });
  },
};
