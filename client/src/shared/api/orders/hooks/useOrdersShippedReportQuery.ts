import { useQuery } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useOrdersShippedReportQuery = ({
  params,
  options,
}: {
  params: OrdersPropsType;
  options: { enabled: boolean; gcTime: number };
}) =>
  useQuery({
    queryKey: ordersKeys.ordersShippedReport(params).queryKey,
    queryFn: async () => {
      const { data } = await OrdersApi.getOrdersShippedReport(params);
      return data.data;
    },
    ...options,
  });
