import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { UploadingFilesApi } from '../uploading-files.api';
import { UploadFilesDto } from '../uploading-files.dtos';
import { uploadingFilesKeys } from '../uploading-files.keys';
import { InfiniteUploadFilesParams } from '../uploading-files.types';

export const useInfiniteUploadFilesQuery = ({
  params,
}: {
  params: InfiniteUploadFilesParams;
}): UseInfiniteQueryResult<{ pages: { data: { data: UploadFilesDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: uploadingFilesKeys.infiniteUploadFiles(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await UploadingFilesApi.getInfiniteUploadFiles({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
