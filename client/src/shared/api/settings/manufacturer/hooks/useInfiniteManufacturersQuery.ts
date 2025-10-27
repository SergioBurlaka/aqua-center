import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { ManufacturerApi } from '../manufacturer.api';
import { ManufacturerDto } from '../manufacturer.dtos';
import { manufacturerKeys } from '../manufacturer.keys';
import { InfiniteManufacturerParams } from '../manufacturer.types';

export const useInfiniteManufacturersQuery = ({
  params,
}: {
  params: InfiniteManufacturerParams;
}): UseInfiniteQueryResult<{ pages: { data: { data: ManufacturerDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: manufacturerKeys.infiniteManufacturers(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await ManufacturerApi.getInfiniteManufacturers({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
