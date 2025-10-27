import { apiClient } from '../../lib';

export const AuthApi = {
  async login(payload: { email: string; password: string }) {
    return apiClient.post('/login', payload);
  },
};
