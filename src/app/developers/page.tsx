'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { openModal } from '@/lib/openModal';

const ENDPOINTS = [
  {
    method: 'POST',
    path: '/v1/webhooks/session-event',
    description: 'Ingest a charging session lifecycle event from any CSMS.',
    auth: 'Bearer token',
    badge: 'Core',
  },
  {
    method: 'GET',
    path: '/v1/sessions/{session_id}',
    description: 'Retrieve the normalized record for a specific session.',
    auth: 'Bearer token',
    badge: 'Core',
  },
  {
    method: 'GET',
    path: '/v1/segments',
    description: 'List available AMC audience segments for targeting.',
    auth: 'Bearer token',
    badge: 'Attribution',
  },
  {
    method: 'POST',
    path: '/v1/attribution/match',
    description: 'Match a hashed vehicle token against an AMC segment.',
    auth: 'Bearer token',
    badge: 'Attribution',
  },
  {
    method: 'GET',
    path: '/v1/health',
    description: 'Platform health check — returns service status.',
    auth: 'None',
    badge: 'Utility',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Get your API key',
    body: 'Request sandbox access from the VideoEV partnerships team. You\'ll receive a Bearer token scoped to your CSMS or ad network.',
    code: null,
  },
  {
    num: '02',
    title: 'Send your first event',
    body: 'POST a session-event webhook. VideoEV normalizes the payload, hashes the vehicle token, and returns segment eligibility.',
    code: `curl -X POST https://api.videoev.io/v1/webhooks/session-event \\
  -H "Authorization: Bearer <your_api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event_type": "session_start",
    "session_id": "ev_sess_f7a2b4c",
    "hashed_vehicle_token": "sha256:a3f4b2c8d9e1...",
    "charger_id": "site_xyz_port_2",
    "current_soc_percent": 18,
    "estimated_dwell_time_mins": 42,
    "network_id": "evconnect_west",
    "timestamp_utc": "2026-03-08T14:22:33Z"
  }'`,
  },
  {
    num: '03',
    title: 'Receive the response',
    body: 'VideoEV returns segment eligibility, recommended creative format, and estimated inventory window — ready to route to your DSP.',
    code: `{
  "status": "queued",
  "ad_eligible": true,
  "matched_segment": "ev_buyer_high_intent",
  "recommended_creative_format": "video_15s",
  "estimated_inventory_window_mins": 42
}`,
  },
];

const METHOD_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  GET: {
    bg: 'rgba(100,160,255,0.1)',
    border: 'rgba(100,160,255,0.25)',
    text: 'rgba(130,185,255,0.95)',
  },
  POST: {
    bg: 'rgba(0,66,37,0.2)',
    border: 'rgba(0,66,37,0.45)',
    text: 'var(--accent-green)',
  },
};

const BADGE_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Core: {
    bg: 'rgba(212,175,55,0.08)',
    border: 'rgba(212,175,55,0.2)',
    text: 'var(--accent)',
  },
  Attribution: {
    bg: 'rgba(0,66,37,0.12)',
    border: 'rgba(0,66,37,0.3)',
    text: 'var(--accent-green)',
  },
  Utility: {
    bg: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.1)',
    text: 'rgba(255,255,255,0.4)',
  },
};

export default function DevelopersPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <div style={{ paddingTop: '4rem' }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ padding: '3.5rem 1.5rem 2rem' }}
        >
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
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(0,66,37,0.15)',
                border: '1px solid rgba(0,66,37,0.4)',
                color: 'var(--accent-green)',
              }}
            >
              Developers
            </div>

            <h1
              className="font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text)' }}
            >
              Integrate in{' '}
              <span style={{ color: 'var(--accent)' }}>Minutes.</span>
              <br />
              Ship Attribution at Scale.
            </h1>

            <p
              className="max-w-2xl mx-auto leading-relaxed mb-8"
              style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}
            >
              One normalized webhook API. SHA-256 privacy by default. Sandbox
              environment included. Whether you're a CSMS operator or an ad tech
              team, VideoEV gives you a single integration surface for the entire
              EV charging ad stack.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => openModal('partner')}
                className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm"
              >
                Request API Access →
              </button>
              <a
                href="/technology"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                }}
              >
                Read the Architecture →
              </a>
            </div>
          </div>
        </section>

        {/* ── Quickstart ────────────────────────────────────────── */}
        <section style={{ padding: '3rem 1.5rem 4rem' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(0,66,37,0.12)',
                  border: '1px solid rgba(0,66,37,0.35)',
                  color: 'var(--accent-green)',
                }}
              >
                Quickstart
              </div>
              <h2
                className="font-bold mb-3"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: 'var(--text)' }}
              >
                Three Steps to Live
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                From sandbox credentials to production events.
              </p>
            </div>

            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: '1px solid rgba(0,66,37,0.25)',
                    background: 'rgba(0,66,37,0.04)',
                  }}
                >
                  {/* Step header */}
                  <div className="flex items-start gap-4 p-5 pb-4">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'rgba(0,66,37,0.2)',
                        border: '1px solid rgba(0,66,37,0.45)',
                        color: 'var(--accent)',
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div
                        className="font-semibold mb-1"
                        style={{ color: 'var(--text)', fontSize: '1rem' }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          lineHeight: '1.65',
                        }}
                      >
                        {step.body}
                      </div>
                    </div>
                  </div>

                  {/* Code block */}
                  {step.code && (
                    <div
                      style={{
                        background: '#060b09',
                        borderTop: '1px solid rgba(0,66,37,0.2)',
                        padding: '1rem 1.25rem',
                        overflowX: 'auto',
                      }}
                    >
                      <pre
                        style={{
                          margin: 0,
                          fontFamily:
                            '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                          fontSize: '0.78rem',
                          lineHeight: '1.7',
                          color: '#c8d9cc',
                          whiteSpace: 'pre',
                        }}
                      >
                        {i === 1
                          ? /* Step 2 — curl command with coloring */
                            renderCurlCode(step.code)
                          : /* Step 3 — JSON response */
                            renderJsonCode(step.code)}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── API Endpoints ─────────────────────────────────────── */}
        <section
          style={{
            padding: '4rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(0,66,37,0.12)',
                  border: '1px solid rgba(0,66,37,0.35)',
                  color: 'var(--accent-green)',
                }}
              >
                API Reference
              </div>
              <h2
                className="font-bold mb-3"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: 'var(--text)' }}
              >
                Endpoints
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Base URL:{' '}
                <code
                  style={{
                    fontFamily: 'monospace',
                    background: 'rgba(0,66,37,0.15)',
                    border: '1px solid rgba(0,66,37,0.3)',
                    color: 'var(--accent-green)',
                    padding: '0.1em 0.5em',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                  }}
                >
                  https://api.videoev.io
                </code>
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Table header */}
              <div
                className="grid items-center px-5 py-3"
                style={{
                  gridTemplateColumns: '90px 1fr auto',
                  gap: '1rem',
                  background: 'rgba(0,66,37,0.08)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {['Method', 'Path & Description', 'Category'].map((h) => (
                  <div
                    key={h}
                    style={{
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {ENDPOINTS.map((ep, i) => {
                const mc = METHOD_COLORS[ep.method];
                const bc = BADGE_COLORS[ep.badge];
                return (
                  <div
                    key={ep.path}
                    className="grid items-start px-5 py-4"
                    style={{
                      gridTemplateColumns: '90px 1fr auto',
                      gap: '1rem',
                      borderBottom:
                        i < ENDPOINTS.length - 1
                          ? '1px solid rgba(255,255,255,0.04)'
                          : 'none',
                    }}
                  >
                    {/* Method badge */}
                    <div>
                      <span
                        className="inline-block px-2.5 py-0.5 rounded text-xs font-bold"
                        style={{
                          background: mc.bg,
                          border: `1px solid ${mc.border}`,
                          color: mc.text,
                          fontFamily: 'monospace',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {ep.method}
                      </span>
                    </div>

                    {/* Path + description */}
                    <div>
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.82rem',
                          color: 'var(--text)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {ep.path}
                      </div>
                      <div
                        style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}
                      >
                        {ep.description}
                      </div>
                    </div>

                    {/* Badge */}
                    <div>
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: bc.bg,
                          border: `1px solid ${bc.border}`,
                          color: bc.text,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {ep.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Auth & Rate Limits ────────────────────────────────── */}
        <section
          style={{
            padding: '4rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">

              {/* Authentication */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(0,66,37,0.06)',
                  border: '1px solid rgba(0,66,37,0.25)',
                }}
              >
                <div
                  className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    border: '1px solid rgba(0,66,37,0.35)',
                    color: 'var(--accent-green)',
                  }}
                >
                  Authentication
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '1.15rem', color: 'var(--text)' }}
                >
                  Bearer Token
                </h3>
                <p
                  className="mb-4"
                  style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.7' }}
                >
                  All requests require an{' '}
                  <code
                    style={{
                      fontFamily: 'monospace',
                      background: 'rgba(212,175,55,0.08)',
                      color: 'var(--accent)',
                      padding: '0.1em 0.4em',
                      borderRadius: '3px',
                      fontSize: '0.82rem',
                    }}
                  >
                    Authorization: Bearer &lt;token&gt;
                  </code>{' '}
                  header. Tokens are environment-scoped (sandbox / production) and
                  partner-scoped (CSMS, DSP, measurement).
                </p>
                <div
                  className="rounded-xl p-3"
                  style={{
                    background: '#060b09',
                    border: '1px solid rgba(0,66,37,0.2)',
                    fontFamily: 'monospace',
                    fontSize: '0.78rem',
                    color: 'rgba(200,217,200,0.8)',
                  }}
                >
                  <span style={{ color: 'rgba(200,180,100,0.7)' }}>Authorization:</span>{' '}
                  Bearer vev_live_f7a2b4c8d9...
                </div>
              </div>

              {/* Rate limits */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(0,66,37,0.06)',
                  border: '1px solid rgba(0,66,37,0.25)',
                }}
              >
                <div
                  className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    border: '1px solid rgba(0,66,37,0.35)',
                    color: 'var(--accent-green)',
                  }}
                >
                  Rate Limits
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '1.15rem', color: 'var(--text)' }}
                >
                  Tiered by Plan
                </h3>
                <div className="space-y-2">
                  {[
                    { tier: 'Sandbox', limit: '1,000 req/day', color: 'rgba(255,255,255,0.3)' },
                    { tier: 'Starter', limit: '50K req/day', color: 'var(--accent)' },
                    { tier: 'Production', limit: 'Unlimited', color: 'var(--accent-green)' },
                  ].map(({ tier, limit, color }) => (
                    <div
                      key={tier}
                      className="flex justify-between items-center py-2 px-3 rounded-lg"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {tier}
                      </span>
                      <span
                        style={{ fontSize: '0.82rem', fontWeight: 600, color }}
                      >
                        {limit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environments */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(0,66,37,0.06)',
                  border: '1px solid rgba(0,66,37,0.25)',
                }}
              >
                <div
                  className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    border: '1px solid rgba(0,66,37,0.35)',
                    color: 'var(--accent-green)',
                  }}
                >
                  Environments
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '1.15rem', color: 'var(--text)' }}
                >
                  Sandbox & Production
                </h3>
                <div className="space-y-2.5">
                  {[
                    {
                      env: 'Sandbox',
                      url: 'sandbox.api.videoev.io',
                      note: 'Synthetic session data, no PII',
                    },
                    {
                      env: 'Production',
                      url: 'api.videoev.io',
                      note: 'Live CSMS event streams',
                    },
                  ].map(({ env, url, note }) => (
                    <div key={env}>
                      <div
                        style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}
                      >
                        {env}
                      </div>
                      <div
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          color: 'var(--accent-green)',
                          marginBottom: '0.15rem',
                        }}
                      >
                        {url}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
                        {note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Error codes */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(0,66,37,0.06)',
                  border: '1px solid rgba(0,66,37,0.25)',
                }}
              >
                <div
                  className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(0,66,37,0.15)',
                    border: '1px solid rgba(0,66,37,0.35)',
                    color: 'var(--accent-green)',
                  }}
                >
                  Error Codes
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '1.15rem', color: 'var(--text)' }}
                >
                  Standard HTTP
                </h3>
                <div className="space-y-1.5">
                  {[
                    { code: '202', label: 'Accepted', note: 'Event queued for processing' },
                    { code: '400', label: 'Bad Request', note: 'Missing or invalid fields' },
                    { code: '401', label: 'Unauthorized', note: 'Invalid or expired token' },
                    { code: '429', label: 'Too Many Requests', note: 'Rate limit exceeded' },
                  ].map(({ code, label, note }) => (
                    <div key={code} className="flex items-start gap-3">
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color:
                            code === '202'
                              ? 'rgba(80,220,130,0.8)'
                              : 'rgba(220,100,100,0.8)',
                          flexShrink: 0,
                          paddingTop: '0.05rem',
                        }}
                      >
                        {code}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                          {label}
                        </strong>{' '}
                        — {note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
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
                Ready to build?
              </h3>
              <p
                className="mb-6"
                style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}
              >
                Request sandbox credentials and ship your first live event within
                the hour. Our integration team is available for CSMS onboarding calls.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => openModal('partner')}
                  className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm"
                >
                  Request API Access →
                </button>
                <a
                  href="/technology"
                  className="px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                  }}
                >
                  Read the Architecture
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
      <ContactModal />
    </main>
  );
}

/* ── Syntax-coloring helpers (avoid external deps) ──────────── */

function renderCurlCode(code: string) {
  // Simple line-by-line render with basic curl coloring
  const lines = code.split('\n');
  return (
    <>
      {lines.map((line, i) => {
        if (line.startsWith('curl')) {
          return (
            <span key={i}>
              <span style={{ color: 'rgba(0,200,100,0.8)' }}>curl</span>
              {line.slice(4)}
              {'\n'}
            </span>
          );
        }
        if (line.trim().startsWith('-H')) {
          const parts = line.trim().split(' ');
          const hasCont = parts[parts.length - 1] === '\\';
          if (hasCont) parts.pop();
          const [flag, ...rest] = parts;
          return (
            <span key={i}>
              {'  '}
              <span style={{ color: 'rgba(200,180,100,0.7)' }}>{flag}</span>{' '}
              <span style={{ color: 'rgba(150,220,150,0.9)' }}>{rest.join(' ')}</span>
              {hasCont ? ' \\\n' : '\n'}
            </span>
          );
        }
        if (line.includes('"') && line.includes(':')) {
          // JSON key-value in data block
          const match = line.match(/^(\s*)"([^"]+)":\s*(.+)(,?)$/);
          if (match) {
            const [, indent, key, val, comma] = match;
            return (
              <span key={i}>
                {indent}
                <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;{key}&quot;</span>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
                <span style={{ color: val.startsWith('"') ? 'rgba(150,220,150,0.9)' : 'rgba(100,180,255,0.9)' }}>
                  {val}
                </span>
                {comma}
                {'\n'}
              </span>
            );
          }
        }
        return <span key={i}>{line}{'\n'}</span>;
      })}
    </>
  );
}

function renderJsonCode(code: string) {
  const lines = code.split('\n');
  return (
    <>
      {lines.map((line, i) => {
        const match = line.match(/^(\s*)"([^"]+)":\s*(.+)(,?)$/);
        if (match) {
          const [, indent, key, val, comma] = match;
          const isString = val.startsWith('"');
          const isBool = val === 'true' || val === 'false';
          return (
            <span key={i}>
              {indent}
              <span style={{ color: 'rgba(200,180,100,0.8)' }}>&quot;{key}&quot;</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>: </span>
              <span
                style={{
                  color: isString
                    ? 'rgba(150,220,150,0.9)'
                    : isBool
                    ? 'rgba(100,180,255,0.9)'
                    : 'rgba(100,180,255,0.9)',
                }}
              >
                {val}
              </span>
              {comma}
              {'\n'}
            </span>
          );
        }
        return (
          <span key={i} style={{ color: 'rgba(255,255,255,0.3)' }}>
            {line}
            {'\n'}
          </span>
        );
      })}
    </>
  );
}
