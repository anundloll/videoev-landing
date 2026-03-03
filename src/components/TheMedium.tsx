const POINTS = [
  {
    n: '01',
    title: 'Captive, distraction-free',
    body: 'Drivers are stationary and screen-ready for 15–45 minutes. No scroll-past, no tab-away. The content is the context.',
  },
  {
    n: '02',
    title: 'Premium demographics by default',
    body: 'EV ownership correlates tightly with high income. The vehicle itself is the qualifying signal — no cookie required.',
  },
  {
    n: '03',
    title: 'Real-world intent data',
    body: 'Where someone charges — airport, luxury retailer, hotel — reveals more about them than a browser history ever could.',
  },
  {
    n: '04',
    title: 'A compounding audience',
    body: 'EV adoption is accelerating. Early EV owners are disproportionately influential buyers across every luxury category.',
  },
];

const COMPARE = [
  { medium: 'Connected TV', cpm: '$25–$45', audience: 'Inferred', attention: 'Lean-back', featured: false },
  { medium: 'VideoEV', cpm: '$18–$34', audience: 'VIN-confirmed', attention: 'Captive 30 min', featured: true },
  { medium: 'Digital OOH', cpm: '$8–$15', audience: 'Geofence', attention: 'Walk-by glance', featured: false },
];

export default function TheMedium() {
  return (
    <section className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — plain eyebrow, no pill */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The Medium</p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              marginBottom: '1.125rem',
            }}
          >
            EV charging is the new premium video channel
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            While their vehicle charges, drivers have nothing to do and nowhere
            to go. VideoEV turns that captive 30 minutes into a premium media
            moment — more engaged than TV, more intentional than social.
          </p>
        </div>

        {/* Feature cards with numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {POINTS.map((p) => (
            <div
              key={p.n}
              className="card card-hover p-6"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="stat-num font-bold mb-5"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  opacity: 0.7,
                }}
              >
                {p.n}
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison table — VideoEV column dominant */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="px-6 py-4" />
            {COMPARE.map((c) => (
              <div
                key={c.medium}
                className="px-6 py-4 text-center font-semibold"
                style={{
                  background: c.featured ? 'rgba(234,179,8,0.06)' : 'transparent',
                  borderLeft: '1px solid var(--border)',
                  color: c.featured ? 'var(--accent)' : 'var(--text-2)',
                  fontSize: c.featured ? '0.9375rem' : '0.875rem',
                  borderTop: c.featured ? '2px solid var(--accent)' : '2px solid transparent',
                }}
              >
                {c.medium}
              </div>
            ))}
          </div>

          {/* Rows */}
          {[
            { label: 'CPM', key: 'cpm' as const },
            { label: 'Audience signal', key: 'audience' as const },
            { label: 'Attention quality', key: 'attention' as const },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div
                className="px-6 py-4"
                style={{ fontSize: '0.8125rem', color: 'var(--text-3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                {row.label}
              </div>
              {COMPARE.map((c) => (
                <div
                  key={c.medium}
                  className="px-6 py-4 text-center"
                  style={{
                    background: c.featured ? 'rgba(234,179,8,0.03)' : 'transparent',
                    borderLeft: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    fontWeight: c.featured ? 600 : 400,
                    color: c.featured ? 'var(--text-1)' : 'var(--text-3)',
                  }}
                >
                  {c[row.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
