import { createQueryKeys } from '@lukemorales/query-key-factory';

import { OrderItemBinParamsType } from './order-item-bin.types';

export const OrderItemBinKeys = createQueryKeys('orderItemBin', {
  orderItemBinList: (infiniteParams: OrderItemBinParamsType) => [infiniteParams],
  updateOrderItemBin: null,
});
