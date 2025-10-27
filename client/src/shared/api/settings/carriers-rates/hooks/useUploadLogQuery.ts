import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CarriersRatesApi } from '../carriers-rates.api';
import { UploadLogDto } from '../carriers-rates.dtos';
import { carriersRatesKeys } from '../carriers-rates.keys';

export const useUploadLogQuery = (): UseQueryResult<UploadLogDto[], Error> =>
  useQuery({
    queryKey: carriersRatesKeys.uploadLog.queryKey,
    queryFn: async () => {
      const { data } = await CarriersRatesApi.getUploadLog();

      return data.data;
    },
  });
