import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { OrderDto } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useInfiniteOrdersAwaitingQuery = ({
  params,
}: {
  params: OrdersPropsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: OrderDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: ordersKeys.ordersAwaiting(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await OrdersApi.getOrdersAwaiting({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
