import { useQuery } from '@tanstack/react-query'

import { OrderDitailsApi } from '../order-ditails.api'
import { orderDitailsKeys } from '../order-ditails.keys'
import { BarcodeLabelProps } from '../order-ditails.types'

export const useBarcodeLabelQuery = ({ params }: { params: BarcodeLabelProps }) =>
  useQuery({
    queryKey: orderDitailsKeys.barcodeLabel(params).queryKey,
    queryFn: async () => {
      const { data } = await OrderDitailsApi.getBarcodeLabel(params);
      return data.data;
    },
   
  });
