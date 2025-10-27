import { apiClient } from '../../../lib';
import { CreateRole, DeleteRole, PermissionListDto, RolesDto, UpdateRole } from './roles.dtos';
import { PermissionsParamsType, RolesParamsType } from './roles.types';

export const RolesApi = {
  async getRoles(params: RolesParamsType) {
    return apiClient.post<{ data: { date: RolesDto[] } }>('/permission/role', { ...params });
  },
  async getPermission(params: PermissionsParamsType) {
    return apiClient.post<{ data: { date: PermissionListDto[] } }>('/permission/list', { ...params });
  },

  async createRole(params: CreateRole) {
    return apiClient.post('/permission/role/create', { ...params });
  },
  async updateRole(params: UpdateRole) {
    return apiClient.post('/permission/role/update', { ...params });
  },

  async deleteRole(params: DeleteRole) {
    return apiClient.delete('/permission/role/delete', { data: { ...params } });
  },
};
