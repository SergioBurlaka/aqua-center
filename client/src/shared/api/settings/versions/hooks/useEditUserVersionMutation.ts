import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { VersionsApi } from '../versions.api';
import { usersVersionsKeys } from '../versions.keys';
import { EditUserVersion } from '../versions.types';

export const useEditUserVersionMutation = (): UseMutationResult<unknown, Error, EditUserVersion> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: usersVersionsKeys.editUserVersion.queryKey,
    mutationFn: async (params) => {
      const { data } = await VersionsApi.editUserVersion(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: usersVersionsKeys.usersVersions.queryKey });

      notification.success({
        message: 'Version edited successfully',
      });
    },
  });
};
