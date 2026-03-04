'use client';
import { useState } from 'react';
import { openModal } from '@/lib/openModal';

const T = 10;  // avg daily vehicles per stall
const L = 10;  // ads per session
const CPM = 25; // $/1000 impressions

function calcMonthly(stalls: number): number {
  return (stalls * T * L * 30 * CPM) / 1000;
}

function fmt(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`;
  return `$${n.toFixed(0)}`;
}

export default function ROICalculator() {
  const [stalls, setStalls] = useState(5);

  const monthly = calcMonthly(stalls);
  const annual = monthly * 12;
  const dailyImpressions = stalls * T * L;
  const monthlyImpressions = dailyImpressions * 30;

  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Unit Economics</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            Projected Network Yield
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, marginTop: '1rem' }}>
            Every stall you add compounds the return. Drag the slider to model your network.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(0,66,37,0.3)',
            background: 'linear-gradient(135deg, rgba(0,66,37,0.08) 0%, var(--surface) 60%)',
          }}
        >
          {/* Slider row */}
          <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-4">
              <label
                htmlFor="stalls-slider"
                className="font-semibold"
                style={{ fontSize: '0.9375rem' }}
              >
                Number of charging stalls
              </label>
              <div
                className="stat-num font-bold px-4 py-1.5 rounded-lg"
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--accent)',
                  background: 'rgba(0,66,37,0.15)',
                  border: '1px solid rgba(0,66,37,0.4)',
                  minWidth: '3.5rem',
                  textAlign: 'center',
                }}
              >
                {stalls}
              </div>
            </div>

            <input
              id="stalls-slider"
              type="range"
              min={1}
              max={100}
              value={stalls}
              onChange={(e) => setStalls(Number(e.target.value))}
              style={{
                width: '100%',
                appearance: 'none',
                height: '4px',
                borderRadius: '2px',
                background: `linear-gradient(to right, var(--accent-green) 0%, var(--accent-green) ${stalls}%, rgba(255,255,255,0.1) ${stalls}%, rgba(255,255,255,0.1) 100%)`,
                cursor: 'pointer',
                outline: 'none',
              }}
            />
            <div className="flex justify-between mt-2">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>1 stall</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>100 stalls</span>
            </div>
          </div>

          {/* Output row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
            <div className="px-8 py-7 text-center">
              <div
                className="stat-num font-bold glow-text"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}
              >
                {fmt(monthly)}
              </div>
              <div className="font-medium" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Estimated Monthly Passive Revenue</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>Per site, passive income</div>
            </div>

            <div className="px-8 py-7 text-center">
              <div
                className="stat-num font-bold glow-text"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}
              >
                {fmt(annual)}
              </div>
              <div className="font-medium" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Annualized Network Yield</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>Recurring, no CapEx</div>
            </div>

            <div className="px-8 py-7 text-center">
              <div
                className="stat-num font-bold"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}
              >
                {monthlyImpressions.toLocaleString()}
              </div>
              <div className="font-medium" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Monthly impressions</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{dailyImpressions.toLocaleString()} / day</div>
            </div>
          </div>

          {/* Formula footer */}
          <div
            className="px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
          >
            <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: 'monospace', letterSpacing: '0.02em' }}>
              Formula: ({stalls} stalls × {T} cars × {L} ads × 30 days × ${CPM} CPM) ÷ 1,000
            </p>
            <button
              onClick={() => openModal('partner')}
              className="btn-primary flex-shrink-0"
              style={{ fontSize: '0.8375rem', padding: '0.625rem 1.25rem' }}
            >
              Start earning →
            </button>
          </div>
        </div>

        {/* Assumption footnote */}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.6 }}>
          Benchmarks: 10 vehicles/stall/day · 10 ad slots per 20-min session · $25 CPM (2026 premium DOOH standard).
          Actual results vary by location and fill rate.
        </p>
      </div>
    </section>
  );
}
