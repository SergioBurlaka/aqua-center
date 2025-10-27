import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { DeleteOrderDeclarationProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useDeleteOrderDeclarationMutation = (): UseMutationResult<unknown, Error, DeleteOrderDeclarationProps> => {
  return useMutation({
    mutationKey: orderDitailsKeys.deleteOrderDeclaration.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.deleteOrderDeclaration(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
