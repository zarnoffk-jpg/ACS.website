import { Resend } from 'resend';

// HTML escape function to prevent XSS injection in emails
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.NOTIFICATION_EMAIL;

if (!resendApiKey) {
  console.warn('RESEND_API_KEY not configured - email notifications disabled');
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface QuoteNotificationData {
  name: string;
  contact: string;
  service: string;
  message?: string;
  timestamp: string;
}

/**
 * Send email notification when a new quote is received
 */
export async function sendQuoteNotification(data: QuoteNotificationData) {
  if (!resend || !notificationEmail) {
    console.warn('Email service not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const serviceNames: Record<string, string> = {
      residential: 'Residential Window Cleaning',
      commercial: 'Commercial Window Cleaning',
      'gutter-cleaning': 'Gutter Cleaning',
      'screen-repair': 'Screen Repair',
      'pressure-washing': 'Pressure Washing',
      other: 'Other Service',
    };

    const serviceName = serviceNames[data.service] || data.service;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0066cc; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0066cc; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #0066cc; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            .cta { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #FFB800; color: #000; text-decoration: none; border-radius: 5px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Quote Request</h1>
            </div>
            <div class="content">
              <p><strong>You have received a new quote request from your website!</strong></p>

              <div class="field">
                <div class="label">👤 Customer Name:</div>
                <div class="value">${escapeHtml(data.name)}</div>
              </div>

              <div class="field">
                <div class="label">📞 Contact Information:</div>
                <div class="value">${escapeHtml(data.contact)}</div>
              </div>

              <div class="field">
                <div class="label">🧹 Service Requested:</div>
                <div class="value">${escapeHtml(serviceName)}</div>
              </div>

              ${data.message ? `
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${escapeHtml(data.message)}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">🕐 Submitted:</div>
                <div class="value">${new Date(data.timestamp).toLocaleString('en-US', {
                  timeZone: 'America/New_York',
                  dateStyle: 'full',
                  timeStyle: 'short',
                })}</div>
              </div>

              <a href="tel:${data.contact.replace(/[^0-9]/g, '')}" class="cta">
                📞 Call ${escapeHtml(data.name)}
              </a>

              <div class="footer">
                <p>💡 <strong>Quick Response Tip:</strong> Customers who receive a response within 1 hour are 7x more likely to choose your service!</p>
                <p style="margin-top: 10px;">This notification was sent from your Alexander's Cleaning Service website.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
NEW QUOTE REQUEST

Customer: ${escapeHtml(data.name)}
Contact: ${escapeHtml(data.contact)}
Service: ${escapeHtml(serviceName)}
${data.message ? `Message: ${escapeHtml(data.message)}` : ''}
Submitted: ${new Date(data.timestamp).toLocaleString()}

Call them at: ${escapeHtml(data.contact)}
    `;

    const result = await resend.emails.send({
      from: 'Alexander\'s Cleaning <quotes@resend.dev>', // Note: Resend free tier uses @resend.dev
      to: notificationEmail,
      subject: `🔔 New ${serviceName} Quote from ${data.name}`,
      html: emailHtml,
      text: emailText,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
