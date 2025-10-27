import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ShippingRulesApi } from '../shipping-rules.api';
import { shippingRulesKeys } from '../shipping-rules.keys';
import { RuleSchemaType } from '../shipping-rules.types';

export const useCreateShippingRuleMutation = (): UseMutationResult<unknown, Error, RuleSchemaType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: shippingRulesKeys.createShippingRule.queryKey,
    mutationFn: async (params) => {
      const { data } = await ShippingRulesApi.createShippingRules(params);
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
