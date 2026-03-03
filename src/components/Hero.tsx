'use client';
import { openModal } from '@/lib/openModal';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: '7rem',
        paddingBottom: '0',
        background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(0,66,37,0.22) 0%, transparent 60%)',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
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
          <span className="eyebrow">Self-Service Media Platform</span>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Headline */}
        <h1
          className="fade-up fade-up-2 font-bold"
          style={{
            fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
            maxWidth: '14ch',
            margin: '0 auto 1.5rem',
          }}
        >
          The Operating System{' '}
          <span className="accent-text">for Vehicle Media.</span>
        </h1>

        {/* Sub */}
        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: 'clamp(1rem, 1.75vw, 1.1875rem)',
            color: 'var(--text-2)',
            fontWeight: 300,
            maxWidth: '52ch',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          The first self-serve VMN — brands buy impressions by vehicle segment,
          CPOs earn passive yield on every charging session.
          OCPP 2.0.1 · Amazon Marketing Cloud · OpenRTB 2.6.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openModal('advertiser')}
            className="btn-primary"
            style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}
          >
            Launch Campaign
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => openModal('partner')} className="btn-ghost" style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}>
            Connect Your Network
          </button>
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
          {' '}·{' '}
          <a
            href="mailto:sales@videoev.com"
            style={{ color: 'var(--text-3)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            className="hover:text-white transition-colors"
          >
            sales@videoev.com
          </a>
        </p>

        {/* Hero illustration — dual terminal panels */}
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
          {/* Floor glow — BRG */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '-40px',
              left: '10%',
              right: '10%',
              height: '120px',
              background: 'radial-gradient(ellipse, rgba(0,66,37,0.3) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Two terminal panels */}
          <div className="relative grid grid-cols-2 gap-4 items-start">
            {/* LEFT — Buying Terminal (advertiser) */}
            <div
              className="rounded-2xl"
              style={{
                background: 'rgba(5,5,5,0.96)',
                border: '1px solid rgba(212,175,55,0.22)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.04)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '0.5rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Buying Terminal</span>
                <div
                  className="rounded px-1.5 py-0.5"
                  style={{ background: 'rgba(212,175,55,0.12)', fontSize: '0.45rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.08em' }}
                >
                  LIVE
                </div>
              </div>
              <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(0,66,37,0.18)', border: '1px solid rgba(0,66,37,0.35)' }}>
                <div style={{ fontSize: '0.45rem', color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>Audience Segment</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-1)', fontWeight: 600 }}>Porsche Taycan · Tesla Model S · EV $80k+</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.45rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Reach</div>
                  <div className="stat-num font-bold" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>248k</div>
                </div>
                <div className="rounded px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.45rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>CPM</div>
                  <div className="stat-num font-bold" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>$28</div>
                </div>
              </div>
              <div className="rounded-lg text-center" style={{ background: 'var(--accent)', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: '#000', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Book Inventory →</span>
              </div>
            </div>

            {/* RIGHT — Revenue Terminal (CPO) */}
            <div
              className="rounded-2xl"
              style={{
                background: 'rgba(0,66,37,0.1)',
                border: '1px solid rgba(0,66,37,0.4)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: '0.5rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Revenue Terminal</span>
                <span style={{ fontSize: '0.45rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>12 stalls active</span>
              </div>
              <div className="flex flex-col items-center gap-1.5" style={{ paddingTop: '4px' }}>
                <div style={{ fontSize: '0.45rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Session Active · Stall 07</div>
                <div className="font-bold stat-num" style={{ fontSize: '1.8rem', color: 'var(--text-1)', lineHeight: 1 }}>62%</div>
                <div style={{ fontSize: '0.45rem', color: 'var(--text-3)' }}>18 min remaining</div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: '3px', background: 'rgba(255,255,255,0.08)' }}>
                  <div className="h-full rounded-full" style={{ width: '62%', background: 'var(--accent)' }} />
                </div>
              </div>
              <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <div style={{ fontSize: '0.45rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>This session</div>
                <div className="stat-num font-bold" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>$3.20 earned</div>
              </div>
              <div className="rounded-lg text-center" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Connect Network →</span>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
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
