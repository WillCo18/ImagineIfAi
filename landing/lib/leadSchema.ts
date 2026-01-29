import { z } from 'zod';

export const leadSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    company: z
        .string()
        .optional(),
    message: z
        .string()
        .min(10, 'Please tell us a bit more (at least 10 characters)'),
    consent: z
        .boolean()
        .refine(val => val === true, {
            message: 'Please confirm you agree to be contacted',
        }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
