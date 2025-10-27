import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { CreateChatOrderMessageProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useCreateOrderMessageMutation = (): UseMutationResult<unknown, Error, CreateChatOrderMessageProps> => {
  return useMutation({
    mutationKey: orderDitailsKeys.createOrderMessage.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.createOrderMessage(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
