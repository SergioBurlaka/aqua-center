import { apiClient } from '../../../lib';
import { CreateUserType, DeleteUser, UpdateUser, UsersDto } from './users.dtos';
import { UsersParamsType } from './users.types';

export const UsersApi = {
  async getUsers(params: UsersParamsType) {
    return apiClient.post<{ data: { date: UsersDto[] } }>('/settings/user', { ...params });
  },
  async createUser(params: CreateUserType) {
    return apiClient.post('/settings/user/create', { ...params });
  },
  async updateUser(params: UpdateUser) {
    return apiClient.post('/settings/user/edit', { ...params });
  },
  async deleteUser(params: DeleteUser) {
    return apiClient.delete('/settings/user/delete', { data: { ...params } });
  },
  async getUserPermissions() {
    return apiClient.get<{ data: { permission_id: number[] } }>('/settings/user/permission');
  },
};
