import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ClientsApi } from '../clients.api';
import type { ClientDto } from '../clients.dtos';
import { clientsKeys } from '../clients.keys';

type ClientsQueryOptions = Omit<
  UseQueryOptions<ClientDto[], unknown, ClientDto[]>,
  'queryKey' | 'queryFn'
>;

export const useClientsQuery = ({ options }: { options?: ClientsQueryOptions } = {}) =>
  useQuery<ClientDto[], unknown, ClientDto[]>({
    queryKey: clientsKeys.list.queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getClients();

      return data;
    },
    ...options,
  });

