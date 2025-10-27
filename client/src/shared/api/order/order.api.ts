import { apiClient } from '../../lib';
import { CompanyType } from './order.types';

export const OrderApi = {
  async getCompanyShops() {
    return apiClient.get<{ data: CompanyType[] }>('/order/get-company-shops');
  },
};
