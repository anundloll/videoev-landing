'use client';
import { openModal } from '@/lib/openModal';

const CARDS = [
  {
    id: 'advertiser',
    audience: 'Brands & Agencies',
    headline: 'Reach EV drivers that buy',
    body: 'Build targeted campaigns using VIN-confirmed audience data. Set your CPM, choose your surfaces, and track every outcome in real time. Minimum buys start at $5k.',
    features: [
      'VIN-confirmed audience targeting',
      'Creative across kiosk, mobile & in-car',
      'Real-time attribution dashboard',
      'Brand safety — 100% contextual',
    ],
    cta: 'Request Media Kit',
    sub: 'sales@videoev.com · one business day',
    type: 'advertiser' as const,
    accentBorder: false,
  },
  {
    id: 'cpo',
    audience: 'Charge Point Operators',
    headline: 'Turn infrastructure into income',
    body: 'Add VideoEV screens to your stations and convert a utility cost into a recurring profit center. Automated revenue share from day one — zero upfront investment.',
    features: [
      'White-label kiosk & app UI',
      'Revenue share model — zero upfront',
      'Works with existing OCPP hardware',
      'Full ad operations handled for you',
    ],
    cta: 'Become a Network Partner',
    sub: 'sales@videoev.com · US networks',
    type: 'partner' as const,
    accentBorder: true,
  },
  {
    id: 'retailer',
    audience: 'Retailers & Venues',
    headline: 'Drive affluent shoppers in-store',
    body: 'EV drivers have 30% higher discretionary spend than the average consumer. Place ads at nearby chargers to pull high-intent buyers from the curb straight to your counter.',
    features: [
      'Geo-targeted by store proximity',
      'Audience: $150k+ household income',
      'Foot-traffic attribution included',
      'Curb-to-counter measurement',
    ],
    cta: 'Request Media Kit',
    sub: 'We respond within one business day',
    type: 'advertiser' as const,
    accentBorder: false,
  },
];

export default function DualCTA() {
  return (
    <section className="py-24" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Work with VideoEV</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            Three ways to grow with VideoEV
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: card.accentBorder
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, var(--surface-2) 100%)'
                  : 'var(--surface-2)',
                border: card.accentBorder
                  ? '1px solid rgba(212,175,55,0.2)'
                  : '1px solid var(--border)',
              }}
            >
              {/* Number marker */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-6 font-bold"
                style={{
                  background: card.accentBorder ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.05)',
                  border: card.accentBorder ? '1px solid rgba(212,175,55,0.25)' : '1px solid var(--border)',
                  color: card.accentBorder ? 'var(--accent)' : 'var(--text-3)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                0{CARDS.indexOf(card) + 1}
              </div>

              <div className="eyebrow mb-3">{card.audience}</div>
              <h3 className="font-bold mb-3" style={{ fontSize: '1.3125rem', letterSpacing: '-0.01em' }}>
                {card.headline}
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65, flex: 1, marginBottom: '1.75rem', fontWeight: 300 }}>
                {card.body}
              </p>

              <ul className="flex flex-col gap-2 mb-7">
                {card.features.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6" stroke="var(--accent)" strokeWidth="1.5"/>
                      <path d="M4.5 7l1.8 1.8L9.5 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => openModal(card.type)} className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                {card.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '0.75rem' }}>
                {card.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
