const STEPS = [
  {
    step: '01',
    title: 'Build your audience',
    body: 'Use the VideoEV Audience Builder to target by vehicle make and model, MSRP tier, charging behaviour, station type, and location. VIN-confirmed data — no panels, no inferred proxies.',
    detail: 'Access to 248k verified charging profiles',
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Serve across three screens',
    body: 'Creative runs simultaneously on the charging station kiosk (16:9, seen at 2m), the driver\'s mobile app (in-app native), and in-car display tablets — all context-aware.',
    detail: 'Kiosk · Mobile · In-car',
    icon: '📺',
  },
  {
    step: '03',
    title: 'Measure real outcomes',
    body: 'VideoEV\'s attribution engine closes the loop. Track post-charge app installs, web visits, store footfall, and matched purchase signals. All in the data.videoev.com dashboard.',
    detail: 'Real-time reporting dashboard',
    icon: '📊',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label">
            <span className="eyebrow">How It Works</span>
          </div>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
          >
            From brief to attribution in three steps
          </h2>
        </div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 8%, var(--border) 20%, var(--border) 80%, transparent 92%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="relative">
                {/* Step badge */}
                <div className="flex items-start gap-5 lg:flex-col lg:items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--accent)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.step}
                  </div>

                  <div className="lg:mt-6">
                    <div className="text-2xl mb-3 hidden lg:block">{s.icon}</div>
                    <h3 className="font-semibold mb-2" style={{ fontSize: '1.125rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {s.body}
                    </p>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(234,179,8,0.08)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(234,179,8,0.2)',
                      }}
                    >
                      {s.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://data.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ fontSize: '0.875rem' }}
          >
            Explore the advertiser dashboard
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
