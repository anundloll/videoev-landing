const DAYPARTS = [
  { window: 'Weekday 6–9am', dwell: '18 min', context: 'Peak commute', index: '+42%', positive: true },
  { window: 'Weekday 11am–2pm', dwell: '34 min', context: 'Shoulder', index: '+8%', positive: true },
  { window: 'Weekend 10am–4pm', dwell: '52 min', context: 'Road trip', index: '+61%', positive: true },
  { window: 'Overnight 1–5am', dwell: '8 min', context: 'Off-peak', index: '−38%', positive: false },
];

const YIELD_BARS = [
  { label: 'Peak — commute hours', pct: 88, value: '$4.80 / session' },
  { label: 'Shoulder — midday', pct: 55, value: '$2.90 / session' },
  { label: 'Off-peak — overnight', pct: 22, value: '$1.10 / session' },
];

export default function Dayparting() {
  return (
    <section
      id="dayparting"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="" style={{ marginBottom: '3rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Inventory Intelligence</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Not all charging sessions are worth the same CPM.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            A Thursday morning commute at a luxury retail station is a different buy than a Saturday
            afternoon highway pull-in. The session context is right there in the OCPP stream.
            We surface it — so buyers bid on it, and CPOs yield on it.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT — Media Buyer: Dayparting */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>For media buyers</p>
            <h3
              className="font-bold"
              style={{ fontSize: '1.375rem', letterSpacing: '-0.015em', marginBottom: '1rem' }}
            >
              Dayparting at the charger
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 300, marginBottom: '1.75rem' }}>
              Weekday 6–9am is urban professionals, short sessions, high frequency. Saturday afternoon is
              50-minute highway sessions — road-trip mode. Same network. Different buy. Bid accordingly.
            </p>

            {/* Daypart table */}
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <div
                className="grid px-4 py-2.5"
                style={{
                  gridTemplateColumns: '2fr 1fr 1.25fr 1fr',
                  background: 'var(--surface-2)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {['Window', 'Dwell', 'Context', 'Index'].map((h) => (
                  <span key={h} className="eyebrow" style={{ fontSize: '0.55rem' }}>{h}</span>
                ))}
              </div>
              {DAYPARTS.map((row, i) => (
                <div
                  key={row.window}
                  className="grid px-4 py-3 items-center"
                  style={{
                    gridTemplateColumns: '2fr 1fr 1.25fr 1fr',
                    borderBottom: i < DAYPARTS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-2)' }}>{row.window}</span>
                  <span className="stat-num" style={{ fontSize: '0.8125rem' }}>{row.dwell}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{row.context}</span>
                  <span
                    className="stat-num font-semibold"
                    style={{ fontSize: '0.8125rem', color: row.positive ? 'var(--accent)' : 'var(--text-3)' }}
                  >
                    {row.index}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CPO: Dynamic Yield */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>For CPOs</p>
            <h3
              className="font-bold"
              style={{ fontSize: '1.375rem', letterSpacing: '-0.015em', marginBottom: '1rem' }}
            >
              Dynamic Yield on every session
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 300, marginBottom: '1.75rem' }}>
              Your 8am rush earns more than your 2am lull — and it should. Price floors and ceilings
              shift with demand in real time. Off-peak inventory still clears. Peak sessions
              command the premium they deserve. No stall sits idle.
            </p>

            {/* Yield bars */}
            <div className="flex flex-col gap-5">
              {YIELD_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-2)' }}>{bar.label}</span>
                    <span className="stat-num font-semibold" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>
                      {bar.value}
                    </span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: '4px', background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${bar.pct}%`, background: 'var(--accent-green)' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Blended yield callout */}
            <div
              className="rounded-xl p-4"
              style={{ marginTop: '1.75rem', background: 'rgba(0,66,37,0.08)', border: '1px solid rgba(0,66,37,0.2)' }}
            >
              <p className="eyebrow" style={{ marginBottom: '0.375rem' }}>Blended across all dayparts</p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.6 }}>
                CPOs on VideoEV average{' '}
                <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>$3.20 per charging session</span>
                {' '}— vs. $0 from screens with no media partnership.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
