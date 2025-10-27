import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { UsersApi } from '../users.api';
import { UpdateUser } from '../users.dtos';
import { usersKeys } from '../users.keys';

export const useUpdateUserMutation = (): UseMutationResult<unknown, Error, UpdateUser> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: usersKeys.updateUser.queryKey,
    mutationFn: async (params) => {
      const { data } = await UsersApi.updateUser(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersKeys.users._def });

      notification.success({
        message: 'User updated successfully',
      });
    },
  });
};
