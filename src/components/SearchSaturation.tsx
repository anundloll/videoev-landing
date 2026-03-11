'use client';
import { openModal } from '@/lib/openModal';

const STATS = [
  { value: '5.6%', label: 'Amazon Search CPC growth', sub: 'Outpacing Google & retail media avg' },
  { value: '19.4%', label: 'Retail Media CTV growth', sub: 'YoY — the fastest channel in commerce' },
  { value: '38.1%', label: 'Digital ad spend in video', sub: 'And still climbing' },
];

export default function SearchSaturation() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>
            The Antidote to Search Saturation
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Escape the Search Trap.{' '}
            <span className="accent-text">Double Down on Video.</span>
          </h2>
        </div>

        {/* Problem + Solution — two-col narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* The Problem */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'rgba(239,68,68,0.7)' }}
              />
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(239,68,68,0.8)',
                }}
              >
                The Amazon Trade-Off
              </span>
            </div>
            <h3
              className="font-semibold"
              style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '1rem', lineHeight: 1.3 }}
            >
              Retail media is booming — but on-site search is tapped out.
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-2)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Amazon Search Ad CPCs are growing at{' '}
              <span className="stat-num font-semibold" style={{ color: 'var(--accent)' }}>5.6%</span>
              {' '}— outpacing both Google and the retail media average. Brands face diminishing
              returns and a crowded, opaque environment where every competitor is bidding on the
              same keywords.
            </p>
          </div>

          {/* The Solution */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(0,66,37,0.08)',
              border: '1px solid rgba(0,66,37,0.3)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent-green)' }}
              />
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                The VideoEV Escape Hatch
              </span>
            </div>
            <h3
              className="font-semibold"
              style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '1rem', lineHeight: 1.3 }}
            >
              Video is the future of commerce media.
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-2)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Retail Media CTV ad spend is growing at{' '}
              <span className="stat-num font-semibold" style={{ color: 'var(--accent)' }}>19.4%</span>,
              and video now makes up{' '}
              <span className="stat-num font-semibold" style={{ color: 'var(--accent)' }}>38.1%</span>
              {' '}of all digital ad spend. VideoEV gives you premium, unsaturated video inventory
              that drives top-of-funnel awareness — without sacrificing bottom-of-funnel measurement.
            </p>
          </div>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-5 py-5"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div
                className="stat-num font-bold"
                style={{
                  fontSize: '2rem',
                  color: 'var(--accent)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {s.value}
              </div>
              <div className="font-medium" style={{ fontSize: '0.8125rem', marginBottom: '3px' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Best of Both Worlds */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(0,66,37,0.3)' }}
        >
          {/* Header */}
          <div
            className="px-8 py-5"
            style={{
              background: 'rgba(0,66,37,0.12)',
              borderBottom: '1px solid rgba(0,66,37,0.25)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                Best of Both Worlds · VideoEV + Amazon DSP
              </span>
            </div>
          </div>

          {/* Two-col split */}
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* What you keep */}
            <div
              className="px-8 py-8"
              style={{ background: 'rgba(0,66,37,0.07)', borderRight: '1px solid rgba(0,66,37,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="var(--accent-green)" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="var(--accent-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="font-semibold"
                  style={{ fontSize: '0.875rem', color: 'var(--text-1)' }}
                >
                  What you keep
                </span>
              </div>
              <p className="eyebrow" style={{ marginBottom: '0.625rem', fontSize: '0.6rem' }}>
                Precision + Attribution
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>
                Unparalleled precision. VideoEV uses{' '}
                <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>Amazon DSP</span>{' '}
                for targeting and{' '}
                <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>Amazon Marketing Cloud (AMC)</span>{' '}
                for closed-loop, deterministic sales attribution — the same tools your search
                campaigns run on, now extended into the physical world.
              </p>
            </div>

            {/* What you escape */}
            <div className="px-8 py-8" style={{ background: 'rgba(255,255,255,0.01)' }}>
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span
                  className="font-semibold"
                  style={{ fontSize: '0.875rem', color: 'var(--text-1)' }}
                >
                  What you escape
                </span>
              </div>
              <p className="eyebrow" style={{ marginBottom: '0.625rem', fontSize: '0.6rem' }}>
                Saturation + Competition
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>
                Crowded search pages. Instead, you get{' '}
                <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>35 minutes</span>{' '}
                of{' '}
                <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>100% share-of-voice</span>{' '}
                on high-definition, physical-world screens — with no competitor ads, no banner
                blindness, and no keyword auction to lose.
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <div
            className="px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              borderTop: '1px solid rgba(0,66,37,0.2)',
              background: 'rgba(0,66,37,0.06)',
            }}
          >
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
              Minimum buys from $5k · No RFP required · Media kit available same day
            </p>
            <button
              onClick={() => openModal('advertiser')}
              className="btn-primary flex-shrink-0"
              style={{ fontSize: '0.8125rem', padding: '0.625rem 1.25rem' }}
            >
              Request Media Kit →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
