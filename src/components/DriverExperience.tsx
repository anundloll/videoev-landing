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
      className="pt-16 pb-24"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Driver Experience</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1rem' }}
          >
            A 20-minute wait becomes something worth staying for.
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.6, fontWeight: 300 }}>
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

            {/* Screen mockup — real charger UI */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/7',
                background: '#0e2260',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Background radial glow */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(0,160,80,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />

              {/* Top bar */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '5px 14px',
                  background: 'rgba(0,0,0,0.25)',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#3a7bd5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.5rem', fontWeight: 900, color: '#fff' }}>C</span>
                  </div>
                  <span style={{ fontSize: '0.55rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Charging</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="none"><path d="M4 0C2.07 0 .5 1.57.5 3.5c0 2.63 3.5 6.5 3.5 6.5s3.5-3.87 3.5-6.5C7.5 1.57 5.93 0 4 0zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" fill="rgba(255,255,255,0.4)"/></svg>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)' }}>Fairfield NB 2</span>
                </div>
                <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>1-888-557-7099</span>
              </div>

              {/* Main content */}
              <div className="flex-1 px-5 py-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <div>
                  {/* % + start label */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5px' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>78%</span>
                    <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>Start</span>
                  </div>
                  {/* Green progress bar */}
                  <div style={{ height: '20px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden', marginBottom: '5px' }}>
                    <div style={{ height: '100%', width: '78%', background: 'linear-gradient(90deg, #2db84a 0%, #52d46a 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#fff' }}>78 %</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
                    Charging speed based on vehicle&apos;s estimate
                  </div>
                </div>

                {/* Stats + STOP */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '18px' }}>
                    {[
                      { label: 'Charging Time', value: '0 min' },
                      { label: 'Active Power', value: '35 kW' },
                      { label: 'Energy Delivered', value: '0.0202 kWh' },
                    ].map(s => (
                      <div key={s.label}>
                        <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.35)', marginBottom: '2px' }}>{s.label}</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.88)', borderRadius: '4px', fontSize: '0.55rem', fontWeight: 700, color: '#000', letterSpacing: '0.06em' }}>
                    STOP
                  </div>
                </div>
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

            {/* Screen mockup — video ad playing */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16/7',
                background: '#0b0f1a',
                border: '1px solid rgba(70,50,150,0.35)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* VideoEV status bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '5px 14px',
                  background: 'linear-gradient(90deg, rgba(40,20,100,0.95) 0%, rgba(25,15,70,0.95) 100%)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.03em' }}>VideoEV</span>
                  <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>· Live</span>
                </div>
                <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)' }}>Chicago — Magnificent Mile</span>
                <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace' }}>0:24</span>
              </div>

              {/* Full-bleed video area */}
              <div className="flex-1 relative" style={{ overflow: 'hidden', minHeight: 0 }}>
                {/* Video scene — cinematic gradient simulating outdoor/road */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(160deg, #1b3a5c 0%, #0d2440 30%, #162b45 55%, #0b1e30 100%)',
                  }}
                />
                {/* Atmosphere bloom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 60% 50% at 70% 35%, rgba(80,150,220,0.18) 0%, transparent 65%)',
                  }}
                />
                {/* Ground vignette */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '45%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(5,12,22,0.75) 100%)',
                  }}
                />

                {/* Ad copy — bottom left */}
                <div style={{ position: 'absolute', left: '14px', bottom: '12px' }}>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '3px' }}>
                    geico.com &nbsp;·&nbsp; local agent
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                    Get more with
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                    GEICO
                  </div>
                </div>

                {/* Advertiser badge — top right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#f5c518',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    color: '#000',
                    letterSpacing: '0.03em',
                  }}
                >
                  GEICO
                </div>
              </div>

              {/* Ad progress bar */}
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.07)', flexShrink: 0, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '93%', background: '#f5c518' }} />
              </div>

              {/* Bottom charging strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 14px',
                  background: 'rgba(0,0,0,0.55)',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div
                      style={{
                        width: '26px', height: '13px',
                        border: '1.5px solid rgba(0,200,100,0.5)',
                        borderRadius: '3px', position: 'relative', overflow: 'hidden',
                      }}
                    >
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '67%', background: 'rgba(0,200,100,0.5)', borderRadius: '1px' }} />
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'rgba(0,220,120,0.85)', letterSpacing: '-0.02em' }}>67%</span>
                  </div>
                  <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.07)' }} />
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>14 min remaining</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.22)', fontFamily: 'monospace' }}>28s / 30s</span>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>150 kW</span>
                  <div
                    style={{
                      fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(0,200,100,0.5)', border: '1px solid rgba(0,200,100,0.2)', borderRadius: '3px', padding: '1px 4px',
                    }}
                  >
                    VideoEV
                  </div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginTop: '0.75rem', lineHeight: 1.5 }}>
              Same session. Same charge speed. A 30-second video runs. You earn CPM.
            </p>
          </div>
        </div>

        {/* Callout line */}
        <div
          className="rounded-xl px-6 py-4 mb-10"
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
        <div className="mb-6">
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Reliability First</p>
          <h3
            className="font-bold"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2, letterSpacing: '-0.015em', marginBottom: '0.625rem', maxWidth: '32rem' }}
          >
            Your core business doesn&apos;t change.
          </h3>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '36rem' }}>
            Reliable charging is what makes or breaks a CPO. Here&apos;s exactly what we do — and don&apos;t — touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RELIABILITY_ITEMS.map((item) => (
            <div
              key={item.n}
              className="rounded-2xl px-5 py-5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
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
                <div className="font-semibold" style={{ fontSize: '0.9375rem' }}>{item.title}</div>
              </div>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
