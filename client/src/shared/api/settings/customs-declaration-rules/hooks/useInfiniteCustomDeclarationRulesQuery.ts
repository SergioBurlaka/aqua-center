import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { CustomsDeclarationRulesApi } from '../customs-declaration-rules.api';
import { CustomsDeclarationRulesDto } from '../customs-declaration-rules.dtos';
import { customsDeclarationRulesKeys } from '../customs-declaration-rules.keys';
import { CustomsDeclarationRulesParamsType } from '../customs-declaration-rules.types';

export const useInfiniteCustomDeclarationRulesQuery = ({
  params,
}: {
  params: CustomsDeclarationRulesParamsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: CustomsDeclarationRulesDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: customsDeclarationRulesKeys.customsDeclarationRules(params).queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await CustomsDeclarationRulesApi.getCustomsDeclarationRules({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
