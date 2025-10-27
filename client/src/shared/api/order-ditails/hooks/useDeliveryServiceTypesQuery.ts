import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useDeliveryServiceTypesQuery = () =>
  useQuery({
    queryKey: orderDitailsKeys.deliveryServiceTypes.queryKey,

    queryFn: async () => {
      const { data } = await OrderDitailsApi.getDeliveryServiceTypes();

      return data.data;
    },
  });
