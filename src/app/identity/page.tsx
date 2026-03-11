import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'Vehicle Identity Graph — VideoEV',
  description: 'EV chargers never receive Make or Model. VideoEV resolves anonymous OCPP session identifiers to verified vehicle profiles through the first Vehicle Identity Graph built for programmatic advertising.',
};

const HOW_STEPS = [
  {
    step: '01',
    title: 'Charger receives an anonymous identifier',
    body: 'When an EV connects, the charger receives an EVCCID — an encrypted hardware identifier derived from the vehicle\'s MAC address. ISO 15118 automotive privacy standards mean Make, Model, and VIN are never transmitted to public infrastructure.',
    tag: 'OCPP 2.0.1 · ISO 15118',
  },
  {
    step: '02',
    title: 'VideoEV ingests the session record',
    body: 'The full OCPP session record — EVCCID, station ID, connector type, session timestamp, and energy delivered — is pushed to VideoEV in real time. The identifier alone tells you nothing. That\'s the gap every CPO is sitting on.',
    tag: 'Real-time ingestion',
  },
  {
    step: '03',
    title: 'Deterministic matching against the identity graph',
    body: 'The EVCCID is matched against our Vehicle Identity Graph — a cross-reference of hardware identifiers, CPO session histories, and OEM data. No inference. No probabilistic modelling. A confirmed match attaches a vehicle profile to the session.',
    tag: 'Deterministic · No panels',
  },
  {
    step: '04',
    title: 'Session-resolved vehicle profile attached',
    body: 'The resolved profile includes Make, Model, Trim, Model Year, and MSRP proxy. This becomes the targeting signal for the ad auction running on that session — passed to the SSP in real time before the first ad slot is filled.',
    tag: 'Make · Model · MSRP proxy',
  },
];

const SIGNALS = [
  { label: 'Make & Model', note: 'Resolved from OCPP identifier, not transmitted by the vehicle' },
  { label: 'Model Year', note: 'Cross-referenced from manufacturer production data' },
  { label: 'Trim & Variant', note: 'Where unambiguous from the hardware fingerprint' },
  { label: 'MSRP Proxy', note: 'Derived from make/model/year — used as income signal' },
  { label: 'Charging History', note: 'Session frequency, network preference, charging duration' },
  { label: 'Match Confidence', note: 'High / medium / unresolved — passed to SSP with every bid request' },
];

const WHY_ROWS = [
  {
    q: 'Why don\'t chargers just read the VIN?',
    a: 'They can\'t. ISO 15118 — the protocol that governs EV-to-charger communication — does not expose VIN, Make, or Model to charging infrastructure. What passes over the wire is a cryptographic identifier. This is intentional: automotive OEMs treat vehicle identity as proprietary.',
  },
  {
    q: 'What\'s an EVCCID?',
    a: 'Electric Vehicle Communication Controller ID. It\'s a hardware-level identifier derived from the onboard communication chip\'s MAC address. It\'s consistent across sessions for the same vehicle, which is what makes deterministic matching possible.',
  },
  {
    q: 'Is this probabilistic matching?',
    a: 'No. Probabilistic models infer identity from behavioural signals — browser history, app data, lookalike modelling. Our matching is deterministic: the EVCCID is a stable hardware identifier that maps to one vehicle. When a match is found, it\'s confirmed, not estimated.',
  },
  {
    q: 'What happens when there\'s no match?',
    a: 'The session still runs. Unresolved sessions are served contextual inventory — station type, location, time of day — without vehicle-level targeting. Match confidence is passed with every bid request so buyers can set floor prices accordingly.',
  },
];

export default function IdentityPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            paddingTop: '6rem',
            paddingBottom: '5rem',
            background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,66,37,0.2) 0%, transparent 65%)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Vehicle Identity Graph</p>
            <h1
              className="font-bold"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
                maxWidth: '22ch',
              }}
            >
              The charger doesn&apos;t know what car just plugged in.{' '}
              <span className="accent-text">We do.</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.75vw, 1.125rem)',
                color: 'var(--text-2)',
                fontWeight: 300,
                maxWidth: '58ch',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Under ISO 15118, EV chargers never receive Make, Model, or VIN — only an encrypted
              hardware identifier. VideoEV built the resolution layer that matches it to a real
              vehicle profile and runs an ad auction against the result.
            </p>

            {/* Protocol badges */}
            <div className="flex items-center gap-3 flex-wrap">
              {['OCPP 2.0.1', 'ISO 15118', 'Deterministic matching', 'Real-time resolution'].map((b) => (
                <span
                  key={b}
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
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The gap — callout block */}
        <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(0,66,37,0.08)', border: '1px solid rgba(0,66,37,0.25)' }}
            >
              <p className="eyebrow" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>The gap every CPO is sitting on</p>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '60ch',
                  marginBottom: '1.5rem',
                }}
              >
                A CPO running 500 stalls processes thousands of charging sessions a day.
                Each one contains an EVCCID. Without a resolution layer, that identifier
                is useless — the CPO has no idea if they just charged a Porsche Taycan or
                a Chevy Bolt.
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-2)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: '58ch',
                }}
              >
                That gap is why high-CPM vehicle-targeted advertising hasn&apos;t existed at EV
                charging networks until now. The hardware was always there. The identity
                layer wasn&apos;t.
              </p>
            </div>
          </div>
        </section>

        {/* How it works — 4 steps */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-14">
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>How Resolution Works</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
              >
                How a hardware ID becomes a vehicle profile
              </h2>
            </div>

            <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
              {HOW_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <div className="md:col-span-1">
                    <span
                      className="font-bold"
                      style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.06em', fontVariantNumeric: 'tabular-nums' }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <div className="md:col-span-11">
                    <h3
                      className="font-semibold mb-3"
                      style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-2)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                        marginBottom: '0.875rem',
                        maxWidth: '64ch',
                      }}
                    >
                      {s.body}
                    </p>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        color: 'var(--text-3)',
                        fontFamily: 'monospace',
                        letterSpacing: '0.04em',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resolved signals */}
        <section
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>What Gets Resolved</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
                >
                  Six signals. One OCPP identifier.
                </h2>
                <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
                  One confirmed match. One vehicle profile in the SSP bid request — before the
                  first ad slot fills.
                </p>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
              >
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}
                >
                  <span className="eyebrow text-xs">Resolved vehicle profile</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-semibold"
                    style={{ background: 'rgba(0,66,37,0.15)', color: 'var(--accent)', border: '1px solid rgba(0,66,37,0.3)' }}
                  >
                    CONFIRMED
                  </span>
                </div>
                <div className="divide-y" style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}>
                  {SIGNALS.map((s) => (
                    <div key={s.label} className="px-5 py-4 flex items-start justify-between gap-4">
                      <span className="font-medium" style={{ fontSize: '0.875rem', flexShrink: 0 }}>{s.label}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', textAlign: 'right' }}>{s.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — plain prose */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-14">
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Technical Questions</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
              >
                How it actually works
              </h2>
            </div>
            <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
              {WHY_ROWS.map((r) => (
                <div
                  key={r.q}
                  className="py-10"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <h3
                    className="font-semibold mb-4"
                    style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
                  >
                    {r.q}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300, maxWidth: '64ch' }}>
                    {r.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
            >
              The first Vehicle Identity Graph built for programmatic media.
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300, maxWidth: '52ch', margin: '0 auto 2.5rem' }}>
              If you run a charging network and want to understand what identity data
              you&apos;re currently leaving on the table, talk to us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:sales@videoev.com"
                className="btn-primary"
                style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}
              >
                Talk to the team
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="mailto:sales@videoev.com"
                className="btn-ghost"
                style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}
              >
                Request tech spec sheet
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <ContactModal />
    </main>
  );
}
