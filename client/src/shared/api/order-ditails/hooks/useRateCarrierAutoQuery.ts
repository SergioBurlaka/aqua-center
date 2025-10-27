import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { RateCarrierAutoProps } from '../order-ditails.types';

export const useRateCarrierAutoQuery = ({ params }: { params: RateCarrierAutoProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.rateCarrierAuto(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getRateCarrierAuto(params);

      return data.data;
    },
  });
