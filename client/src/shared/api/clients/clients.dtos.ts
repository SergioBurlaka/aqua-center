import { z } from 'zod';

export const clientDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  client_id: z.string(),
  ClientName: z.string(),
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

export const projectDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  'Projects ID': z.string(),
  'Date Created': z.string(),
  'Project Name': z.string(),
  'Client ID': z.string(),
  'Controller ID': z.string(),
  'Contoller Image': z.string(),
  'Zone Count': z.string(),
  'Irrigation Map': z.string(),
  'Related Schedules': z.string(),
  Locality: z.string(),
  'Related Valves': z.string(),
  Location: z.string(),
  Adress: z.string(),
  'Related Water Sources': z.string(),
});

export type ProjectDto = z.infer<typeof projectDtoSchema>;

export const scheduleDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  'Schedule ID': z.string(),
  'Date Created': z.string(),
  'Controller ID': z.string(),
  'Project ID': z.string(),
  'Controller Image': z.string(),
  'Number Zones': z.string(),
  'Schedule Editor': z.string(),
  'Schedule Name': z.string(),
  'Related Irrigation Zones': z.string(),
  'Related Watering Days': z.string(),
  'Related Irrigation Programs': z.string(),
  'Client ID': z.string(),
  'Related Valves': z.string(),
  Info: z.string(),
});

export const schedulesDtoSchema = z.array(scheduleDtoSchema);

export type ScheduleDto = z.infer<typeof scheduleDtoSchema>;

export const irrigationProgramDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  'Program ID': z.string(),
  'Schedule ID': z.string(),
  'Program Name': z.string(),
  'Start 1': z.string(),
  'Start 2': z.string(),
  'Start 3': z.string(),
  'Start 4': z.string(),
  'Related Irrigation Zones': z.string(),
  NumPrograms: z.string(),
  'Related Watering Days': z.string(),
  'Total Duration': z.string(),
  Monday: z.string(),
  Tuesday: z.string(),
  Wednesday: z.string(),
  Thursday: z.string(),
  Friday: z.string(),
  Saturday: z.string(),
  Sunday: z.string(),
  'Watering Days': z.string(),
  'Related Valves': z.string(),
  Client: z.string(),
});

export const irrigationProgramsDtoSchema = z.array(irrigationProgramDtoSchema);

export type IrrigationProgramDto = z.infer<typeof irrigationProgramDtoSchema>;

export const irrigationZoneDtoSchema = z.object({
  _RowNumber: z.string(),
  'Row ID': z.string(),
  'Zone Number ID': z.string(),
  'Zone Number': z.string(),
  'Irrigation Type ID': z.string(),
  'Watering Duration': z.string(),
  PointXY: z.string(),
  'Schedule ID': z.string(),
  'Irrigation Map ID': z.string(),
  'Program ID': z.string(),
  'Watering Days ID': z.string(),
  'Watering Days Program': z.string(),
  'Watering Days': z.string(),
  Client: z.string(),
  Project: z.string(),
  Info: z.string(),
  Starts: z.string(),
  'Related Valves': z.string(),
  'Related Zone Images': z.string(),
  Image: z.string(),
});

export const irrigationZonesDtoSchema = z.array(irrigationZoneDtoSchema);

export type IrrigationZoneDto = z.infer<typeof irrigationZoneDtoSchema>;

