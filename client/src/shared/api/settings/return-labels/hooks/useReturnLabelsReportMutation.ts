import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { ReturnRequestReportDTO } from '@shared/api/orders/orders.dtos';

import { ReturnLabelsApi } from '../return-labels.api';
import { returnLabelsKeys } from '../return-labels.keys';
import { ReportsType } from '../return-labels.types';

export const useReturnLabelsReportMutation = (): UseMutationResult<ReturnRequestReportDTO, Error, ReportsType> => {
  return useMutation({
    mutationKey: returnLabelsKeys.returnLabelsReport.queryKey,
    mutationFn: async (params) => {
      const { data } = await ReturnLabelsApi.getReturnLabelsReport(params);

      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Return report is downloaded',
      });
    },
  });
};
