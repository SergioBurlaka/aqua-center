import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CreateLabelDto } from '@shared/api/upc-info/upcInfo.dtos';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { CreateLabelProps } from '../order-ditails.types';

export const useCreateLabelMutation = (): UseMutationResult<CreateLabelDto[], Error, CreateLabelProps> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: orderDitailsKeys.createLabel.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.createLabel(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.listLabels._def });

      notification.success({
        message: 'Label created successfully',
      });
    },
  });
};
