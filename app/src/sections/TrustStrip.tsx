export default function TrustStrip() {
  const items = [
    { label: 'Focus', value: 'High-risk commerce & compliance infrastructure' },
    { label: 'Delivery', value: 'Audit-ready artifacts, deterministic workflows' },
    { label: 'Response', value: 'Within 24 business hours' },
  ];

  return (
    <section
      className="bg-[#0B0C0E] border-y border-[rgba(244,246,249,0.08)] py-6 md:py-8"
      aria-label="Operating proof"
    >
      <div className="max-w-[1400px] mx-auto px-[5vw] md:px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          {items.map(({ label, value }) => (
            <div key={label} className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[rgba(244,246,249,0.5)] block">
                {label}
              </span>
              <p className="text-[#F4F6F9] text-base md:text-sm leading-snug max-w-md mx-auto md:mx-0">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
