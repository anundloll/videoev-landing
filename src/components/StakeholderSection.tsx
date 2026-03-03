'use client';
import { useState } from 'react';
import { openModal } from '@/lib/openModal';

const TABS = [
  {
    id: 'brands',
    label: 'Brands',
    headline: 'Captive Audience. Zero Competition.',
    sub: 'The only screen in the room for 20 minutes.',
    body: 'While a driver charges their vehicle, there is nothing competing for their attention. No scrolling, no skipping, no second screen. VideoEV delivers your brand into a premium, distraction-free moment that broadcast and digital cannot replicate.',
    metrics: [
      { value: '20 min', label: 'Avg dwell time', note: 'vs 4 min on Gas Station TV' },
      { value: '$150k+', label: 'Avg household income', note: 'Verified by vehicle data' },
      { value: '$25 CPM', label: 'Standard rate', note: 'Premium DOOH 2026' },
    ],
    features: [
      'Full-screen kiosk placement — 0% ad clutter',
      'Audience: Tesla, Porsche, BMW — by VIN',
      'Pod bidding: 10 × 30-sec slots per session',
      'Closed-loop attribution via Amazon AMC',
    ],
    cta: 'Request Media Kit',
    ctaType: 'advertiser' as const,
  },
  {
    id: 'cpos',
    label: 'CPOs',
    headline: 'Your Infrastructure. Now a Profit Center.',
    sub: 'Turn utility cost into automated revenue share.',
    body: 'Charge Point Operators spend capital deploying stations. VideoEV adds a revenue layer on top of what you already own. No upfront investment — we handle ad sales, creative ops, and platform management. You collect a revenue share from day one.',
    metrics: [
      { value: '$375/mo', label: 'Per 5-stall site', note: 'Default CPM benchmark' },
      { value: '0', label: 'Upfront cost', note: 'Works with existing OCPP' },
      { value: 'Day 1', label: 'Revenue starts', note: 'After integration' },
    ],
    features: [
      'White-label kiosk UI to your brand',
      'Works with existing OCPP hardware',
      'Automated revenue share — no manual invoicing',
      'Full ad operations handled by VideoEV',
    ],
    cta: 'Become a Network Partner',
    ctaType: 'partner' as const,
  },
  {
    id: 'retailers',
    label: 'Retailers',
    headline: 'Curb-to-Counter. High-Intent Shoppers.',
    sub: '30% higher discretionary spend than the average driver.',
    body: 'EV drivers are not average consumers. They have higher household incomes, spend more on premium goods, and are already near your store when they stop to charge. VideoEV places your brand in front of them at the exact moment they have time — and a reason — to engage.',
    metrics: [
      { value: '30%', label: 'Higher discretionary spend', note: 'vs average US consumer' },
      { value: '$65k+', label: 'Avg vehicle MSRP', note: 'A known purchase signal' },
      { value: 'Geo', label: 'Proximity targeting', note: 'By station distance' },
    ],
    features: [
      'Station-level targeting near your locations',
      'Audience: $150k+ HHI, luxury goods buyers',
      'Foot-traffic attribution included',
      'Amazon AMC purchase correlation available',
    ],
    cta: 'Request Media Kit',
    ctaType: 'advertiser' as const,
  },
];

export default function StakeholderSection() {
  const [active, setActive] = useState('brands');
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section
      className="py-24"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Built For</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            One platform, three growth stories
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-xl p-1"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="px-6 py-2.5 rounded-lg font-medium transition-all"
                style={{
                  fontSize: '0.875rem',
                  background: active === t.id ? 'var(--accent)' : 'transparent',
                  color: active === t.id ? '#000' : 'var(--text-2)',
                  cursor: 'pointer',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <div>
            <p
              className="font-semibold mb-2"
              style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              {tab.sub}
            </p>
            <h3
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
            >
              {tab.headline}
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300, marginBottom: '2rem' }}>
              {tab.body}
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-2.5 mb-8">
              {tab.features.map((f) => (
                <div key={f} className="flex items-center gap-3" style={{ fontSize: '0.9rem' }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-2)' }}>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openModal(tab.ctaType)}
              className="btn-primary"
            >
              {tab.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right — metrics */}
          <div className="flex flex-col gap-4">
            {tab.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-7 flex items-center gap-6"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="stat-num font-bold flex-shrink-0"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--accent)', letterSpacing: '-0.02em', minWidth: '5rem' }}
                >
                  {m.value}
                </div>
                <div>
                  <div className="font-semibold" style={{ fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>{m.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
