import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { orderDitailsKeys } from '@shared/api/order-ditails/order-ditails.keys';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';
import { EditOrderItemStatusParamsType } from '../upcInfo.types';

export const useEditOrderItemStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: upcInfoKeys.editOrderItemStatus.queryKey,
    mutationFn: async (body: EditOrderItemStatusParamsType) => {
      const { data } = await UPCInfoApi.postEditOrderItemStatus(body);
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.orderDitail._def });

      notification.success({
        message: 'Status changed to Problem',
      });
    },
  });
};
