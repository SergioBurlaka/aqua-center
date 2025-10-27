import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ReturnRequestReportDTO } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { ShippedItemsReportProps } from '../orders.types';

export const useShippedItemsReportMutation = (): UseMutationResult<
  ReturnRequestReportDTO,
  Error,
  ShippedItemsReportProps
> => {
  return useMutation({
    mutationKey: ordersKeys.ordersShippedItemsReport.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.getShippedItemsReport(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: ' return request is downloaded',
      });
    },
  });
};
