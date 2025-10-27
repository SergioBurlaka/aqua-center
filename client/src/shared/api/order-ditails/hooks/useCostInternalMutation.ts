import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { CostInternalProps } from '../order-ditails.types';

export const useCostInternalMutation = (): UseMutationResult<unknown, Error, CostInternalProps> => {
  return useMutation({
    mutationKey: orderDitailsKeys.costInternal.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.costInternal(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
