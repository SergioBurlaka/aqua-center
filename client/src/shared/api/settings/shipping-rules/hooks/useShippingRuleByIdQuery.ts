import { useQuery } from '@tanstack/react-query';

import { ShippingRulesApi } from '../shipping-rules.api';
import { shippingRulesKeys } from '../shipping-rules.keys';
import { ShippingRuleByIdProps } from '../shipping-rules.types';

export const useShippingRuleByIdQuery = ({ params }: { params: ShippingRuleByIdProps }) =>
  useQuery({
    queryKey: shippingRulesKeys.shippingRuleById(params).queryKey,
    queryFn: async () => {
      const { data } = await ShippingRulesApi.getShippingRuleById(params);
      return data.data.data;
    },
    gcTime: 0,
  });
