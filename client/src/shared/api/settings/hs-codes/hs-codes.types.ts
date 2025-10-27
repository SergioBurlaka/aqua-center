import { z } from 'zod';

export const hsCodeSchema = z.object({
  category_id: z.string(),
  category_name: z.string(),
  hs_code: z.string(),
});

export type HsCodeDto = z.infer<typeof hsCodeSchema>;

export type HsCodeProps = {
  table_id: number;
};

const updateHsCodeSchema = hsCodeSchema.pick({ hs_code: true, category_id: true });

export type HsCodeUpdate = z.infer<typeof updateHsCodeSchema> & HsCodeProps;

export type InfiniteHsCodesParams = {
  conditions: {};
  table_id: number;
  limit: number;
  offset: number;
};
