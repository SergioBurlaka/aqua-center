import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { ClientsApi } from '../clients.api';
import { clientsKeys } from '../clients.keys';
import type { IrrigationProgramDto } from '../clients.dtos';

type IrrigationProgramsByProgramIdQueryOptions = Omit<
  UseQueryOptions<IrrigationProgramDto[], unknown, IrrigationProgramDto[]>,
  'queryKey' | 'queryFn'
>;

type UseIrrigationProgramsByProgramIdQueryArgs = {
  programId?: string | undefined;
  options?: IrrigationProgramsByProgramIdQueryOptions;
};

export const useIrrigationProgramsByProgramIdQuery = ({
  programId,
  options,
}: UseIrrigationProgramsByProgramIdQueryArgs = {}) =>
  useQuery<IrrigationProgramDto[], unknown, IrrigationProgramDto[]>({
    queryKey: clientsKeys.irrigationPrograms(programId ?? '').queryKey,
    queryFn: async () => {
      const { data } = await ClientsApi.getIrrigationProgramsByProgramId(programId!);
      return data ?? [];
    },
    ...options,
    enabled: Boolean(programId?.trim()) && (options?.enabled ?? true),
  });
