import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query';

import { CompanyAddressApi } from '../company-address.api';
import { CompanyAddressDto } from '../company-address.dtos';
import { companyAddressKeys } from '../company-address.keys';
import { CompanyAddressPropsType } from '../company-address.types';

export const useInfiniteCompanyAddressQuery = ({
  params,
}: {
  params: CompanyAddressPropsType;
}): UseInfiniteQueryResult<{ pages: { data: { data: CompanyAddressDto[] } }[] }> =>
  useInfiniteQuery({
    queryKey: companyAddressKeys.getCompanyAddress.queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await CompanyAddressApi.getCompanyAddress({ ...params, offset: pageParam });

      return data;
    },
    getNextPageParam: (_, all) => {
      return all.length * 50;
    },
    initialPageParam: 0,
  });
