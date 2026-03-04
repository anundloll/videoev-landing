const METRICS = [
  { value: '$2M', label: 'Seed Round', sub: 'Currently raising' },
  { value: '500', label: 'Target nodes', sub: '"High-IQ" screen deployments' },
  { value: '2026', label: 'OCPP standard', sub: 'Timed with industry upgrade cycle' },
  { value: 'AMC', label: 'Attribution layer', sub: 'Impression → Amazon purchase' },
];

export default function InvestmentThesis() {
  return (
    <section
      id="investors"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — thesis copy */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Seed Investment Thesis</p>
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.5rem' }}
            >
              Capturing the Last{' '}
              <span style={{ color: 'var(--accent)' }}>20 Minutes</span>{' '}
              of the consumer journey.
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
              The US charging network is being built now. Most operators are running
              infrastructure at a loss and looking for revenue that doesn't require
              them to hire a sales team. VideoEV adds a media layer — a revenue share
              that costs them nothing and offsets the infrastructure loss.
            </p>
            <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
              VideoEV is raising <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>$2M to deploy our first 500 screen nodes</span> — at EV
              charging locations where session length runs 20–40 minutes and occupancy
              is predictable.
            </p>

            {/* Why now callout */}
            <div
              className="rounded-xl px-5 py-4"
              style={{
                background: 'rgba(0,66,37,0.06)',
                border: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: 'var(--accent)' }}
                />
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: 'var(--accent)' }}>
                    Why now — the OCPP 2.0.1 window
                  </div>
                  <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                    OCPP 2.0.1 is the 2026 standard upgrade cycle for all networked chargers.
                    It unlocks bi-directional vehicle data — SoC, VIN, session length — that
                    prior protocols blocked. We are the first media company built on top of it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — metrics grid */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m) => (
                <div
                  key={m.value}
                  className="rounded-2xl p-6"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="stat-num font-bold glow-text"
                    style={{ fontSize: '2rem', color: 'var(--accent)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.375rem' }}
                  >
                    {m.value}
                  </div>
                  <div className="font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.2rem' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Deck CTA */}
            <div
              className="rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(0,66,37,0.1) 0%, var(--surface) 100%)',
                border: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <div>
                <div className="font-semibold mb-0.5" style={{ fontSize: '0.9375rem' }}>
                  Interested in the round?
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 300 }}>
                  Reach out for the full investor deck and data room access.
                </p>
              </div>
              <a
                href="mailto:investors@videoev.com"
                className="btn-primary flex-shrink-0"
                style={{ fontSize: '0.8125rem', padding: '0.625rem 1.25rem' }}
              >
                Get Deck →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
