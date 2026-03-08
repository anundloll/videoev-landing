const VEHICLES = [
  { make: 'Tesla', tier: 'Premium', msrp: '$43k–$110k', profile: 'Tech early adopter · High income', dot: '#e31937' },
  { make: 'Porsche', tier: 'Ultra-luxury', msrp: '$80k–$330k', profile: 'Performance buyer · Net worth $3M+', dot: '#c4122f' },
  { make: 'BMW', tier: 'Premium', msrp: '$50k–$120k', profile: 'Executive · Dual income household', dot: '#0066b2' },
  { make: 'Rivian', tier: 'Adventure', msrp: '$70k–$100k', profile: 'Outdoor · Active lifestyle · High HHI', dot: '#00a651' },
  { make: 'Lucid', tier: 'Ultra-luxury', msrp: '$70k–$250k', profile: 'Ultra HNW · Luxury goods buyer', dot: '#8b1a34' },
  { make: 'Volvo', tier: 'Aspirational', msrp: '$55k–$80k', profile: 'Safety-conscious · Family income $150k+', dot: '#1c3991' },
];

const SIGNALS = [
  { label: 'VIN-confirmed vehicle identity', icon: '🔑', desc: 'Make, model, year — not self-reported' },
  { label: 'MSRP-derived income proxy', icon: '💰', desc: 'No credit data — inferred from purchase price' },
  { label: 'Live charging telemetry', icon: '⚡', desc: 'Session frequency, station type, duration' },
  { label: 'Station environment', icon: '📍', desc: 'Airport, hotel, retail, residential' },
  { label: 'Household modelling', icon: '🏠', desc: 'Family size, property signals' },
];

export default function Audience() {
  return (
    <section
      id="audience"
      className="py-24"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The Audience</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
                marginBottom: '1.25rem',
              }}
            >
              They spent $65k to get here. They're not going anywhere for 30 minutes.
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, marginBottom: '2rem', fontWeight: 300 }}>
              The average EV driver has a household income above $150k and just
              made a $65k purchase decision. The vehicle is the qualification
              signal. The charging session is the window.
            </p>

            {/* Audience signals — minimal, no emoji icons */}
            <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
              {SIGNALS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between py-3.5"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <div className="font-medium" style={{ fontSize: '0.875rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textAlign: 'right', maxWidth: '18ch' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vehicle grid */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--surface-2)' }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span className="eyebrow">Vehicle audience snapshot</span>
                <span className="text-xs" style={{ color: 'var(--text-3)' }}>248,000 monthly vehicles</span>
              </div>

              {/* Vehicle rows */}
              <div className="divide-y" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
                {VEHICLES.map((v) => (
                  <div key={v.make} className="px-5 py-4 flex items-center gap-4">
                    {/* Color dot */}
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: v.dot }} />

                    {/* Make */}
                    <div className="font-semibold w-20 flex-shrink-0" style={{ fontSize: '0.9375rem' }}>{v.make}</div>

                    {/* Tier badge */}
                    <div
                      className="text-xs px-2 py-0.5 rounded flex-shrink-0"
                      style={{
                        background: 'rgba(0,168,150,0.08)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(0,168,150,0.15)',
                      }}
                    >
                      {v.tier}
                    </div>

                    {/* Profile */}
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-3)', flex: 1 }}>{v.profile}</div>

                    {/* MSRP */}
                    <div className="stat-num text-xs flex-shrink-0" style={{ color: 'var(--text-2)' }}>{v.msrp}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--border)', background: 'rgba(0,66,37,0.04)' }}
              >
                <span style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>
                  + 44 more vehicle makes tracked
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  VIN-confirmed ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
