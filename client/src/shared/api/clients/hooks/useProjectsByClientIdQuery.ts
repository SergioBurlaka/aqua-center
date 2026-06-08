import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ClientsApi } from '../clients.api';
import { clientsKeys } from '../clients.keys';
import type { ProjectDto } from '../clients.dtos';

type ProjectsByClientQueryOptions = Omit<
  UseQueryOptions<ProjectDto[], unknown, ProjectDto[]>,
  'queryKey' | 'queryFn'
>;

type UseProjectsByClientIdQueryArgs = {
  clientId?: string | undefined;
  options?: ProjectsByClientQueryOptions;
};

export const useProjectsByClientIdQuery = ({
  clientId,
  options,
}: UseProjectsByClientIdQueryArgs = {}) =>
  useQuery<ProjectDto[], unknown, ProjectDto[]>({
    queryKey: clientsKeys.projects(clientId ?? '').queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getProjectsByClientId(clientId!);
      return data ?? [];
    },
    ...options,
    enabled: Boolean(clientId?.trim()) && (options?.enabled ?? true),
  });
