export default function PartnerSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (a: string, b: string, c: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: Record<string, string>) => void }).gtag('event', 'partner_cta_click', { campaign: 'holding_router' });
    }
  };

  return (
    <section
      id="partners"
      className="bg-[#0B0C0E] border-t border-[rgba(244,246,249,0.08)] py-16 md:py-24 px-[5vw] md:px-[8vw]"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-[1400px] mx-auto max-w-2xl">
        <span className="font-mono text-[11px] uppercase tracking-wider text-gold block mb-3">
          Partners & operators
        </span>
        <h2
          id="partners-heading"
          className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-tight text-[#F4F6F9] mb-6"
        >
          ISOs, agencies, infrastructure buyers
        </h2>
        <p className="text-[rgba(244,246,249,0.8)] text-base md:text-lg leading-relaxed mb-8">
          We integrate with your stack. Share your use case and we’ll route you to the right product or a fit call. No runaround.
        </p>
        <button
          type="button"
          onClick={scrollToContact}
          className="btn-primary inline-flex items-center gap-2"
          data-track="partner-cta"
        >
          Request partner pack
        </button>
      </div>
    </section>
  );
}
