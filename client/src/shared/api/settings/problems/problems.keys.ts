import { createQueryKeys } from '@lukemorales/query-key-factory';

export const ProblemsKeys = createQueryKeys('problems', {
  problems: null,
  createProblem: null,
  updateProblem: null,
  deleteProblem: null,
});
