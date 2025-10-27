import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrderDitailsApi } from '../order-ditails.api';
import { RateCarrierDto } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';
import { RateCarrierProps } from '../order-ditails.types';

export const useRateCarrierMutation = (): UseMutationResult<RateCarrierDto, Error, RateCarrierProps> => {
  return useMutation({
    mutationKey: orderDitailsKeys.rateCarrier.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrderDitailsApi.getRateCarrier(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Order edited successfully',
      });
    },
  });
};
