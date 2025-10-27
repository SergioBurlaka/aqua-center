import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { AutoCreateOrderDeclarationManualProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useCreateOrderDeclarationMutation = (): UseMutationResult<
  unknown,
  Error,
  AutoCreateOrderDeclarationManualProps
> => {
  return useMutation({
    mutationKey: orderDitailsKeys.createOrderDeclaration.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.autoCreateOrderDeclarationManual(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order declaration created',
      });
    },
  });
};
