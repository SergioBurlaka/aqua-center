import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { RolesApi } from '../roles.api';
import { UpdateRole } from '../roles.dtos';
import { rolesKeys } from '../roles.keys';

export const useUpdateRoleMutation = (): UseMutationResult<unknown, Error, UpdateRole> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: rolesKeys.updateRole.queryKey,
    mutationFn: async (params) => {
      const { data } = await RolesApi.updateRole(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: rolesKeys.roles._def });

      notification.success({
        message: 'Role updated successfully',
      });
    },
  });
};
