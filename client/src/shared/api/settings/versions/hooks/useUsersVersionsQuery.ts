import { useQuery } from '@tanstack/react-query';

import { VersionsApi } from '../versions.api';
import { usersVersionsKeys } from '../versions.keys';

export const useUsersVersionsQuery = () =>
  useQuery({
    queryKey: usersVersionsKeys.usersVersions.queryKey,
    queryFn: async () => {
      const { data } = await VersionsApi.getVersionUsers();

      return data.data;
    },
  });
