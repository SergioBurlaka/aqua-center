import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { RolesApi } from '../roles.api';
import { DeleteRole } from '../roles.dtos';
import { rolesKeys } from '../roles.keys';

export const useDeleteRoleMutation = (): UseMutationResult<unknown, Error, DeleteRole> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: rolesKeys.deleteRole.queryKey,
    mutationFn: async (params) => {
      const { data } = await RolesApi.deleteRole(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: rolesKeys.roles._def });

      notification.success({
        message: 'Role deleted successfully',
      });
    },
  });
};
