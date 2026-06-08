import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ClientsApi } from '../clients.api';
import { clientsKeys } from '../clients.keys';
import type { ScheduleDto } from '../clients.dtos';

type ShedulesByProjectIdQueryOptions = Omit<
  UseQueryOptions<ScheduleDto[], unknown, ScheduleDto[]>,
  'queryKey' | 'queryFn'
>;

type UseShedulesByProjectIdQueryArgs = {
  projectId?: string | undefined;
  options?: ShedulesByProjectIdQueryOptions;
};

export const useShedulesByProjectIdQuery = ({
  projectId,
  options,
}: UseShedulesByProjectIdQueryArgs = {}) =>
  useQuery<ScheduleDto[], unknown, ScheduleDto[]>({
    queryKey: clientsKeys.schedules(projectId ?? '').queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getSchedulesByProjectId(projectId!);
      return data ?? [];
    },
    ...options,
    enabled: Boolean(projectId?.trim()) && (options?.enabled ?? true),
  });
