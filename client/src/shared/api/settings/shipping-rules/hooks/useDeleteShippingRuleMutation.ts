import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ShippingRulesApi } from '../shipping-rules.api';
import { shippingRulesKeys } from '../shipping-rules.keys';
import { ShippingRuleToDeleteIds } from '../shipping-rules.types';

export const useDeleteShippingRuleMutation = (): UseMutationResult<unknown, Error, ShippingRuleToDeleteIds> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: shippingRulesKeys.deleteShippingRule.queryKey,
    mutationFn: async (params) => {
      const { data } = await ShippingRulesApi.deleteShippingRules(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: shippingRulesKeys.shippingRules._def });

      notification.success({
        message: 'Shipping Rule deleted successfully',
      });
    },
  });
};
