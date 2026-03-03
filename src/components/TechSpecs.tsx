const ADTECH = [
  {
    abbr: 'pDOOH',
    name: 'Programmatic Digital Out-of-Home',
    desc: 'Automated buying and selling of screen inventory — no manual IO required. VideoEV\'s kiosk and in-car surfaces are available as pDOOH inventory, discoverable through any compatible DSP.',
    tier: 'Buying Layer',
  },
  {
    abbr: 'DSP',
    name: 'Demand Side Platform',
    desc: 'Where brands and agencies buy ads programmatically. VideoEV inventory is directly accessible via Amazon DSP (primary, enables AMC attribution) and The Trade Desk via OpenRTB 2.6.',
    tier: 'Demand',
  },
  {
    abbr: 'SSP',
    name: 'Supply Side Platform',
    desc: 'VideoEV operates its own SSP layer, exposing charging-session inventory to DSPs. Sellers can set floor prices per station network, MSRP tier, or station environment.',
    tier: 'Supply',
  },
];

const PROTOCOLS = [
  {
    standard: 'OpenRTB 2.6',
    badge: 'Pod Bidding',
    desc: 'Full Pod Bidding support — multiple advertisers compete for individual 30-second slots within a single 20-minute charging session. Each pod can hold up to 10 ad units, enabling layered campaigns across a single impression window.',
    detail: 'Multiple buyers per session · Slot-level floor pricing',
    badgeColor: 'rgba(34,197,94,0.1)',
    badgeText: '#004225',
    badgeBorder: 'rgba(34,197,94,0.2)',
  },
  {
    standard: 'VAST 4.2',
    badge: 'Video Delivery',
    desc: 'Industry-standard video ad serving across all three surfaces. Supports interactive overlays, VPAID-compatible measurement, third-party verification tags, and proof-of-play reporting.',
    detail: 'VPAID compatible · 3rd-party verification · Proof-of-play',
    badgeColor: 'rgba(59,130,246,0.1)',
    badgeText: '#3B82F6',
    badgeBorder: 'rgba(59,130,246,0.2)',
  },
];

const DSPS = [
  { name: 'Amazon DSP', tier: 'Primary', note: 'Direct integration — enables AMC closed-loop attribution', color: '#FF9900' },
  { name: 'The Trade Desk', tier: 'OpenRTB', note: 'Via DOOH extension — full programmatic access', color: '#3B82F6' },
  { name: 'Vistar Media', tier: 'DOOH Specialist', note: 'Native DOOH DSP with location intelligence', color: '#8B5CF6' },
];

export default function TechSpecs() {
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
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Ad-Tech Architecture</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            Built to spec. Programmatic-ready.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            VideoEV supports 2026 programmatic standards. Your trading desk can
            activate a campaign without custom integration work.
          </p>
        </div>

        {/* Ad-tech layer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {ADTECH.map((a) => (
            <div
              key={a.abbr}
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="font-bold" style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--accent)' }}>
                  {a.abbr}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-3)',
                    border: '1px solid var(--border)',
                    fontWeight: 500,
                    marginTop: '3px',
                  }}
                >
                  {a.tier}
                </span>
              </div>
              <div className="font-medium mb-3" style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>
                {a.name}
              </div>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Protocol cards */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow" style={{ color: 'var(--text-3)' }}>Protocol Support</p>
            {PROTOCOLS.map((p) => (
              <div
                key={p.standard}
                className="rounded-2xl p-6"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-bold" style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                    {p.standard}
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: p.badgeColor,
                      color: p.badgeText,
                      border: `1px solid ${p.badgeBorder}`,
                      fontWeight: 600,
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '0.875rem' }}>
                  {p.desc}
                </p>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: 'monospace', letterSpacing: '0.03em' }}>
                  {p.detail}
                </div>
              </div>
            ))}
          </div>

          {/* DSP list */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow" style={{ color: 'var(--text-3)' }}>DSP Compatibility</p>
            <div className="flex flex-col gap-3">
              {DSPS.map((d) => (
                <div
                  key={d.name}
                  className="rounded-2xl p-5 flex items-start gap-4"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1" style={{ background: d.color }} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold" style={{ fontSize: '0.9375rem' }}>{d.name}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-3)', border: '1px solid var(--border)' }}
                      >
                        {d.tier}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
                      {d.note}
                    </p>
                  </div>
                </div>
              ))}
              <div
                className="rounded-2xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed var(--border)' }}
              >
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>
                  Additional DSPs and Direct IO available on request
                </p>
              </div>
            </div>

            {/* Footer bar */}
            <div
              className="rounded-2xl px-5 py-4 flex items-center justify-between gap-3"
              style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}
            >
              <div>
                <div className="font-semibold mb-0.5" style={{ fontSize: '0.875rem' }}>Custom integration?</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 300 }}>
                  Non-standard DSPs onboarded in 5 business days.
                </p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#004225' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-2)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  Spec sheet on request
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
