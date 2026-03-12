'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import TechSpecs from '@/components/TechSpecs';
import EnterpriseIntegrations from '@/components/EnterpriseIntegrations';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { openModal } from '@/lib/openModal';

const PIPELINE_STEPS = [
  {
    num: '01',
    label: 'CSMS Event',
    body: 'Charger fires an OCPP session event. VideoEV ingests it in real time across Driivz, AMPECO, ChargeLab, and EV Connect — normalized to a single payload regardless of source.',
    tag: 'OCPP 1.6 · 2.0.1',
  },
  {
    num: '02',
    label: 'Identity Resolution',
    body: 'The EVCCID — an encrypted hardware identifier — is matched against the Vehicle Identity Graph. No VIN transmitted. One confirmed match returns Make, Model, Trim, and MSRP proxy.',
    tag: 'ISO 15118 · Deterministic',
  },
  {
    num: '03',
    label: 'Ad Auction',
    body: 'Vehicle profile passes to the SSP as a targeting signal before the first ad slot fills. Buyers bid on VIN-level segments — Tesla owners, Porsche drivers, luxury EV buyers — in real time.',
    tag: 'Real-time · SSP bid request',
  },
  {
    num: '04',
    label: 'Attribution',
    body: 'Impressions are matched to downstream purchase events via Amazon Marketing Cloud. Closed-loop attribution without a pixel — from charging session to Amazon cart.',
    tag: 'Amazon AMC · Closed-loop',
  },
];

const CSMS_PARTNERS = [
  {
    name: 'Driivz',
    tag: 'Enterprise',
    description: 'Real-time OCPP 1.6 / 2.0.1 event streams via native webhook bridge.',
  },
  {
    name: 'AMPECO',
    tag: 'Fleet',
    description: 'Session lifecycle events normalized from REST polling + push webhooks.',
  },
  {
    name: 'ChargeLab',
    tag: 'Retail',
    description: 'Cloud CSMS session data surfaced via OCPI-compatible event API.',
  },
  {
    name: 'EV Connect',
    tag: 'Commercial',
    description: 'Network session data ingested via direct certified integration.',
  },
];

const PII_STEPS = [
  {
    num: '01',
    label: 'Vehicle Arrives',
    detail: 'CSMS captures raw session event — VIN or vehicle token present.',
    highlight: false,
    strike: false,
  },
  {
    num: '02',
    label: 'SHA-256 Hash',
    detail: 'VideoEV applies one-way SHA-256 to the vehicle identifier in-memory.',
    highlight: false,
    strike: false,
  },
  {
    num: '03',
    label: 'Raw Identifier Discarded',
    detail: 'Original VIN is never written to disk, never logged, never stored.',
    highlight: false,
    strike: true,
  },
  {
    num: '04',
    label: 'Hashed Token Released',
    detail: 'hashed_vehicle_token enters the ad pipeline for AMC segment matching.',
    highlight: true,
    strike: false,
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <div style={{ paddingTop: '4rem' }}>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            paddingTop: '6rem',
            paddingBottom: '5rem',
            background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,66,37,0.2) 0%, transparent 65%)',
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Technology</p>
            <h1
              className="font-bold"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
                maxWidth: '24ch',
              }}
            >
              Four layers. One integration.{' '}
              <span className="accent-text">Zero guesswork.</span>
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
              VideoEV is a CSMS-agnostic middleware that ingests EV charging session events,
              resolves anonymous hardware identifiers to verified vehicle profiles, runs a
              real-time ad auction, and closes the attribution loop via Amazon Marketing Cloud —
              without ever storing a raw vehicle identifier.
            </p>

            {/* Stat pills */}
            <div
              className="inline-flex gap-8 flex-wrap justify-center px-6 py-4 rounded-2xl"
              style={{
                background: 'rgba(0,66,37,0.07)',
                border: '1px solid rgba(0,66,37,0.25)',
              }}
            >
              {[
                { val: '4', label: 'CSMS Integrations' },
                { val: '<50ms', label: 'Event Latency' },
                { val: '0', label: 'Raw PIIs Stored' },
                { val: '99.9%', label: 'Uptime SLA' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="font-bold stat-num"
                    style={{ fontSize: '1.5rem', color: 'var(--accent)', lineHeight: 1 }}
                  >
                    {val}
                  </div>
                  <div
                    style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── End-to-end pipeline ────────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>End-to-End Stack</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
              >
                From charger plug-in to purchase attribution
              </h2>
            </div>

            {/* Pipeline steps — vertical list with connecting lines */}
            <div
              className="flex flex-col gap-0"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {PIPELINE_STEPS.map((s) => (
                <div
                  key={s.num}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <div className="md:col-span-1">
                    <span
                      className="font-bold stat-num"
                      style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.06em' }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3
                      className="font-semibold"
                      style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '0.5rem' }}
                    >
                      {s.label}
                    </h3>
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
                  <div className="md:col-span-7">
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-2)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                        maxWidth: '56ch',
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CSMS Compatibility ─────────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Universal Compatibility</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
                >
                  One integration. Every network.
                </h2>
                <p
                  style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}
                >
                  Every CSMS exposes a different API surface. VideoEV abstracts that
                  complexity into a single normalized event stream — so your ad infrastructure
                  never breaks when a network upgrades their platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['OCPP 1.6', 'OCPP 2.0.1', 'REST polling', 'Push webhooks', 'OCPI'].map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(0,66,37,0.1)',
                        border: '1px solid rgba(0,66,37,0.25)',
                        color: 'var(--accent)',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {CSMS_PARTNERS.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl p-5 flex items-start gap-4"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold" style={{ fontSize: '0.9375rem' }}>{p.name}</span>
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            background: 'rgba(0,168,150,0.08)',
                            border: '1px solid rgba(0,168,150,0.2)',
                            color: 'var(--accent)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {p.tag.toUpperCase()}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.55 }}>
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Identity Resolution teaser ─────────────────────────── */}
        <section
          className="py-20"
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Vehicle Identity Graph</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
                >
                  The charger doesn&apos;t know what car just plugged in.{' '}
                  <span className="accent-text">We do.</span>
                </h2>
                <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>
                  Under ISO 15118, EV chargers never receive Make, Model, or VIN — only an
                  encrypted hardware identifier called an EVCCID. VideoEV built the resolution
                  layer that deterministically matches it to a verified vehicle profile before
                  the first ad slot fills.
                </p>
                <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
                  No probabilistic modelling. No behavioural inference. A confirmed match
                  attaches Make, Model, Trim, Model Year, and MSRP proxy — passed to the SSP
                  in the bid request.
                </p>
                <Link
                  href="/identity"
                  className="btn-primary"
                  style={{ display: 'inline-flex', fontSize: '0.875rem' }}
                >
                  Read the full Identity Graph explainer
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Protocol / signal card */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
              >
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}
                >
                  <span className="eyebrow text-xs">Resolution pipeline</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-semibold"
                    style={{ background: 'rgba(0,66,37,0.15)', color: 'var(--accent)', border: '1px solid rgba(0,66,37,0.3)' }}
                  >
                    ISO 15118
                  </span>
                </div>
                <div
                  className="divide-y"
                  style={{ '--tw-divide-color': 'var(--border)' } as React.CSSProperties}
                >
                  {[
                    { label: 'Input', value: 'EVCCID (hardware MAC-derived)', dim: false },
                    { label: 'Lookup', value: 'Vehicle Identity Graph', dim: false },
                    { label: 'Output: Make & Model', value: 'Confirmed — not inferred', dim: false },
                    { label: 'Output: MSRP Proxy', value: 'Income signal from vehicle class', dim: false },
                    { label: 'Output: Match confidence', value: 'High / medium / unresolved', dim: false },
                    { label: 'PII stored', value: 'None. SHA-256 hash only.', dim: true },
                  ].map((row) => (
                    <div key={row.label} className="px-5 py-3.5 flex items-start justify-between gap-4">
                      <span
                        className="font-medium"
                        style={{ fontSize: '0.8125rem', color: 'var(--text-3)', flexShrink: 0 }}
                      >
                        {row.label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          color: row.dim ? 'var(--text-3)' : 'var(--text-2)',
                          textAlign: 'right',
                          fontWeight: row.dim ? 300 : 400,
                        }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Zero PII Architecture ──────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Privacy-First Architecture</p>
                <h2
                  className="font-bold"
                  style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.4rem)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
                >
                  Zero PII.{' '}
                  <span className="accent-text">Full attribution.</span>
                </h2>
                <p
                  style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.75rem' }}
                >
                  Raw vehicle identifiers are hashed at the point of ingestion. The original
                  value is never written to disk, never logged, and never transmitted
                  downstream. Attribution precision is preserved through the hashed token —
                  without any PII leaving the origin system.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GDPR Compatible', 'CCPA Aligned', 'No Raw VIN Storage', 'SHA-256 One-Way Hash'].map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(0,66,37,0.1)',
                        border: '1px solid rgba(0,66,37,0.25)',
                        color: 'var(--accent)',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {PII_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="flex gap-4 rounded-xl p-4"
                    style={{
                      background: step.strike
                        ? 'rgba(180,30,30,0.06)'
                        : step.highlight
                        ? 'rgba(0,66,37,0.1)'
                        : 'rgba(255,255,255,0.02)',
                      border: step.strike
                        ? '1px solid rgba(180,30,30,0.2)'
                        : step.highlight
                        ? '1px solid rgba(0,66,37,0.3)'
                        : '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold stat-num"
                      style={{
                        background: step.strike ? 'rgba(180,30,30,0.15)' : 'rgba(0,66,37,0.2)',
                        border: step.strike ? '1px solid rgba(180,30,30,0.3)' : '1px solid rgba(0,66,37,0.4)',
                        color: step.strike ? 'rgba(220,80,80,0.9)' : 'var(--accent)',
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div
                        className="font-semibold mb-0.5"
                        style={{
                          color: step.strike ? 'rgba(220,80,80,0.85)' : 'var(--text-1)',
                          fontSize: '0.9rem',
                          textDecoration: step.strike ? 'line-through' : 'none',
                          textDecorationColor: 'rgba(220,80,80,0.5)',
                        }}
                      >
                        {step.label}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.55 }}>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Webhook API ──────────────────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>API Reference</p>
              <h2
                className="font-bold"
                style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
              >
                The universal webhook schema
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, marginTop: '1rem' }}>
                Every CSMS speaks a different dialect. VideoEV normalizes them into a
                single consistent payload — one integration for every network.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Request block */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,66,37,0.3)' }}
              >
                <div
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    borderBottom: '1px solid rgba(0,66,37,0.25)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold"
                      style={{
                        background: 'rgba(0,66,37,0.4)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(0,66,37,0.5)',
                      }}
                    >
                      POST
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontFamily: 'monospace' }}>
                      /v1/webhooks/session-event
                    </span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.08em' }}>
                    REQUEST
                  </span>
                </div>
                <div style={{ background: '#080d0b', padding: '1.25rem 1.25rem 1.5rem', overflowX: 'auto' }}>
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                      fontSize: '0.78rem',
                      lineHeight: '1.75',
                      color: '#c8d9cc',
                      whiteSpace: 'pre',
                    }}
                  >
                    <span style={{ color: 'rgba(0,200,100,0.7)' }}>POST /v1/webhooks/session-event</span>
                    {'\n'}
                    <span style={{ color: 'rgba(200,180,100,0.6)' }}>Authorization:</span>
                    <span style={{ color: '#c8d9cc' }}> Bearer </span>
                    <span style={{ color: 'rgba(180,130,255,0.7)' }}>&lt;your_api_key&gt;</span>
                    {'\n'}
                    <span style={{ color: 'rgba(200,180,100,0.6)' }}>Content-Type:</span>
                    <span style={{ color: '#c8d9cc' }}> application/json</span>
                    {'\n\n'}
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;event_type&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;session_update&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;session_id&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;ev_sess_f7a2b4c&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;hashed_vehicle_token&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>
                      &quot;sha256:a3f4b2c8d9e1f2a3...&quot;
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;charger_id&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;site_xyz_port_2&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;current_soc_percent&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(100,180,255,0.9)' }}>42</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;estimated_dwell_time_mins&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(100,180,255,0.9)' }}>35</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;network_id&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;evconnect_west&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;timestamp_utc&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;2026-03-08T14:22:33Z&quot;</span>
                    {'\n'}
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                  </pre>
                </div>
              </div>

              {/* Response block */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(0,66,37,0.3)' }}
              >
                <div
                  className="flex items-center justify-between px-4 py-2.5"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    borderBottom: '1px solid rgba(0,66,37,0.25)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-bold"
                      style={{
                        background: 'rgba(0,120,60,0.3)',
                        color: 'rgba(80,220,130,0.9)',
                        border: '1px solid rgba(0,150,70,0.4)',
                      }}
                    >
                      202
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontFamily: 'monospace' }}>
                      Accepted
                    </span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.08em' }}>
                    RESPONSE
                  </span>
                </div>
                <div style={{ background: '#080d0b', padding: '1.25rem 1.25rem 1.5rem', overflowX: 'auto' }}>
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                      fontSize: '0.78rem',
                      lineHeight: '1.75',
                      color: '#c8d9cc',
                      whiteSpace: 'pre',
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;status&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;queued&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;ad_eligible&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(100,180,255,0.9)' }}>true</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;matched_segment&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;ev_buyer_high_intent&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;recommended_creative_format&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(150,220,150,0.9)' }}>&quot;video_15s&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>,</span>
                    {'\n  '}
                    <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;estimated_inventory_window_mins&quot;</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                    <span style={{ color: 'rgba(100,180,255,0.9)' }}>35</span>
                    {'\n'}
                    <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                  </pre>
                </div>

                {/* Field legend */}
                <div
                  style={{
                    background: 'rgba(0,66,37,0.05)',
                    borderTop: '1px solid rgba(0,66,37,0.2)',
                    padding: '0.75rem 1.25rem',
                  }}
                >
                  {[
                    { key: 'hashed_vehicle_token', desc: 'SHA-256 of raw VIN — no PII' },
                    { key: 'current_soc_percent', desc: 'State of charge at session event' },
                    { key: 'estimated_dwell_time_mins', desc: 'Predicted session duration' },
                  ].map(({ key, desc }) => (
                    <div key={key} className="flex items-start gap-2 mb-1.5 last:mb-0">
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.7rem',
                          color: 'rgba(200,180,100,0.8)',
                          flexShrink: 0,
                          paddingTop: '0.05rem',
                        }}
                      >
                        {key}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>
                        — {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TechSpecs + Enterprise Integrations ──────────────── */}
        <TechSpecs />
        <EnterpriseIntegrations />

        {/* ── CTA strip ─────────────────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'rgba(0,66,37,0.08)',
                border: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <h3
                className="font-bold mb-3"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                Ready to integrate?
              </h3>
              <p
                style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300, maxWidth: '42ch', margin: '0 auto 2rem' }}
              >
                Talk to our partnerships team about connecting your CSMS to the
                VideoEV middleware layer.
              </p>
              <button
                onClick={() => openModal('partner')}
                className="btn-primary"
                style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem' }}
              >
                Request Partner Access
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

      </div>

      <Footer />
      <ContactModal />
    </main>
  );
}
