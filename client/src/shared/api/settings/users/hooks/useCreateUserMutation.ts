import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { UsersApi } from '../users.api';
import { CreateUserType } from '../users.dtos';
import { usersKeys } from '../users.keys';

export const useCreateUserMutation = (): UseMutationResult<unknown, Error, CreateUserType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: usersKeys.createUser.queryKey,
    mutationFn: async (params) => {
      const { data } = await UsersApi.createUser(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersKeys.users._def });

      notification.success({
        message: 'User created successfully',
      });
    },
  });
};
