import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('=== Testing Email Configuration ===');
    console.log('Host:', process.env.EMAIL_HOST);
    console.log('Port:', process.env.EMAIL_PORT);
    console.log('Secure:', process.env.EMAIL_SECURE);
    console.log('User:', process.env.EMAIL_USER);
    console.log('From:', process.env.EMAIL_FROM);
    console.log('To:', process.env.EMAIL_TO);
    
    const port = parseInt(process.env.EMAIL_PORT || '587');
    const secure = port === 465 ? true : (process.env.EMAIL_SECURE === 'true');
    
    const transporter = nodemailer.createTransport({
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

    // Verify connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✓ SMTP connection verified successfully');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'SMTP Test Email - ' + new Date().toLocaleString(),
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0A2540;">✅ SMTP Configuration Test Successful!</h2>
          <p>This is a test email to verify your SMTP settings are working correctly.</p>
          <div style="background: #f0f0f0; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <strong>Configuration:</strong><br>
            Host: ${process.env.EMAIL_HOST}<br>
            Port: ${port}<br>
            Secure: ${secure}<br>
            User: ${process.env.EMAIL_USER}
          </div>
          <p style="color: #666;">Test sent at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log('✓ Test email sent successfully');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    return NextResponse.json({
      success: true,
      message: 'SMTP configuration is working correctly!',
      details: {
        host: process.env.EMAIL_HOST,
        port: port,
        secure: secure,
        user: process.env.EMAIL_USER,
        messageId: info.messageId,
        response: info.response,
      },
    });

  } catch (error: any) {
    console.error('=== SMTP Test Failed ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);

    let diagnosis = '';
    let suggestion = '';

    if (error.code === 'EAUTH') {
      diagnosis = 'Authentication failed';
      suggestion = 'Check EMAIL_USER and EMAIL_PASS in .env.local. Make sure you\'re using the correct password/app password.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      diagnosis = 'Connection failed';
      suggestion = 'Check EMAIL_HOST and EMAIL_PORT. Make sure port 465 is not blocked by firewall.';
    } else if (error.code === 'ENOTFOUND') {
      diagnosis = 'SMTP host not found';
      suggestion = 'Verify EMAIL_HOST is correct: ' + process.env.EMAIL_HOST;
    } else {
      diagnosis = 'Unknown error';
      suggestion = 'Check all SMTP settings in .env.local';
    }

    return NextResponse.json(
      {
        success: false,
        error: 'SMTP test failed',
        diagnosis,
        suggestion,
        errorMessage: error.message,
        errorCode: error.code,
        config: {
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: process.env.EMAIL_SECURE,
          user: process.env.EMAIL_USER,
        },
      },
      { status: 500 }
    );
  }
}
