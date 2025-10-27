import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { CompanyAddressApi } from '../company-address.api';
import { CreateCompanyAddressType } from '../company-address.dtos';
import { companyAddressKeys } from '../company-address.keys';

export const useCreateCompanyAddressMutation = (): UseMutationResult<unknown, Error, CreateCompanyAddressType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: companyAddressKeys.createCompanyAddress.queryKey,
    mutationFn: async (params) => {
      const { data } = await CompanyAddressApi.createCompanyAddress(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: companyAddressKeys.getCompanyAddress.queryKey });

      notification.success({
        message: 'Company address created successfully',
      });
    },
  });
};
