const POINTS = [
  {
    n: '01',
    title: 'Captive, distraction-free',
    body: 'Drivers are stationary and screen-ready for 15–45 minutes. No scroll-past, no tab-away. The content is the context.',
  },
  {
    n: '02',
    title: 'Income-skewed by the vehicle itself',
    body: 'EV ownership correlates tightly with high income. The vehicle is the qualifying signal — no cookie required.',
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
  {
    medium: 'Traditional OOH',
    dwell: '< 10 Sec',
    data: 'Estimated',
    measurement: 'None',
    yield: 'Static',
    featured: false,
  },
  {
    medium: 'Gas Station TV',
    dwell: '4 Mins',
    data: 'Basic',
    measurement: 'Foot traffic',
    yield: 'Low Margin',
    featured: false,
  },
  {
    medium: 'VideoEV (VMN)',
    dwell: '20–40 Mins',
    data: 'OCPP Identity Resolution',
    measurement: 'Amazon Purchase Data',
    yield: 'Programmatic High-CPM',
    featured: true,
  },
];

export default function TheMedium() {
  return (
    <section className="py-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — plain eyebrow, no pill */}
        <div className="mb-10">
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
            EV charging is a 30-minute media window with no competition
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            While the vehicle charges, the driver has nothing to do and nowhere
            to go. VideoEV is the ad inventory that runs during those 30 minutes —
            one screen, one session, one advertiser at a time.
          </p>
        </div>

        {/* Feature cards with numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {POINTS.map((p, i) => (
            <div
              key={p.n}
              className="card-hover p-6 rounded-2xl"
              style={{
                background: i === 0 ? 'rgba(0,66,37,0.1)' : 'rgba(255,255,255,0.03)',
                border: i === 0 ? '1px solid rgba(0,66,37,0.3)' : '1px solid var(--border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="stat-num font-bold mb-5"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  opacity: i === 0 ? 1 : 0.7,
                }}
              >
                {p.n}
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: i === 0 ? '1.0625rem' : '0.9375rem', lineHeight: 1.3 }}
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
                  background: c.featured ? 'rgba(0,66,37,0.1)' : 'transparent',
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
            { label: 'Dwell Time', key: 'dwell' as const },
            { label: 'Data Source', key: 'data' as const },
            { label: 'Measurement', key: 'measurement' as const },
            { label: 'Yield Model', key: 'yield' as const },
          ].map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-4"
              style={{ borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}
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
                    background: c.featured ? 'rgba(0,66,37,0.05)' : 'transparent',
                    borderLeft: '1px solid var(--border)',
                    fontSize: '0.875rem',
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
