import Link from 'next/link';

const CREDENTIALS = [
  { label: 'Comcast Advertising', sub: 'Director, Strategy & BD · 2020–2026' },
  { label: 'Mastercard Attribution', sub: 'TV impression data matched to card transaction records' },
  { label: 'Amazon Marketing Cloud', sub: 'VideoEV attribution runs natively through Amazon AMC' },
];

export default function FounderCallout() {
  return (
    <section
      className="py-20"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl px-8 py-9 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style={{
            background: 'rgba(0,66,37,0.06)',
            border: '1px solid rgba(0,66,37,0.22)',
          }}
        >
          {/* Left — text */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>
              The Founder
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.5rem, 2.75vw, 2.125rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '1rem',
              }}
            >
              Built by the person who closed the{' '}
              <span className="accent-text">TV attribution loop</span> at
              Comcast.
            </h2>
            <p
              style={{
                color: 'var(--text-2)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: '1.5rem',
                maxWidth: '52ch',
              }}
            >
              Six years at Comcast Advertising. The last project that stuck: TV
              impression data matched against Mastercard transaction records —
              actual card swipes, not a model. VideoEV runs the same attribution
              logic through OCPP charger data and Amazon Marketing Cloud.
            </p>
            <Link
              href="/about"
              className="hover:text-white transition-colors"
              style={{
                fontSize: '0.875rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              Read the full story
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 6.5h9M6.5 2.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Right — credential chips */}
          <div className="flex flex-col gap-3">
            {CREDENTIALS.map((c) => (
              <div
                key={c.label}
                className="rounded-xl px-5 py-4 flex items-start gap-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: 'var(--accent)' }}
                />
                <div>
                  <div
                    className="font-semibold"
                    style={{ fontSize: '0.9375rem', marginBottom: '2px' }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-3)',
                      lineHeight: 1.5,
                    }}
                  >
                    {c.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
