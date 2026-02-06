import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SubsidiaryProps {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  founded: string;
  website: string;
  feature: string;
  microLabel: string;
  backgroundImage: string;
  zIndex: number;
  logo?: string;
}

export default function SubsidiaryShowcase({
  id,
  name,
  subtitle,
  description,
  founded,
  website,
  feature,
  microLabel,
  backgroundImage,
  zIndex,
  logo
}: SubsidiaryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

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
      scrollTl.fromTo(bgRef.current, 
        { scale: 1.08, opacity: 0.8 }, 
        { scale: 1, opacity: 1, ease: 'none' }, 
        0
      )
      .fromTo(headlineRef.current, 
        { x: '-60vw', opacity: 0 }, 
        { x: 0, opacity: 1, ease: 'none' }, 
        0
      )
      .fromTo(cardRef.current, 
        { x: '60vw', opacity: 0, scale: 0.97 }, 
        { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
        0.05
      )
      .fromTo(labelRef.current, 
        { y: '4vh', opacity: 0 }, 
        { y: 0, opacity: 1, ease: 'none' }, 
        0.10
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(bgRef.current, 
        { scale: 1, opacity: 1 }, 
        { scale: 1.05, opacity: 0.85, ease: 'none' }, 
        0.70
      )
      .fromTo(headlineRef.current, 
        { x: 0, opacity: 1 }, 
        { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo(cardRef.current, 
        { x: 0, opacity: 1 }, 
        { x: '18vw', opacity: 0, ease: 'power2.in' }, 
        0.70
      )
      .fromTo(labelRef.current, 
        { opacity: 1 }, 
        { opacity: 0, ease: 'power2.in' }, 
        0.75
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id}
      className="section-pinned"
      style={{ zIndex }}
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-[1]"
      >
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 text-overlay-gradient" />
      </div>

      {/* Left headline block */}
      <div 
        ref={headlineRef}
        className="absolute left-[7vw] top-[18vh] w-[46vw] z-[8]"
      >
        {/* Logo positioned to overlap company name - half above, half behind */}
        {logo && (
          <div 
            className="relative mb-0"
            style={{ 
              marginBottom: '-1.5rem',
              zIndex: 1 
            }}
          >
            <img 
              src={logo} 
              alt={`${name} logo`}
              className="w-auto object-contain"
              style={{ 
                height: 'clamp(60px, 6vw, 90px)',
                opacity: 0.8,
                filter: logo.includes('reup') ? 'invert(1) brightness(1.2)' : 'brightness(1.2)',
                maxWidth: '280px'
              }}
            />
          </div>
        )}
        
        {/* Company name - positioned behind logo */}
        <h2 
          className="font-display font-bold text-[clamp(36px,4.5vw,64px)] leading-[1.0] tracking-[-0.02em] text-[#F4F6F9] mb-3 relative"
          style={{ zIndex: 0 }}
        >
          {name}
        </h2>
        
        <h3 className="font-display font-semibold text-[clamp(16px,1.8vw,24px)] text-gold mb-6">
          {subtitle}
        </h3>
        <p className="text-[clamp(13px,1.2vw,17px)] leading-relaxed text-[rgba(244,246,249,0.72)] max-w-[440px]">
          {description}
        </p>
      </div>

      {/* Right info card */}
      <div 
        ref={cardRef}
        className="absolute left-[62vw] top-[22vh] w-[30vw] z-[8] border border-[rgba(244,246,249,0.12)] bg-[rgba(11,12,14,0.6)] backdrop-blur-sm p-6"
      >
        <div className="space-y-4 mb-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(244,246,249,0.45)] block mb-1">
              Founded
            </span>
            <span className="text-[#F4F6F9] text-sm">{founded}</span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(244,246,249,0.45)] block mb-1">
              Website
            </span>
            <span className="text-[#F4F6F9] text-sm">{website}</span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(244,246,249,0.45)] block mb-1">
              Key Feature
            </span>
            <span className="text-[#F4F6F9] text-sm">{feature}</span>
          </div>
        </div>
        
        <a 
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-2 text-gold text-sm"
        >
          Visit site
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Bottom-left micro-label */}
      <span 
        ref={labelRef}
        className="absolute left-[7vw] bottom-[7vh] z-[8] font-mono text-[11px] text-[rgba(244,246,249,0.45)]"
      >
        {microLabel}
      </span>
    </section>
  );
}
