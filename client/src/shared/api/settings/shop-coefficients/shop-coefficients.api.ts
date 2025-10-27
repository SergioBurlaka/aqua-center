import { apiClient } from '../../../lib';
import { ShopCoefDto } from './shop-coefficients.dtos';
import { DeleteShopCoefficient } from './shop-coefficients.types';

export const ShopCoefficientsApi = {
  async getShopCoef() {
    return apiClient.get<{ data: ShopCoefDto[] }>('/shop-coef');
  },

  async deleteShopCoef(params: DeleteShopCoefficient) {
    return apiClient.delete('/shop-coef/delete', { data: { ...params } });
  },

  async updateShopCoef(params: ShopCoefDto) {
    return apiClient.post('/shop-coef/update', { ...params });
  },
};
