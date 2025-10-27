import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { UploadNewOrderFromTxtFileType } from '../orders.types';

export const useUploadNewOrderFromTxtFileMutation = (): UseMutationResult<
  unknown,
  Error,
  UploadNewOrderFromTxtFileType
> => {
  return useMutation({
    mutationKey: ordersKeys.ordersUploadNewOrderFromTxtFile.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.setUploadNewOrderFromTxtFile(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Orders from txt uploaded',
      });
    },
  });
};
