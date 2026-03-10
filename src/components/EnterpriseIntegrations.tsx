const INTEGRATIONS = [
  {
    name: 'OCPP 2.0.1',
    category: 'Hardware Protocol',
    description: 'EVCCID, SoC, and session duration — direct from the charger. No API middlemen. The EVCCID feeds our Vehicle Identity Graph.',
    tag: 'Hardware Layer',
    accent: true,
  },
  {
    name: 'OpenRTB 2.6',
    category: 'Programmatic Buying',
    description: 'Standard OpenRTB 2.6 bid stream. Any DSP can access our inventory without custom integrations.',
    tag: 'Demand Layer',
    accent: false,
  },
  {
    name: 'VAST 4.2',
    category: 'Video Ad Serving',
    description: 'VAST 4.2 compliant. Drop in any video creative from any ad server. Full measurement support.',
    tag: 'Creative Layer',
    accent: false,
  },
  {
    name: 'Amazon AMC',
    category: 'Attribution',
    description: 'Close the loop: impression to Amazon purchase. The only OOH medium with confirmed retail attribution.',
    tag: 'Attribution Layer',
    accent: true,
  },
  {
    name: 'Vistar Media',
    category: 'DOOH Exchange',
    description: "Listed on Vistar Media's DOOH exchange. Buyers already active on Vistar can reach VMN inventory instantly.",
    tag: 'Demand Layer',
    accent: false,
  },
  {
    name: 'Amazon DSP',
    category: 'Demand Platform',
    description: 'First-party Amazon audience sync. Retarget existing Amazon shoppers by vehicle segment and location.',
    tag: 'Demand Layer',
    accent: false,
  },
];

export default function EnterpriseIntegrations() {
  return (
    <section
      id="tech"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Enterprise Integrations</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            Built on the standards your stack already trusts.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            No proprietary lock-in. Every layer of VideoEV speaks an open
            standard — so your DSP, ad server, and attribution platform plug
            straight in.
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {INTEGRATIONS.map((intg) => (
            <div
              key={intg.name}
              className="card card-hover p-6"
              style={{
                borderColor: intg.accent ? 'rgba(0,66,37,0.4)' : 'var(--border)',
                background: intg.accent ? 'rgba(0,66,37,0.08)' : 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div
                    className="font-bold"
                    style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '2px' }}
                  >
                    {intg.name}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.04em' }}>
                    {intg.category}
                  </div>
                </div>
                <span
                  className="rounded px-2 py-0.5 flex-shrink-0"
                  style={{
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    background: intg.accent ? 'rgba(0,66,37,0.2)' : 'rgba(255,255,255,0.05)',
                    color: intg.accent ? 'var(--accent)' : 'var(--text-3)',
                  }}
                >
                  {intg.tag}
                </span>
              </div>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                {intg.description}
              </p>
            </div>
          ))}
        </div>

        {/* Attribution flow diagram */}
        <div
          className="rounded-2xl px-8 py-7"
          style={{
            background: 'rgba(0,66,37,0.06)',
            border: '1px solid rgba(0,66,37,0.25)',
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <p style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Amazon Marketing Cloud · Closed-Loop Attribution
            </p>
          </div>

          {/* Flow steps */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center">
            {[
              { step: 'EV Session Starts', sub: 'OCPP event fires' },
              { step: 'Ad Impression', sub: 'VAST 4.2 served' },
              { step: 'Audience Matched', sub: 'Amazon 1P data' },
              { step: 'Amazon Purchase', sub: '14-day attribution' },
              { step: 'AMC Report', sub: 'ROAS delivered' },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-2">
                <div className="flex-1 text-center">
                  <div
                    className="rounded-xl px-3 py-2.5 mb-2"
                    style={{
                      background: i === 4 ? 'rgba(0,168,150,0.1)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${i === 4 ? 'rgba(0,168,150,0.2)' : 'var(--border)'}`,
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: i === 4 ? 'var(--accent)' : 'var(--text-1)', lineHeight: 1.3 }}>
                      {item.step}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-3)', marginTop: '3px' }}>{item.sub}</div>
                  </div>
                </div>
                {i < 4 && (
                  <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
