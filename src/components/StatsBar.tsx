const STATS = [
  { value: '248k', label: 'Monthly unique vehicles', suffix: '' },
  { value: '30', label: 'Avg session length', suffix: 'min' },
  { value: '$65k+', label: 'Avg vehicle MSRP', suffix: '' },
  { value: '$18–$34', label: 'CPM range', suffix: '' },
  { value: '3', label: 'Ad surfaces', suffix: 'screens' },
];

export default function StatsBar() {
  return (
    <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x" style={{ '--tw-divide-opacity': 1, divideColor: 'var(--border)' } as React.CSSProperties}>
          {STATS.map((s) => (
            <div key={s.label} className="py-7 px-4 text-center">
              <div
                className="stat-num font-bold"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--text-1)', lineHeight: 1.1 }}
              >
                {s.value}
                {s.suffix && (
                  <span style={{ fontSize: '0.9em', color: 'var(--text-2)', fontWeight: 500, marginLeft: '0.2em' }}>
                    {s.suffix}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginTop: '0.375rem', lineHeight: 1.3 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
