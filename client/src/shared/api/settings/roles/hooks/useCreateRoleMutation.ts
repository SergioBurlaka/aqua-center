import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { RolesApi } from '../roles.api';
import { CreateRole } from '../roles.dtos';
import { rolesKeys } from '../roles.keys';

export const useCreateRoleMutation = (): UseMutationResult<unknown, Error, CreateRole> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: rolesKeys.createRole.queryKey,
    mutationFn: async (params) => {
      const { data } = await RolesApi.createRole(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: rolesKeys.roles._def });

      notification.success({
        message: 'Role created successfully',
      });
    },
  });
};
