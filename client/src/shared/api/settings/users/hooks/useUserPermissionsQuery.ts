import { useQuery } from '@tanstack/react-query';

import { usersKeys } from '../users.keys';
import { UsersApi } from './../users.api';

export const useUserPermissionsQuery = () => {
  return useQuery({
    queryKey: usersKeys.userPermissions.queryKey,
    queryFn: async () => {
      const { data } = await UsersApi.getUserPermissions();
      return data.data;
    },
  });
};
