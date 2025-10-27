import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { OrderDitailsProps } from '../order-ditails.types';

export const useOrderDitailsQuery = ({ params, options }: { params: OrderDitailsProps; options: { gcTime: number } }) =>
  useQuery({
    queryKey: orderDitailsKeys.orderDitail(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getOrderDetail(params);

      return data.data;
    },
    ...options,
  });
