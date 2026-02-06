import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Building, User, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const leaderRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Flowing section animations (triggered when entering viewport)
      gsap.fromTo(headlineRef.current, 
        { y: 24, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(bodyRef.current, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: bodyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(contactRef.current?.children || [], 
        { y: 16, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(leaderRef.current, 
        { y: 16, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5,
          scrollTrigger: {
            trigger: leaderRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(formRef.current, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry. We will be in touch shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact"
      className="relative min-h-screen bg-[#F4F6F9] py-[10vh] px-[8vw]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <h2 
              ref={headlineRef}
              className="font-display font-bold text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-[#0B0C0E] mb-6"
            >
              Let's build with discipline.
            </h2>
            
            <p 
              ref={bodyRef}
              className="text-[clamp(14px,1.2vw,18px)] leading-relaxed text-[rgba(11,12,14,0.68)] mb-10 max-w-[480px]"
            >
              If you're exploring partnerships, co-investment, or infrastructure procurement, we'd love to hear from you.
            </p>

            {/* Contact details */}
            <div ref={contactRef} className="space-y-5 mb-10">
              <a 
                href="mailto:mike@mefworks.com"
                className="flex items-center gap-3 text-[#0B0C0E] hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-sm">mike@mefworks.com</span>
              </a>
              
              <div className="flex items-start gap-3 text-[rgba(11,12,14,0.68)]">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  4496 Mahoning Ave #968<br />
                  Youngstown, Ohio 44515
                </span>
              </div>
              
              <div className="flex items-center gap-3 text-[rgba(11,12,14,0.68)]">
                <Building className="w-5 h-5 text-gold" />
                <span className="text-sm">EIN 85-4119379</span>
              </div>
            </div>

            {/* Leadership */}
            <div 
              ref={leaderRef}
              className="border-t border-[rgba(11,12,14,0.12)] pt-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(11,12,14,0.45)] block mb-3">
                Leadership
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B0C0E] flex items-center justify-center">
                  <User className="w-5 h-5 text-[#F4F6F9]" />
                </div>
                <div>
                  <span className="block text-[#0B0C0E] font-medium text-sm">Michael Fluet</span>
                  <span className="block text-[rgba(11,12,14,0.55)] text-xs">CEO / Founder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(11,12,14,0.55)] block mb-2">
                Name
              </label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[rgba(11,12,14,0.12)] text-[#0B0C0E] text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(11,12,14,0.55)] block mb-2">
                Email
              </label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[rgba(11,12,14,0.12)] text-[#0B0C0E] text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(11,12,14,0.55)] block mb-2">
                Company
              </label>
              <input 
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[rgba(11,12,14,0.12)] text-[#0B0C0E] text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="Your company"
              />
            </div>
            
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(11,12,14,0.55)] block mb-2">
                Message
              </label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[rgba(11,12,14,0.12)] text-[#0B0C0E] text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                rows={4}
                placeholder="How can we help?"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-[#0B0C0E] text-[#F4F6F9] font-medium text-sm flex items-center justify-center gap-2 hover:bg-gold hover:text-[#0B0C0E] transition-all duration-200"
            >
              Send inquiry
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[rgba(11,12,14,0.12)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-display font-semibold text-[#0B0C0E]">
              MEnterprise
            </span>
            <span className="text-[rgba(11,12,14,0.45)] text-xs">
              © MEnterprise Firm Inc. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
