import { useQuery } from '@tanstack/react-query';
import { UseQueryResult } from '@tanstack/react-query';

import { VersionsApi } from '../versions.api';
import { VersionListDto } from '../versions.dtos';
import { usersVersionsKeys } from '../versions.keys';

export const useVersionListQuery = ({ params }: { params: {} }): UseQueryResult<VersionListDto[], Error> =>
  useQuery({
    queryKey: usersVersionsKeys.versionList.queryKey,
    queryFn: async () => {
      const { data } = await VersionsApi.getVersionList(params);

      return data.data.data;
    },
  });
