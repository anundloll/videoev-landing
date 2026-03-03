const STATS = [
  { value: '248k', label: 'Monthly unique vehicles' },
  { value: '30 min', label: 'Avg session length' },
  { value: '$65k+', label: 'Avg vehicle MSRP' },
  { value: '$18–$34', label: 'CPM' },
  { value: '3', label: 'Ad surfaces' },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-5"
          style={{ borderLeft: '1px solid var(--border)' }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="py-8 px-6 text-center"
              style={{ borderRight: '1px solid var(--border)' }}
            >
              <div
                className="stat-num font-bold"
                style={{
                  fontSize: 'clamp(1.625rem, 2.75vw, 2.25rem)',
                  color: 'var(--text-1)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-3)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
