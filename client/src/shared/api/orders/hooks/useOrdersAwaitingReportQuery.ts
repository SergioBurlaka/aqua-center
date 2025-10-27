import { useQuery } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useOrdersAwaitingReportQuery = ({
  params,
  options,
}: {
  params: OrdersPropsType;
  options: { enabled: boolean; gcTime: number };
}) =>
  useQuery({
    queryKey: ordersKeys.ordersAwaitingReport(params).queryKey,
    queryFn: async () => {
      const { data } = await OrdersApi.getOrdersAwaitingReport(params);
      return data.data;
    },
    ...options,
  });
