import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ProblemsApi } from '../problems.api';
import { CreateProblemType } from '../problems.dtos';
import { ProblemsKeys } from '../problems.keys';

export const useCreateProblemMutation = (): UseMutationResult<unknown, Error, CreateProblemType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ProblemsKeys.createProblem.queryKey,
    mutationFn: async (params) => {
      const { data } = await ProblemsApi.createProblem(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ProblemsKeys.problems.queryKey });

      notification.success({
        message: 'Problem created successfully',
      });
    },
  });
};
