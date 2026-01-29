import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),
    businessName: z
        .string()
        .min(2, 'Business name must be at least 2 characters')
        .max(100, 'Business name must be less than 100 characters'),
    jobTitle: z
        .string()
        .min(2, 'Job title must be at least 2 characters')
        .max(100, 'Job title must be less than 100 characters'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    phone: z
        .string()
        .min(7, 'Please enter a valid phone number')
        .max(20, 'Phone number is too long')
        .regex(/^[+]?[\d\s\-().]+$/, 'Please enter a valid phone number'),
    inquiryType: z.enum(['quick-chat', 'foundation-review', 'other'], {
        message: 'Please select an inquiry type',
    }),
    message: z
        .string()
        .max(1000, 'Message must be less than 1000 characters')
        .optional(),
    honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function formatPhoneNumber(phone: string): string {
    // Remove all non-digit characters except +
    return phone.replace(/[^\d+]/g, '');
}

export function getInquiryLabel(inquiryType: string): string {
    const labels: Record<string, string> = {
        'quick-chat': 'Have a quick chat',
        'foundation-review': 'Request a formal Foundation Review',
        'other': 'Something else',
    };
    return labels[inquiryType] || inquiryType;
}
