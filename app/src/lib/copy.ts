/**
 * Site copy and UTM constants for conversion tracking.
 */

export const UTM_PARAMS = 'utm_source=menterprise&utm_medium=portfolio&utm_campaign=holding_router';

export function portfolioUrl(website: string): string {
  const base = website.startsWith('http') ? website : `https://${website}`;
  return `${base}?${UTM_PARAMS}`;
}

export const TRUST_STRIP = {
  items: [
    { label: 'Focus', value: 'High-risk commerce & compliance infrastructure' },
    { label: 'Delivery', value: 'Audit-ready artifacts, deterministic workflows' },
    { label: 'Response', value: 'Within 24 business hours' },
  ],
} as const;

export const OPERATING_MODEL = {
  headline: 'How the system works',
  steps: [
    {
      title: 'Detect',
      body: 'Continuous monitoring and scanning surface risk before it becomes a finding. No surprises at audit time.',
    },
    {
      title: 'Evidence',
      body: 'Every finding is logged with timestamps and artifacts. You get a clear trail for acquirers and auditors.',
    },
    {
      title: 'Remediate',
      body: 'Actionable outputs and integrations so your team can fix issues and prove compliance.',
    },
  ],
} as const;

export const PARTNER_COPY = {
  headline: 'Partners & operators',
  body: 'ISOs, agencies, and infrastructure buyers: we integrate with your stack. Share your use case and we’ll route you to the right product or a fit call. No runaround.',
  cta: 'Request partner pack',
} as const;

export const CONTACT_COPY = {
  headline: 'Request partner pack',
  subhead: 'Get capability overviews, integration notes, and response SLAs. We reply within 24 business hours.',
  formTitle: 'Send inquiry',
  nameLabel: 'Name',
  emailLabel: 'Email',
  companyLabel: 'Company',
  messageLabel: 'Message',
  messagePlaceholder: 'Use case or question',
  submitLabel: 'Send inquiry',
  responseNote: 'We respond within 24 business hours.',
} as const;

export const FOOTER_LEGAL =
  'MEnterprise Firm Inc operates under DBAs including Sovereign Stack and Elite Shop.';
