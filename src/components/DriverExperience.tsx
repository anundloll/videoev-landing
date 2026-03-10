'use client';

const RELIABILITY_ITEMS = [
  {
    n: '01',
    title: 'Read-only OCPP access',
    body: "We read session data to sync ad timing. We can't write to it. Your CSMS remains the authority on every charge. Always.",
  },
  {
    n: '02',
    title: 'Session continues if we go offline',
    body: "If VideoEV's service is ever unavailable, your screen reverts to its default state. The session keeps going. Nothing pauses.",
  },
  {
    n: '03',
    title: 'No code on your hardware',
    body: "Everything runs server-side through OCPP. No firmware to install or patch. No new software on your equipment. Nothing to maintain.",
  },
];

export default function DriverExperience() {
  return (
    <section
      className="py-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Driver Experience</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            A 20-minute wait becomes something worth staying for.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Most drivers plug in and stare at a progress bar. That screen sits empty for the entire session.
            VideoEV fills it with content that&apos;s actually relevant to the moment — without changing anything about the charge.
          </p>
        </div>

        {/* Before / After screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* BEFORE */}
          <div>
            <div
              className="flex items-center gap-2 mb-3"
              style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                }}
              />
              Without VideoEV
            </div>

            {/* Screen mockup */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/7',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              {/* Dead space label */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -68%)',
                  textAlign: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(255,255,255,0.1)',
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M7 6V4" />
                    <path d="M17 6V4" />
                  </svg>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Nothing here
                </div>
              </div>

              {/* Bottom charging strip */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.025)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* Battery icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '14px',
                        border: '1.5px solid rgba(255,255,255,0.3)',
                        borderRadius: '3px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '67%',
                          background: 'rgba(255,255,255,0.3)',
                          borderRadius: '1px',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '-0.02em' }}>67%</span>
                  </div>
                  <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>14 min remaining</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>150 kW</span>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.75rem', lineHeight: 1.5 }}>
              Driver plugs in. Screen shows a progress bar. They stare at it, check their phone, or just wait.
            </p>
          </div>

          {/* AFTER */}
          <div>
            <div
              className="flex items-center gap-2 mb-3"
              style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 6px var(--accent)',
                }}
              />
              With VideoEV
            </div>

            {/* Screen mockup */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/7',
                background: '#0d1a12',
                border: '1px solid rgba(0,66,37,0.4)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Content zone */}
              <div
                className="flex-1 px-5 pt-4 pb-3"
                style={{ display: 'flex', gap: '10px', alignItems: 'stretch', minHeight: 0 }}
              >
                {/* Main content card */}
                <div
                  className="flex-1 rounded-xl px-4 py-3"
                  style={{
                    background: 'rgba(0,66,37,0.12)',
                    border: '1px solid rgba(0,66,37,0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '4px',
                      }}
                    >
                      Nearby · 0.2 mi
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>
                      Blue Bottle Coffee
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                      20% off with EV receipt today
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.6rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    Get directions →
                  </div>
                </div>

                {/* Side tiles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '30%', minWidth: 0 }}>
                  {/* Weather */}
                  <div
                    className="rounded-xl px-3 py-2"
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>
                      72° ☀
                    </div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', marginTop: '1px' }}>San Francisco</div>
                  </div>
                  {/* Ad tile */}
                  <div
                    className="rounded-xl px-3 py-2"
                    style={{
                      flex: 1,
                      background: 'rgba(234,179,8,0.07)',
                      border: '1px solid rgba(234,179,8,0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(234,179,8,0.7)', marginBottom: '2px' }}>
                      Sponsored
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>
                      New Rivian R2 · Starting $45k
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom charging strip */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(0,66,37,0.25)', background: 'rgba(0,66,37,0.06)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '14px',
                        border: '1.5px solid rgba(0,200,100,0.5)',
                        borderRadius: '3px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '67%',
                          background: 'rgba(0,200,100,0.5)',
                          borderRadius: '1px',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'rgba(0,220,120,0.8)', letterSpacing: '-0.02em' }}>67%</span>
                  </div>
                  <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>14 min remaining</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>150 kW</span>
                  <div
                    style={{
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(0,200,100,0.5)',
                      border: '1px solid rgba(0,200,100,0.2)',
                      borderRadius: '4px',
                      padding: '2px 5px',
                    }}
                  >
                    VideoEV
                  </div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginTop: '0.75rem', lineHeight: 1.5 }}>
              Same session. Same charge speed. The screen just does something useful now — for the driver and for you.
            </p>
          </div>
        </div>

        {/* Callout line */}
        <div
          className="rounded-xl px-6 py-4 mb-14"
          style={{
            background: 'rgba(0,66,37,0.07)',
            border: '1px solid rgba(0,66,37,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>
            Whether drivers stay at the charger or walk away to stretch, every active session generates impressions.
            You earn on both.
          </p>
        </div>

        {/* Reliability pillars */}
        <div className="mb-4">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Reliability First</p>
          <h3
            className="font-bold"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2, letterSpacing: '-0.015em', marginBottom: '0.75rem', maxWidth: '32rem' }}
          >
            Your core business doesn&apos;t change.
          </h3>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.65, fontWeight: 300, maxWidth: '36rem', marginBottom: '2.5rem' }}>
            Reliable charging is what makes or breaks a CPO. We&apos;re not in the business of
            compromising that. Here&apos;s exactly what we do — and don&apos;t — touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RELIABILITY_ITEMS.map((item) => (
            <div
              key={item.n}
              className="rounded-2xl px-6 py-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(0,66,37,0.2)',
                  border: '1px solid rgba(0,66,37,0.4)',
                  fontSize: '0.6rem',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                {item.n}
              </div>
              <div className="font-semibold mb-2" style={{ fontSize: '0.9375rem' }}>{item.title}</div>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
