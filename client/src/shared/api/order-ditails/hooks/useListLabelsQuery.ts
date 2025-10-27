import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { OrderIdProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useListLabelsQuery = ({ params }: { params: OrderIdProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.listLabels(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getListLabels(params);

      return data.data;
    },
  });
