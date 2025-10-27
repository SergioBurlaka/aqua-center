import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { DimWeightApi } from '../dim-weight.api';
import { DimWeightListDto } from '../dim-weight.dtos';
import { DimWeightKeys } from '../dim-weight.keys';

export const useGetDimWeightListQuery = (): UseQueryResult<DimWeightListDto[], Error> =>
  useQuery({
    queryKey: DimWeightKeys.getDimWeightList.queryKey,
    queryFn: async () => {
      const { data } = await DimWeightApi.getDimWeightList();

      return data.data;
    },
  });
