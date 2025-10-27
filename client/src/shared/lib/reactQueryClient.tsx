import { QueryClient } from '@tanstack/react-query';
import queryString from 'query-string';

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryKeyHashFn: (queryKeys) =>
        JSON.stringify(
          queryKeys.filter(Boolean).map((queryKey) => {
            if (queryKey !== null && typeof queryKey === 'object') {
              return queryString.stringify(queryKey, {
                skipEmptyString: true,
                skipNull: true,
              });
            }

            return queryKey;
          }),
        ),
      retry: 0,
      refetchOnWindowFocus: false,
      // 30 minutes of stale time
      staleTime: 1000 * 60 * 30,
      // 10 minutes of cache time
      gcTime: 1000 * 60 * 10,
      // Reference:
      // https://tkdodo.eu/blog/practical-react-query#the-defaults-explained
    },
  },
});
