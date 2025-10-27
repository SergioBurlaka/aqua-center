import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { CarriersRatesApi } from '../carriers-rates.api';
import { carriersRatesKeys } from '../carriers-rates.keys';
import { CreateRates } from '../carriers-rates.types';

export const useCreateRatesMutation = (): UseMutationResult<unknown, Error, CreateRates> => {
  return useMutation({
    mutationKey: carriersRatesKeys.createRates.queryKey,

    mutationFn: async (params) => {
      const { data } = await CarriersRatesApi.createRates(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Create rates successfully',
      });
    },
  });
};
