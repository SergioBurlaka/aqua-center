import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ShippingRulesApi } from '../shipping-rules.api';
import { shippingRulesKeys } from '../shipping-rules.keys';
import { ChangeStatusShippingRule } from '../shipping-rules.types';

export const useChangeStatusShippingRulesMutation = (): UseMutationResult<unknown, Error, ChangeStatusShippingRule> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: shippingRulesKeys.changeActiveShippingRule.queryKey,
    mutationFn: async (params) => {
      const { data } = await ShippingRulesApi.changeStatusShippingRules(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: shippingRulesKeys.shippingRules._def });

      notification.success({
        message: 'Shipping Rule active changed',
      });
    },
  });
};
