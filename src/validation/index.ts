import { z } from 'zod';

export * from './auth';

export const validate = async (
  schema: z.ZodEffects<z.AnyZodObject> | z.AnyZodObject,
  payload: unknown
) => {
  try {
    await schema.parseAsync(payload);
  } catch (err: any) {
    throw new Error(err);
  }
};
