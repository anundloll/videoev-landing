// ─── Identity Graph mini flow diagram ────────────────────────────────────────
function IdentityGraphDiagram() {
  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}
    >
      {/* Header bar */}
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="eyebrow" style={{ fontSize: '0.58rem' }}>Hybrid Identity Resolution</span>
        <span className="stat-num" style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>84% confidence</span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          {/* Input signals column */}
          <div className="flex flex-col gap-1.5 flex-shrink-0" style={{ minWidth: 0 }}>
            {[
              { label: 'OCPP Session', sublabel: 'RFID hash · EVCCID', kind: 'deterministic' },
              { label: 'Geofence Ping', sublabel: 'Mobile Ad ID', kind: 'probabilistic' },
              { label: '800V Profile', sublabel: 'Charge curve', kind: 'deterministic' },
            ].map((s) => (
              <div
                key={s.label}
                className="px-2 py-1.5 rounded-lg"
                style={{
                  background: s.kind === 'deterministic' ? 'rgba(0,66,37,0.14)' : 'rgba(0,168,150,0.05)',
                  border: `1px solid ${s.kind === 'deterministic' ? 'rgba(0,66,37,0.35)' : 'rgba(0,168,150,0.15)'}`,
                }}
              >
                <div
                  className="font-medium"
                  style={{ fontSize: '0.68rem', color: s.kind === 'deterministic' ? 'var(--accent)' : 'var(--accent-dim)', lineHeight: 1.2 }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-3)', marginTop: '0.125rem' }}>{s.sublabel}</div>
                <div
                  className="mt-1 inline-block px-1.5 rounded"
                  style={{
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    background: s.kind === 'deterministic' ? 'rgba(0,66,37,0.22)' : 'rgba(0,168,150,0.08)',
                    color: s.kind === 'deterministic' ? 'var(--accent)' : 'var(--accent-dim)',
                  }}
                >
                  {s.kind}
                </div>
              </div>
            ))}
          </div>

          {/* Connector arrow */}
          <div className="flex flex-col items-center gap-1 flex-shrink-0 px-0.5">
            {/* Dashed line visual */}
            <div style={{ width: '1px', height: '28px', background: 'rgba(0,66,37,0.3)', borderLeft: '1px dashed rgba(0,168,150,0.4)' }} />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M2 7h10M7 3l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            </svg>
            <div style={{ width: '1px', height: '28px', borderLeft: '1px dashed rgba(59,130,246,0.4)' }} />
          </div>

          {/* Clean Room node */}
          <div className="flex-shrink-0">
            <div
              className="px-2.5 py-2 rounded-lg text-center"
              style={{
                background: 'rgba(0,66,37,0.08)',
                border: '1px solid rgba(0,66,37,0.25)',
                minWidth: '64px',
              }}
            >
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.25rem' }}>
                Clean Room
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ display: 'block', margin: '0 auto 4px' }}>
                <rect x="3" y="6" width="8" height="6" rx="1.5" stroke="var(--accent)" strokeWidth="1.2"/>
                <path d="M5 6V4.5a2 2 0 014 0V6" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-1)' }}>LiveRamp</div>
              <div style={{ fontSize: '0.58rem', color: 'var(--text-3)' }}>+ Experian</div>
            </div>
          </div>

          {/* Arrow to output */}
          <div className="flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            </svg>
          </div>

          {/* Unified profile output */}
          <div
            className="flex-1 rounded-lg p-2.5"
            style={{
              background: 'rgba(0,168,150,0.05)',
              border: '1px solid rgba(0,168,150,0.2)',
              minWidth: 0,
            }}
          >
            <div className="eyebrow mb-1.5" style={{ fontSize: '0.55rem' }}>VideoEV Unified Profile</div>
            <div className="font-bold" style={{ fontSize: '0.78rem', lineHeight: 1.25 }}>2024 Porsche Taycan</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-3)', marginTop: '0.25rem' }}>trim unconfirmed</div>
            <div className="mt-2 flex flex-col gap-1">
              {[
                { k: 'Confidence', v: '84%' },
                { k: 'Est. HHI', v: '$180k+' },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between">
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-3)' }}>{r.k}</span>
                  <span className="stat-num font-semibold" style={{ fontSize: '0.68rem', color: 'var(--accent)' }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-3" style={{ borderTop: '1px solid var(--border)', paddingTop: '0.625rem' }}>
          <div className="flex items-center gap-1.5">
            <div style={{ width: '16px', height: '1px', borderTop: '1.5px dashed rgba(0,168,150,0.6)' }} />
            <span style={{ fontSize: '0.58rem', color: 'var(--text-3)' }}>Deterministic</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div style={{ width: '16px', height: '1px', borderTop: '1.5px dashed rgba(59,130,246,0.5)' }} />
            <span style={{ fontSize: '0.58rem', color: 'var(--text-3)' }}>Probabilistic</span>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1.5" y="4" width="7" height="4.5" rx="1" stroke="var(--text-3)" strokeWidth="1"/>
              <path d="M3.5 4V3a1.5 1.5 0 013 0v1" stroke="var(--text-3)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: '0.58rem', color: 'var(--text-3)' }}>No PII leaves clean room</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Data Clean Room diagram ──────────────────────────────────────────────────
function CleanRoomDiagram() {
  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}
    >
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="eyebrow" style={{ fontSize: '0.58rem' }}>Clean Room Matching</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>Secure environment</span>
      </div>
      <div className="p-4">
        <div className="flex gap-3 items-start">
          {/* Brand data in */}
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.25rem' }}>Brand Data In</div>
            {['CRM list', 'CDP segment', 'Pixel audience'].map((item) => (
              <div
                key={item}
                className="px-2 py-1 rounded"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', fontSize: '0.68rem', color: 'var(--text-2)' }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Matching vault */}
          <div className="flex items-center gap-1.5 mt-6">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div
              className="px-2.5 py-2 rounded-lg text-center"
              style={{ background: 'rgba(0,66,37,0.1)', border: '1px solid rgba(0,66,37,0.3)', minWidth: '60px' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'block', margin: '0 auto 4px' }}>
                <rect x="2" y="7" width="12" height="7" rx="2" stroke="var(--accent)" strokeWidth="1.3"/>
                <path d="M5 7V5a3 3 0 016 0v2" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="8" cy="10.5" r="1" fill="var(--accent)"/>
              </svg>
              <div style={{ fontSize: '0.62rem', fontWeight: 600, color: 'var(--accent)' }}>Match</div>
              <div style={{ fontSize: '0.56rem', color: 'var(--text-3)' }}>Isolated</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Outputs */}
          <div className="flex-1 flex flex-col gap-1.5">
            <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.25rem' }}>Outputs</div>
            {[
              { label: 'Matched reach', value: '8,240' },
              { label: 'Overlap %', value: '34%' },
              { label: 'Suppression list', value: '✓' },
            ].map((o) => (
              <div
                key={o.label}
                className="flex items-center justify-between px-2 py-1 rounded"
                style={{ background: 'rgba(0,168,150,0.05)', border: '1px solid rgba(0,168,150,0.15)' }}
              >
                <span style={{ fontSize: '0.65rem', color: 'var(--text-2)' }}>{o.label}</span>
                <span className="stat-num font-semibold" style={{ fontSize: '0.68rem', color: 'var(--accent)' }}>{o.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integration badges */}
        <div className="flex flex-wrap gap-1.5 mt-3" style={{ borderTop: '1px solid var(--border)', paddingTop: '0.625rem' }}>
          <span style={{ fontSize: '0.58rem', color: 'var(--text-3)', marginRight: '0.25rem', lineHeight: '20px' }}>Activates via:</span>
          {['AWS S3', 'Snowflake', 'AMC'].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded"
              style={{ fontSize: '0.6rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Vehicle Intelligence diagram ─────────────────────────────────────────────
function IntelligenceDiagram() {
  const ROWS = [
    { dimension: 'Make / Model / Year', value: '2024 Porsche Taycan 4S', live: true },
    { dimension: 'Battery capacity', value: '93.4 kWh', live: true },
    { dimension: 'Charge frequency', value: '4.2× / month', live: false },
    { dimension: 'Avg dwell time', value: '28 min', live: false },
    { dimension: 'Home vs. away', value: '32% home', live: false },
  ];
  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}
    >
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="eyebrow" style={{ fontSize: '0.58rem' }}>Vehicle Intelligence Feed</span>
        <span
          className="flex items-center gap-1"
          style={{ fontSize: '0.68rem', color: 'var(--accent)' }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 4px var(--accent)' }} />
          Live
        </span>
      </div>
      <div>
        {ROWS.map((row, i) => (
          <div
            key={row.dimension}
            className="flex items-center justify-between px-4 py-2.5"
            style={{ borderBottom: i < ROWS.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <span style={{ fontSize: '0.68rem', color: 'var(--text-3)' }}>{row.dimension}</span>
            <span
              className="stat-num font-semibold"
              style={{ fontSize: '0.72rem', color: row.live ? 'var(--accent)' : 'var(--text-2)' }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)', background: 'rgba(0,66,37,0.04)' }}
      >
        <span style={{ fontSize: '0.62rem', color: 'var(--text-3)' }}>Updated every session</span>
        <span style={{ fontSize: '0.62rem', color: 'var(--text-3)' }}>248k vehicles tracked</span>
      </div>
    </div>
  );
}

// ─── Product data ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    n: '01',
    name: 'Vehicle Identity Graph',
    tagline: 'The identity layer.',
    description:
      'Persistent, privacy-safe vehicle profiles built from OCPP 2.0.1 charging session data. Resolves hardware-level session identifiers to vehicle make, model, year, battery capacity, and charge behaviour — no cookies, no device IDs.',
    capabilities: [
      'OCPP 2.0.1 session resolution — deterministic, hardware-derived',
      'Make · Model · Year · MSRP tier · Battery spec',
      'Dwell time, charge frequency, home vs. away pattern',
      'Location cluster modelling from multi-session history',
    ],
    Diagram: IdentityGraphDiagram,
    flowsInto: 'Feeds Data Clean Room →',
  },
  {
    n: '02',
    name: 'Data Clean Room',
    tagline: 'Secure first-party matching.',
    description:
      "Brands bring CRM and CDP data. VideoEV provides the Vehicle Identity Graph as the identity spine. Matching runs in an isolated environment — raw records never leave. Outputs include matched reach estimates, overlap analysis, suppression lists, and lookalike seeds.",
    capabilities: [
      'CRM / CDP onboarding — raw data stays inside the room',
      'Matched reach · audience overlap · suppression lists',
      'Lookalike seed generation from matched segments',
      'Direct activation via AWS S3, Snowflake, and Amazon MC',
    ],
    Diagram: CleanRoomDiagram,
    flowsInto: 'Feeds Vehicle Intelligence →',
  },
  {
    n: '03',
    name: 'Vehicle Intelligence',
    tagline: 'Real-time EV audience signals.',
    description:
      'Live and historical insights on EV drivers at the exact moment of charge. Powers contextual creative decisions and granular audience segmentation — updated every session, not every quarter.',
    capabilities: [
      'Make / model / year · battery capacity · charge frequency',
      'Dwell time · station type · home vs. away charge behaviour',
      'Location pattern clustering by station category',
      'Session-frequency segmentation: light / regular / power user',
    ],
    Diagram: IntelligenceDiagram,
    flowsInto: null,
  },
];

// ─── Main export ──────────────────────────────────────────────────────────────
export default function DataProducts() {
  return (
    <section
      id="data-products"
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Data Products</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              marginBottom: '1.125rem',
            }}
          >
            Three layers that turn a charging session into addressable media
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Each product works standalone. Combined, they form a closed-loop data stack —
            from identity resolution through clean-room matching to real-time audience
            intelligence — built entirely on OCPP charging signals.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => {
            const { Diagram } = product;
            return (
              <div
                key={product.n}
                className="card-hover rounded-2xl flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  padding: '1.75rem',
                  borderTop: '2px solid rgba(0,168,150,0.25)',
                }}
              >
                {/* Number badge */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: 'rgba(0,66,37,0.2)',
                    border: '1px solid rgba(0,66,37,0.4)',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.04em',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {product.n}
                </div>

                {/* Name + tagline */}
                <h3
                  className="font-bold mb-1"
                  style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  {product.name}
                </h3>
                <p className="mb-4" style={{ fontSize: '0.8125rem', color: 'var(--text-3)', fontWeight: 400 }}>
                  {product.tagline}
                </p>

                {/* Mini diagram */}
                <Diagram />

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-2)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                    fontWeight: 300,
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-col gap-2.5 mb-5">
                  {product.capabilities.map((cap) => (
                    <div key={cap} className="flex gap-3">
                      <div
                        className="w-1.5 flex-shrink-0 rounded-full mt-1.5"
                        style={{ background: 'var(--accent)', height: '8px', opacity: 0.7 }}
                      />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Flow indicator */}
                {product.flowsInto && (
                  <div
                    className="flex items-center gap-1.5 mt-auto pt-4"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <div className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)', opacity: 0.6 }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontWeight: 500 }}>
                      {product.flowsInto}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom callout — data stack summary */}
        <div
          className="mt-10 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ background: 'rgba(0,66,37,0.06)', border: '1px solid rgba(0,66,37,0.2)' }}
        >
          <div>
            <div className="font-semibold mb-1.5" style={{ fontSize: '0.9375rem' }}>
              Available as a full data stack or individual modules
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-2)', fontWeight: 300, maxWidth: '52ch' }}>
              Activate through our managed service or integrate directly via API.
              Clean room access available for enterprise data partnerships.
            </div>
          </div>
          <a
            href="https://data.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0"
            style={{ fontSize: '0.875rem', whiteSpace: 'nowrap' }}
          >
            Explore live dashboard
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
