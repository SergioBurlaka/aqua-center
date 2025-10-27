import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useHarmonizationCodesQuery = () =>
  useQuery({
    queryKey: orderDitailsKeys.harmonizationCodes.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getHarmonizationCodes();

      return data.data;
    },
  });
