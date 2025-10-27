import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ReturnRequestReportDTO } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { ReturnRequestReportProps } from '../orders.types';

export const useReturnRequestReportMutation = (): UseMutationResult<
  ReturnRequestReportDTO,
  Error,
  ReturnRequestReportProps
> => {
  return useMutation({
    mutationKey: ordersKeys.ordersReturnRequestReport.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.getReturnRequestReport(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: ' return request is downloaded',
      });
    },
  });
};
