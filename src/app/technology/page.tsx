'use client';

import Nav from '@/components/Nav';
import TechSpecs from '@/components/TechSpecs';
import EnterpriseIntegrations from '@/components/EnterpriseIntegrations';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { openModal } from '@/lib/openModal';

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
    icon: '⚡',
  },
  {
    num: '02',
    label: 'SHA-256 Hash',
    detail: 'VideoEV applies one-way SHA-256 to the vehicle identifier in-memory.',
    icon: '🔒',
  },
  {
    num: '03',
    label: 'Raw Identifier Discarded',
    detail: 'Original VIN is never written to disk, never logged, never stored.',
    icon: '🗑',
  },
  {
    num: '04',
    label: 'Hashed Token Released',
    detail: 'hashed_vehicle_token enters the ad pipeline for AMC segment matching.',
    icon: '✓',
  },
];

const WEBHOOK_REQUEST = `POST /v1/webhooks/session-event
Authorization: Bearer <your_api_key>
Content-Type: application/json

{
  "event_type": "session_update",
  "session_id": "ev_sess_f7a2b4c",
  "hashed_vehicle_token": "sha256:a3f4b2c8d9e1f2a3b4c5d6e7f8
                            a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
  "charger_id": "site_xyz_port_2",
  "current_soc_percent": 42,
  "estimated_dwell_time_mins": 35,
  "network_id": "evconnect_west",
  "timestamp_utc": "2026-03-08T14:22:33Z"
}`;

const WEBHOOK_RESPONSE = `HTTP/1.1 202 Accepted

{
  "status": "queued",
  "ad_eligible": true,
  "matched_segment": "ev_buyer_high_intent",
  "recommended_creative_format": "video_15s",
  "estimated_inventory_window_mins": 35
}`;

export default function TechnologyPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <div style={{ paddingTop: '4rem' }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ padding: '3.5rem 1.5rem 2rem' }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,66,37,0.12), transparent)',
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <div
              className="eyebrow inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(0,66,37,0.15)',
                border: '1px solid rgba(0,66,37,0.4)',
                color: 'var(--accent-green)',
              }}
            >
              Technology
            </div>

            <h1
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
            >
              CSMS-Agnostic{' '}
              <span style={{ color: 'var(--accent)' }}>Middleware</span>
              <br />
              for the Charging Network
            </h1>

            <p
              className="max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}
            >
              VideoEV connects to any charge management system, normalizes session data
              in real time, and delivers it to your ad stack — without ever storing a
              raw vehicle identifier.
            </p>

            {/* Stat row */}
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
                    className="font-bold"
                    style={{ fontSize: '1.5rem', color: 'var(--accent)', lineHeight: 1 }}
                  >
                    {val}
                  </div>
                  <div
                    style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.05em' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Universal CSMS Compatibility ─────────────────────── */}
        <section style={{ padding: '2rem 1.5rem 4rem' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="section-label inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(0,66,37,0.12)',
                  border: '1px solid rgba(0,66,37,0.35)',
                  color: 'var(--accent-green)',
                }}
              >
                Universal Compatibility
              </div>
              <h2
                className="font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}
              >
                One Integration. Every Network.
              </h2>
              <p
                className="max-w-xl mx-auto"
                style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}
              >
                Every CSMS exposes a different API surface. VideoEV abstracts that
                complexity into a single normalized event stream — so your ad infrastructure
                never breaks when a network upgrades their platform.
              </p>
            </div>

            {/* Architecture diagram */}
            <div
              className="rounded-2xl p-6 mb-8"
              style={{
                background: 'rgba(0,66,37,0.05)',
                border: '1px solid rgba(0,66,37,0.2)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--accent-green)' }}
                />
                <span
                  style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}
                >
                  INTEGRATION ARCHITECTURE
                </span>
              </div>

              {/* CSMS row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {CSMS_PARTNERS.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div
                      className="font-bold mb-1"
                      style={{ color: 'var(--text)', fontSize: '0.95rem' }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="inline-block px-2 py-0.5 rounded-full mb-2"
                      style={{
                        background: 'rgba(0,168,150,0.1)',
                        border: '1px solid rgba(0,168,150,0.25)',
                        color: 'var(--accent)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {p.tag.toUpperCase()}
                    </div>
                    <div
                      style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}
                    >
                      {p.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center gap-0">
                  <div
                    className="w-0.5 h-8"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,100,50,0.2), rgba(0,100,50,0.8))' }}
                  />
                  <div
                    className="font-semibold px-5 py-2 rounded-full"
                    style={{
                      background: 'rgba(0,66,37,0.35)',
                      border: '1px solid rgba(0,100,50,0.6)',
                      color: 'var(--accent-green)',
                      letterSpacing: '0.1em',
                      fontSize: '0.7rem',
                      boxShadow: '0 0 16px rgba(0,66,37,0.25)',
                    }}
                  >
                    VIDEOEV MIDDLEWARE
                  </div>
                  <div
                    className="w-0.5 h-8"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,100,50,0.8), rgba(0,100,50,0.2))' }}
                  />
                </div>
              </div>

              {/* Output row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Ad Stack', sub: 'VideoEV Webhook' },
                  { label: 'Amazon DSP', sub: 'AMC Segments' },
                  { label: 'Measurement', sub: 'Attribution API' },
                ].map((o) => (
                  <div
                    key={o.label}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: 'rgba(0,66,37,0.1)',
                      border: '1px solid rgba(0,66,37,0.3)',
                    }}
                  >
                    <div
                      className="font-semibold"
                      style={{ color: 'var(--text)', fontSize: '0.85rem' }}
                    >
                      {o.label}
                    </div>
                    <div
                      style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}
                    >
                      {o.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Zero-PII Architecture ─────────────────────────────── */}
        <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: copy */}
              <div>
                <div
                  className="section-label inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(0,66,37,0.12)',
                    border: '1px solid rgba(0,66,37,0.35)',
                    color: 'var(--accent-green)',
                  }}
                >
                  Privacy-First Architecture
                </div>
                <h2
                  className="font-bold mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text)' }}
                >
                  Zero PII.{' '}
                  <span style={{ color: 'var(--accent)' }}>Full Attribution.</span>
                </h2>
                <p
                  className="mb-6"
                  style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '1rem' }}
                >
                  Raw vehicle identifiers are hashed at the point of ingestion. The original
                  value is never written to disk, never logged, and never transmitted downstream.
                  Attribution precision is preserved through the hashed token — without
                  any PII leaving the origin system.
                </p>

                {/* Compliance badges */}
                <div className="flex flex-wrap gap-2">
                  {['GDPR Compatible', 'CCPA Aligned', 'No Raw VIN Storage', 'SHA-256 One-Way Hash'].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: 'rgba(0,66,37,0.12)',
                          border: '1px solid rgba(0,66,37,0.3)',
                          color: 'var(--accent-green)',
                        }}
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right: flow steps */}
              <div className="space-y-3">
                {PII_STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className="flex gap-4 rounded-xl p-4"
                    style={{
                      background:
                        step.num === '03'
                          ? 'rgba(180,30,30,0.06)'
                          : step.num === '04'
                          ? 'rgba(0,66,37,0.1)'
                          : 'rgba(255,255,255,0.02)',
                      border:
                        step.num === '03'
                          ? '1px solid rgba(180,30,30,0.2)'
                          : step.num === '04'
                          ? '1px solid rgba(0,66,37,0.3)'
                          : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background:
                          step.num === '03'
                            ? 'rgba(180,30,30,0.15)'
                            : 'rgba(0,66,37,0.2)',
                        border:
                          step.num === '03'
                            ? '1px solid rgba(180,30,30,0.3)'
                            : '1px solid rgba(0,66,37,0.4)',
                        color:
                          step.num === '03' ? 'rgba(220,80,80,0.9)' : 'var(--accent)',
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div
                        className="font-semibold mb-0.5"
                        style={{
                          color: step.num === '03' ? 'rgba(220,80,80,0.85)' : 'var(--text)',
                          fontSize: '0.9rem',
                          textDecoration: step.num === '03' ? 'line-through' : 'none',
                          textDecorationColor: 'rgba(220,80,80,0.5)',
                        }}
                      >
                        {step.label}
                      </div>
                      <div
                        style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.55' }}
                      >
                        {step.detail}
                      </div>
                    </div>

                    {/* Connector line to next */}
                    {i < PII_STEPS.length - 1 && (
                      <div
                        aria-hidden
                        className="absolute left-7 mt-11 w-px h-3"
                        style={{ display: 'none' }} // hidden — spacing conveys flow
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Webhook API ──────────────────────────────────────── */}
        <section
          style={{
            padding: '4rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="section-label inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(0,66,37,0.12)',
                  border: '1px solid rgba(0,66,37,0.35)',
                  color: 'var(--accent-green)',
                }}
              >
                API Reference
              </div>
              <h2
                className="font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}
              >
                The Universal Webhook Schema
              </h2>
              <p
                className="max-w-xl mx-auto"
                style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}
              >
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
                        color: 'var(--accent-green)',
                        border: '1px solid rgba(0,66,37,0.5)',
                      }}
                    >
                      POST
                    </span>
                    <span
                      style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}
                    >
                      /v1/webhooks/session-event
                    </span>
                  </div>
                  <span
                    style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                  >
                    REQUEST
                  </span>
                </div>
                <div
                  style={{
                    background: '#080d0b',
                    padding: '1.25rem 1.25rem 1.5rem',
                    overflowX: 'auto',
                  }}
                >
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
                    <span style={{ color: 'rgba(0,200,100,0.7)' }}>
                      POST /v1/webhooks/session-event
                    </span>
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
                    <span
                      style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}
                    >
                      Accepted
                    </span>
                  </div>
                  <span
                    style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                  >
                    RESPONSE
                  </span>
                </div>
                <div
                  style={{
                    background: '#080d0b',
                    padding: '1.25rem 1.25rem 1.5rem',
                    overflowX: 'auto',
                  }}
                >
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
                    <div
                      key={key}
                      className="flex items-start gap-2 mb-1.5 last:mb-0"
                    >
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
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        — {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech Specs + Enterprise Integrations ─────────────── */}
        <TechSpecs />
        <EnterpriseIntegrations />

        {/* ── CTA Strip ────────────────────────────────────────── */}
        <section style={{ padding: '3rem 1.5rem 5rem' }}>
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'rgba(0,66,37,0.08)',
                border: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <h3
                className="font-bold mb-3"
                style={{ fontSize: '1.5rem', color: 'var(--text)' }}
              >
                Ready to integrate?
              </h3>
              <p
                className="mb-6"
                style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}
              >
                Talk to our partnerships team about connecting your CSMS to the
                VideoEV middleware layer.
              </p>
              <button
                onClick={() => openModal('partner')}
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm"
              >
                Request Partner Access →
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
