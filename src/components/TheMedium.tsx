const POINTS = [
  {
    icon: '🧲',
    title: 'Captive, distraction-free',
    body: 'Drivers are stationary and screen-ready for 15–45 minutes. No scroll-past, no tab-away. The content is the context.',
  },
  {
    icon: '💎',
    title: 'Premium demographics by default',
    body: 'EV ownership correlates tightly with high income and education. The vehicle itself is the qualifying signal — no cookie required.',
  },
  {
    icon: '📍',
    title: 'Real-world intent data',
    body: 'Where someone charges — airport, luxury retailer, hotel — tells you more about them than a browser history ever could.',
  },
  {
    icon: '⚡',
    title: 'A growing, loyal audience',
    body: 'EV adoption is compounding. Early EV owners are disproportionately influential buyers and early adopters in every other category.',
  },
];

export default function TheMedium() {
  return (
    <section className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="section-label">
            <span className="eyebrow">The Medium</span>
          </div>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}
          >
            EV charging is the new premium video channel
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            While their vehicle charges, drivers have nothing to do and nowhere
            to go. VideoEV turns that captive 30 minutes into a premium media
            moment — more engaged than TV, more intentional than social.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POINTS.map((p) => (
            <div key={p.title} className="card card-hover p-6">
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="font-semibold mb-2" style={{ fontSize: '1rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Comparison callout */}
        <div
          className="mt-10 rounded-2xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(234,179,8,0.06) 0%, rgba(234,179,8,0.02) 100%)',
            border: '1px solid rgba(234,179,8,0.15)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { medium: 'Connected TV', cpm: '$25–$45', engagement: 'Passive lean-back', signal: 'Device ID' },
              { medium: 'VideoEV', cpm: '$18–$34', engagement: '✦ Captive, stationary', signal: '✦ VIN-confirmed' },
              { medium: 'Digital OOH', cpm: '$8–$15', engagement: 'Walk-by glance', signal: 'Geofence only' },
            ].map((row) => (
              <div
                key={row.medium}
                className="text-center"
                style={
                  row.medium === 'VideoEV'
                    ? { padding: '1.25rem', borderRadius: '12px', background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }
                    : {}
                }
              >
                <div
                  className="font-semibold mb-1"
                  style={{
                    color: row.medium === 'VideoEV' ? 'var(--accent)' : 'var(--text-2)',
                    fontSize: row.medium === 'VideoEV' ? '1.0625rem' : '0.9375rem',
                  }}
                >
                  {row.medium}
                </div>
                <div className="font-bold stat-num" style={{ fontSize: '1.25rem' }}>{row.cpm}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '0.25rem' }}>CPM</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-2)', marginTop: '0.75rem' }}>{row.engagement}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-3)', marginTop: '0.25rem' }}>{row.signal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
