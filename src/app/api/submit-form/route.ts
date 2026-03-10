import { NextRequest, NextResponse } from 'next/server';

// Form submission API route
// In production, integrate with email service (Resend, SendGrid, etc.) or store in database

interface FormData {
  formType: 'contact' | 'free-audit';
  // Contact form fields
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  // Free audit form fields
  businessName?: string;
  websiteUrl?: string;
  industry?: string;
  challenge?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Log the submission (in production, send email or store in database)
    console.log('Form submission received:', {
      type: data.formType,
      timestamp: new Date().toISOString(),
      data
    });

    // Here you would integrate with:
    // 1. Email service (Resend, SendGrid, etc.) to send notification emails
    // 2. CRM (HubSpot, Salesforce, etc.) to create leads
    // 3. Database to store submissions
    // 4. Slack/Discord webhook for notifications

    // Example: Send to email service
    // await sendEmail({
    //   to: 'info@immovablestech.com',
    //   subject: data.formType === 'contact' ? 'New Contact Form Submission' : 'New Free Audit Request',
    //   body: formatEmailBody(data)
    // });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: data.formType === 'contact' 
        ? 'Thank you for your message! We\'ll get back to you within 24 hours.'
        : 'Thank you! Your free audit request has been submitted. We\'ll send your report within 48 hours.'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
