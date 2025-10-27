import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';

export const useCreateManifestMutation = (): UseMutationResult<unknown, Error, unknown> => {
  return useMutation({
    mutationKey: ordersKeys.ordersCreateManifest.queryKey,
    mutationFn: async () => {
      const { data } = await OrdersApi.getCreateManifest();
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Manifest created',
      });
    },
  });
};
