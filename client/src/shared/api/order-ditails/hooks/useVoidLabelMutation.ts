import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { VoidLabelProps } from '../order-ditails.types';

export const useVoidLabelMutation = (): UseMutationResult<unknown, Error, VoidLabelProps> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: orderDitailsKeys.voidLabel.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.voidLabel(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.listLabels._def });

      notification.success({
        message: 'Label was voided successfully',
      });
    },
  });
};
