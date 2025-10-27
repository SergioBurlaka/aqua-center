import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CompanyAddressApi } from '../company-address.api';
import { DeleteProps } from '../company-address.dtos';
import { companyAddressKeys } from '../company-address.keys';

export const useDeleteCompanyAddressMutation = (): UseMutationResult<unknown, Error, DeleteProps> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: companyAddressKeys.deleteCompanyAddress.queryKey,
    mutationFn: async (params) => {
      const { data } = await CompanyAddressApi.deleteCompanyAddress(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: companyAddressKeys.getCompanyAddress.queryKey });

      notification.success({
        message: 'Company address deleted successfully',
      });
    },
  });
};
