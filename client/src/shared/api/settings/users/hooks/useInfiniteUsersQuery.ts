import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { UsersApi } from '../users.api';
import { UsersDto } from '../users.dtos';
import { usersKeys } from '../users.keys';
import { UsersParamsType } from '../users.types';

export const useInfiniteUsersQuery = ({
  params,
}: {
  params: UsersParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: UsersDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: usersKeys.users(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await UsersApi.getUsers({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
