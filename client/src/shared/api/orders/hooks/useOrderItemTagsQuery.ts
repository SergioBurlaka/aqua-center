import { useQuery } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { ConditionsParamsType } from '../orders.types';

export const useOrderItemTagsQuery = ({ params }: { params: ConditionsParamsType }) =>
  useQuery({
    queryKey: ordersKeys.orderItemTags(params).queryKey,
    queryFn: async () => {
      const { data } = await OrdersApi.getOrderItemTags(params);
      return data.data;
    },
  });
