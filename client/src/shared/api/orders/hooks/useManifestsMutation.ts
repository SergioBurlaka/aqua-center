import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

import { OrdersApi } from '../orders.api';
import { ManifestsType } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { ManifestsPropsType } from '../orders.types';

export const useManifestsMutation = (): UseMutationResult<ManifestsType, Error, ManifestsPropsType> => {
  return useMutation({
    mutationKey: ordersKeys.ordersGetManifests.queryKey,
    mutationFn: async (params) => {
      const { data } = await OrdersApi.getManifests(params);
      return data.data;
    },
    onSuccess: async () => {
      notification.success({
        message: ' return request is downloaded',
      });
    },
  });
};
