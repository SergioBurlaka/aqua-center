import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { ShippedOrderDto } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useInfiniteOrdersShippedQuery = ({
  params,
}: {
  params: OrdersPropsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: ShippedOrderDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: ordersKeys.ordersShipped(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await OrdersApi.getOrdersShipped({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
