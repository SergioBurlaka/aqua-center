import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WorkApi } from '../work.api';
import { WorkLogProps } from '../work.dtos';
import { workKeys } from '../work.keys';

export const useChangeWorkLogStatusMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: workKeys.changeWorkLogStatus.queryKey,
    mutationFn: async (props: WorkLogProps) => {
      const { data } = await WorkApi.changeWorkLogStatus(props);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workKeys.workLogTimeInfo.queryKey });
    },
  });
};
