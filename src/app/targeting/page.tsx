import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import TargetingSection from '@/components/Targeting';
import Dayparting from '@/components/Dayparting';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import DualCTA from '@/components/DualCTA';

export const metadata: Metadata = {
  title: 'Audience & Data — VideoEV',
  description:
    'Session-resolved vehicle identity, live OCPP telemetry, and venue-level location context. No modeled proxies. No cookie dependency. Deterministic signals from the charger.',
};

const SIGNAL_LAYERS = [
  {
    num: '01',
    label: 'Vehicle Identity',
    headline: 'The car is the credential.',
    body: `At OCPP session initiation, the charger receives an EVCCID — an encrypted hardware identifier, never Make, Model, or VIN. VideoEV's identity resolution layer matches it against the Vehicle Identity Graph: a cross-reference of hardware identifiers, CPO session histories, and OEM data. Make, Model, Year, and Trim are resolved deterministically. MSRP is public record. A $145,000 Porsche Taycan Turbo S driver doesn't need income modeling — you already know what they drive.`,
    signals: [
      { name: 'Make · Model · Year · Trim', note: 'Session-resolved via identity graph' },
      { name: 'MSRP range', note: 'Public record, not inferred' },
      { name: 'Brand tier', note: 'Ultra-luxury / Premium / Aspirational' },
      { name: 'Income proxy', note: 'Derived from vehicle purchase price' },
    ],
    tealStat: { value: '50+', label: 'tracked vehicle makes' },
  },
  {
    num: '02',
    label: 'Live Telemetry',
    headline: 'State of Charge tells you everything.',
    body: `A driver arriving at 8% SoC drove 180+ miles to get here. They are plugging in for 45 minutes minimum — and the OCPP stream confirms it in real time. This is not estimated viewability. It is verified dwell, updated by the second throughout the session. We know the duration before the first ad break starts.`,
    signals: [
      { name: 'SoC at session start', note: 'Real-time from OCPP stream' },
      { name: 'Charging rate (kW)', note: 'L2 vs. DCFC behaviour signal' },
      { name: 'Estimated session duration', note: 'Derived from SoC delta + battery capacity' },
      { name: 'Miles driven to station', note: 'Inferred from arrival SoC' },
      { name: 'Session frequency', note: 'Recurring vs. one-time charger' },
    ],
    tealStat: { value: '18–52', label: 'min guaranteed dwell (by daypart)' },
  },
  {
    num: '03',
    label: 'Location Context',
    headline: 'The station is the segment.',
    body: `A Level 2 charger at a Whole Foods flagship is a different buy than a DC fast charger at a highway rest stop. Every station is tagged at setup with venue type, station tier, geo coordinates, and surrounding POI data. That context is appended to every bid request. You are not buying a screen in a vague location — you are buying a specific environment.`,
    signals: [
      { name: 'Venue type', note: 'Luxury retail · Grocery · Hotel · Airport · Highway' },
      { name: 'Station tier', note: 'L2 vs. DCFC (session length predictor)' },
      { name: 'Geo coordinates', note: 'Charger-level precision' },
      { name: 'ZIP+4 targeting', note: 'Sub-ZIP geo segmentation' },
      { name: 'Surrounding POI index', note: 'Retail, dining, residential density' },
    ],
    tealStat: { value: 'ZIP+4', label: 'geo precision at every station' },
  },
];

const COMPARISON = [
  {
    signal: 'Identity source',
    videoev: 'EVCCID / Identity Graph',
    cookies: 'Browser / device ID',
    dooh: 'Panel + credit bureau',
  },
  {
    signal: 'Signal type',
    videoev: 'Deterministic',
    cookies: 'Probabilistic',
    dooh: 'Probabilistic',
  },
  {
    signal: 'Income proxy',
    videoev: 'MSRP (hard data)',
    cookies: 'Credit model',
    dooh: 'Credit / survey',
  },
  {
    signal: 'Dwell time',
    videoev: 'Live SoC (verified)',
    cookies: 'N/A',
    dooh: 'Estimated',
  },
  {
    signal: 'Location precision',
    videoev: 'Charger-level',
    cookies: 'IP / ZIP code',
    dooh: 'Billboard radius',
  },
  {
    signal: 'Cookie dependency',
    videoev: 'None',
    cookies: 'Required',
    dooh: 'Partial',
  },
];

export default function TargetingPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* ─── PAGE HERO ───────────────────────────────────────────────── */}
      <section
        className="relative"
        style={{
          paddingTop: '8rem',
          paddingBottom: '5rem',
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,66,37,0.2) 0%, transparent 65%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Audience & Data</p>
          <h1
            className="font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}
          >
            The charger already knows more{' '}
            <span className="accent-text">than your DMP.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.75vw, 1.125rem)',
              color: 'var(--text-2)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '56ch',
              margin: '0 auto 2.5rem',
            }}
          >
            Every OCPP session delivers three layers of signal: vehicle identity, live
            telemetry, and location context. None of it is modeled. None of it comes from a
            panel. It comes from the wire.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            {['OCPP 2.0.1', 'Session-resolved', 'Zero cookie dependency', 'Live telemetry'].map(
              (badge) => (
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
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The problem</p>
              <h2
                className="font-bold"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                "Luxury auto intender" is a survey panel in a trench coat.
              </h2>
              <p
                style={{
                  color: 'var(--text-2)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: '1.25rem',
                }}
              >
                Third-party cookies are deprecated. Most DOOH audience data is credit bureau
                inference packaged into a DSP UI. The "luxury auto intender" segment your planner
                is buying against was built from self-reported surveys and income modeling.
                You are buying a profile. We give you the car.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
                VideoEV data originates at the OCPP layer — the protocol that governs the
                physical connection between an EV and a charger. What crosses the wire is an
                encrypted hardware identifier, not a vehicle profile. VideoEV resolves it. The
                match goes upstream to every bid request.
              </p>
            </div>

            {/* Problem vs solution visual */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: 'Traditional DOOH targeting',
                  bad: true,
                  items: [
                    'Credit bureau income model ± wide margin',
                    '"Auto intender" from DMP panel (self-reported)',
                    'Dwell time: estimated from foot traffic proxy',
                    'Location: billboard radius (200–500m)',
                  ],
                },
                {
                  label: 'VideoEV — direct from OCPP',
                  bad: false,
                  items: [
                    'Session-resolved make, model, year, trim',
                    'MSRP-derived income (public, hard data)',
                    'Dwell: live State of Charge from the charger',
                    'Location: specific station, venue type, ZIP+4',
                  ],
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-5"
                  style={{
                    background: card.bad ? 'rgba(255,255,255,0.025)' : 'rgba(0,66,37,0.08)',
                    border: `1px solid ${card.bad ? 'rgba(255,255,255,0.1)' : 'rgba(0,66,37,0.3)'}`,
                  }}
                >
                  <p
                    className="eyebrow"
                    style={{ marginBottom: '0.875rem', color: card.bad ? 'var(--text-2)' : 'var(--accent)' }}
                  >
                    {card.label}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          style={{
                            marginTop: '0.25rem',
                            flexShrink: 0,
                            fontSize: '0.7rem',
                            color: card.bad ? 'rgba(255,255,255,0.28)' : 'var(--accent)',
                          }}
                        >
                          {card.bad ? '✕' : '✓'}
                        </span>
                        <span
                          style={{
                            fontSize: '0.875rem',
                            color: card.bad ? 'var(--text-2)' : 'var(--text-2)',
                            lineHeight: 1.55,
                            opacity: card.bad ? 0.55 : 1,
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIGNAL LAYERS ───────────────────────────────────────────── */}
      <section className="py-24" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl" style={{ marginBottom: '4rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Signal layers</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              Three layers. All deterministic. All from the source.
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {SIGNAL_LAYERS.map((layer) => (
              <div
                key={layer.num}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--surface)',
                  borderTop: '1px solid rgba(0,168,150,0.3)',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">

                  {/* Left — copy */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center gap-3" style={{ marginBottom: '1.25rem' }}>
                      <span
                        className="stat-num font-bold"
                        style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}
                      >
                        {layer.num}
                      </span>
                      <div style={{ width: '1px', height: '10px', background: 'var(--border)', flexShrink: 0 }} />
                      <span className="eyebrow">{layer.label}</span>
                    </div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        marginBottom: '1rem',
                      }}
                    >
                      {layer.headline}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-2)',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        marginBottom: '2rem',
                      }}
                    >
                      {layer.body}
                    </p>

                    {/* Teal stat */}
                    <div className="flex items-baseline gap-2">
                      <span
                        className="stat-num font-bold"
                        style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}
                      >
                        {layer.tealStat.value}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>
                        {layer.tealStat.label}
                      </span>
                    </div>
                  </div>

                  {/* Right — signal list */}
                  <div
                    className="lg:col-span-2 border-t lg:border-t-0 lg:border-l px-6 py-8 flex flex-col justify-center"
                    style={{ borderColor: 'var(--border)' }}
                  >
                      <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Signal fields</p>
                      <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--border)' }}>
                        {layer.signals.map((sig) => (
                          <div
                            key={sig.name}
                            className="py-3.5 flex items-start justify-between gap-4"
                            style={{ borderBottom: '1px solid var(--border)' }}
                          >
                            <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>{sig.name}</span>
                            <span
                              style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-3)',
                                textAlign: 'right',
                                flexShrink: 0,
                                maxWidth: '16ch',
                                lineHeight: 1.4,
                              }}
                            >
                              {sig.note}
                            </span>
                          </div>
                        ))}
                      </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl" style={{ marginBottom: '3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Signal comparison</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              Where our data sits vs. the alternatives.
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)', minWidth: '540px' }}>
              {/* Table header */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: '1.75fr 1.5fr 1.25fr 1.25fr',
                  background: 'var(--surface-2)',
                  borderBottom: '1px solid var(--border)',
                  padding: '0.75rem 1.5rem',
                }}
              >
                <span className="eyebrow" style={{ fontSize: '0.6rem' }}>Signal</span>
                <span className="eyebrow" style={{ fontSize: '0.6rem', color: 'var(--accent)' }}>VideoEV</span>
                <span className="eyebrow" style={{ fontSize: '0.6rem' }}>3P Cookies</span>
                <span className="eyebrow" style={{ fontSize: '0.6rem' }}>DOOH Proxy</span>
              </div>

              {/* Table rows */}
              {COMPARISON.map((row, i) => (
                <div
                  key={row.signal}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: '1.75fr 1.5fr 1.25fr 1.25fr',
                    padding: '0.875rem 1.5rem',
                    borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-2)' }}>{row.signal}</span>
                  <span className="font-semibold" style={{ fontSize: '0.8125rem', color: 'var(--accent)' }}>
                    {row.videoev}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>{row.cookies}</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>{row.dooh}</span>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-3)',
              lineHeight: 1.6,
            }}
          >
            OCPP (Open Charge Point Protocol) is the industry-standard communication layer between
            EV charging stations and network operators. VideoEV reads vehicle data at this layer —
            before it reaches any ad tech stack.
          </p>
        </div>
      </section>

      {/* ─── AUDIENCE BUILDER + DAYPARTING ────────────────────────────── */}
      <TargetingSection />
      <Dayparting />

      {/* ─── BOTTOM CTA ───────────────────────────────────────────────── */}
      <DualCTA />

      <Footer />
      <ContactModal />
    </main>
  );
}
