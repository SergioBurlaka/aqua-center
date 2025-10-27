import { useQuery } from '@tanstack/react-query';

import { CarriersRatesApi } from '../carriers-rates.api';
import { carriersRatesKeys } from '../carriers-rates.keys';
import { RatesListPropsType } from '../carriers-rates.types';

export const useRatesQuery = ({ params, options }: { params: RatesListPropsType; options: { enabled: boolean } }) =>
  useQuery({
    queryKey: carriersRatesKeys.getRates(params).queryKey,
    queryFn: async () => {
      const { data } = await CarriersRatesApi.getRates(params);

      return data.data;
    },
    ...options,
  });
