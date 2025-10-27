import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { CancelDto } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useInfiniteOrdersCancelQuery = ({
  params,
}: {
  params: OrdersPropsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: CancelDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: ordersKeys.ordersCancel(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await OrdersApi.getOrdersCancel({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
