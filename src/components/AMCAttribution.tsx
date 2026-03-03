export default function AMCAttribution() {
  const STEPS = [
    {
      n: '01',
      title: 'Impression served',
      desc: 'Driver sees your ad on the VideoEV kiosk during a charging session. Timestamp and VIN logged.',
    },
    {
      n: '02',
      title: 'Signal matched',
      desc: 'VideoEV correlates the charger impression with the driver\'s Amazon customer ID via AMC clean-room matching.',
    },
    {
      n: '03',
      title: 'Purchase verified',
      desc: 'Amazon Marketing Cloud confirms whether a purchase occurred on Amazon within the attribution window.',
    },
    {
      n: '04',
      title: 'ROI reported',
      desc: 'Your dashboard shows verified screen-to-sale conversions — not modeled reach, actual purchases.',
    },
  ];

  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Label + headline */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Closed-Loop Attribution</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            From screen impression to verified Amazon purchase
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Most DOOH networks sell reach. VideoEV sells proof. Using Amazon Marketing Cloud,
            we match a charger-side impression to an actual purchase event — turning
            brand awareness into a measurable sales outcome.
          </p>
        </div>

        {/* AMC flow card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(212,175,55,0.2)',
            background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, var(--surface) 50%)',
          }}
        >
          {/* Header bar */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(212,175,55,0.15)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z"
                    fill="var(--accent)" />
                </svg>
              </div>
              <span className="font-semibold" style={{ fontSize: '0.9375rem' }}>Amazon Marketing Cloud Integration</span>
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: 'rgba(34,197,94,0.1)', color: '#004225', border: '1px solid rgba(34,197,94,0.2)' }}
            >
              Active
            </span>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="p-6 relative"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Connector arrow */}
                {i < 3 && (
                  <div
                    className="hidden md:flex absolute items-center justify-center"
                    style={{ top: '24px', right: '-8px', zIndex: 10 }}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                        <path d="M1 3.5h5M3.5 1.5l2 2-2 2" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}

                <div
                  className="stat-num font-bold mb-4"
                  style={{ fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.06em', opacity: 0.7 }}
                >
                  {s.n}
                </div>
                <h4 className="font-semibold mb-2" style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom bar — proof line */}
          <div
            className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(212,175,55,0.03)' }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
              Clean-room matching via AMC — no PII shared. Attribution window configurable per campaign.
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                Compatible: Amazon DSP
              </span>
            </div>
          </div>
        </div>

        {/* Supporting stat row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          {[
            { value: 'Screen → Sale', label: 'Full attribution chain', sub: 'Not modelled reach' },
            { value: 'AMC', label: 'Clean-room matching', sub: 'Zero PII exposure' },
            { value: '30-day', label: 'Attribution window', sub: 'Configurable per campaign' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-4"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div className="font-bold stat-num mb-1" style={{ fontSize: '1.125rem', color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.2rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
