import { z } from 'zod';

const userVersionSchema = z.object({
  user_id: z.number(),
  version_id: z.number(),
  email: z.string().email(),
});

export type UserVersionDto = z.infer<typeof userVersionSchema>;

const versionListSchema = z.object({
  version_id: z.number(),
  name: z.string(),
  url: z.string().url(),
});

export type VersionListDto = z.infer<typeof versionListSchema>;
