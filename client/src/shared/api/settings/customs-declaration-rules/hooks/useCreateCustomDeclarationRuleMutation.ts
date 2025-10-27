import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CustomsDeclarationRulesApi } from '../customs-declaration-rules.api';
import { customsDeclarationRulesKeys } from '../customs-declaration-rules.keys';
import { CreateCustomDeclarationPropsType } from '../customs-declaration-rules.types';

export const useCreateCustomDeclarationRuleMutation = (): UseMutationResult<
  unknown,
  Error,
  CreateCustomDeclarationPropsType
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: customsDeclarationRulesKeys.createCustomsDeclarationRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await CustomsDeclarationRulesApi.createCustomsDeclarationRule(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: customsDeclarationRulesKeys.customsDeclarationRules._def });

      notification.success({
        message: 'Shipping Rule deleted successfully',
      });
    },
  });
};
