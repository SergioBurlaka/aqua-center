import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CarriersRatesApi } from '../carriers-rates.api';
import { carriersRatesKeys } from '../carriers-rates.keys';
import { SetIsViewedType } from '../carriers-rates.types';

export const useSetIsViewedMutation = (): UseMutationResult<unknown, Error, SetIsViewedType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: carriersRatesKeys.setIsViewed.queryKey,
    mutationFn: async (params) => {
      const { data } = await CarriersRatesApi.setIsViewed(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: carriersRatesKeys.uploadError.queryKey });

      notification.success({
        message: 'Label created successfully',
      });
    },
  });
};
