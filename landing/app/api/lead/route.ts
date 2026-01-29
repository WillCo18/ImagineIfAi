import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { leadSchema } from '@/lib/leadSchema';

const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL || 'hello@imagine-if.ai';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@imagine-if.ai';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate with shared Zod schema
        const validationResult = leadSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                { ok: false, errors: validationResult.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Log the submission server-side
        console.log('Lead form submission:', {
            name: data.name,
            email: data.email,
            company: data.company || '(not provided)',
            message: data.message,
            timestamp: new Date().toISOString(),
        });

        // If Resend API key exists, send email
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
                from: `Imagine-If.AI <${FROM_EMAIL}>`,
                to: LEAD_TO_EMAIL,
                replyTo: data.email,
                subject: `New lead: ${data.name}${data.company ? ` (${data.company})` : ''}`,
                html: generateEmailHtml(data),
            });

            console.log('Email sent to', LEAD_TO_EMAIL);
        } else {
            console.log('RESEND_API_KEY not configured - email skipped (dev mode)');
        }

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('Lead form error:', error);

        return NextResponse.json(
            { ok: false, error: 'Server error' },
            { status: 500 }
        );
    }
}

function generateEmailHtml(data: {
    name: string;
    email: string;
    company?: string;
    message: string;
}): string {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #111827; margin-bottom: 24px;">New lead from imagine-if.ai</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
            <td style="padding: 8px 0; font-weight: 600; width: 100px;">Name:</td>
            <td style="padding: 8px 0;">${data.name}</td>
        </tr>
        <tr>
            <td style="padding: 8px 0; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        ${data.company ? `
        <tr>
            <td style="padding: 8px 0; font-weight: 600;">Company:</td>
            <td style="padding: 8px 0;">${data.company}</td>
        </tr>
        ` : ''}
    </table>
    
    <div style="background: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
        <p style="margin: 0 0 8px; font-weight: 600;">What they want to improve:</p>
        <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
    </div>
    
    <p style="color: #6b7280; font-size: 14px;">
        Reply directly to this email to respond to ${data.name.split(' ')[0]}.
    </p>
</body>
</html>
    `.trim();
}
