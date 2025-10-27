import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ShopCoefficientsApi } from '../shop-coefficients.api';
import { ShopCoefDto } from '../shop-coefficients.dtos';
import { shopCoefficientsKeys } from '../shop-coefficients.keys';

export const useUpdateShopCoefficientsMutation = (): UseMutationResult<unknown, Error, ShopCoefDto> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: shopCoefficientsKeys.updateShopCoef.queryKey,
    mutationFn: async (params) => {
      const { data } = await ShopCoefficientsApi.updateShopCoef(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: shopCoefficientsKeys.getShopCoefficients.queryKey });

      notification.success({
        message: 'Shop Coefficient deleted successfully',
      });
    },
  });
};
