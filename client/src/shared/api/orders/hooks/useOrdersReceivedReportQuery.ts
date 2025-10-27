import { useQuery } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useOrdersReceivedReportQuery = ({
  params,
  options,
}: {
  params: OrdersPropsType;
  options: { enabled: boolean; gcTime: number };
}) =>
  useQuery({
    queryKey: ordersKeys.ordersReceivedReport(params).queryKey,
    queryFn: async () => {
      const { data } = await OrdersApi.getOrdersReceivedReport(params);
      return data.data;
    },
    ...options,
  });
