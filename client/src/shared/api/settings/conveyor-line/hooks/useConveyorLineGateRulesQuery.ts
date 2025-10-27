import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { ConveyorLineGateRulesApi } from '../conveyor-line.api';
import { ConveyorLineGateRuleDto } from '../conveyor-line.dtos';
import { conveyorLineGateRulesKeys } from '../conveyor-line.keys';

export const useConveyorLineGateRulesQuery = (): UseQueryResult<ConveyorLineGateRuleDto[], Error> =>
  useQuery({
    queryKey: conveyorLineGateRulesKeys.getConveyorLineGateRules.queryKey,
    queryFn: async () => {
      const { data } = await ConveyorLineGateRulesApi.getConveyorLineGateRules();

      return data.data;
    },
  });
