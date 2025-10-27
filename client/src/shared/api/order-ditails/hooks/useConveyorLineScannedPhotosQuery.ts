import { useQuery } from '@tanstack/react-query';

import { OrderDitailsApi } from '../order-ditails.api';
import { OrderIdProps } from '../order-ditails.dtos';
import { orderDitailsKeys } from '../order-ditails.keys';

export const useConveyorLineScannedPhotosQuery = ({ params }: { params: OrderIdProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.conveyorLineScannedPhotos(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getConveyorLineScannedPhotos(params);

      return data.data;
    },
  });
