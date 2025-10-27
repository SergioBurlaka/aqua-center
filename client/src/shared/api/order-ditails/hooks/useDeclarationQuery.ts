import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { orderDitailsKeys } from '../order-ditails.keys';
import { GetDeclarationProps } from '../order-ditails.types';

export const useDeclarationQuery = ({ params }: { params: GetDeclarationProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.getDeclaration.queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getDeclaration(params);

      return data.data;
    },
  });
