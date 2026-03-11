'use client';
import { openModal } from '@/lib/openModal';

const SEGMENTS = [
  { vehicle: 'Porsche Taycan / Audi e-tron', qualifier: 'MSRP $80k+', reach: '41k', cpm: '$34', badge: 'ULTRA PREMIUM' },
  { vehicle: 'Tesla Model S / Model X', qualifier: 'MSRP $75k+', reach: '88k', cpm: '$28', badge: 'PREMIUM' },
  { vehicle: 'BMW iX / Mercedes EQS', qualifier: 'MSRP $70k+', reach: '63k', cpm: '$26', badge: 'PREMIUM' },
  { vehicle: 'Ford F-150 Lightning / Rivian R1T', qualifier: 'Truck segment', reach: '56k', cpm: '$22', badge: 'STANDARD' },
];

const TRIGGERS = [
  { icon: '🏨', label: 'Hotel / Resort', sub: 'Luxury travel intent' },
  { icon: '✈️', label: 'Airport', sub: 'Business traveler' },
  { icon: '🛍️', label: 'Luxury Retail', sub: 'High-value shopper' },
  { icon: '⛳', label: 'Golf / Country Club', sub: 'Affluent leisure' },
];

export default function BuyingTerminal() {
  return (
    <section
      id="advertisers"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>For Brands</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            Buy by vehicle. Not by cookie.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Session-resolved audience data from OCPP. The segment you&apos;re buying
            maps to a real vehicle on a real charger — not a modeled estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT — Audience segments table */}
          <div
            className="lg:col-span-3 rounded-2xl overflow-clip"
            style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-4 px-5 py-3"
              style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
            >
              {['Vehicle Segment', 'Reach', 'Floor CPM', ''].map((h) => (
                <div key={h} style={{ fontSize: '0.65rem', color: 'var(--text-3)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            {SEGMENTS.map((s, i) => (
              <div
                key={s.vehicle}
                className="grid grid-cols-4 px-5 py-4 transition-colors hover:bg-white/[0.02] cursor-pointer"
                style={{ borderBottom: i < SEGMENTS.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '2px' }}>{s.vehicle}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>{s.qualifier}</div>
                </div>
                <div className="stat-num font-semibold" style={{ fontSize: '0.9375rem', color: 'var(--text-1)', alignSelf: 'center' }}>{s.reach}</div>
                <div className="stat-num font-semibold" style={{ fontSize: '0.9375rem', color: 'var(--accent)', alignSelf: 'center' }}>{s.cpm}</div>
                <div style={{ alignSelf: 'center' }}>
                  <span
                    className="rounded px-1.5 py-0.5 inline-block"
                    style={{
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      background: s.badge === 'ULTRA PREMIUM' ? 'rgba(0,168,150,0.15)' : 'rgba(255,255,255,0.06)',
                      color: s.badge === 'ULTRA PREMIUM' ? 'var(--accent)' : 'var(--text-3)',
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>248k session-resolved vehicle profiles</span>
              <button
                onClick={() => openModal('advertiser')}
                className="btn-primary"
                style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
              >
                Browse All Segments
              </button>
            </div>
          </div>

          {/* RIGHT — Location triggers */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(0,66,37,0.1)', border: '1px solid rgba(0,66,37,0.3)' }}
            >
              <p style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Dynamic Location Triggers
              </p>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300, marginBottom: '1rem' }}>
                Layer location context on top of vehicle data. Target by the type of venue where the charge happens.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {TRIGGERS.map((t) => (
                  <div
                    key={t.label}
                    className="rounded-xl p-3"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}
                  >
                    <div style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{t.icon}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '1px' }}>{t.label}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-3)' }}>{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amazon DSP connect */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'rgba(0,66,37,0.08)', border: '1px solid rgba(0,66,37,0.3)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,66,37,0.2)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)' }}>Amazon DSP Connect</span>
              </div>
              <p style={{ fontSize: '0.7875rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
                Sync your Amazon DSP audiences directly. Retarget shoppers you
                already know by the vehicle they drive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
