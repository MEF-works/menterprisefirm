/**
 * Subsidiary data: outcome-oriented copy for conversion.
 */

export interface Subsidiary {
  id: string;
  name: string;
  category: string;
  outcome: string;
  keyCapability: string;
  website: string;
  logo: string;
  /** For full-portfolio card order */
  order: number;
}

export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: 'shipmystack',
    name: 'ShipMyStack',
    category: 'Infrastructure & Identity',
    outcome: 'One identity layer across deploy targets and plans.',
    keyCapability: 'Central OAuth; reduces duplicate sign-on and plan sprawl.',
    website: 'shipmystack.com',
    logo: '/logo-shipmystack.png',
    order: 1,
  },
  {
    id: 'prepscan',
    name: 'PrepScan',
    category: 'Compliance & Risk',
    outcome: 'Catch prohibited content before auditors do.',
    keyCapability: 'Live site scanning; flags risk factors so merchants stay compliant.',
    website: 'prepscan.pro',
    logo: '/logo-prepscan.png',
    order: 2,
  },
  {
    id: 'scan643',
    name: 'Scan643',
    category: 'Cybersecurity & PCI',
    outcome: 'Flag unauthorized script changes before they become PCI findings.',
    keyCapability: 'Deep-web script analysis and hashing; pay-to-reveal reports for security teams.',
    website: 'scan643.pro',
    logo: '/logo-scan643.png',
    order: 3,
  },
  {
    id: 'reup',
    name: 'The Re-Up',
    category: 'Payments & Commerce',
    outcome: 'Stay live when rails go down.',
    keyCapability: 'Multi-rail checkout and P2P deep links; BTCPay optional.',
    website: 'reuppro.com',
    logo: '/logo-reup.png',
    order: 4,
  },
  {
    id: 'mse',
    name: 'Merchant Survival Engine',
    category: 'Threat Detection',
    outcome: 'See checkout failures before they become downtime.',
    keyCapability: 'Event-driven monitoring and checkout simulation; surfaces active threats.',
    website: 'safemoney.pro',
    logo: '/logo-mse.png',
    order: 5,
  },
  {
    id: 'kratombans',
    name: 'KratomBans',
    category: 'Data Intelligence',
    outcome: 'Know what’s legal where before you ship.',
    keyCapability: 'State and county legality API; Sentinel keeps content and APIs in sync.',
    website: 'kratombans.com',
    logo: '/logo-kratombans.png',
    order: 6,
  },
  {
    id: 'sovereignstack',
    name: 'Sovereign Stack',
    category: 'Sovereign Commerce',
    outcome: 'Run checkouts and audits without custody risk.',
    keyCapability: 'Jurisdictional fallback; headless frontend for high-risk simulations.',
    website: 'sovereignstack.pro',
    logo: '/logo-sovereignstack.png',
    order: 7,
  },
  {
    id: 'cbdbans',
    name: 'CBDBans',
    category: 'Legal Tech & Advocacy',
    outcome: 'Ship CBD where it is legal; avoid fines where it is not.',
    keyCapability: 'Jurisdiction-level legality tracking and API-ready signals for listings and checkout.',
    website: 'cbdbans.com',
    logo: '/logo-cbdbans.png',
    order: 8,
  },
  {
    id: 'delta8bans',
    name: 'Delta8Bans',
    category: 'Legal Tech & Advocacy',
    outcome: 'Know delta-8 rules before you advertise or fulfill.',
    keyCapability: 'State and local policy coverage with change alerts for operators and agencies.',
    website: 'delta8bans.com',
    logo: '/logo-delta8bans.png',
    order: 9,
  },
  {
    id: 'mushroombans',
    name: 'MushroomBans',
    category: 'Legal Tech & Advocacy',
    outcome: 'Keep psilocybin and analog rules straight across markets.',
    keyCapability: 'County- and state-level legality maps with exportable evidence for compliance teams.',
    website: 'mushroombans.com',
    logo: '/logo-mushroombans.png',
    order: 10,
  },
  {
    id: 'mefdup',
    name: 'MeFDup',
    category: 'Data Integrity',
    outcome: 'Stop duplicate identities and orders from polluting your stack.',
    keyCapability: 'Deterministic matching and merge workflows so downstream systems stay clean.',
    website: 'mefdup.com',
    logo: '/logo-mefdup.png',
    order: 11,
  },
  {
    id: 'mgmalkz',
    name: 'MGMALKZ',
    category: 'Commerce & Catalog',
    outcome: 'Keep catalog, pricing, and fulfillment aligned under load.',
    keyCapability: 'High-throughput sync and guardrails for merchants running complex SKU mixes.',
    website: 'mgmalkz.com',
    logo: '/logo-mgmalkz.png',
    order: 12,
  },
  {
    id: 'sovpay',
    name: 'SovPay',
    category: 'Payments',
    outcome: 'Settle and reconcile without giving up operational control.',
    keyCapability: 'Non-custodial payment flows with clear settlement artifacts for finance and audit.',
    website: 'sovpay.com',
    logo: '/logo-sovpay.png',
    order: 13,
  },
  {
    id: 'sovsats',
    name: 'SovSats',
    category: 'Treasury & Bitcoin',
    outcome: 'Hold and move sats with policies your counsel can defend.',
    keyCapability: 'Policy-bound treasury tooling and reporting for Bitcoin-native operators.',
    website: 'sovsats.com',
    logo: '/logo-sovsats.png',
    order: 14,
  },
  {
    id: 'wpidentitysyncpro',
    name: 'WP Identity Sync Pro',
    category: 'Identity & WordPress',
    outcome: 'One user record across WordPress, headless frontends, and IdPs.',
    keyCapability: 'Bidirectional identity sync with conflict resolution and audit logs.',
    website: 'wpidentitysyncpro.com',
    logo: '/logo-wpidentitysyncpro.jpg',
    order: 15,
  },
];

/** Top N shown in portfolio router before "View full portfolio". */
export const PORTFOLIO_FEATURED_COUNT = 5;
