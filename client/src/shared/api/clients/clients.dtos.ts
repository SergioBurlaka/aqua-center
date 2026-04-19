import { z } from 'zod';

export const clientDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  'Client ID': z.string(),
  Назва: z.string(),
  'Населений пункт': z.string(),
  Адреса: z.string(),
  Локація: z.string(),
  Власник: z.string(),
  'E-mail': z.string(),
  'Номер телефону': z.string(),
  'Контактна особа': z.string(),
  Відстань: z.string(),
  'Related Tasks': z.string(),
  'Related Project Images': z.string(),
  'Related ProjectCostEstimates': z.string(),
  'Related Route Installers': z.string(),
  'Related Irrigation System Winterizations': z.string(),
  'Related Spring Clients Lists': z.string(),
  'Related ClientPayments': z.string(),
  'Total Project Value': z.string(),
  'Total Paid': z.string(),
  'Remaining Balance': z.string(),
  'Projects List': z.string(),
  'Info Balance': z.string(),
  'Info Finance': z.string(),
  'Related Routes By Start Point': z.string(),
  'Related Routes By End Point': z.string(),
  'Related Routes By Project Owner': z.string(),
  'Related Route Filters': z.string(),
  'Related Installation Equipments': z.string(),
  'Related ClientsInvoices': z.string(),
  'Related Route Works': z.string(),
  'Related Projects': z.string(),
});

export const clientsDtoSchema = z.array(clientDtoSchema);

export type ClientDto = z.infer<typeof clientDtoSchema>;

