import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { ReturnLabelsApi } from '../return-labels.api';
import { UploadErrorLabelDto } from '../return-labels.dtos';
import { returnLabelsKeys } from '../return-labels.keys';
import { InfiniteUploadLabelSuccessParams } from '../return-labels.types';

export const useInfiniteUploadLabelErrorQuery = ({
  params,
}: {
  params: InfiniteUploadLabelSuccessParams;
}): UseInfiniteQueryResult<{ pages: { data: { data: UploadErrorLabelDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: returnLabelsKeys.infiniteUploadLabelError(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await ReturnLabelsApi.getInfiniteUploadLabelError({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
