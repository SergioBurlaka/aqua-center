import { useQuery } from '@tanstack/react-query';

import { OrderApi } from '../order.api';
import { orderKeys } from '../order.keys';

export const useOrderQuery = () =>
  useQuery({
    queryKey: orderKeys.companyShops.queryKey,
    queryFn: async () => {
      const { data } = await OrderApi.getCompanyShops();

      return data.data;
    },
  });
