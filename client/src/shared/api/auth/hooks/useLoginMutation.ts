import { useCredentialsStore } from '@store/credentials.store';
import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AuthApi } from '../auth.api';
import { authKeys } from '../auth.keys';
import type { LoginBodyType } from '../auth.types';

export const useLoginMutation = (): UseMutationResult<unknown, Error, LoginBodyType> => {
  const { setToken } = useCredentialsStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: authKeys.login.queryKey,
    mutationFn: async (body) => {
      const resp = await AuthApi.login(body);

      return resp;
    },
    onSuccess: ({ data }) => {
      queryClient.removeQueries();
      setToken(data?.data?.token);
    },
  });
};
