import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { ShippingRulesApi } from '../shipping-rules.api';
import { ShippingRulesDto } from '../shipping-rules.dtos';
import { shippingRulesKeys } from '../shipping-rules.keys';
import { ShippingRulesParamsType } from '../shipping-rules.types';

export const useInfiniteShippingRulesListQuery = ({
  params,
}: {
  params: ShippingRulesParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: ShippingRulesDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: shippingRulesKeys.shippingRules(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await ShippingRulesApi.getShippingRulesList({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
