import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { DimWeightApi } from '../dim-weight.api';
import { DimWeightUpdateProps } from '../dim-weight.dtos';
import { DimWeightKeys } from '../dim-weight.keys';

export const useUpdateDimWeightMutation = (): UseMutationResult<unknown, Error, DimWeightUpdateProps> => {
  return useMutation({
    mutationKey: DimWeightKeys.updateDimWeightList.queryKey,
    mutationFn: async (params) => {
      const { data } = await DimWeightApi.updateDimWeigh(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Dim weight updated successfully',
      });
    },
  });
};
