import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import DualCTA from '@/components/DualCTA';

export const metadata: Metadata = {
  title: 'How It Works — VideoEV',
  description:
    'From OCPP session start to attribution report — how VideoEV connects media buyers to EV charging inventory and turns dwell time into revenue for charge point operators.',
};

const ADVERTISER_STEPS = [
  {
    num: '01',
    title: 'Define your segment',
    body: 'Use the Audience Builder to select vehicle make, model, and MSRP tier. Layer in daypart windows, station venue type, and geo. Every filter maps to a confirmed OCPP signal — not a panel, not a survey, not income modeling.',
    stat: { value: '248k', label: 'verified charging profiles' },
    tags: ['VIN-confirmed make / model', 'MSRP tier ($40k · $80k · $120k+)', 'Daypart: commute, shoulder, road-trip', 'Venue: luxury retail, grocery, highway'],
  },
  {
    num: '02',
    title: 'Set your CPM and flight',
    body: 'Establish your CPM floor and ceiling, total budget, and flight dates. Bid against specific inventory windows — peak commute hours trade at a premium; off-peak inventory clears at the floor. You decide where you sit in the auction.',
    stat: { value: '$28', label: 'median CPM, luxury EV segment' },
    tags: ['CPM range: $14–$52', 'Daily budget cap', 'Daypart price weighting', 'Geographic priority'],
  },
  {
    num: '03',
    title: 'Creative enters the auction',
    body: 'When a driver plugs in, the OCPP handshake triggers a bid request on our OpenRTB 2.6 exchange. Your creative is evaluated against the live session signals in under 200 milliseconds. If you win, the ad serves within the first 90 seconds of the session.',
    stat: { value: '<200ms', label: 'bid-to-serve at session start' },
    tags: ['OpenRTB 2.6 bid request', 'VAST 4.2 video delivery', 'Session-start guaranteed placement', 'Real-time floor pricing'],
  },
  {
    num: '04',
    title: 'Ads run across three surfaces',
    body: 'Creative runs simultaneously on the charger kiosk (16:9, seen at two metres), the driver\'s VideoEV mobile app, and in-car display tablets where available. Dwell is not estimated — it is verified against live State of Charge, updated throughout the session.',
    stat: { value: '18–52 min', label: 'guaranteed dwell by daypart' },
    tags: ['Kiosk: 16:9 at 2m', 'Mobile: in-app native', 'In-car: tablet display', 'Dwell verified by OCPP'],
  },
  {
    num: '05',
    title: 'Attribution fires post-session',
    body: 'AMC purchase signal match, store visit lift from mobile location data, app install tracking, and web visit correlation all report in the real-time dashboard. Attribution window is 24 hours from session end. You close the loop without third-party cookies.',
    stat: { value: '24h', label: 'attribution window to dashboard' },
    tags: ['Amazon AMC purchase match', 'Store visit lift (mobile)', 'App install attribution', 'Web visit correlation'],
  },
];

const CPO_STEPS = [
  {
    num: '01',
    title: 'Connect at the protocol layer',
    body: 'Integration happens at OCPP 2.0.1 — the protocol that already governs charging authorisation, session data, and power management on your network. There is no hardware swap, no forklift upgrade. Your stations keep operating exactly as before. We read the signal alongside your existing CMS.',
    stat: { value: 'OCPP 2.0.1', label: 'protocol-native integration' },
  },
  {
    num: '02',
    title: 'Screens go live',
    body: 'VideoEV supplies the kiosk display hardware or integrates with your existing screens. The mobile app layer activates for drivers who authenticate through your network. In-car integration connects via vehicle API where the OEM supports it. Setup is handled by our integrations team.',
    stat: { value: '3 surfaces', label: 'activated per station at launch' },
  },
  {
    num: '03',
    title: 'Every session monetised',
    body: 'From the first plug-in, your inventory enters the auction. The VideoEV exchange manages all demand — you never negotiate with advertisers, review creative, or run ad ops. We handle the full media layer. Your team does nothing differently. The screens just earn.',
    stat: { value: '100%', label: 'of sessions monetised from day one' },
  },
  {
    num: '04',
    title: 'Revenue deposits monthly',
    body: 'Your share of session yield — blended across all dayparts and all surfaces — deposits on the first of each month. CPOs on VideoEV average $3.20 per charging session across their network. No upfront capital required. No minimum stall count.',
    stat: { value: '$3.20', label: 'avg per session, all dayparts blended' },
  },
];

const SESSION_SEQUENCE = [
  { ts: '00:00.000', event: 'Driver plugs in', detail: 'OCPP StartTransaction fires to network CMS' },
  { ts: '00:00.018', event: 'VIN confirmed', detail: '2024 Porsche Taycan Turbo S · MSRP $185k' },
  { ts: '00:00.021', event: 'Session context assembled', detail: 'SoC 9% · Weekday 7:32am · Westfield Mall · DCFC' },
  { ts: '00:00.067', event: 'Bid request dispatched', detail: 'OpenRTB 2.6 · floor $18.00 · est. dwell 44 min' },
  { ts: '00:00.142', event: 'Winning bid returned', detail: '$28.40 · creative validated · VAST 4.2 payload' },
  { ts: '00:00.189', event: 'Ad serves on three surfaces', detail: 'Kiosk 16:9 · mobile in-app · in-car tablet' },
  { ts: '00:44:00', event: 'Session ends · attribution fires', detail: 'AMC match queued · store visit window open' },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
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
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>How It Works</p>
          <h1
            className="font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}
          >
            From session start{' '}
            <span className="accent-text">to attribution report.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.75vw, 1.125rem)',
              color: 'var(--text-2)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: '54ch',
              margin: '0 auto 2.5rem',
            }}
          >
            VideoEV operates at the OCPP protocol layer — the wire between the EV and the
            charger. When a driver plugs in, a bid fires. When they unplug, attribution
            closes. The whole stack, explained below.
          </p>

          {/* Jump links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#advertisers"
              style={{
                fontSize: '0.875rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              For media buyers
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span style={{ color: 'var(--border)', fontSize: '0.875rem' }}>·</span>
            <a
              href="#cpos"
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-2)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              For charge point operators
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SYSTEM OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl" style={{ marginBottom: '3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The system</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              Two sides of one marketplace.
            </h2>
          </div>

          {/* 3-node flow */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] gap-4 items-stretch">

            {/* Node 1 — Advertiser */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(0,168,150,0.07)',
                borderTop: '1px solid rgba(0,168,150,0.45)',
                borderRight: '1px solid rgba(0,168,150,0.18)',
                borderBottom: '1px solid rgba(0,168,150,0.18)',
                borderLeft: '1px solid rgba(0,168,150,0.18)',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>Brands & Agencies</p>
              <h3 className="font-semibold" style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
                Buy verified impressions
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Target by VIN-confirmed vehicle segment',
                  'Set CPM, daypart, venue type, and geo',
                  'Creative serves across kiosk, mobile, in-car',
                  'Closed-loop attribution post-session',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span style={{ color: 'var(--accent)', fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bidirectional arrow */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-2.5">
              <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                <path d="M0 7h28M22 2l6 5-6 5" stroke="rgba(0,168,150,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="32" height="14" viewBox="0 0 32 14" fill="none" style={{ transform: 'scaleX(-1)' }}>
                <path d="M0 7h28M22 2l6 5-6 5" stroke="rgba(0,168,150,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Node 2 — CPO */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(0,66,37,0.12)',
                borderTop: '1px solid rgba(0,66,37,0.6)',
                borderRight: '1px solid rgba(0,66,37,0.3)',
                borderBottom: '1px solid rgba(0,66,37,0.3)',
                borderLeft: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '0.75rem', color: 'rgba(0,168,150,0.7)' }}>Charge Point Operators</p>
              <h3 className="font-semibold" style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '1rem' }}>
                Earn yield on every session
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Connect existing OCPP 2.0.1 hardware',
                  'VideoEV supplies or integrates screens',
                  'Ad ops fully managed — no internal resource',
                  'Revenue share deposits monthly',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span style={{ color: 'rgba(0,168,150,0.7)', fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Protocol strip */}
          <div
            className="mt-8 rounded-xl px-6 py-4 flex items-center gap-6 flex-wrap"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>Protocol layer:</span>
            {['OCPP 2.0.1', 'OpenRTB 2.6', 'VAST 4.2', 'Amazon AMC', 'IABCAT 2.0'].map((p) => (
              <span
                key={p}
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
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ADVERTISER JOURNEY ──────────────────────────────────────── */}
      <section id="advertisers" className="py-24" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

            {/* Sticky label */}
            <div className="lg:sticky" style={{ top: '6rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.875rem', color: 'var(--accent)' }}>For media buyers</p>
              <h2
                className="font-bold"
                style={{
                  fontSize: 'clamp(1.625rem, 3vw, 2.125rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                Five steps from brief to closed loop.
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 300 }}>
                No new DSP seat required. Campaigns run through your existing programmatic
                stack via OpenRTB, or direct through the VideoEV self-serve console.
              </p>
            </div>

            {/* Steps */}
            <div className="relative flex flex-col gap-0">
              {/* Connecting line */}
              <div
                className="absolute hidden lg:block"
                style={{
                  top: '2.75rem',
                  bottom: '2.75rem',
                  left: '1.375rem',
                  width: '1px',
                  background: 'linear-gradient(to bottom, rgba(0,168,150,0.3), rgba(0,168,150,0.06))',
                }}
              />

              {ADVERTISER_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 items-start"
                  style={{ paddingBottom: i < ADVERTISER_STEPS.length - 1 ? '2.5rem' : 0 }}
                >
                  {/* Step badge */}
                  <div
                    className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold"
                    style={{
                      background: 'rgba(0,168,150,0.12)',
                      border: '1px solid rgba(0,168,150,0.3)',
                      color: 'var(--accent)',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.04em',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-6"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <h3
                      className="font-semibold"
                      style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em', marginBottom: '0.625rem' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-2)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {step.body}
                    </p>

                    {/* Stat */}
                    <div
                      className="inline-flex items-baseline gap-2.5"
                      style={{ marginBottom: '1rem' }}
                    >
                      <span
                        className="stat-num font-bold"
                        style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}
                      >
                        {step.stat.value}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
                        {step.stat.label}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.6875rem',
                            color: 'var(--text-3)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255,255,255,0.06)',
                            background: 'rgba(255,255,255,0.02)',
                            fontFamily: 'monospace',
                            letterSpacing: '0.03em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── CPO JOURNEY ─────────────────────────────────────────────── */}
      <section
        id="cpos"
        className="py-24"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">

            {/* Sticky label */}
            <div className="lg:sticky" style={{ top: '6rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>For CPOs</p>
              <h2
                className="font-bold"
                style={{
                  fontSize: 'clamp(1.625rem, 3vw, 2.125rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                Four steps from network to revenue.
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 300 }}>
                No upfront cost, no minimum stall count, no ad ops team required.
                Your hardware stays exactly as-is.
              </p>
            </div>

            {/* Steps */}
            <div className="relative flex flex-col gap-0">
              {/* Connecting line */}
              <div
                className="absolute hidden lg:block"
                style={{
                  top: '2.75rem',
                  bottom: '2.75rem',
                  left: '1.375rem',
                  width: '1px',
                  background: 'linear-gradient(to bottom, rgba(0,66,37,0.5), rgba(0,66,37,0.08))',
                }}
              />

              {CPO_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 items-start"
                  style={{ paddingBottom: i < CPO_STEPS.length - 1 ? '2.5rem' : 0 }}
                >
                  {/* Step badge */}
                  <div
                    className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold"
                    style={{
                      background: 'rgba(0,66,37,0.25)',
                      border: '1px solid rgba(0,66,37,0.5)',
                      color: 'var(--accent)',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.04em',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-6"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <h3
                      className="font-semibold"
                      style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em', marginBottom: '0.625rem' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-2)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        fontWeight: 300,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {step.body}
                    </p>

                    {/* Stat */}
                    <div className="inline-flex items-baseline gap-2.5">
                      <span
                        className="stat-num font-bold"
                        style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}
                      >
                        {step.stat.value}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
                        {step.stat.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── UNDER THE HOOD ───────────────────────────────────────────── */}
      <section className="py-24" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

            <div>
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Under the hood</p>
              <h2
                className="font-bold"
                style={{
                  fontSize: 'clamp(1.625rem, 3vw, 2.125rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                200 milliseconds,<br />start to serve.
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 300 }}>
                A charging session and a programmatic ad buy start simultaneously.
                The OCPP wire carries both.
              </p>
            </div>

            {/* Session log card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.6875rem',
                      color: 'var(--text-3)',
                      letterSpacing: '0.04em',
                      marginLeft: '0.5rem',
                    }}
                  >
                    session_log · stall_07 · live
                  </span>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded px-2 py-0.5"
                  style={{
                    background: 'rgba(0,168,150,0.15)',
                    border: '1px solid rgba(0,168,150,0.3)',
                    fontSize: '0.5625rem',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    fontFamily: 'monospace',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  LIVE
                </div>
              </div>

              {/* Log entries */}
              <div className="flex flex-col" style={{ background: 'rgba(5,5,5,0.98)' }}>
                {SESSION_SEQUENCE.map((entry, i) => (
                  <div
                    key={entry.ts}
                    className="flex gap-5 px-5 py-3.5"
                    style={{
                      borderBottom: i < SESSION_SEQUENCE.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    }}
                  >
                    <span
                      className="stat-num flex-shrink-0"
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.6875rem',
                        color: 'rgba(0,168,150,0.5)',
                        letterSpacing: '0.04em',
                        minWidth: '6.5rem',
                        paddingTop: '0.1rem',
                      }}
                    >
                      [{entry.ts}]
                    </span>
                    <div>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          color: '#ffffff',
                          fontWeight: 500,
                          display: 'block',
                          marginBottom: '0.2rem',
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {entry.event}
                      </span>
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.6875rem',
                          color: 'rgba(255,255,255,0.35)',
                          lineHeight: 1.5,
                        }}
                      >
                        {entry.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="px-5 py-4"
                style={{
                  background: 'rgba(0,66,37,0.06)',
                  borderTop: '1px solid rgba(0,66,37,0.2)',
                }}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.6 }}>
                  OCPP (Open Charge Point Protocol) governs the physical connection between an EV
                  and a charging station. VideoEV reads session signals at this layer — before
                  any ad tech stack or CMS. The data is deterministic by design.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FAQ STRIP ────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Do I need a new DSP to buy VideoEV?',
                a: 'No. VideoEV connects to your existing programmatic stack via standard OpenRTB 2.6. Direct buys are also available through the self-serve console with no seat required.',
              },
              {
                q: 'What creative formats do you accept?',
                a: 'VAST 4.2 video (15s, 30s), static display (1920×1080 and 9:16), and native in-app units. Creative specs are in the media kit.',
              },
              {
                q: 'How long does CPO integration take?',
                a: 'From signed agreement to first live session: four to six weeks, depending on network size and existing hardware configuration. Our integrations team handles everything.',
              },
              {
                q: 'What is the minimum spend for a campaign?',
                a: 'Direct campaigns start at $5,000. Programmatic buys have no minimum — you set CPM and budget through your DSP like any other inventory source.',
              },
              {
                q: 'Is the dwell time really guaranteed?',
                a: 'The EV cannot leave while charging. Session duration is derived from live State of Charge and battery capacity — it is a physical constraint, not an estimate.',
              },
              {
                q: 'How do CPOs receive payment?',
                a: 'Revenue share deposits via ACH on the 1st of each month. You receive a monthly statement with session counts, yields by daypart, and CPM breakdown.',
              },
            ].map((item) => (
              <div key={item.q}>
                <p
                  className="font-semibold"
                  style={{ fontSize: '0.9375rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
                >
                  {item.q}
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.65, fontWeight: 300 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────────── */}
      <DualCTA />
      <Footer />
      <ContactModal />
    </main>
  );
}
