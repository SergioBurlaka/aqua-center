import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

import { orderDitailsKeys } from '@shared/api/order-ditails/order-ditails.keys';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';
import { SendLabelToLocalhostType } from '../upcInfo.types';

export const useSendLabelToLocalhostMutation = (): UseMutationResult<unknown, Error, SendLabelToLocalhostType> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: upcInfoKeys.sendLabelToLocalhost.queryKey,

    mutationFn: async (params: SendLabelToLocalhostType) => {
      const { data } = await UPCInfoApi.sendLabelToLocalhost(params);
      return data.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.orderDitail._def });

      notification.success({
        message: 'Labe sent successfully',
      });
    },
  });
};
