import { z } from 'zod';

export const companyAddressSchema = z.object({
  address_id: z.number(),
  company_name: z.union([z.string(), z.number()]),
  company_address1: z.string(),
  company_address2: z.string().optional(),
  company_address3: z.string().optional(),
  company_city: z.string(),
  company_state: z.string(),
  company_country: z.string(),
  company_postal_code: z.string(),
  company_phone: z.string(),
});

export type CompanyAddressDto = z.infer<typeof companyAddressSchema>;

const deleteProps = companyAddressSchema.pick({ address_id: true });
export type DeleteProps = z.infer<typeof deleteProps>;

export const createCompanyAddress = companyAddressSchema.omit({ address_id: true });

export type CreateCompanyAddressType = z.infer<typeof createCompanyAddress>;
