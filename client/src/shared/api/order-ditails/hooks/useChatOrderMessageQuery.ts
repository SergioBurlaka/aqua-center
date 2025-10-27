import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { OrderIdProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useChatOrderMessageQuery = ({ params }: { params: OrderIdProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.chatOrderMessage.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getChatOrderMessage(params);
      return data.data;
    },
    refetchInterval: (query) => {
      if (query.state.status === 'error') return false;

      return 5000;
    },
    refetchIntervalInBackground: true,
  });
