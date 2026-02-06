import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !subhead || !cta || !bg) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(bg, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8 }
      )
      .fromTo(headline.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 
        '-=0.4'
      )
      .fromTo(subhead, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6 }, 
        '-=0.3'
      )
      .fromTo(cta.children, 
        { y: 15, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, 
        '-=0.3'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([headline.children, subhead, cta.children], { opacity: 1, y: 0 });
            gsap.set(bg, { opacity: 1, scale: 1 });
          }
        }
      });

      // ENTRANCE (0-30%): Hold (already visible from load animation)
      // SETTLE (30-70%): Hold
      // EXIT (70-100%): Fade out
      scrollTl.fromTo(headline.children, 
        { y: 0, opacity: 1 }, 
        { y: '-18vh', opacity: 0, ease: 'power2.in', stagger: 0.02 }, 
        0.70
      )
      .fromTo(subhead, 
        { y: 0, opacity: 1 }, 
        { y: '-10vh', opacity: 0, ease: 'power2.in' }, 
        0.72
      )
      .fromTo(cta.children, 
        { y: 0, opacity: 1 }, 
        { y: '-8vh', opacity: 0, ease: 'power2.in', stagger: 0.03 }, 
        0.74
      )
      .fromTo(bg, 
        { scale: 1, opacity: 1 }, 
        { scale: 1.06, opacity: 0.85, ease: 'none' }, 
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-overview');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned z-10"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-[1]"
        style={{ opacity: 0 }}
      >
        <img 
          src="/hero_city_skyline.jpg" 
          alt="City skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 text-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-[8] h-full flex flex-col items-center justify-center px-4">
        {/* Headline */}
        <div 
          ref={headlineRef}
          className="text-center mb-6"
          style={{ width: 'min(78vw, 1100px)' }}
        >
          <h1 className="font-display font-bold text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[-0.02em] text-[#F4F6F9]">
            MEnterprise Firm Inc
          </h1>
          <h1 className="font-display font-bold text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[-0.02em] text-[#F4F6F9] mt-2">
            A holding company
          </h1>
          <h1 className="font-display font-bold text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[-0.02em] text-gold mt-2">
            for the modern stack.
          </h1>
        </div>

        {/* Subheadline */}
        <p 
          ref={subheadRef}
          className="text-center text-[clamp(14px,1.4vw,20px)] leading-relaxed text-[rgba(244,246,249,0.72)] max-w-[720px] mb-10"
          style={{ opacity: 0 }}
        >
          We acquire, build, and operate infrastructure businesses that power compliance, identity, and high-risk commerce.
        </p>

        {/* CTAs */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{ opacity: 0 }}
        >
          <button 
            onClick={scrollToPortfolio}
            className="btn-primary flex items-center gap-2 text-sm font-medium"
          >
            Explore the portfolio
            <ArrowRight className="w-4 h-4" />
          </button>
          <a 
            href="mailto:mike@mefworks.com"
            className="link-underline flex items-center gap-2 text-[rgba(244,246,249,0.72)] text-sm hover:text-[#F4F6F9] transition-colors"
          >
            <Mail className="w-4 h-4" />
            Request an introduction
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[8]">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(244,246,249,0.45)]">
          Scroll
        </span>
      </div>
    </section>
  );
}
