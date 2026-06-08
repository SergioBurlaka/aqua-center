import { apiClient } from "../../lib";

import type { ClientDto, IrrigationProgramDto, ProjectDto, ScheduleDto } from "./clients.dtos";

export const ClientsApi = {
  async getClients() {
    return apiClient.get<ClientDto[]>("/clients");
  },
  async getProjectsByClientId(client_id: string) {
    return apiClient.get<ProjectDto[]>(`/projects`, { params: { client_id } });
  },

  async getSchedulesByProjectId(project_id: string) {
    return apiClient.get<ScheduleDto[]>(`/schedules`, {
      params: { project_id },
    });
  },
  async getIrrigationProgramsByProgramId(program_id: string) {
    return apiClient.get<IrrigationProgramDto[]>(`/irrigation-programs`, {
      params: { program_id },
    });
  },
};
