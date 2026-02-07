import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { SUBSIDIARIES, PORTFOLIO_FEATURED_COUNT } from '../lib/subsidiaries';
import { portfolioUrl } from '../lib/copy';
import type { Subsidiary } from '../lib/subsidiaries';

function PortfolioCard({
  sub,
  trackClick,
}: {
  sub: Subsidiary;
  trackClick: () => void;
}) {
  const href = portfolioUrl(sub.website);
  return (
    <article
      className="group bg-[rgba(11,12,14,0.6)] border border-[rgba(244,246,249,0.12)] rounded-sm p-6 flex flex-col h-full transition-colors duration-200 hover:border-[rgba(201,164,92,0.4)]"
      id={sub.id}
    >
      <div className="flex items-start gap-4 mb-4">
        {sub.logo && (
          <img
            src={sub.logo}
            alt=""
            className="w-12 h-12 object-contain shrink-0 opacity-90"
            loading="lazy"
            width={48}
            height={48}
          />
        )}
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-[#F4F6F9] text-lg leading-tight">
            {sub.name}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
            {sub.category}
          </span>
        </div>
      </div>
      <p className="text-[rgba(244,246,249,0.9)] text-sm leading-relaxed mb-2">
        {sub.outcome}
      </p>
      <p className="text-[rgba(244,246,249,0.6)] text-xs leading-relaxed mb-4 flex-1">
        {sub.keyCapability}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackClick}
        className="link-underline inline-flex items-center gap-2 text-gold text-sm font-medium w-fit"
        data-track="portfolio-card-cta"
        data-company={sub.id}
      >
        Visit site
        <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
      </a>
    </article>
  );
}

export default function PortfolioRouter() {
  const [showAll, setShowAll] = useState(false);
  const featured = SUBSIDIARIES.slice(0, PORTFOLIO_FEATURED_COUNT);
  const rest = SUBSIDIARIES.slice(PORTFOLIO_FEATURED_COUNT);
  const displayList = showAll ? SUBSIDIARIES : featured;

  const handleCardCta = () => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (a: string, b: string, c: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: Record<string, string>) => void }).gtag('event', 'portfolio_click', { campaign: 'holding_router' });
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-[#0B0C0E] py-16 md:py-24 px-[5vw] md:px-[8vw]"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-10 md:mb-14">
          <span className="font-mono text-[11px] uppercase tracking-wider text-gold block mb-3">
            Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-[#F4F6F9] mb-4"
          >
            One network. Seven engines.
          </h2>
          <p className="text-[rgba(244,246,249,0.72)] text-base md:text-lg max-w-xl leading-relaxed">
            Identity, compliance scanning, and high-risk payments. Each company ships a clear outcome.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayList.map((sub) => (
            <PortfolioCard key={sub.id} sub={sub} trackClick={handleCardCta} />
          ))}
        </div>

        {!showAll && rest.length > 0 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="btn-secondary inline-flex items-center gap-2"
              data-track="view-full-portfolio"
            >
              View full portfolio
              <ChevronDown className="w-4 h-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
