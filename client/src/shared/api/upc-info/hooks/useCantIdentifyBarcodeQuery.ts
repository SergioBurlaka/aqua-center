import { useQuery } from '@tanstack/react-query';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';

export const useCantIdentifyBarcodeQuery = ({ options }: { options: { enabled: boolean; gcTime: number } }) =>
  useQuery({
    queryKey: upcInfoKeys.cinBarcodeDto.queryKey,
    queryFn: async () => {
      const { data } = await UPCInfoApi.getCantIdentifyBarcode();
      return data.data;
    },
    ...options,
  });
