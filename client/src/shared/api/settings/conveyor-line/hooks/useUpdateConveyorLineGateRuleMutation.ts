import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ConveyorLineGateRulesApi } from '../conveyor-line.api';
import { conveyorLineGateRulesKeys } from '../conveyor-line.keys';
import { UpdateConveyorLineGateRuleType } from '../conveyor-line.types';

export const useUpdateConveyorLineGateRuleMutation = (): UseMutationResult<
  unknown,
  Error,
  UpdateConveyorLineGateRuleType
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: conveyorLineGateRulesKeys.createConveyorLineGateRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await ConveyorLineGateRulesApi.updateConveyorLineGateRule(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: conveyorLineGateRulesKeys.getConveyorLineGateRules.queryKey });

      notification.success({
        message: 'Conveyor line gate rules updated successfully',
      });
    },
  });
};
