import { apiClient } from '../../../lib';
import { CompanyAddressDto, CreateCompanyAddressType, DeleteProps } from './company-address.dtos';
import { CompanyAddressPropsType } from './company-address.types';

export const CompanyAddressApi = {
  async getCompanyAddress(params: CompanyAddressPropsType) {
    return apiClient.post<{ data: { date: CompanyAddressDto[] } }>('/company/address/list', { ...params });
  },

  async deleteCompanyAddress(params: DeleteProps) {
    return apiClient.delete('/company/address/delete', { data: { ...params } });
  },

  async createCompanyAddress(params: CreateCompanyAddressType) {
    return apiClient.post('/company/address/create', { ...params });
  },
  async updateCompanyAddress(params: CompanyAddressDto) {
    return apiClient.post('/company/address/update', { ...params });
  },
};
