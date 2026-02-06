import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Cpu, Shield, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(eyebrowRef.current, 
        { x: '-6vw', opacity: 0 }, 
        { x: 0, opacity: 1, ease: 'none' }, 
        0
      )
      .fromTo(headlineRef.current, 
        { y: '8vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'none' }, 
        0.05
      )
      .fromTo(bodyRef.current, 
        { y: '6vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'none' }, 
        0.10
      )
      .fromTo(bulletsRef.current?.children || [], 
        { x: '-4vw', opacity: 0 }, 
        { x: 0, opacity: 1, ease: 'none', stagger: 0.02 }, 
        0.14
      )
      .fromTo(ctaRef.current, 
        { scale: 0.96, opacity: 0 }, 
        { scale: 1, opacity: 1, ease: 'none' }, 
        0.18
      )
      .fromTo(cardRef.current, 
        { x: '55vw', opacity: 0, scale: 0.98 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
        0
      )
      .fromTo(captionRef.current, 
        { y: '3vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'none' }, 
        0.20
      );

      // SETTLE (30-70%): Elements hold position

      // EXIT (70-100%)
      scrollTl.fromTo(eyebrowRef.current, 
        { x: 0, opacity: 1 }, 
        { x: '-4vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo(headlineRef.current, 
        { y: 0, opacity: 1 }, 
        { y: '-10vh', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo(bodyRef.current, 
        { y: 0, opacity: 1 }, 
        { y: '-6vh', opacity: 0, ease: 'power2.in' }, 
        0.72
      )
      .fromTo(bulletsRef.current?.children || [], 
        { opacity: 1 }, 
        { opacity: 0, ease: 'power2.in', stagger: 0.01 }, 
        0.74
      )
      .fromTo(ctaRef.current, 
        { y: 0, opacity: 1 }, 
        { y: '-4vh', opacity: 0, ease: 'power2.in' }, 
        0.75
      )
      .fromTo(cardRef.current, 
        { x: 0, opacity: 1 }, 
        { x: '18vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo(captionRef.current, 
        { opacity: 1 }, 
        { opacity: 0, ease: 'power2.in' }, 
        0.78
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToCompanies = () => {
    const firstCompany = document.getElementById('shipmystack');
    if (firstCompany) {
      firstCompany.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="portfolio-overview"
      className="section-pinned z-20 bg-[#0B0C0E]"
    >
      {/* Radial vignette */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(11,12,14,0.4) 100%)'
        }}
      />

      {/* Left text block */}
      <div className="absolute left-[8vw] top-[22vh] w-[40vw] z-[8]">
        <span 
          ref={eyebrowRef}
          className="font-mono text-[12px] uppercase tracking-[0.08em] text-gold mb-4 block"
        >
          Portfolio Overview
        </span>
        
        <h2 
          ref={headlineRef}
          className="font-display font-bold text-[clamp(28px,3.6vw,52px)] leading-[1.05] tracking-[-0.02em] text-[#F4F6F9] mb-6"
        >
          One network.<br />Eight engines.
        </h2>
        
        <p 
          ref={bodyRef}
          className="text-[clamp(13px,1.2vw,17px)] leading-relaxed text-[rgba(244,246,249,0.72)] mb-8 max-w-[480px]"
        >
          From identity and DevOps to compliance scanning and high-risk payments, our companies share a common architecture: autonomous agents, strict audit trails, and infrastructure you can own.
        </p>
        
        <ul ref={bulletsRef} className="space-y-3 mb-8">
          <li className="flex items-center gap-3 text-[rgba(244,246,249,0.85)] text-sm">
            <Cpu className="w-4 h-4 text-gold" />
            Identity & DevOps
          </li>
          <li className="flex items-center gap-3 text-[rgba(244,246,249,0.85)] text-sm">
            <Shield className="w-4 h-4 text-gold" />
            Compliance & Risk Intelligence
          </li>
          <li className="flex items-center gap-3 text-[rgba(244,246,249,0.85)] text-sm">
            <CreditCard className="w-4 h-4 text-gold" />
            Payments & Commerce
          </li>
        </ul>
        
        <button 
          ref={ctaRef}
          onClick={scrollToCompanies}
          className="btn-primary flex items-center gap-2 text-sm"
        >
          Meet the companies
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right floating image card */}
      <div 
        ref={cardRef}
        className="absolute left-[56vw] top-[18vh] w-[36vw] h-[56vh] z-[6] border border-[rgba(244,246,249,0.12)] overflow-hidden"
      >
        <img 
          src="/overview_office_card.jpg" 
          alt="Modern office interior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom micro-caption */}
      <p 
        ref={captionRef}
        className="absolute left-[8vw] bottom-[6vh] z-[8] font-mono text-[11px] text-[rgba(244,246,249,0.45)] max-w-[360px]"
      >
        Subsidiaries operate with independent governance and shared security standards.
      </p>
    </section>
  );
}
