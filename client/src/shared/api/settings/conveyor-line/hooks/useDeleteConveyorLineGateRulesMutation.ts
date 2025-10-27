import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ConveyorLineGateRulesApi } from '../conveyor-line.api';
import { ConveyorLinesGateRuleIdType } from '../conveyor-line.dtos';
import { conveyorLineGateRulesKeys } from '../conveyor-line.keys';

export const useDeleteConveyorLineGateRulesMutation = (): UseMutationResult<
  unknown,
  Error,
  ConveyorLinesGateRuleIdType
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: conveyorLineGateRulesKeys.deleteConveyorLineGateRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await ConveyorLineGateRulesApi.deleteConveyorLineGateRule(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: conveyorLineGateRulesKeys.getConveyorLineGateRules.queryKey });

      notification.success({
        message: 'Conveyor line gate rules deleted successfully',
      });
    },
  });
};
