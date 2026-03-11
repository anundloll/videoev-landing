'use client';

const VENUES = [
  {
    name: 'Gas Pump',
    examples: 'GSTV · Fuelmedia',
    dwell: '~3 min',
    attention: 'captive',
    audience: 'broad',
    video: true,
    venueRevenue: false,
    highlight: false,
  },
  {
    name: 'Rideshare Screen',
    examples: 'Curb · Lyft Media',
    dwell: '~14 min',
    attention: 'captive',
    audience: 'mixed',
    video: true,
    venueRevenue: 'partial',
    highlight: false,
  },
  {
    name: 'Airport Display',
    examples: 'JCDecaux · Clear Channel',
    dwell: '~25 min',
    attention: 'ambient',
    audience: 'premium',
    video: true,
    venueRevenue: false,
    highlight: false,
  },
  {
    name: 'Elevator Screen',
    examples: 'Captivate · Alaris',
    dwell: '~90 sec',
    attention: 'captive',
    audience: 'premium',
    video: 'partial',
    venueRevenue: false,
    highlight: false,
  },
  {
    name: 'Gym Screen',
    examples: 'Gym+TV · LifeSign',
    dwell: '~45 min',
    attention: 'ambient',
    audience: 'mixed',
    video: true,
    venueRevenue: false,
    highlight: false,
  },
  {
    name: 'EV Charging',
    examples: 'VideoEV',
    dwell: '28 min',
    attention: 'captive',
    audience: 'premium',
    video: true,
    venueRevenue: true,
    highlight: true,
  },
];

type BadgeValue = boolean | 'partial';

function AttentionBadge({ type }: { type: string }) {
  if (type === 'captive') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em',
        padding: '0.2rem 0.6rem', borderRadius: '99px',
        background: 'rgba(0,168,150,0.12)', color: 'var(--accent)',
        border: '1px solid rgba(0,168,150,0.25)',
      }}>
        Captive
      </span>
    );
  }
  if (type === 'ambient') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em',
        padding: '0.2rem 0.6rem', borderRadius: '99px',
        background: 'rgba(255,255,255,0.04)', color: 'var(--text-3)',
        border: '1px solid var(--border)',
      }}>
        Ambient
      </span>
    );
  }
  return null;
}

function AudienceBadge({ type }: { type: string }) {
  if (type === 'premium') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em',
        padding: '0.2rem 0.6rem', borderRadius: '99px',
        background: 'rgba(234,183,8,0.08)', color: '#d4a600',
        border: '1px solid rgba(234,183,8,0.2)',
      }}>
        Premium
      </span>
    );
  }
  if (type === 'mixed') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em',
        padding: '0.2rem 0.6rem', borderRadius: '99px',
        background: 'rgba(255,255,255,0.04)', color: 'var(--text-3)',
        border: '1px solid var(--border)',
      }}>
        Mixed
      </span>
    );
  }
  if (type === 'broad') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em',
        padding: '0.2rem 0.6rem', borderRadius: '99px',
        background: 'rgba(255,255,255,0.04)', color: 'var(--text-3)',
        border: '1px solid var(--border)',
      }}>
        Broad
      </span>
    );
  }
  return null;
}

function Check({ val, highlight }: { val: BadgeValue; highlight: boolean }) {
  if (val === true) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="8.5" stroke={highlight ? 'rgba(0,168,150,0.4)' : 'rgba(0,168,150,0.25)'} fill={highlight ? 'rgba(0,168,150,0.12)' : 'transparent'} />
        <path d="M5.5 9.5L7.5 11.5L12 6.5" stroke="#00a896" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (val === 'partial') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="8.5" stroke="rgba(255,255,255,0.12)" fill="transparent" />
        <path d="M5.5 9h7" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="8.5" stroke="rgba(255,255,255,0.06)" fill="transparent" />
      <path d="M6.5 11.5L11.5 6.5M11.5 11.5L6.5 6.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const HEADERS = [
  { label: 'Venue', sub: '' },
  { label: 'Avg. dwell', sub: 'per session' },
  { label: 'Attention', sub: '' },
  { label: 'Audience', sub: '' },
  { label: 'Video ads', sub: 'running today' },
  { label: 'CPO earns', sub: 'revenue share' },
];

export default function DOOHComparison() {
  return (
    <section
      className="pt-16 pb-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Media Landscape</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1rem' }}
          >
            Ads at captive moments.<br />Not a new concept.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.6, fontWeight: 300 }}>
            Digital out-of-home advertising has monetized captive attention for two decades — at gas pumps,
            in taxis, on elevator screens. Every format below runs video ads today. EV charging adds the longest
            dwell time, the most premium audience, and the only model that pays the venue directly.
          </p>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table style={{
            width: '100%',
            minWidth: '680px',
            borderCollapse: 'separate',
            borderSpacing: 0,
          }}>
            {/* Column headers */}
            <thead>
              <tr>
                {HEADERS.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: i === 0 ? '0 1.5rem 0.75rem 0' : '0 1rem 0.75rem',
                      textAlign: i === 0 ? 'left' : 'center',
                      borderBottom: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', lineHeight: 1 }}>
                      {h.label}
                    </div>
                    {h.sub && (
                      <div style={{ fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(144,144,144,0.5)', marginTop: '0.2rem' }}>
                        {h.sub}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {VENUES.map((v, idx) => (
                <tr
                  key={idx}
                  style={{
                    background: v.highlight
                      ? 'rgba(0,66,37,0.08)'
                      : 'transparent',
                    transition: 'background 0.15s',
                  }}
                >
                  {/* Venue name */}
                  <td style={{
                    padding: v.highlight ? '1rem 1.5rem 1rem 1rem' : '0.875rem 1.5rem 0.875rem 0',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    borderLeft: v.highlight ? '2px solid var(--accent)' : '2px solid transparent',
                    paddingLeft: v.highlight ? '1rem' : '0',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div>
                        <div style={{
                          fontSize: '0.875rem', fontWeight: 600,
                          color: v.highlight ? 'var(--text-1)' : 'var(--text-2)',
                          lineHeight: 1.2,
                        }}>
                          {v.name}
                          {v.highlight && (
                            <span style={{
                              display: 'inline-block', marginLeft: '0.5rem',
                              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em',
                              textTransform: 'uppercase', color: 'var(--accent)',
                              verticalAlign: 'middle',
                            }}>
                              VideoEV
                            </span>
                          )}
                        </div>
                        <div style={{
                          fontSize: '0.7rem', color: 'var(--text-3)',
                          marginTop: '0.15rem', fontWeight: 400,
                        }}>
                          {v.examples}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Dwell */}
                  <td style={{
                    padding: '0.875rem 1rem',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                  }}>
                    <span style={{
                      fontVariantNumeric: 'tabular-nums',
                      fontSize: v.highlight ? '0.9375rem' : '0.875rem',
                      fontWeight: v.highlight ? 700 : 500,
                      color: v.highlight ? 'var(--text-1)' : 'var(--text-2)',
                    }}>
                      {v.dwell}
                    </span>
                  </td>

                  {/* Attention */}
                  <td style={{
                    padding: '0.875rem 1rem',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                  }}>
                    <AttentionBadge type={v.attention} />
                  </td>

                  {/* Audience */}
                  <td style={{
                    padding: '0.875rem 1rem',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                  }}>
                    <AudienceBadge type={v.audience} />
                  </td>

                  {/* Video ads */}
                  <td style={{
                    padding: '0.875rem 1rem',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Check val={v.video as BadgeValue} highlight={v.highlight} />
                    </div>
                  </td>

                  {/* CPO earns */}
                  <td style={{
                    padding: '0.875rem 1rem',
                    borderBottom: idx < VENUES.length - 1 ? '1px solid var(--border)' : 'none',
                    textAlign: 'center',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Check val={v.venueRevenue as BadgeValue} highlight={v.highlight} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom callout */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            background: 'rgba(0,168,150,0.06)',
            border: '1px solid rgba(0,168,150,0.2)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="10" cy="10" r="9" stroke="#00a896" strokeWidth="1.5" />
            <path d="M10 9v5M10 6.5v.5" stroke="#00a896" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.55, margin: 0 }}>
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>EV charging is the only DOOH format that passes all five. </span>
            Long captive dwell, premium audience, proven video format, and a direct revenue line
            to the operator who owns the screen — with zero setup cost or operational lift.
          </p>
        </div>

      </div>
    </section>
  );
}
