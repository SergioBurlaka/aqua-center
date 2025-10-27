import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CustomsDeclarationRulesApi } from '../customs-declaration-rules.api';
import { customsDeclarationRulesKeys } from '../customs-declaration-rules.keys';
import { ChangeStatusCustomsDeclarationRule } from '../customs-declaration-rules.types';

export const useChangeStatusCustomDeclarationRulesMutation = (): UseMutationResult<
  unknown,
  Error,
  ChangeStatusCustomsDeclarationRule
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: customsDeclarationRulesKeys.changeActiveCustomsDeclarationRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await CustomsDeclarationRulesApi.changeStatusCustomsDeclarationRules(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: customsDeclarationRulesKeys.customsDeclarationRules._def });

      notification.success({
        message: 'Customs declaration rules active status changed',
      });
    },
  });
};
