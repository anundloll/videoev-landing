'use client';

const START_STEPS = [
  'Authenticate',
  'Select charge level',
  'Confirm & pay',
  'Charge starts',
];

const END_STEPS = [
  'Stop session',
  'Unplug vehicle',
  'Confirm completion',
  'Receipt sent',
];

const STATS = [
  { value: '6+',     label: 'Mandatory screen interactions per session' },
  { value: '2×',     label: 'Guaranteed captive impression windows'     },
  { value: '26 min', label: 'Uninterrupted content window on average'   },
  { value: '0',      label: 'Skip rate — the screen completes the transaction' },
];

export default function SessionAnatomy() {
  return (
    <section className="py-24" style={{ background: 'var(--surface-solid)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Session Anatomy</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              marginBottom: '1.125rem',
            }}
          >
            Every session begins and ends at the screen
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300, maxWidth: '52ch' }}>
            Drivers must authenticate, pay, and confirm to start — then return to
            unplug and close. These required steps bookend every 30-minute window
            with guaranteed, high-attention impressions no other format can replicate.
          </p>
        </div>

        {/* Session panel */}
        <div
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: '1px solid var(--border)' }}
        >
          {/* Proportional timeline bar — captive ends in teal, media window in dim */}
          <div style={{ display: 'flex', height: 4 }}>
            <div style={{ width: '11%', background: 'var(--accent)' }} />
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)' }} />
            <div style={{ width: '11%', background: 'var(--accent)' }} />
          </div>

          {/* Time axis labels sit flush under the bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 2rem',
              borderBottom: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.015)',
            }}
          >
            <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>~2 min</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>26 min avg</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>~2 min</span>
          </div>

          {/* Three-column content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr' }}>

            {/* Session start — captive */}
            <div
              className="p-8"
              style={{
                borderRight: '1px solid var(--border)',
                background: 'rgba(0,66,37,0.09)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.375rem' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <p className="eyebrow" style={{ margin: 0 }}>Captive · Start</p>
              </div>
              <h3
                className="font-semibold"
                style={{ fontSize: '1rem', lineHeight: 1.3, marginBottom: '1.25rem' }}
              >
                Session start
              </h3>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {START_STEPS.map((step, i) => (
                  <li
                    key={step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      marginBottom: i < START_STEPS.length - 1 ? '0.8rem' : 0,
                    }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        fontWeight: 700,
                        flexShrink: 0,
                        minWidth: 16,
                        paddingTop: 2,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Media window — center */}
            <div
              className="p-10"
              style={{
                borderRight: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.012)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Media Window</p>
              <h3
                style={{
                  fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                One advertiser.<br />Full screen.<br />No competition.
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300, maxWidth: 260 }}>
                Video and brand content plays continuously as the vehicle charges — personalized to the driver by make, location, and behavioral signals.
              </p>
            </div>

            {/* Session end — captive */}
            <div
              className="p-8"
              style={{ background: 'rgba(0,66,37,0.09)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.375rem' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <p className="eyebrow" style={{ margin: 0 }}>Captive · End</p>
              </div>
              <h3
                className="font-semibold"
                style={{ fontSize: '1rem', lineHeight: 1.3, marginBottom: '1.25rem' }}
              >
                Session end
              </h3>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {END_STEPS.map((step, i) => (
                  <li
                    key={step}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      marginBottom: i < END_STEPS.length - 1 ? '0.8rem' : 0,
                    }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: 'tabular-nums',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        fontWeight: 700,
                        flexShrink: 0,
                        minWidth: 16,
                        paddingTop: 2,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Stats row — gap-px grid with border container as dividers */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: 'var(--border)', border: '1px solid var(--border)' }}
        >
          {STATS.map((s) => (
            <div
              key={s.value}
              style={{ padding: '1.5rem 1.75rem', background: 'var(--surface-solid)' }}
            >
              <div
                className="stat-num font-bold"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  color: 'var(--text-1)',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
