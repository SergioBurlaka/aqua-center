import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { UploadNewTrackerFileType } from '../orders.types';

export const useUploadNewTrackerFileMutation = (): UseMutationResult<unknown, Error, UploadNewTrackerFileType> => {
  return useMutation({
    mutationKey: ordersKeys.ordersUploadNewTrackerFile.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.setUploadNewTrackerFile(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'New tracker uploaded',
      });
    },
  });
};
