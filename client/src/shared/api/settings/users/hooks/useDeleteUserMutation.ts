import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { UsersApi } from '../users.api';
import { DeleteUser } from '../users.dtos';
import { usersKeys } from '../users.keys';

export const useDeleteUserMutation = (): UseMutationResult<unknown, Error, DeleteUser> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: usersKeys.deleteUser.queryKey,
    mutationFn: async (params) => {
      const { data } = await UsersApi.deleteUser(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersKeys.users._def });

      notification.success({
        message: 'User deleted successfully',
      });
    },
  });
};
