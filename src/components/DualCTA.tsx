'use client';
import { openModal } from '@/lib/openModal';

export default function DualCTA() {
  return (
    <section className="py-24" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            Two ways to work with VideoEV
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Advertisers CTA */}
          <div
            id="advertisers"
            className="rounded-2xl p-8 flex flex-col"
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
              style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.2)' }}
            >
              📣
            </div>
            <div className="eyebrow mb-3">For Advertisers & Agencies</div>
            <h3 className="font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Reach EV drivers that buy
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, flex: 1, marginBottom: '2rem' }}>
              Build targeted campaigns using VIN-confirmed audience data. Set your
              CPM, choose your surfaces, and track every outcome in real time.
              Minimum buys start at $5k.
            </p>

            <ul className="flex flex-col gap-2 mb-8">
              {[
                'VIN-confirmed audience targeting',
                'Creative across kiosk, mobile & in-car',
                'Real-time attribution dashboard',
                'Brand safety — 100% contextual',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="7" cy="7" r="6" stroke="var(--accent)" strokeWidth="1.5"/>
                    <path d="M4.5 7l1.8 1.8L9.5 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={() => openModal('advertiser')} className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              Request Media Kit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '0.75rem' }}>
              We respond within one business day
            </p>
          </div>

          {/* Charging Networks CTA */}
          <div
            id="partners"
            className="rounded-2xl p-8 flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(234,179,8,0.06) 0%, var(--surface-2) 100%)',
              border: '1px solid rgba(234,179,8,0.2)',
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
              style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.25)' }}
            >
              ⚡
            </div>
            <div className="eyebrow mb-3">For Charging Networks</div>
            <h3 className="font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Monetise your charging infrastructure
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, flex: 1, marginBottom: '2rem' }}>
              Turn your station screens, mobile app, and in-car integrations into
              a premium media network. White-label the VideoEV platform to your
              brand. Revenue share from day one.
            </p>

            <ul className="flex flex-col gap-2 mb-8">
              {[
                'White-label kiosk & app UI',
                'Revenue share model — zero upfront',
                'Your brand, our ad operations',
                'Works with existing OCPP hardware',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="7" cy="7" r="6" stroke="var(--accent)" strokeWidth="1.5"/>
                    <path d="M4.5 7l1.8 1.8L9.5 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={() => openModal('partner')} className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              Become a Network Partner
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '0.75rem' }}>
              Currently expanding with US charging networks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
