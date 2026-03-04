'use client';
import { useState } from 'react';
import { openModal } from '@/lib/openModal';

const T = 10;
const L = 10;
const CPM = 25;

function calcMonthly(stalls: number): number {
  return (stalls * T * L * 30 * CPM) / 1000;
}

function fmt(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`;
  return `$${n.toFixed(0)}`;
}

const STEPS = [
  { n: '01', title: 'Connect via OCPP 2.0.1', body: 'Your chargers speak OCPP already. We connect in under 48 hours — no hardware swap, no CapEx.' },
  { n: '02', title: 'We handle the media layer', body: 'VideoEV places ads from our programmatic marketplace. You never touch a campaign.' },
  { n: '03', title: 'Monthly passive yield', body: 'Revenue deposited monthly. Real-time analytics in your dashboard. You own the charger — we run the media.' },
];

export default function RevenueTerminal() {
  const [stalls, setStalls] = useState(12);

  const monthly = calcMonthly(stalls);
  const annual = monthly * 12;
  const dailyImpressions = stalls * T * L;

  return (
    <section
      id="cpos"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>For CPOs</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            Your stalls earn while they charge.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Turn idle dwell time into recurring media revenue. No hardware. No
            ad operations. Pure passive yield from infrastructure you already own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — yield calculator */}
          <div
            className="lg:col-span-3 rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(0,66,37,0.3)',
              background: 'linear-gradient(135deg, rgba(0,66,37,0.08) 0%, rgba(5,5,5,0.98) 60%)',
            }}
          >
            {/* Slider row */}
            <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="rev-stalls" className="font-semibold" style={{ fontSize: '0.9375rem' }}>
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
                id="rev-stalls"
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
            <div
              className="grid grid-cols-3 divide-x"
              style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}
            >
              <div className="px-6 py-7 text-center">
                <div className="stat-num font-bold glow-text" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {fmt(monthly)}
                </div>
                <div className="font-medium" style={{ fontSize: '0.8125rem', marginBottom: '0.25rem' }}>Monthly Yield</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>Passive · no CapEx</div>
              </div>
              <div className="px-6 py-7 text-center">
                <div className="stat-num font-bold glow-text" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {fmt(annual)}
                </div>
                <div className="font-medium" style={{ fontSize: '0.8125rem', marginBottom: '0.25rem' }}>Annual Network Yield</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>Recurring revenue</div>
              </div>
              <div className="px-6 py-7 text-center">
                <div className="stat-num font-bold" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {dailyImpressions.toLocaleString()}
                </div>
                <div className="font-medium" style={{ fontSize: '0.8125rem', marginBottom: '0.25rem' }}>Daily Impressions</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>× 30 days</div>
              </div>
            </div>

            {/* Formula footer */}
            <div
              className="px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}
            >
              <p style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontFamily: 'monospace', letterSpacing: '0.02em' }}>
                {stalls} stalls × {T} cars × {L} ads × 30 days × ${CPM} CPM ÷ 1,000
              </p>
              <button
                onClick={() => openModal('partner')}
                className="btn-primary flex-shrink-0"
                style={{ fontSize: '0.8125rem', padding: '0.625rem 1.25rem' }}
              >
                Connect Your Network
              </button>
            </div>
          </div>

          {/* RIGHT — how it works */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex gap-4"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(0,66,37,0.25)',
                    border: '1px solid rgba(0,66,37,0.5)',
                    fontSize: '0.6rem',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="font-semibold mb-1.5" style={{ fontSize: '0.9375rem' }}>{s.title}</div>
                  <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{s.body}</p>
                </div>
              </div>
            ))}

            {/* OCPP badge */}
            <div
              className="rounded-xl px-4 py-3 mt-2"
              style={{ background: 'rgba(0,66,37,0.08)', border: '1px solid rgba(0,66,37,0.3)' }}
            >
              <div style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                Hardware-Agnostic
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
                Compatible with any OCPP 2.0.1 charger.
                ChargePoint · Blink · EVgo · Electrify America · ABB.
              </p>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.6 }}>
          Benchmarks: 10 vehicles/stall/day · 10 ad slots per session · $25 CPM (2026 premium DOOH standard). Actual results vary by location and fill rate.
        </p>
      </div>
    </section>
  );
}
