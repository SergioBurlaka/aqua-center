import { apiClient } from '../../../lib';
import { CreateProblemType, ProblemDto } from './problems.dtos';
import { DeleteProblem } from './problems.types';

export const ProblemsApi = {
  async getProblems() {
    return apiClient.get<{ data: ProblemDto[] }>('/problem/list');
  },
  async createProblem(params: CreateProblemType) {
    return apiClient.post('/problem/create', { ...params });
  },
  async updateProblem(params: ProblemDto) {
    return apiClient.post('/problem/update', { ...params });
  },
  async deleteProblem(params: DeleteProblem) {
    return apiClient.delete('/problem/delete', { data: { ...params } });
  },
};
