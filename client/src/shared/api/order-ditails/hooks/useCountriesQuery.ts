import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useCountriesQuery = () =>
  useQuery({
    queryKey: orderDitailsKeys.orderCountries.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getCountries();

      return data.data;
    },
  });
