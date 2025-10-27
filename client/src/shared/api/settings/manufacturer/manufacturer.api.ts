import { apiClient } from '../../../lib';
import { ManufacturerDto, UpdateManufacturer } from './manufacturer.dtos';
import { InfiniteManufacturerParams } from './manufacturer.types';

export const ManufacturerApi = {
  async updateManufacturers(params: UpdateManufacturer) {
    return apiClient.post('/settings/manufacturer-origin-country/update', { ...params });
  },
  async getInfiniteManufacturers(params: InfiniteManufacturerParams) {
    return apiClient.post<{ data: { date: ManufacturerDto[] } }>('/settings/manufacturer-origin-country/list', {
      ...params,
    });
  },
};
