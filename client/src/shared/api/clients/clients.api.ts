import { apiClient } from '../../lib';

import type { ClientDto } from './clients.dtos';

export const ClientsApi = {
  async getClients() {
    return apiClient.get<ClientDto[]>('/clients');
  },
  async getProjectsByClientId(client_id: string) {
    return apiClient.get<unknown[]>(`/projects`, { params: { client_id } });
  },
};

