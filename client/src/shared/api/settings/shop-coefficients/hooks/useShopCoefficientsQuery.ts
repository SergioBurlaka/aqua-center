import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { ShopCoefficientsApi } from '../shop-coefficients.api';
import { ShopCoefDto } from '../shop-coefficients.dtos';
import { shopCoefficientsKeys } from '../shop-coefficients.keys';

export const useShopCoefficientsQuery = (): UseQueryResult<ShopCoefDto[], Error> =>
  useQuery({
    queryKey: shopCoefficientsKeys.getShopCoefficients.queryKey,
    queryFn: async () => {
      const { data } = await ShopCoefficientsApi.getShopCoef();

      return data.data;
    },
  });
