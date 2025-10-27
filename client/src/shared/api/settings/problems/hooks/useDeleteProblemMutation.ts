import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ProblemsApi } from '../problems.api';
import { ProblemsKeys } from '../problems.keys';
import { DeleteProblem } from '../problems.types';

export const useDeleteProblemMutation = (): UseMutationResult<unknown, Error, DeleteProblem> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ProblemsKeys.deleteProblem.queryKey,
    mutationFn: async (params) => {
      const { data } = await ProblemsApi.deleteProblem(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ProblemsKeys.problems.queryKey });

      notification.success({
        message: 'Problem deleted successfully',
      });
    },
  });
};
