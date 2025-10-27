import { apiClient } from '../../../lib';
import { RatesDto, UploadErrorLogDto, UploadLogDto } from './carriers-rates.dtos';
import { CreateRates, RatesListPropsType, SetIsViewedType } from './carriers-rates.types';

export const CarriersRatesApi = {
  async getUploadLog() {
    return apiClient.get<{ data: UploadLogDto[] }>('/settings/rates-new/upload-log');
  },

  async getUploadErrorLog() {
    return apiClient.get<{ data: UploadErrorLogDto[] }>('/settings/rates-new/upload-error');
  },

  async setIsViewed(params: SetIsViewedType) {
    return apiClient.post('/settings/rates-new/upload-error/set-is-viewed', { ...params });
  },

  async createRates(params: CreateRates) {
    return apiClient.post('/settings/rates-new/create', { ...params });
  },
  async getRates(params: RatesListPropsType) {
    return apiClient.post<{ data: RatesDto[] }>('/settings/rates-new/list', { ...params });
  },
};
