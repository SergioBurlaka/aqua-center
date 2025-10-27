import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { RemoveOrderItemTagType } from '../order-ditails.types';

export const useDeleteOrderItemTagMutation = (): UseMutationResult<unknown, Error, RemoveOrderItemTagType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: orderDitailsKeys.editOrder.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.removeOrderItemTag(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.orderDitail._def });

      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
