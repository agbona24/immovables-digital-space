import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AssessmentData {
  name: string;
  email: string;
  company: string;
  industry: string;
  interest: string;
  score: number;
  answers: { [key: number]: number };
}

// Create reusable transporter
const createTransporter = () => {
  const port = parseInt(process.env.EMAIL_PORT || '587');
  const secure = port === 465 ? true : (process.env.EMAIL_SECURE === 'true');
  
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: port,
    secure: secure,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
  });
};

// Get maturity level and recommendations
const getMaturityLevel = (score: number) => {
  if (score < 30) {
    return {
      level: 'Digital Beginner',
      color: '#ef4444',
      emoji: '🌱',
      message: 'You\'re just starting your digital journey. There\'s huge potential for growth!',
      priorities: [
        'Build or redesign your website',
        'Set up Google Analytics',
        'Create social media presence',
        'Start basic SEO optimization',
      ],
    };
  } else if (score < 50) {
    return {
      level: 'Digital Explorer',
      color: '#f59e0b',
      emoji: '🚀',
      message: 'You have the basics covered but there\'s room for significant improvement.',
      priorities: [
        'Optimize mobile experience',
        'Improve SEO strategy',
        'Launch email marketing campaigns',
        'Enhance website conversion rates',
      ],
    };
  } else if (score < 75) {
    return {
      level: 'Digital Achiever',
      color: '#3b82f6',
      emoji: '⭐',
      message: 'You\'re doing well! Let\'s take your digital presence to the next level.',
      priorities: [
        'Implement advanced analytics',
        'Create content marketing strategy',
        'A/B test conversion funnels',
        'Explore AI-powered solutions',
      ],
    };
  } else {
    return {
      level: 'Digital Leader',
      color: '#10b981',
      emoji: '🏆',
      message: 'Excellent! You\'re ahead of the curve in digital maturity.',
      priorities: [
        'Maintain competitive advantage',
        'Test emerging technologies',
        'Scale successful strategies',
        'Mentor others in your industry',
      ],
    };
  }
};

// Format admin notification email
const formatAdminEmail = (data: AssessmentData, maturity: any) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); padding: 30px; text-align: center;">
        <h1 style="color: #F15924; margin: 0;">🎯 New Assessment Completed</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px;">
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Company:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.company || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666;"><strong>Industry:</strong></td>
            <td style="padding: 10px 0; color: #333;">${data.industry}</td>
          </tr>
        </table>
        
        <h2 style="color: #0A2540; border-bottom: 2px solid #F15924; padding-bottom: 10px; margin-top: 30px;">Assessment Results</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="font-size: 48px; font-weight: bold; color: ${maturity.color};">${data.score}%</div>
            <div style="font-size: 24px; color: #0A2540; margin: 10px 0;">${maturity.emoji} ${maturity.level}</div>
          </div>
        </div>
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196F3;">
          <strong style="color: #0A2540;">Main Interest:</strong>
          <p style="margin: 5px 0; color: #333;">${data.interest}</p>
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

// Format user results email
const formatUserEmail = (data: AssessmentData, maturity: any) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #F15924 0%, #ff7849 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">Your Digital Maturity Report</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px 30px;">
        <p style="color: #333; font-size: 18px; margin-bottom: 30px;">Hi ${data.name.split(' ')[0]},</p>
        
        <p style="color: #666; line-height: 1.6;">
          Thank you for completing the <strong>Digital Maturity Assessment</strong>! Here are your results:
        </p>
        
        <!-- Score Card -->
        <div style="background: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="font-size: 72px; font-weight: bold; color: ${maturity.color}; margin-bottom: 10px;">${data.score}%</div>
          <div style="font-size: 36px; margin-bottom: 10px;">${maturity.emoji}</div>
          <div style="font-size: 28px; font-weight: bold; color: #0A2540; margin-bottom: 15px;">${maturity.level}</div>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0;">${maturity.message}</p>
        </div>
        
        <!-- Priorities -->
        <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0;">
          <h2 style="color: #0A2540; margin-top: 0; font-size: 22px;">🎯 Your Top Priorities</h2>
          <ol style="color: #333; line-height: 2; padding-left: 20px;">
            ${maturity.priorities.map((priority: string) => `<li>${priority}</li>`).join('')}
          </ol>
        </div>
        
        <!-- What's Included -->
        <div style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); padding: 25px; border-radius: 12px; margin: 30px 0;">
          <h3 style="color: #F15924; margin-top: 0;">📊 Full Report Includes:</h3>
          <ul style="color: white; line-height: 2;">
            <li>Detailed breakdown of your digital presence</li>
            <li>Industry-specific benchmarks</li>
            <li>Step-by-step improvement roadmap</li>
            <li>Cost-benefit analysis of recommendations</li>
          </ul>
        </div>
        
        <!-- CTA -->
        <div style="background: #e8f4e8; padding: 25px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #28a745;">
          <h3 style="color: #0A2540; margin-top: 0;">💡 Ready to Level Up?</h3>
          <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
            Let's discuss how we can help you improve your digital maturity score and grow your business online.
          </p>
          <a href="https://immovablestech.com/contact" 
             style="display: inline-block; background: linear-gradient(135deg, #F15924 0%, #ff7849 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Schedule a Free Consultation
          </a>
        </div>
        
        <p style="color: #666; line-height: 1.6; margin-top: 30px;">
          We'll reach out within 24 hours to discuss your results and how we can help you achieve your digital goals.
        </p>
        
        <p style="color: #333; line-height: 1.6; margin-top: 30px;">
          Best regards,<br>
          <strong>The Immovables Digital Space Team</strong>
        </p>
      </div>
      
      <div style="background: #0A2540; padding: 20px; text-align: center;">
        <p style="color: #888; margin: 0; font-size: 12px;">
          © ${new Date().getFullYear()} Immovables Digital Space. All rights reserved.
        </p>
      </div>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data: AssessmentData = await request.json();

    // Validate required fields
    if (!data.email || !data.name) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    console.log('Assessment submission received:', {
      name: data.name,
      email: data.email,
      score: data.score,
      timestamp: new Date().toISOString(),
    });

    const maturity = getMaturityLevel(data.score);
    const transporter = createTransporter();
    
    const emailTo = process.env.EMAIL_TO || 'info@immovablestech.com';
    const emailFrom = process.env.EMAIL_FROM || 'info@immovablestech.com';

    // Admin notification email
    const adminMailOptions = {
      from: `"IDS Assessment" <${emailFrom}>`,
      to: emailTo,
      replyTo: data.email,
      subject: `🎯 New Assessment: ${data.name} - ${maturity.level} (${data.score}%)`,
      html: formatAdminEmail(data, maturity),
    };

    // User results email
    const userMailOptions = {
      from: `"Immovables Digital Space" <${emailFrom}>`,
      to: data.email,
      subject: `Your Digital Maturity Report - ${maturity.level}`,
      html: formatUserEmail(data, maturity),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Assessment submitted successfully',
      score: data.score,
      level: maturity.level,
    });

  } catch (error: any) {
    console.error('=== Assessment Submission Error ===');
    console.error('Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit assessment. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
