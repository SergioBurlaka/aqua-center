import { useQuery } from '@tanstack/react-query';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';

export const useScalesDataQuery = () =>
  useQuery({
    queryKey: upcInfoKeys.scalesData.queryKey,
    queryFn: async () => {
      const { data } = await UPCInfoApi.getScalesDataFromLocalhost();
      return data.data;
    },
    refetchInterval: (query) => {
      if (query.state.status === 'error') return false;

      return 1000;
    },
    refetchIntervalInBackground: true,
  });
