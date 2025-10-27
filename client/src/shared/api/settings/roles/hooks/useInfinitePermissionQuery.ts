import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { RolesApi } from '../roles.api';
import { RolesDto } from '../roles.dtos';
import { rolesKeys } from '../roles.keys';
import { PermissionsParamsType } from '../roles.types';

export const useInfinitePermissionQuery = ({
  params,
}: {
  params: PermissionsParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: RolesDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: rolesKeys.permission(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await RolesApi.getPermission({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
