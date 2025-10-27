import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { OrderItemBinApi } from '../order-item-bin.api';
import { OrderItemBinDto } from '../order-item-bin.dtos';
import { OrderItemBinKeys } from '../order-item-bin.keys';
import { OrderItemBinParamsType } from '../order-item-bin.types';

export const useInfiniteOrderItemBinQuery = ({
  params,
}: {
  params: OrderItemBinParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: OrderItemBinDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: OrderItemBinKeys.orderItemBinList(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await OrderItemBinApi.getOrderItemBin({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
