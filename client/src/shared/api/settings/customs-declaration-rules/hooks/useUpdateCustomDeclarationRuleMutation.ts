import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CustomsDeclarationRulesApi } from '../customs-declaration-rules.api';
import { customsDeclarationRulesKeys } from '../customs-declaration-rules.keys';
import { UpdateCustomDeclarationPropsType } from '../customs-declaration-rules.types';

export const useUpdateCustomDeclarationRuleMutation = (): UseMutationResult<
  unknown,
  Error,
  UpdateCustomDeclarationPropsType
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: customsDeclarationRulesKeys.updateCustomsDeclarationRules.queryKey,
    mutationFn: async (params) => {
      const { data } = await CustomsDeclarationRulesApi.updateCustomsDeclarationRule(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: customsDeclarationRulesKeys.customsDeclarationRules._def });

      notification.success({
        message: 'Shipping Rule updated successfully',
      });
    },
  });
};
