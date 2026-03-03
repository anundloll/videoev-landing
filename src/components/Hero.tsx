export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: '7rem',
        paddingBottom: '0',
        background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(234,179,8,0.13) 0%, transparent 60%)',
      }}
    >
      {/* Background grid — tighter, more intentional */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 fade-up fade-up-1"
          style={{ marginBottom: '1.75rem' }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
          <span className="eyebrow">EV Charging Ad Network</span>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Headline */}
        <h1
          className="fade-up fade-up-2 font-bold"
          style={{
            fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            maxWidth: '13ch',
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
            fontSize: 'clamp(1rem, 1.75vw, 1.1875rem)',
            color: 'var(--text-2)',
            fontWeight: 300,
            maxWidth: '50ch',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          VideoEV places your brand in front of 248,000 high-income EV drivers
          every month — during their 30-minute charging session — across kiosk,
          mobile, and in-car screens.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#advertisers" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
            Request Media Kit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#partners" className="btn-ghost" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
            Partner with Us
          </a>
        </div>

        {/* Trust line */}
        <p
          className="fade-up fade-up-4"
          style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-3)' }}
        >
          Expanding across the US ·{' '}
          <a
            href="https://demo.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-3)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            className="hover:text-white transition-colors"
          >
            See live demo →
          </a>
        </p>

        {/* Hero illustration — three surfaces, no browser chrome */}
        <div
          className="relative mx-auto fade-up"
          style={{
            marginTop: '4.5rem',
            maxWidth: '860px',
            animationDelay: '0.45s',
            height: '380px',
            overflow: 'hidden',
          }}
        >
          {/* Floor glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '-40px',
              left: '10%',
              right: '10%',
              height: '120px',
              background: 'radial-gradient(ellipse, rgba(234,179,8,0.18) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Three surface cards — floating, no chrome wrapper */}
          <div
            className="relative grid grid-cols-12 gap-4 items-end"
            style={{ paddingBottom: '0' }}
          >
            {/* LEFT — Kiosk (portrait, tallest, dominant) */}
            <div
              className="col-span-4 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #0f1a0e 0%, #0a1508 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
                aspectRatio: '9/15',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                gap: '10px',
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '0.5rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>KIOSK · 16:9</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full" style={{ background: '#22c55e' }} />
                  <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                </div>
              </div>
              {/* Ad creative placeholder */}
              <div
                className="rounded-lg flex-1 flex items-center justify-center relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(234,179,8,0.05) 0%, transparent 60%)',
                  }}
                />
                <div style={{ fontSize: '1.5rem', opacity: 0.4 }}>▶</div>
              </div>
              {/* Sponsored badge */}
              <div
                className="rounded px-2 py-1 text-center"
                style={{ background: 'var(--accent)', fontSize: '0.5rem', fontWeight: 700, color: '#000', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                SPONSORED
              </div>
              <div className="rounded" style={{ background: 'rgba(255,255,255,0.06)', height: '6px', width: '75%' }} />
              <div className="rounded" style={{ background: 'rgba(255,255,255,0.04)', height: '6px', width: '55%' }} />
            </div>

            {/* CENTER — Session/charging state (tallest with charging info) */}
            <div
              className="col-span-4 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #0a0f0a 0%, #080d08 100%)',
                border: '1px solid rgba(234,179,8,0.15)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 30px rgba(234,179,8,0.06)',
                aspectRatio: '9/16',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '12px',
              }}
            >
              <div className="text-center" style={{ paddingTop: '8px' }}>
                <div style={{ fontSize: '0.5rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SESSION ACTIVE</div>
              </div>
              {/* Battery / charge level */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}>⚡</div>
                <div className="font-bold stat-num" style={{ fontSize: '1.75rem', color: 'var(--text-1)', lineHeight: 1 }}>62%</div>
                <div style={{ fontSize: '0.5rem', color: 'var(--text-3)', letterSpacing: '0.08em' }}>18 min remaining</div>
                <div
                  className="w-full rounded-full overflow-hidden"
                  style={{ height: '3px', background: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="h-full rounded-full" style={{ width: '62%', background: 'var(--accent)' }} />
                </div>
              </div>
              {/* Now serving */}
              <div
                className="rounded-lg px-3 py-2 text-center"
                style={{ background: 'rgba(234,179,8,0.06)', border: '1px solid rgba(234,179,8,0.15)' }}
              >
                <div style={{ fontSize: '0.45rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>NOW SERVING</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', fontWeight: 500 }}>Rolex · Porsche Taycan audience</div>
              </div>
            </div>

            {/* RIGHT — Mobile phone (shorter) */}
            <div
              className="col-span-4 rounded-2xl overflow-hidden"
              style={{
                background: '#0c0c0c',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)',
                aspectRatio: '9/17',
                display: 'flex',
                flexDirection: 'column',
                padding: '12px',
                gap: '8px',
              }}
            >
              {/* Phone notch */}
              <div className="flex justify-center">
                <div className="rounded-full" style={{ width: '36px', height: '5px', background: 'rgba(255,255,255,0.08)' }} />
              </div>
              {/* App content */}
              <div className="rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', height: '72px' }} />
              <div style={{ fontSize: '0.45rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>IN-APP</div>
              <div className="rounded" style={{ background: 'rgba(255,255,255,0.06)', height: '6px', width: '80%' }} />
              <div className="rounded" style={{ background: 'rgba(255,255,255,0.04)', height: '6px', width: '60%' }} />
              <div className="flex-1" />
              {/* CTA button */}
              <div
                className="rounded-lg text-center"
                style={{ background: 'var(--accent)', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span style={{ fontSize: '0.45rem', fontWeight: 700, color: '#000', letterSpacing: '0.08em', textTransform: 'uppercase' }}>LEARN MORE</span>
              </div>
            </div>
          </div>

          {/* Bottom fade — blends into stats bar */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '120px',
              background: 'linear-gradient(to bottom, transparent 0%, var(--bg) 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
