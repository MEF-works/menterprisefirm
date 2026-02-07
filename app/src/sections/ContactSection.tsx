import { useRef, useState } from 'react';
import { Mail, MapPin, Building, User, Send } from 'lucide-react';
import { FOOTER_LEGAL, CONTACT_COPY } from '../lib/copy';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (a: string, b: string, c: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (a: string, b: string, c: Record<string, string>) => void }).gtag('event', 'contact_submit', { campaign: 'holding_router' });
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-[#F4F6F9] py-16 md:py-24 px-[5vw] md:px-[8vw]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-[#0B0C0E] mb-4"
            >
              {CONTACT_COPY.headline}
            </h2>
            <p className="text-base md:text-lg text-[rgba(11,12,14,0.72)] mb-8 max-w-[480px] leading-relaxed">
              {CONTACT_COPY.subhead}
            </p>

            <div className="space-y-5 mb-8">
              <a
                href="mailto:mike@mefworks.com"
                className="flex items-center gap-3 text-[#0B0C0E] hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                <Mail className="w-5 h-5 text-gold shrink-0" aria-hidden />
                <span className="text-base">mike@mefworks.com</span>
              </a>
              <div className="flex items-start gap-3 text-[rgba(11,12,14,0.72)]">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden />
                <span className="text-base">
                  4496 Mahoning Ave #968<br />
                  Youngstown, Ohio 44515
                </span>
              </div>
              <div className="flex items-center gap-3 text-[rgba(11,12,14,0.72)]">
                <Building className="w-5 h-5 text-gold shrink-0" aria-hidden />
                <span className="text-base">EIN 85-4119379</span>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-[rgba(11,12,14,0.5)] mb-4">
              {CONTACT_COPY.responseNote}
            </p>

            <div className="border-t border-[rgba(11,12,14,0.12)] pt-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[rgba(11,12,14,0.5)] block mb-3">
                Leadership
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B0C0E] flex items-center justify-center" aria-hidden>
                  <User className="w-5 h-5 text-[#F4F6F9]" />
                </div>
                <div>
                  <span className="block text-[#0B0C0E] font-medium text-base">Michael Fluet</span>
                  <span className="block text-[rgba(11,12,14,0.55)] text-sm">CEO / Founder</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 border border-[rgba(11,12,14,0.12)] bg-white rounded-sm">
                <p className="text-[#0B0C0E] font-medium mb-2">Inquiry sent.</p>
                <p className="text-[rgba(11,12,14,0.72)] text-base">
                  We’ll respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" aria-labelledby="contact-heading">
                <div>
                  <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-wider text-[rgba(11,12,14,0.55)] block mb-2">
                    {CONTACT_COPY.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-base w-full"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono text-[11px] uppercase tracking-wider text-[rgba(11,12,14,0.55)] block mb-2">
                    {CONTACT_COPY.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-base w-full"
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="font-mono text-[11px] uppercase tracking-wider text-[rgba(11,12,14,0.55)] block mb-2">
                    {CONTACT_COPY.companyLabel}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input-base w-full"
                    placeholder="Your company"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-wider text-[rgba(11,12,14,0.55)] block mb-2">
                    {CONTACT_COPY.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-base w-full resize-none min-h-[120px]"
                    rows={4}
                    placeholder={CONTACT_COPY.messagePlaceholder}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full min-h-[48px] flex items-center justify-center gap-2" data-track="contact-submit">
                  {CONTACT_COPY.submitLabel}
                  <Send className="w-4 h-4 shrink-0" aria-hidden />
                </button>
              </form>
            )}
          </div>
        </div>

        <footer className="mt-16 md:mt-20 pt-8 border-t border-[rgba(11,12,14,0.12)]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="font-display font-semibold text-[#0B0C0E]">MEnterprise</span>
            <p className="text-[rgba(11,12,14,0.55)] text-xs max-w-xl leading-relaxed">
              {FOOTER_LEGAL}
            </p>
            <span className="text-[rgba(11,12,14,0.45)] text-xs shrink-0">
              © MEnterprise Firm Inc. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
