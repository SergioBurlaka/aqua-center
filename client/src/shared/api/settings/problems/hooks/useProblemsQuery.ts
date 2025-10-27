import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { ProblemsApi } from '../problems.api';
import { ProblemDto } from '../problems.dtos';
import { ProblemsKeys } from '../problems.keys';

export const useProblemsQuery = (): UseQueryResult<ProblemDto[], Error> =>
  useQuery({
    queryKey: ProblemsKeys.problems.queryKey,
    queryFn: async () => {
      const { data } = await ProblemsApi.getProblems();

      return data.data;
    },
  });
