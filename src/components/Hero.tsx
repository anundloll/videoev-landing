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
          The Operating System for{' '}
          <span className="accent-text">Vehicle Media.</span>
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
          The first self-serve Vehicle Media Network — brands buy impressions
          by vehicle segment, CPOs earn passive yield on every charging session.
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

        {/* Protocol badges */}
        <div
          className="fade-up fade-up-4 flex items-center justify-center gap-3 flex-wrap"
          style={{ marginTop: '2rem' }}
        >
          {['OCPP 2.0.1', 'OpenRTB 2.6', 'VAST 4.2', 'Amazon AMC'].map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-3)',
                fontFamily: 'monospace',
                letterSpacing: '0.04em',
                padding: '0.25rem 0.625rem',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
