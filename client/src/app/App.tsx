import { type FC, lazy, Suspense } from 'react';

import NiceModal from '@ebay/nice-modal-react';
import { useCredentialsHydration } from '@store/credentials.store';
import { QueryClientProvider, useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundaryFallback, SuspenseFallback } from '@components/layout';

import { AntThemeProvider, reactQueryClient } from '@shared/lib';

import './index.css';
import { InterceptorsProvider } from './providers/InterceptorsProvider';

const LazyRootRoutes = lazy(() => import('../modules/Root.routes'));

export const App: FC = () => {
  const { reset: resetQueries } = useQueryErrorResetBoundary();
  const haveCredentialsHydrated = useCredentialsHydration();

  return (
    <BrowserRouter>
      <AntThemeProvider>
        <InterceptorsProvider>
          <Suspense fallback={<SuspenseFallback />}>
            <QueryClientProvider client={reactQueryClient}>
              <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={resetQueries}>
                <NiceModal.Provider>{haveCredentialsHydrated && <LazyRootRoutes />}</NiceModal.Provider>
              </ErrorBoundary>
              <ReactQueryDevtools initialIsOpen={false} position="left" />
            </QueryClientProvider>
          </Suspense>
        </InterceptorsProvider>
      </AntThemeProvider>
    </BrowserRouter>
  );
};
