import { useQuery } from '@tanstack/react-query';

import { OrdersApi } from '../orders.api';
// import { OrderReportDto } from '../orders.dtos';
import { ordersKeys } from '../orders.keys';
import { OrdersPropsType } from '../orders.types';

export const useOrdersNewReportQuery = ({
  params,
  options,
}: {
  params: OrdersPropsType;
  options: { enabled: boolean; gcTime: number };
}) =>
  useQuery({
    queryKey: ordersKeys.ordersNewReport(params).queryKey,
    queryFn: async () => {
      const { data } = await OrdersApi.getOrdersNewReport(params);
      return data.data;
    },
    ...options,
  });
