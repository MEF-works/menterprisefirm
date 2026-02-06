import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import SubsidiaryShowcase from './sections/SubsidiaryShowcase';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

// Subsidiary data
const subsidiaries = [
  {
    id: 'shipmystack',
    name: 'ShipMyStack',
    subtitle: 'DevOps + Identity',
    description: 'The central operations hub of the network. Deploy to Vercel, Railway, or VMs—then manage identity, plans, and environments from one place.',
    founded: '2025',
    website: 'shipmystack.com',
    feature: 'Central Identity Provider (OAuth)',
    microLabel: '01 / Infrastructure & Identity',
    backgroundImage: '/bldg_glass_01.jpg',
    zIndex: 30,
    logo: '/logo-shipmystack.png'
  },
  {
    id: 'kratombans',
    name: 'KratomBans',
    subtitle: 'Legal Tech + Advocacy',
    description: 'Legislative tracking and a tiered API for state- and county-level legality data. Sentinel scans for changes—then generates content automatically.',
    founded: '2025',
    website: 'kratombans.com',
    feature: 'AI agent: Sentinel',
    microLabel: '02 / Data Intelligence',
    backgroundImage: '/bldg_glass_02.jpg',
    zIndex: 40,
    logo: '/logo-kratombans.png'
  },
  {
    id: 'prepscan',
    name: 'PrepScan',
    subtitle: 'Compliance + FinTech',
    description: 'Live site scanning via WebSockets. Playwright and Puppeteer detect prohibited content and risk factors—so merchants stay compliant.',
    founded: '2025',
    website: 'prepscan.pro',
    feature: 'Live scan engine',
    microLabel: '03 / Risk Scanning',
    backgroundImage: '/bldg_glass_03.jpg',
    zIndex: 50,
    logo: '/logo-prepscan.png'
  },
  {
    id: 'scan643',
    name: 'Scan643',
    subtitle: 'Cybersecurity + PCI',
    description: 'Deep-web script analysis and PCI compliance scanning. Pay-to-reveal reports with script signature hashing—built for security teams.',
    founded: '2026',
    website: 'scan643.pro',
    feature: 'Script signature hashing',
    microLabel: '04 / Deep-Web Security',
    backgroundImage: '/bldg_glass_04.jpg',
    zIndex: 60,
    logo: '/logo-scan643.png'
  },
  {
    id: 'reup',
    name: 'The Re-Up',
    subtitle: 'High-Risk Commerce',
    description: 'Multi-tenant PWA for high-risk verticals. Complex payment routing, P2P deep links, and BTCPay crypto integrations—built to stay online.',
    founded: '2025',
    website: 'reuppro.com',
    feature: 'Multi-rail checkout',
    microLabel: '05 / Payments',
    backgroundImage: '/bldg_glass_05.jpg',
    zIndex: 70,
    logo: '/logo-reup.png'
  },
  {
    id: 'mse',
    name: 'Merchant Survival Engine',
    subtitle: 'Threat Detection',
    description: 'Event-driven monitoring that simulates checkouts, detects failures, and surfaces active threats—before they become downtime.',
    founded: '2026',
    website: 'safemoney.pro',
    feature: 'Uptime + checkout simulation',
    microLabel: '06 / Risk Management',
    backgroundImage: '/bldg_glass_06.jpg',
    zIndex: 80,
    logo: '/logo-mse.png'
  },
  {
    id: 'sovereignstack',
    name: 'Sovereign Stack',
    subtitle: 'Risk Terminal + Frontend',
    description: 'Headless WordPress frontend for high-risk checkout simulations and merchant audits. Decentralized, non-custodial, with jurisdictional fallback.',
    founded: '2025',
    website: 'sovereignstack.pro',
    feature: 'Jurisdictional fallback',
    microLabel: '07 / Sovereign Commerce',
    backgroundImage: '/bldg_glass_07.jpg',
    zIndex: 90,
    logo: '/logo-sovereignstack.png'
  }
];

function App() {
  // Global scroll snap for pinned sections
  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with buffer)
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out'
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Portfolio Overview */}
        <OverviewSection />
        
        {/* Sections 3-9: Subsidiary Showcases */}
        {subsidiaries.map((sub) => (
          <SubsidiaryShowcase key={sub.id} {...sub} />
        ))}
        
        {/* Section 10: Contact (Flowing) */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
