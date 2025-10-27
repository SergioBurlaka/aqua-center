import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { ShopCoefficientsApi } from '../shop-coefficients.api';
import { shopCoefficientsKeys } from '../shop-coefficients.keys';
import { DeleteShopCoefficient } from '../shop-coefficients.types';

export const useDeleteShopCoefficientsMutation = (): UseMutationResult<unknown, Error, DeleteShopCoefficient> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: shopCoefficientsKeys.deleteShopCoefficients.queryKey,
    mutationFn: async (params) => {
      const { data } = await ShopCoefficientsApi.deleteShopCoef(params);
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
