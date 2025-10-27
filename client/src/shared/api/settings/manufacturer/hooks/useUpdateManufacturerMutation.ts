import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { ManufacturerApi } from '../manufacturer.api';
import { UpdateManufacturer } from '../manufacturer.dtos';
import { manufacturerKeys } from '../manufacturer.keys';

export const useUpdateManufacturerMutation = (): UseMutationResult<unknown, Error, UpdateManufacturer> => {
  return useMutation({
    mutationKey: manufacturerKeys.updateManufacturer.queryKey,
    mutationFn: async (params) => {
      const { data } = await ManufacturerApi.updateManufacturers(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: 'Manufacturer updated successfully',
      });
    },
  });
};
