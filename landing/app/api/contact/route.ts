import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema, getInquiryLabel } from '@/lib/validation';

// Environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@imagine-if.ai';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@imagine-if.ai';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Honeypot check - if filled, silently succeed
    if (formData.honeypot) {
      return NextResponse.json({ success: true, message: 'Message received' });
    }

    const timestamp = body.timestamp || new Date().toISOString();
    const inquiryLabel = getInquiryLabel(formData.inquiryType);

    // Skip email sending if API key is not configured
    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not configured - skipping email send');
      console.log('Form submission received:', { ...formData, timestamp });

      return NextResponse.json({
        success: true,
        message: 'Message received (email disabled in development)'
      });
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send autoresponse to the user
    await resend.emails.send({
      from: `Imagine-If.AI <${FROM_EMAIL}>`,
      to: formData.email,
      subject: `Thanks for reaching out, ${formData.name.split(' ')[0]}!`,
      html: generateAutoresponseEmail(formData, inquiryLabel),
    });

    // Send admin notification
    await resend.emails.send({
      from: `Imagine-If.AI Website <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `New inquiry from ${formData.name} at ${formData.businessName}`,
      html: generateAdminEmail(formData, inquiryLabel, timestamp),
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request. Please try again later.'
      },
      { status: 500 }
    );
  }
}

function generateAutoresponseEmail(
  formData: { name: string; businessName: string; inquiryType: string; message?: string },
  inquiryLabel: string
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="border-bottom: 2px solid #093B73; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="color: #093B73; font-size: 24px; margin: 0;">Thanks for reaching out, ${formData.name.split(' ')[0]}!</h1>
      </div>
      
      <p>We've received your inquiry and will be in touch within 24 hours.</p>
      
      <div style="background: #f7f8fa; border-radius: 8px; padding: 20px; margin: 30px 0;">
        <h3 style="color: #093B73; margin-top: 0;">Here's what you submitted:</h3>
        <p><strong>Business:</strong> ${formData.businessName}</p>
        <p><strong>You're interested in:</strong> ${inquiryLabel}</p>
        ${formData.message ? `<p><strong>Additional details:</strong> ${formData.message}</p>` : ''}
      </div>
      
      <p>In the meantime, here's what to expect:</p>
      <ul>
        <li>A reply from a real person (not a bot) within 24 hours</li>
        <li>No pressure sales calls—just a conversation about your needs</li>
        <li>If we're not the right fit, we'll tell you honestly</li>
      </ul>
      
      <p style="margin-top: 30px;">Speak soon,<br><strong>The Imagine-If.AI Team</strong></p>
      
      <div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #666;">
        <p>Imagine-If.AI | Practical AI Automation for Hospitality & Local SMEs</p>
        <p>If you didn't submit this form, please ignore this email.</p>
      </div>
    </body>
    </html>
  `;
}

function generateAdminEmail(
  formData: {
    name: string;
    businessName: string;
    jobTitle: string;
    email: string;
    phone: string;
    inquiryType: string;
    message?: string
  },
  inquiryLabel: string,
  timestamp: string
): string {
  const submittedAt = new Date(timestamp).toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #093B73; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 0 -20px;">
        <h1 style="margin: 0; font-size: 20px;">🔔 New Website Inquiry</h1>
      </div>
      
      <div style="background: #f7f8fa; padding: 20px; border-radius: 0 0 8px 8px; margin: 0 -20px 30px -20px;">
        <p style="margin: 0;"><strong>Submitted:</strong> ${submittedAt}</p>
      </div>
      
      <h2 style="color: #093B73; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Contact Details</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
          <td style="padding: 8px 0;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Business:</td>
          <td style="padding: 8px 0;">${formData.businessName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Job Title:</td>
          <td style="padding: 8px 0;">${formData.jobTitle}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #093B73;">${formData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
          <td style="padding: 8px 0;"><a href="tel:${formData.phone}" style="color: #093B73;">${formData.phone}</a></td>
        </tr>
      </table>
      
      <h2 style="color: #093B73; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; margin-top: 30px;">Inquiry Details</h2>
      <p><strong>Type:</strong> ${inquiryLabel}</p>
      ${formData.message ? `<p><strong>Message:</strong><br>${formData.message}</p>` : '<p><em>No additional message provided.</em></p>'}
      
      <div style="background: #E29C41; color: white; padding: 15px; border-radius: 8px; margin-top: 30px; text-align: center;">
        <p style="margin: 0;">Reply directly to this email to respond to ${formData.name.split(' ')[0]}</p>
      </div>
    </body>
    </html>
  `;
}
