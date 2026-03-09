const STEPS = [
  {
    step: '01',
    title: 'Build your audience',
    body: 'Use the VideoEV Audience Builder to target by vehicle make and model, MSRP tier, charging behaviour, station type, and location. VIN-confirmed data — no panels, no inferred proxies.',
    detail: '248k verified charging profiles',
  },
  {
    step: '02',
    title: 'Serve across three screens',
    body: 'Creative runs simultaneously on the kiosk (16:9, seen at 2m), the driver\'s mobile app (in-app native), and in-car display tablets. Each format is served within the active charging session.',
    detail: 'Kiosk · Mobile · In-car',
  },
  {
    step: '03',
    title: 'Measure real outcomes',
    body: 'Track post-charge app installs, web visits, store footfall, and matched purchase signals — all in the real-time reporting dashboard.',
    detail: 'Real-time attribution',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>How It Works</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
            }}
          >
            From brief to attribution in three steps
          </h2>
        </div>

        <div className="relative">
          {/* Connector — yellow tint, desktop only */}
          <div
            className="hidden lg:block absolute h-px pointer-events-none"
            style={{
              top: '22px',
              left: '8%',
              right: '8%',
              background: 'linear-gradient(90deg, transparent, rgba(0,66,37,0.5) 20%, rgba(0,66,37,0.5) 80%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {STEPS.map((s) => (
              <div key={s.step}>
                {/* Step number — larger, stands alone */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center relative z-10 mb-6"
                  style={{
                    background: 'rgba(0,66,37,0.25)',
                    border: '1px solid rgba(0,66,37,0.5)',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.04em',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.step}
                </div>

                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                    fontWeight: 300,
                  }}
                >
                  {s.body}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: 'var(--accent)', opacity: 0.8 }}
                >
                  <div className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }} />
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
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
