import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { RolesApi } from '../roles.api';
import { RolesDto } from '../roles.dtos';
import { rolesKeys } from '../roles.keys';
import { RolesParamsType } from '../roles.types';

export const useInfiniteRolesQuery = ({
  params,
}: {
  params: RolesParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: RolesDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: rolesKeys.roles(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await RolesApi.getRoles({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
