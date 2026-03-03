const STANDARDS = [
  {
    standard: 'OpenRTB 2.6',
    badge: 'Pod Bidding',
    desc: 'Full support for Pod Bidding — enabling multiple advertisers to compete for individual ad slots within a single 20-minute charging session. Essential for programmatic DOOH buyers.',
    detail: 'Multiple buyers per session · Slot-level targeting',
  },
  {
    standard: 'VAST 4.2',
    badge: 'Video',
    desc: 'Industry-standard video ad serving across all three surfaces. Supports interactive overlays, verification tags, and viewability measurement natively.',
    detail: 'VPAID compatible · 3rd-party verification ready',
  },
];

const DSPS = [
  {
    name: 'Amazon DSP',
    tier: 'Primary',
    note: 'Direct integration — enables AMC attribution for purchase measurement',
    accent: '#FF9900',
  },
  {
    name: 'Vistar Media',
    tier: 'DOOH specialist',
    note: 'Native DOOH demand-side platform with location intelligence',
    accent: '#6366F1',
  },
  {
    name: 'The Trade Desk',
    tier: 'Premium programmatic',
    note: 'OpenRTB 2.6 via TTD\'s DOOH inventory extension',
    accent: '#3B82F6',
  },
];

export default function TechSpecs() {
  return (
    <section
      className="py-24"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Technology Standards</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            Built to spec. Ready for agencies.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            VideoEV supports 2026 programmatic standards — so your trading desk, agency
            team, or DSP can activate a campaign without custom integration work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Standards */}
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: '1rem', color: 'var(--text-3)' }}
            >
              Protocol Support
            </p>
            <div className="flex flex-col gap-4">
              {STANDARDS.map((s) => (
                <div
                  key={s.standard}
                  className="rounded-2xl p-6"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span
                      className="font-bold"
                      style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
                    >
                      {s.standard}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: 'rgba(234,179,8,0.1)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(234,179,8,0.2)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '0.875rem' }}>
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-3)',
                      fontFamily: 'monospace',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DSPs */}
          <div>
            <p
              className="eyebrow"
              style={{ marginBottom: '1rem', color: 'var(--text-3)' }}
            >
              DSP Compatibility
            </p>
            <div className="flex flex-col gap-4">
              {DSPS.map((d) => (
                <div
                  key={d.name}
                  className="rounded-2xl p-6 flex items-start gap-4"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  {/* Color accent indicator */}
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
                    style={{ background: d.accent }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold" style={{ fontSize: '1rem' }}>{d.name}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-3)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {d.tier}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
                      {d.note}
                    </p>
                  </div>
                </div>
              ))}

              {/* More on request */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--border)' }}
              >
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
                  Additional DSP integrations available on request.
                  Direct IO also supported.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: 'rgba(234,179,8,0.04)', border: '1px solid rgba(234,179,8,0.15)' }}
        >
          <div>
            <div className="font-semibold mb-1" style={{ fontSize: '0.9375rem' }}>
              Need a custom integration?
            </div>
            <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', fontWeight: 300 }}>
              Our tech team can onboard non-standard DSP setups within 5 business days.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-2)', fontWeight: 500, whiteSpace: 'nowrap' }}>
              Spec sheet available on request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
