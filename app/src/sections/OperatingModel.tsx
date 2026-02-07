import { Target, FileCheck, Wrench } from 'lucide-react';

const STEPS = [
  {
    title: 'Detect',
    body: 'Continuous monitoring and scanning surface risk before it becomes a finding. No surprises at audit time.',
    Icon: Target,
  },
  {
    title: 'Evidence',
    body: 'Every finding is logged with timestamps and artifacts. You get a clear trail for acquirers and auditors.',
    Icon: FileCheck,
  },
  {
    title: 'Remediate',
    body: 'Actionable outputs and integrations so your team can fix issues and prove compliance.',
    Icon: Wrench,
  },
];

export default function OperatingModel() {
  return (
    <section
      id="how-we-operate"
      className="bg-[#0B0C0E] border-t border-[rgba(244,246,249,0.08)] py-16 md:py-24 px-[5vw] md:px-[8vw]"
      aria-labelledby="operating-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-12 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-wider text-gold block mb-3">
            Operating model
          </span>
          <h2
            id="operating-heading"
            className="font-display font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight text-[#F4F6F9] mb-4"
          >
            How the system works
          </h2>
          <p className="text-[rgba(244,246,249,0.72)] text-base md:text-lg max-w-xl leading-relaxed">
            Plain language for technical and non-technical buyers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map(({ title, body, Icon }) => (
            <div key={title} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-sm border border-gold text-gold shrink-0">
                  <Icon className="w-5 h-5" aria-hidden />
                </span>
                <h3 className="font-display font-semibold text-[#F4F6F9] text-xl">
                  {title}
                </h3>
              </div>
              <p className="text-[rgba(244,246,249,0.8)] text-base leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
