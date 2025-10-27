import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ProblemsApi } from '../problems.api';
import { ProblemDto } from '../problems.dtos';
import { ProblemsKeys } from '../problems.keys';

export const useUpdateProblemMutation = (): UseMutationResult<unknown, Error, ProblemDto> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ProblemsKeys.updateProblem.queryKey,
    mutationFn: async (params) => {
      const { data } = await ProblemsApi.updateProblem(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ProblemsKeys.problems.queryKey });

      notification.success({
        message: 'Problem updated successfully',
      });
    },
  });
};
