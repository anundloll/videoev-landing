export default function Targeting() {
  return (
    <section className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — audience builder mock */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
            >
              {/* Builder header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}
              >
                <span className="font-semibold text-sm">Vehicle Audience Builder</span>
                <span className="eyebrow text-xs">data.videoev.com</span>
              </div>

              <div className="p-5 flex flex-col gap-4">
                {/* Signal groups */}
                {[
                  {
                    label: 'WHO · Vehicle Identity',
                    active: true,
                    chips: ['Tesla Model S', 'BMW iX', 'Porsche Taycan'],
                    badge: 'Session-resolved',
                  },
                  {
                    label: 'WHO · Income Proxy',
                    active: true,
                    chips: ['$80k–$120k MSRP', '$120k+ MSRP'],
                    badge: 'MSRP-derived',
                  },
                  {
                    label: 'WHERE · Station Environment',
                    active: false,
                    chips: ['Luxury retail', 'Airport'],
                    badge: null,
                  },
                ].map((group) => (
                  <div
                    key={group.label}
                    className="rounded-xl p-4"
                    style={{
                      background: group.active ? 'rgba(0,66,37,0.08)' : 'var(--surface-2)',
                      border: `1px solid ${group.active ? 'rgba(0,66,37,0.3)' : 'var(--border)'}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="eyebrow" style={{ fontSize: '0.6rem' }}>{group.label}</span>
                      {group.badge && (
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ background: 'rgba(34,197,94,0.1)', color: '#004225', border: '1px solid rgba(34,197,94,0.2)' }}
                        >
                          {group.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.chips.map((chip) => (
                        <span
                          key={chip}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: group.active ? 'rgba(0,66,37,0.2)' : 'rgba(255,255,255,0.06)',
                            color: group.active ? 'var(--accent)' : 'var(--text-2)',
                            border: `1px solid ${group.active ? 'rgba(0,66,37,0.4)' : 'var(--border)'}`,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Reach estimate */}
                <div
                  className="rounded-xl p-5 flex items-center justify-between"
                  style={{ background: 'rgba(0,66,37,0.1)', border: '1px solid rgba(0,66,37,0.3)' }}
                >
                  <div>
                    <div className="eyebrow" style={{ marginBottom: '0.25rem' }}>Est. Reach</div>
                    <div className="font-bold stat-num" style={{ fontSize: '1.75rem', color: 'var(--accent)' }}>
                      62k–74k
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>unique vehicles / month</div>
                  </div>
                  <div className="text-right">
                    <div className="eyebrow" style={{ marginBottom: '0.25rem' }}>CPM</div>
                    <div className="font-bold stat-num" style={{ fontSize: '1.75rem' }}>$28</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>est. rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Targeting</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
                marginBottom: '1.25rem',
              }}
            >
              Hardware-derived vehicle identity. Deterministic, not modeled.
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, marginBottom: '2rem', fontWeight: 300 }}>
              VideoEV&apos;s Audience Builder resolves OCPP session identifiers to vehicle profiles —
              Make, Model, MSRP proxy — through our Vehicle Identity Graph. The signal comes
              from the charging hardware, not a panel or a survey.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  title: 'Two signal layers',
                  body: 'WHO signals (session-resolved vehicle identity, MSRP-derived income, charging behaviour) combined with WHERE signals (screen type, network, station environment).',
                },
                {
                  title: 'Live reach & CPM estimates',
                  body: 'As you build your audience, the estimator updates reach and CPM in real-time. No RFP surprises.',
                },
                {
                  title: 'Saved audience templates',
                  body: 'Pre-built audiences: Luxury EV Drivers, High-Frequency Chargers, Suburban Homeowners, Early Adopters.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="w-1.5 flex-shrink-0 rounded-full mt-1"
                    style={{ background: 'var(--accent)', height: '20px' }}
                  />
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: '0.9375rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://data.videoev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              Try the live dashboard
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
