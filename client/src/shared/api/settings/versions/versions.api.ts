import { apiClient } from '../../../lib';
import { UserVersionDto } from './versions.dtos';
import { EditUserVersion } from './versions.types';

export const VersionsApi = {
  async getVersionUsers() {
    return apiClient.get<{ data: UserVersionDto[] }>('/version/users');
  },

  async getVersionList(params: {}) {
    return apiClient.post('/version/list', { ...params });
  },

  async editUserVersion(params: EditUserVersion) {
    return apiClient.post('/version/user/edit', { ...params });
  },
};
