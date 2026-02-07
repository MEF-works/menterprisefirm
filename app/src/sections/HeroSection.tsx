import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const proof = proofRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !subhead || !cta || !bg) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .fromTo(headline.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, '-=0.4')
        .fromTo(subhead, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo(cta.children, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.3');
      if (proof) tl.fromTo(proof, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set([headline.children, subhead, cta.children], { opacity: 1, y: 0 });
            if (proof) gsap.set(proof, { opacity: 1, y: 0 });
            gsap.set(bg, { opacity: 1, scale: 1 });
          },
        },
      });

      scrollTl
        .fromTo(headline.children, { y: 0, opacity: 1 }, { y: '-18vh', opacity: 0, ease: 'power2.in', stagger: 0.02 }, 0.70)
        .fromTo(subhead, { y: 0, opacity: 1 }, { y: '-10vh', opacity: 0, ease: 'power2.in' }, 0.72)
        .fromTo(cta.children, { y: 0, opacity: 1 }, { y: '-8vh', opacity: 0, ease: 'power2.in', stagger: 0.03 }, 0.74)
        .fromTo(bg, { scale: 1, opacity: 1 }, { scale: 1.06, opacity: 0.85, ease: 'none' }, 0.70);
      if (proof) scrollTl.fromTo(proof, { y: 0, opacity: 1 }, { y: '-4vh', opacity: 0, ease: 'power2.in' }, 0.73);
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (a: string, b: string, c: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: Record<string, string>) => void }).gtag('event', 'hero_cta_click', { campaign: 'holding_router' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="section-pinned z-10" aria-labelledby="hero-heading">
      <div ref={bgRef} className="absolute inset-0 z-[1]" style={{ opacity: 0 }}>
        <img
          src="/hero_city_skyline.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 text-overlay-gradient" aria-hidden />
      </div>

      <div className="relative z-[8] h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <div ref={headlineRef} className="text-center mb-6" style={{ width: 'min(90vw, 1100px)' }}>
          <h1 id="hero-heading" className="font-display font-bold text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[-0.02em] text-[#F4F6F9]">
            Compliance infrastructure for high-risk commerce.
          </h1>
          <p className="font-display font-semibold text-[clamp(18px,2.5vw,28px)] leading-tight tracking-tight text-gold mt-4">
            One network. Identity, risk scanning, payments.
          </p>
        </div>

        <p
          ref={subheadRef}
          className="text-center text-base sm:text-lg text-[rgba(244,246,249,0.85)] max-w-[640px] mb-8 sm:mb-10 leading-relaxed"
          style={{ opacity: 0 }}
        >
          MEnterprise operates the Sovereign Stack ecosystem. We acquire, build, and run infrastructure that keeps merchants and partners audit-ready.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4" style={{ opacity: 0 }}>
          <button
            type="button"
            onClick={scrollToContact}
            className="btn-primary flex items-center gap-2 text-sm font-medium min-h-[48px] px-6"
            data-track="hero-primary-cta"
          >
            Request partner pack
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
          </button>
          <button
            type="button"
            onClick={scrollToPortfolio}
            className="btn-secondary flex items-center gap-2 text-sm font-medium min-h-[48px]"
            data-track="hero-secondary-cta"
          >
            View portfolio
          </button>
        </div>

        <p
          ref={proofRef}
          className="mt-6 font-mono text-[11px] uppercase tracking-wider text-[rgba(244,246,249,0.5)] text-center"
          style={{ opacity: 0 }}
        >
          Response within 24 business hours
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[8]" aria-hidden>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[rgba(244,246,249,0.45)]">
          Scroll
        </span>
      </div>
    </section>
  );
}
