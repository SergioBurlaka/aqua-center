import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { UpdateOrderItemDeclarationProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useUpdateOrderItemDeclarationMutation = (): UseMutationResult<
  unknown,
  Error,
  UpdateOrderItemDeclarationProps
> => {
  return useMutation({
    mutationKey: orderDitailsKeys.updateOrderItemDeclaration.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.updateOrderItemDeclaration(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
