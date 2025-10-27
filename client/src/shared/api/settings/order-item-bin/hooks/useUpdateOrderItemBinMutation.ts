import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderItemBinApi } from '../order-item-bin.api';
import { UpdateOrderItemBinProp } from '../order-item-bin.dtos';
import { OrderItemBinKeys } from '../order-item-bin.keys';

export const useUpdateOrderItemBinMutation = (): UseMutationResult<unknown, Error, UpdateOrderItemBinProp> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: OrderItemBinKeys.updateOrderItemBin.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderItemBinApi.updateOrderItemBin(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: OrderItemBinKeys.orderItemBinList._def });

      notification.success({
        message: 'Order item bin updated successfully',
      });
    },
  });
};
