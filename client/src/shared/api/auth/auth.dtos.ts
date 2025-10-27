import { z } from 'zod';

export const loginResponseDto = z.object({
  token: z.string(),
});
export type LoginResponseDto = z.infer<typeof loginResponseDto>;
