import { route, string } from 'react-router-typesafe-routes/dom';

export const AppRoutes = {
  AUTH: route(
    'auth/*',
    {},
    {
      LOGIN: route('login'),
      FORGOT_PASSWORD: route('forgot-password'),
      REGISTER: route('register'),
    },
  ),
  DASHBOARD: route(
    '*',
    {},
    {
      ORDERS: route(
        'orders/*',
        {},
        {
          NEW: route('new'),
          AWAITING_FOR_ORDERS: route('awaiting-for-orders'),
          RECEIVED: route('received'),
          PRINT_LATE: route('print-late'),
          SHIPPED: route('shipped'),
          CANCELED: route('canceled'),
        },
      ),
      SCAN_BARCODE: route('scan-barcode/*'),
      UPC_INFO: route('upc-info/*', {
        searchParams: { upcProduct: string().default('') },
      }),
      RETURN: route('return/*'),
      INVOICES: route('invoices/*'),
      SETTINGS: route('settings/*'),
    },
  ),
};
