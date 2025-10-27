import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ReturnRequestReportDTO } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { CancelledItemsReportProps } from '../orders.types';

export const useCancelledItemsReportMutation = (): UseMutationResult<
  ReturnRequestReportDTO,
  Error,
  CancelledItemsReportProps
> => {
  return useMutation({
    mutationKey: ordersKeys.ordersCancelledItemsReport.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.getCancelledItemsReport(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: ' return request is downloaded',
      });
    },
  });
};
