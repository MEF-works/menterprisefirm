import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show nav after scrolling past hero
      setIsVisible(scrollY > windowHeight * 0.5);
      
      // Check if we're in the contact section (light background)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        setIsLight(scrollY > contactTop - windowHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div 
        className={`px-[4vw] py-4 transition-colors duration-300 ${
          isLight ? 'bg-[#F4F6F9]/90' : 'bg-[#0B0C0E]/80'
        } backdrop-blur-md`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-display font-semibold text-lg transition-colors ${
              isLight ? 'text-[#0B0C0E]' : 'text-[#F4F6F9]'
            }`}
          >
            MEnterprise
          </button>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('portfolio-overview')}
              className={`text-sm transition-colors hover:text-gold ${
                isLight ? 'text-[rgba(11,12,14,0.68)]' : 'text-[rgba(244,246,249,0.72)]'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm transition-colors hover:text-gold ${
                isLight ? 'text-[rgba(11,12,14,0.68)]' : 'text-[rgba(244,246,249,0.72)]'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
