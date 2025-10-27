import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { EditOrderItemStatusType } from '../order-ditails.types';

export const useEditOrderItemStatusMutation = (): UseMutationResult<unknown, Error, EditOrderItemStatusType> => {
  return useMutation({
    mutationKey: orderDitailsKeys.editOrderItemStatus.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.editOrderItemStatus(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
