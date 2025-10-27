import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { PrintBulkProps } from '../orders.types';

export const usePrintBulkMutation = (): UseMutationResult<unknown, Error, PrintBulkProps> => {
  return useMutation({
    mutationKey: ordersKeys.ordersPrintBulk.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.setPrintBulk(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: ' return request is downloaded',
      });
    },
  });
};
