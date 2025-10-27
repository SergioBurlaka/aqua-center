import { apiClient } from '../../../lib';
import { OrderItemBinDto, UpdateOrderItemBinProp } from './order-item-bin.dtos';
import { OrderItemBinParamsType } from './order-item-bin.types';

export const OrderItemBinApi = {
  async getOrderItemBin(params: OrderItemBinParamsType) {
    return apiClient.post<{ data: { date: OrderItemBinDto[] } }>('/order/order-item-bin/list', {
      ...params,
    });
  },
  async updateOrderItemBin(params: UpdateOrderItemBinProp) {
    return apiClient.post('/order/order-item-bin/update', { ...params });
  },
};
