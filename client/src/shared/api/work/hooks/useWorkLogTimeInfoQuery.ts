import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { WorkApi } from '../work.api';
import { workKeys } from '../work.keys';
import type { TimeInfoDto } from '../work.dtos';

type WorkLogTimeInfoOptions = Omit<
  UseQueryOptions<TimeInfoDto[], unknown, TimeInfoDto[]>,
  'queryKey' | 'queryFn'
>;

export const useWorkLogTimeInfoQuery = ({ options }: { options?: WorkLogTimeInfoOptions }) =>
  useQuery<TimeInfoDto[], unknown, TimeInfoDto[]>({
    queryKey: workKeys.workLogTimeInfo.queryKey,
    queryFn: async () => {
      const { data } = await WorkApi.getWorkLogTimeInfo();
      return data.data;
    },
    ...options,
  });
