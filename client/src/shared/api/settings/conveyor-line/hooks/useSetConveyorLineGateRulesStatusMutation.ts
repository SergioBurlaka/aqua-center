import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ConveyorLineGateRulesApi } from '../conveyor-line.api';
import { conveyorLineGateRulesKeys } from '../conveyor-line.keys';
import { ConveyorLineGateRuleSetActiveType } from '../conveyor-line.types';

export const useSetConveyorLineGateRulesStatusMutation = (): UseMutationResult<
  unknown,
  Error,
  ConveyorLineGateRuleSetActiveType
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: conveyorLineGateRulesKeys.setConveyorLineGateRulesStatusMutation.queryKey,
    mutationFn: async (params) => {
      const { data } = await ConveyorLineGateRulesApi.setConveyorLineGateRulesStatus(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: conveyorLineGateRulesKeys.getConveyorLineGateRules.queryKey });

      notification.success({
        message: 'Conveyor line gate rules status changed successfully',
      });
    },
  });
};
