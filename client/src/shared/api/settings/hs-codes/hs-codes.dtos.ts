import { z } from 'zod';

export const hsCodeTabSchema = z.object({
  table_hs_code_id: z.number(),
  table_hs_code_description: z.string(),
});

export const hsCodesTabsListSchema = z.array(hsCodeTabSchema);

export type HsCodeTabDto = z.infer<typeof hsCodeTabSchema>;
