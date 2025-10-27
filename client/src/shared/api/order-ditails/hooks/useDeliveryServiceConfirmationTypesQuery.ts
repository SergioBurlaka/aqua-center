import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useDeliveryServiceConfirmationTypesQuery = () =>
  useQuery({
    queryKey: orderDitailsKeys.deliveryServiceConfirmationTypes.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getDeliveryServiceConfirmationTypes();

      return data.data;
    },
  });
