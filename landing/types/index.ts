// imagine-if.ai Type Definitions
// Focus keyword: anti-gravity

export type InquiryType = 'quick-chat' | 'foundation-review' | 'other';

export interface FormSubmission {
  name: string;
  businessName: string;
  jobTitle: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  message?: string;
  honeypot?: string;
  timestamp: string;
}

export interface EmailPayload {
  to: string;
  from: string;
  subject: string;
  body: {
    greeting: string;
    summary: string;
    formData: FormSubmission;
    nextSteps: string;
    signature: string;
  };
}

export interface AdminNotification {
  to: string;
  from: string;
  subject: string;
  body: {
    formData: FormSubmission;
    submittedAt: string;
  };
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TrustItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
