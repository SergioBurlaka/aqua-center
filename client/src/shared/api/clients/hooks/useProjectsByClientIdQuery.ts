import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ClientsApi } from '../clients.api';
import { clientsKeys } from '../clients.keys';

type ProjectsByClientQueryOptions = Omit<
  UseQueryOptions<unknown[], unknown, unknown[]>,
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
  useQuery<unknown[], unknown, unknown[]>({
    queryKey: clientsKeys.projects(clientId ?? '').queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getProjectsByClientId(clientId!);
      return data ?? [];
    },
    ...options,
    enabled: Boolean(clientId?.trim()) && (options?.enabled ?? true),
  });
