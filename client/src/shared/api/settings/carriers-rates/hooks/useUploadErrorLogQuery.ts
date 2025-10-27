import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CarriersRatesApi } from '../carriers-rates.api';
import { UploadErrorLogDto } from '../carriers-rates.dtos';
import { carriersRatesKeys } from '../carriers-rates.keys';

export const useUploadErrorLogQuery = (): UseQueryResult<UploadErrorLogDto[], Error> =>
  useQuery({
    queryKey: carriersRatesKeys.uploadError.queryKey,
    queryFn: async () => {
      const { data } = await CarriersRatesApi.getUploadErrorLog();

      return data.data;
    },
  });
