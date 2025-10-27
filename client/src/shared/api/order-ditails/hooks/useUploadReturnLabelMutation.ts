import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { uploadReturnLabelsFileType } from '../order-ditails.types';

export const useUploadReturnLabelMutation = (): UseMutationResult<unknown, Error, uploadReturnLabelsFileType> => {
  return useMutation({
    mutationKey: orderDitailsKeys.uploadReturnLabels.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.uploadReturnLabels(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'New return labels uploaded',
      });
    },
  });
};
