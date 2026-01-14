/**
 * Send lead notification to Kyle via Web3Forms
 * Fires BEFORE showing pricing to ensure instant notification
 */
export async function notifyNewLead(data: {
  name: string;
  phone: string;
  zipCode: string;
  homeSize: string;
}): Promise<void> {
  try {
    const timestamp = new Date().toLocaleString();

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: `🍯 NEW LEAD: ${data.name} - ${data.zipCode} - ${data.homeSize.toUpperCase()}`,
      from_name: "Alexander's Pricing Calculator",
      message: `
═══════════════════════════════════════════════════════════
            NEW PRICING CALCULATOR LEAD
═══════════════════════════════════════════════════════════

Timestamp: ${timestamp}

CUSTOMER INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:  ${data.name}
Phone: ${data.phone}
ZIP:   ${data.zipCode}

PROPERTY INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Home Size: ${data.homeSize}

═══════════════════════════════════════════════════════════
${new Date().toLocaleString()}

⚡ They have NOT seen pricing yet.
⚡ CALL THEM NOW while they're hot!

═══════════════════════════════════════════════════════════
      `
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.warn('Lead notification request failed:', response.status);
    } else {
      console.log('🎯 Lead notification sent successfully');
    }
  } catch (error) {
    console.error('Lead notification error:', error);
    // Don't throw - this is non-critical background task
  }
}

/**
 * Send package selection notification to Kyle via Web3Forms
 * Fires when user selects a package and clicks "LET'S DO THIS"
 */
export async function notifyPackageSelected(data: {
  name: string;
  phone: string;
  zipCode: string;
  homeSize: string;
  lastCleaned: string;
  trackCondition: string;
  packageName: string;
  priceRange: [number, number];
}): Promise<void> {
  try {
    const timestamp = new Date().toLocaleString();

    // Format the price range
    const priceDisplay = `$${data.priceRange[0]} - $${data.priceRange[1]}`;

    // Format condition names
    const lastCleanedLabels: Record<string, string> = {
      'recent': 'Under 6 months',
      '1-2yr': '6-12 months',
      'over2yr': '1-3 years',
      'never': '3+ years'
    };

    const trackConditionLabels: Record<string, string> = {
      'clean': 'Clean',
      'dusty': 'Light dust',
      'dirty': 'Moderate buildup',
      'neglected': 'Heavy buildup'
    };

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: `📦 PACKAGE SELECTED: ${data.name} - ${data.packageName} - ${priceDisplay}`,
      from_name: "Alexander's Pricing Calculator",
      message: `
═══════════════════════════════════════════════════════════
          PACKAGE SELECTED - READY TO BOOK!
═══════════════════════════════════════════════════════════

Timestamp: ${timestamp}

CUSTOMER INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:  ${data.name}
Phone: ${data.phone}
ZIP:   ${data.zipCode}

PROPERTY INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Home Size:        ${data.homeSize.charAt(0).toUpperCase() + data.homeSize.slice(1)}
Last Cleaned:     ${lastCleanedLabels[data.lastCleaned] || data.lastCleaned}
Current Condition: ${trackConditionLabels[data.trackCondition] || data.trackCondition}

SELECTED PACKAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Package: ${data.packageName}
Estimated Price: ${priceDisplay}

═══════════════════════════════════════════════════════════
⚡ They're ready to book. Call with quote confirmation!
═══════════════════════════════════════════════════════════
      `
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.warn('Package selection notification request failed:', response.status);
    } else {
      console.log('📦 Package selection notification sent successfully');
    }
  } catch (error) {
    console.error('Package selection notification error:', error);
    // Don't throw - this is non-critical background task
  }
}
