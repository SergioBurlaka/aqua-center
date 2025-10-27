import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { HsCodesApi } from '../hs-codes.api';
import { hsCodesKeys } from '../hs-codes.keys';
import { HsCodeDto, InfiniteHsCodesParams } from '../hs-codes.types';

export const useInfiniteHsCodesQuery = ({
  params,
}: {
  params: InfiniteHsCodesParams;
}): UseInfiniteQueryResult<{ pages: { data: { data: HsCodeDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: hsCodesKeys.infiniteHsCodes(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await HsCodesApi.getInfiniteHsCodes({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
