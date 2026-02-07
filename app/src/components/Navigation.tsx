import { useState, useEffect } from 'react';

const PRIMARY_CTA_LABEL = 'Request partner pack';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.4);
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        setIsLight(scrollY > contactTop - windowHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    scrollToSection('contact');
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (a: string, b: string, c: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: Record<string, string>) => void }).gtag('event', 'nav_cta_click', { campaign: 'holding_router' });
    }
  };

  const navBg = isLight ? 'bg-[#F4F6F9]/95' : 'bg-[#0B0C0E]/90';
  const navText = isLight ? 'text-[#0B0C0E]' : 'text-[#F4F6F9]';
  const navMuted = isLight ? 'text-[rgba(11,12,14,0.68)]' : 'text-[rgba(244,246,249,0.72)]';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      aria-label="Main navigation"
    >
      <div className={`${navBg} backdrop-blur-md border-b border-[rgba(244,246,249,0.06)] px-4 sm:px-[4vw] py-3 transition-colors duration-300`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-display font-semibold text-base sm:text-lg transition-colors ${navText} hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0E] rounded-sm min-h-[44px] flex items-center`}
            aria-label="MEnterprise – back to top"
          >
            MEnterprise
          </button>

          <div className="flex items-center gap-4 sm:gap-8">
            <button
              type="button"
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm transition-colors hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0C0E] rounded-sm min-h-[44px] flex items-center ${navMuted}`}
            >
              Portfolio
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('how-we-operate')}
              className={`hidden sm:block text-sm transition-colors hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm min-h-[44px] ${navMuted}`}
            >
              How we operate
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              className="btn-primary text-sm font-medium min-h-[44px] px-4 sm:px-5 flex items-center shrink-0"
              data-track="nav-primary-cta"
            >
              {PRIMARY_CTA_LABEL}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
