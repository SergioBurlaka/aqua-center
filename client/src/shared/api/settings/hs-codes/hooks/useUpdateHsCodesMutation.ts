import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { HsCodesApi } from '../hs-codes.api';
import { hsCodesKeys } from '../hs-codes.keys';
import { HsCodeUpdate } from '../hs-codes.types';

export const useUpdateHsCodesMutation = (): UseMutationResult<unknown, Error, HsCodeUpdate> => {
  return useMutation({
    mutationKey: hsCodesKeys.updateHsCodes.queryKey,
    mutationFn: async (params) => {
      const { data } = await HsCodesApi.updateHsCodes(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'HS code updated successfully',
      });
    },
  });
};
