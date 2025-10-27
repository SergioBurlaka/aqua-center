import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useProblemListQuery = () =>
  useQuery({
    queryKey: orderDitailsKeys.problemList.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getProblemList();

      return data.data;
    },
  });
