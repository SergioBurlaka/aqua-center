import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { DeliveryPackagesProps } from '../order-ditails.types';

export const useDeliveryPackagesQuery = ({ params }: { params: DeliveryPackagesProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.deliveryPackages(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getDeliveryPackages(params);

      return data.data;
    },
  });
