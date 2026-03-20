import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

// Create reusable transporter
const createTransporter = () => {
  const port = parseInt(process.env.EMAIL_PORT || '587');
  // Automatically use secure for port 465, otherwise check EMAIL_SECURE env var
  const secure = port === 465 ? true : (process.env.EMAIL_SECURE === 'true');
  
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: port,
    secure: secure, // true for 465 (SSL), false for 587 (STARTTLS) or 25
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Additional security options
    tls: {
      // Do not fail on invalid certs (useful for development)
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
  });
};

// Format contact form email
const formatContactEmail = (data: FormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); padding: 30px; text-align: center;">
        <h1 style="color: #F15924; margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px;">
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; width: 140px;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.firstName || ''} ${data.lastName || ''}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Company:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Service:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.service || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Budget:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.budget || 'Not specified'}</td>
          </tr>
        </table>
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px; margin-top: 30px;">Message</h2>
        <p style="color: #333; line-height: 1.6; background: white; padding: 20px; border-radius: 8px;">
          ${data.message || 'No message provided'}
        </p>
      </div>
      <div style="background: #0A2540; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (WAT)
        </p>
      </div>
    </div>
  `;
};

// Format user confirmation email for contact form
const formatUserContactConfirmation = (data: FormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); padding: 30px; text-align: center;">
        <h1 style="color: #F15924; margin: 0;">Thank You for Contacting Us!</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${data.firstName || ''} ${data.lastName || ''},</p>
        <p style="color: #333; line-height: 1.6;">
          Thank you for reaching out to <strong>Immovables Digital Space</strong>. We've received your inquiry and one of our team members will get back to you within 24 hours.
        </p>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #F15924; margin: 20px 0;">
          <h3 style="color: #0A2540; margin-top: 0;">Your Submission Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 130px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.firstName || ''} ${data.lastName || ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Service:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Budget:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.budget || 'Not specified'}</td>
            </tr>
          </table>
          ${data.message ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0 0 5px 0;"><strong>Your Message:</strong></p>
            <p style="color: #333; margin: 0; line-height: 1.6;">${data.message}</p>
          </div>
          ` : ''}
        </div>
        <div style="background: #e8f4e8; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
          <p style="margin: 0; color: #333;"><strong>✓ What's Next?</strong></p>
          <p style="margin: 5px 0 0 0; color: #333;">Our team will review your inquiry and respond within 24 hours.</p>
        </div>
        <p style="color: #333; line-height: 1.6;">
          A copy of this submission has also been sent to <strong>info@immovablestech.com</strong> for processing.
        </p>
        <p style="color: #333; line-height: 1.6;">
          Best regards,<br>
          <strong>The Immovables Digital Space Team</strong>
        </p>
      </div>
      <div style="background: #0A2540; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (WAT)
        </p>
        <p style="color: #888; margin: 5px 0 0 0; font-size: 12px;">
          © ${new Date().getFullYear()} Immovables Digital Space. All rights reserved.
        </p>
      </div>
    </div>
  `;
};

// Format user confirmation email for free audit
const formatUserAuditConfirmation = (data: FormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #F15924 0%, #ff7849 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">🎯 Your Free Audit Request is Confirmed!</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">Hello,</p>
        <p style="color: #333; line-height: 1.6;">
          Thank you for requesting a free digital audit from <strong>Immovables Digital Space</strong>! We're excited to help ${data.businessName || 'your business'} improve its digital presence.
        </p>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #F15924; margin: 20px 0;">
          <h3 style="color: #0A2540; margin-top: 0;">Your Audit Request Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Business Name:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.businessName || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Website URL:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.websiteUrl || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Industry:</strong></td>
              <td style="padding: 8px 0; color: #333;">${data.industry || 'Not specified'}</td>
            </tr>
          </table>
          ${data.challenge ? `
          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
            <p style="color: #666; margin: 0 0 5px 0;"><strong>Main Challenge:</strong></p>
            <p style="color: #333; margin: 0; line-height: 1.6;">${data.challenge}</p>
          </div>
          ` : ''}
        </div>
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196F3; margin: 20px 0;">
          <p style="margin: 0; color: #333;"><strong>🔍 What Happens Next?</strong></p>
          <ul style="color: #333; line-height: 1.8; padding-left: 20px; margin: 10px 0 0 0;">
            <li>Our team will conduct a thorough analysis of your digital assets</li>
            <li>We'll identify key opportunities and challenges</li>
            <li>You'll receive a detailed audit report within <strong>48 hours</strong></li>
            <li>The report will include actionable recommendations</li>
          </ul>
        </div>
        <div style="background: #e8f4e8; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
          <p style="margin: 0; color: #333;"><strong>✓ Confirmation</strong></p>
          <p style="margin: 5px 0 0 0; color: #333;">A copy of this request has been sent to <strong>info@immovablestech.com</strong> and we'll begin your audit shortly.</p>
        </div>
        <p style="color: #333; line-height: 1.6;">
          Keep an eye on your inbox! We'll send your comprehensive audit report to <strong>${data.email}</strong>.
        </p>
        <p style="color: #333; line-height: 1.6;">
          Best regards,<br>
          <strong>The Immovables Digital Space Team</strong>
        </p>
      </div>
      <div style="background: #0A2540; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (WAT)
        </p>
        <p style="color: #888; margin: 5px 0 0 0; font-size: 12px;">
          © ${new Date().getFullYear()} Immovables Digital Space. All rights reserved.
        </p>
      </div>
    </div>
  `;
};

// Format free audit form email
const formatAuditEmail = (data: FormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #F15924 0%, #ff7849 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">🎯 New Free Audit Request</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px;">
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px;">Business Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; width: 160px;"><strong>Business Name:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.businessName || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Website URL:</strong></td>
            <td style="padding: 10px 0; color: #333;"><a href="${data.websiteUrl}" target="_blank">${data.websiteUrl || 'Not provided'}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Industry:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.industry || 'Not specified'}</td>
          </tr>
        </table>
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px; margin-top: 30px;">Main Challenge</h2>
        <p style="color: #333; line-height: 1.6; background: white; padding: 20px; border-radius: 8px;">
          ${data.challenge || 'No challenge specified'}
        </p>
        <div style="background: #e8f4e8; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #28a745;">
          <strong style="color: #28a745;">Action Required:</strong>
          <p style="margin: 5px 0 0 0; color: #333;">Please complete the digital audit within 48 hours.</p>
        </div>
      </div>
      <div style="background: #0A2540; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (WAT)
        </p>
      </div>
    </div>
  `;
};

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

    // Log the submission
    console.log('Form submission received:', {
      type: data.formType,
      timestamp: new Date().toISOString(),
      data
    });

    // Send email notifications
    const transporter = createTransporter();
    
    const emailTo = process.env.EMAIL_TO || 'info@immovablestech.com';
    const emailFrom = process.env.EMAIL_FROM || 'info@immovablestech.com';

    const isContactForm = data.formType === 'contact';
    
    // Admin notification email
    const adminMailOptions = {
      from: `"IDS Website" <${emailFrom}>`,
      to: emailTo,
      replyTo: data.email,
      subject: isContactForm 
        ? `📩 New Contact: ${data.firstName || ''} ${data.lastName || ''} - ${data.service || 'General Inquiry'}`
        : `🎯 Free Audit Request: ${data.businessName || data.email}`,
      html: isContactForm ? formatContactEmail(data) : formatAuditEmail(data),
    };

    // User confirmation email
    const userMailOptions = {
      from: `"Immovables Digital Space" <${emailFrom}>`,
      to: data.email,
      subject: isContactForm 
        ? 'Thank You for Contacting Immovables Digital Space'
        : 'Your Free Digital Audit Request - Confirmed',
      html: isContactForm ? formatUserContactConfirmation(data) : formatUserAuditConfirmation(data),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({
      success: true,
      message: isContactForm 
        ? 'Thank you for your message! We\'ll get back to you within 24 hours.'
        : 'Thank you! Your free audit request has been submitted. We\'ll send your report within 48 hours.'
    });

  } catch (error: any) {
    console.error('=== Form Submission Error ===');
    console.error('Error type:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit form. Please try again.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check SMTP credentials.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Could not connect to email server. Please check network settings.';
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email address provided.';
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
