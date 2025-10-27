import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CompanyAddressApi } from '../company-address.api';
import { CompanyAddressDto } from '../company-address.dtos';
import { companyAddressKeys } from '../company-address.keys';

export const useUpdateCompanyAddressMutation = (): UseMutationResult<unknown, Error, CompanyAddressDto> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: companyAddressKeys.updateCompanyAddress.queryKey,
    mutationFn: async (params) => {
      const { data } = await CompanyAddressApi.updateCompanyAddress(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: companyAddressKeys.getCompanyAddress.queryKey });

      notification.success({
        message: 'Company address updated successfully',
      });
    },
  });
};
