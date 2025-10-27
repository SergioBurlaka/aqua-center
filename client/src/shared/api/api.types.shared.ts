import type { UseQueryOptions } from '@tanstack/react-query';

type Optional<T, Keys extends keyof T> = Partial<Pick<T, Keys>> & Omit<T, Keys>;

type QueryType<TData, TParams> = {
  params: TParams;
  options?: UseQueryOptions<TData, Error, TData>;
};

export type RequiredKeys<T> = {
  [K in keyof T]-?: T[K] extends Record<string, unknown> ? never : K;
}[keyof T];

export type QueryParamsType<TData, TParams> =
  RequiredKeys<TParams> extends Record<string, never>
    ? Optional<QueryType<TData, TParams | undefined>, 'params'>
    : QueryType<TData, TParams>;
