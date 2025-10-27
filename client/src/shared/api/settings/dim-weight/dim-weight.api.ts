import { apiClient } from '../../../lib';
import { DimWeightListDto, DimWeightUpdateProps } from './dim-weight.dtos';

export const DimWeightApi = {
  async getDimWeightList() {
    return apiClient.get<{ data: DimWeightListDto[] }>('/dim-weight/list');
  },
  async updateDimWeigh(params: DimWeightUpdateProps) {
    return apiClient.post('/dim-weight/update', { ...params });
  },
};
