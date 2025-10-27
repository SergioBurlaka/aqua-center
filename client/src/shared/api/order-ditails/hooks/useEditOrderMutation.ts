import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { EditOrderType } from '../order-ditails.types';

export const useEditOrderMutation = (): UseMutationResult<unknown, Error, EditOrderType> => {
  return useMutation({
    mutationKey: orderDitailsKeys.editOrder.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.editOrder(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
