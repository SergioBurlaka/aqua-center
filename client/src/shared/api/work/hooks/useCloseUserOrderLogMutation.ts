import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WorkApi } from '../work.api';
import { workKeys } from '../work.keys';

export const useCloseUserOrderLogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: workKeys.closeUserOrderLog.queryKey,
    mutationFn: async () => {
      const { data } = await WorkApi.closeUserOrderLog();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workKeys.workLogTimeInfo.queryKey });
    },
  });
};
