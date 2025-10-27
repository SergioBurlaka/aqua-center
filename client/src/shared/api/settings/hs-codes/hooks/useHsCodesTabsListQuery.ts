import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { HsCodesApi } from '../hs-codes.api';
import { HsCodeTabDto } from '../hs-codes.dtos';
import { hsCodesKeys } from '../hs-codes.keys';

export const useHsCodesTabsListQuery = (): UseQueryResult<HsCodeTabDto[], Error> =>
  useQuery({
    queryKey: hsCodesKeys.getHsCodesTabsList.queryKey,
    queryFn: async () => {
      const { data } = await HsCodesApi.getHsCodesTabsList();

      return data.data;
    },
  });
