import { apiClient } from '../../lib';
import type { LoginBodyType } from './auth.types';

export const AuthApi = {
  async login(payload: LoginBodyType) {
    return apiClient.post('/workers/login', payload);
  },
};
