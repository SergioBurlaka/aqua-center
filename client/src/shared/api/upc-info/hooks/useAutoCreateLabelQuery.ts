import { useQuery } from '@tanstack/react-query';

import { UPCInfoApi } from '../upcInfo.api';
import { upcInfoKeys } from '../upcInfo.keys';
import { AutoCreateLabelParamsType } from '../upcInfo.types';

export const useAutoCreateLabelQuery = ({
  params,
  options,
}: {
  params: AutoCreateLabelParamsType;
  options: { enabled: boolean; gcTime: number };
}) =>
  useQuery({
    queryKey: upcInfoKeys.autoCreateLabel.queryKey,
    queryFn: async () => {
      const { data } = await UPCInfoApi.postAutoCreateLabel(params);
      return data.data;
    },
    ...options,
  });
