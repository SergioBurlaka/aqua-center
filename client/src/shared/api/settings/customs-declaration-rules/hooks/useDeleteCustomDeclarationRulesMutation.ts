import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CustomsDeclarationRulesApi } from '../customs-declaration-rules.api';
import { customsDeclarationRulesKeys } from '../customs-declaration-rules.keys';
import { CustomsDeclarationRuleToDeleteIds } from '../customs-declaration-rules.types';

export const useDeleteCustomDeclarationRulesMutation = (): UseMutationResult<
  unknown,
  Error,
  CustomsDeclarationRuleToDeleteIds
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: customsDeclarationRulesKeys.deleteCustomsDeclarationRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await CustomsDeclarationRulesApi.deleteCustomsDeclarationRules(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: customsDeclarationRulesKeys.customsDeclarationRules._def });

      notification.success({
        message: 'Customs declaration Rule deleted successfully',
      });
    },
  });
};
