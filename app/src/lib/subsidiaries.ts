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
];

/** Top N shown in portfolio router before "View full portfolio". */
export const PORTFOLIO_FEATURED_COUNT = 5;
