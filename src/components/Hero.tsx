export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: '6rem',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(234,179,8,0.12) 0%, transparent 65%)',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(234,179,8,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <div className="section-label inline-flex fade-up fade-up-1">
          <span className="eyebrow">EV Charging Ad Network</span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up fade-up-2 font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '14ch',
            margin: '0 auto 1.5rem',
          }}
        >
          The premium video channel{' '}
          <span className="accent-text">inside every charge</span>
        </h1>

        {/* Sub */}
        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-2)',
            maxWidth: '52ch',
            margin: '0 auto 2.5rem',
            lineHeight: 1.65,
          }}
        >
          VideoEV places your brand in front of 248,000 high-income EV drivers
          every month — during their 30-minute charging session — across kiosk,
          mobile, and in-car screens.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#advertisers" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
            Request Media Kit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#partners" className="btn-ghost" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
            Partner with Us
          </a>
        </div>

        {/* Mini trust line */}
        <p
          className="fade-up fade-up-4"
          style={{
            marginTop: '1.75rem',
            fontSize: '0.8125rem',
            color: 'var(--text-3)',
          }}
        >
          Trusted by EV networks across the US ·{' '}
          <a
            href="https://demo.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: 'var(--text-3)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            See live demo →
          </a>
        </p>

        {/* Hero visual — mock kiosk frame */}
        <div
          className="relative mx-auto fade-up"
          style={{
            marginTop: '5rem',
            maxWidth: '860px',
            animationDelay: '0.5s',
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(234,179,8,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'translateY(20px)',
            }}
          />

          {/* Screen frame */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: 'var(--surface-2)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              </div>
              <div
                className="flex-1 rounded"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  height: '22px',
                  maxWidth: '320px',
                  margin: '0 auto',
                }}
              />
            </div>

            {/* Mock dashboard content */}
            <div
              className="aspect-video relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0a0a12 0%, #0f1520 50%, #0a0a0a 100%)',
              }}
            >
              {/* Charging station illustration — abstract */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full max-w-2xl px-8">
                  {/* Left panel — kiosk */}
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #111827 0%, #14532d 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      aspectRatio: '9/16',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '12px',
                      gap: '8px',
                    }}
                  >
                    <div className="text-xs font-semibold" style={{ color: 'var(--accent)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>KIOSK</div>
                    <div className="flex-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <div className="rounded" style={{ background: 'var(--accent)', height: '24px', opacity: 0.9 }} />
                    <div className="rounded" style={{ background: 'rgba(255,255,255,0.08)', height: '8px', width: '70%' }} />
                    <div className="rounded" style={{ background: 'rgba(255,255,255,0.04)', height: '8px', width: '50%' }} />
                  </div>

                  {/* Center panel — charging animation */}
                  <div
                    className="rounded-xl flex flex-col items-center justify-center gap-3"
                    style={{
                      background: 'rgba(234,179,8,0.06)',
                      border: '1px solid rgba(234,179,8,0.2)',
                    }}
                  >
                    <div
                      className="text-4xl font-bold stat-num"
                      style={{ color: 'var(--accent)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                    >
                      ⚡
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Charging
                    </div>
                    <div
                      className="w-full rounded-full overflow-hidden"
                      style={{ height: '4px', background: 'rgba(255,255,255,0.1)', margin: '0 16px', width: 'calc(100% - 32px)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: '62%', background: 'var(--accent)' }}
                      />
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-3)' }}>62% — 18 min remaining</div>
                  </div>

                  {/* Right panel — mobile */}
                  <div
                    className="rounded-xl overflow-hidden mx-auto"
                    style={{
                      background: '#111827',
                      border: '1px solid rgba(255,255,255,0.08)',
                      aspectRatio: '9/16',
                      width: '70%',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '10px',
                      gap: '8px',
                    }}
                  >
                    <div className="rounded-full mx-auto" style={{ width: '40px', height: '6px', background: 'rgba(255,255,255,0.1)' }} />
                    <div className="rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', height: '80px' }} />
                    <div style={{ fontSize: '0.5rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>MOBILE</div>
                    <div className="rounded" style={{ background: 'rgba(255,255,255,0.08)', height: '8px', width: '80%' }} />
                    <div className="rounded" style={{ background: 'rgba(255,255,255,0.04)', height: '8px', width: '60%' }} />
                    <div className="flex-1" />
                    <div className="rounded" style={{ background: 'var(--accent)', height: '20px', opacity: 0.8 }} />
                  </div>
                </div>

                {/* Floating label */}
                <div
                  className="absolute bottom-4 right-4 rounded-lg px-3 py-2"
                  style={{
                    background: 'rgba(234,179,8,0.1)',
                    border: '1px solid rgba(234,179,8,0.25)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                  }}
                >
                  <span style={{ opacity: 0.7 }}>Avg session · </span>30 min captive audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
