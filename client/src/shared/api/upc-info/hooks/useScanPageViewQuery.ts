import { useQuery, useQueryClient } from '@tanstack/react-query';

import { orderDitailsKeys } from '@shared/api/order-ditails/order-ditails.keys';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';
import { ScanPageViewType } from '../upcInfo.types';

export const useScanPageViewQuery = ({
  params,
  options,
}: {
  params: ScanPageViewType;
  options: { enabled: boolean; gcTime: number };
}) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: upcInfoKeys.scanPageView(params).queryKey,
    queryFn: async () => {
      const { data } = await UPCInfoApi.getScanPageView(params);
      await queryClient.invalidateQueries({ queryKey: orderDitailsKeys.listLabels._def });

      return data.data;
    },
    ...options,
  });
};
