const SURFACES = [
  {
    id: 'kiosk',
    label: 'Charging Kiosk',
    split: '52%',
    specs: '16:9 · 1920×1080 · 15–30 sec',
    desc: 'Full-screen video on the station display, visible at 2 metres. Highest brand impact — the only content on screen while the vehicle charges.',
    accent: '#D4AF37',
    icon: '🖥️',
    position: 'left',
  },
  {
    id: 'mobile',
    label: 'Driver Mobile App',
    split: '30%',
    specs: 'In-app · iOS & Android · 375px',
    desc: 'Native in-app placement in the charging session view. Drivers open the app to monitor charge progress — guaranteed impressions during session.',
    accent: '#3B82F6',
    icon: '📱',
    position: 'center',
  },
  {
    id: 'incar',
    label: 'In-Car Display',
    split: '18%',
    specs: '1024×600 · Tablet landscape · HDMI out',
    desc: 'Premium in-car tablet placement for high-end vehicle integrations. Ultra-high engagement — driver is in the seat, screen is inches away.',
    accent: '#10B981',
    icon: '🚗',
    position: 'right',
  },
];

export default function Surfaces() {
  return (
    <section id="surfaces" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Ad Formats</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              marginBottom: '1.125rem',
            }}
          >
            Three screens, one charging session
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            Creative runs simultaneously across all surfaces. One buy, three touchpoints,
            zero fragmentation. Or cherry-pick the format that fits your objective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SURFACES.map((s) => (
            <div
              key={s.id}
              className="card card-hover p-7 flex flex-col"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Accent top bar */}
              <div
                className="w-8 h-0.5 rounded-full mb-6"
                style={{ background: s.accent }}
              />

              {/* Label + split */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-semibold" style={{ fontSize: '1rem', lineHeight: 1.2 }}>{s.label}</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0"
                  style={{ background: s.accent + '14', color: s.accent, marginTop: '2px' }}
                >
                  {s.split}
                </span>
              </div>

              <div
                className="text-xs mb-4"
                style={{ color: 'var(--text-3)', fontFamily: 'monospace', letterSpacing: '0.03em' }}
              >
                {s.specs}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65, flex: 1, fontWeight: 300 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://demo.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See all three surfaces in the live demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
