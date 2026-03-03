export default function About() {
  return (
    <article>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,66,37,0.2) 0%, transparent 65%)',
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
            The Founder
          </p>
          <h1
            className="font-bold"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
            }}
          >
            Built by someone who{' '}
            <span className="accent-text">already solved attribution.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.75vw, 1.125rem)',
              color: 'var(--text-2)',
              fontWeight: 300,
              maxWidth: '54ch',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Most ad-tech founders start from the supply side and bolt on
            measurement later. VideoEV started from measurement — and built the
            medium around it.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-6">

          {/* Origin story */}
          <div className="mb-16">
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Origin</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '1.5rem',
              }}
            >
              Five years building closed-loop attribution at Comcast.
            </h2>

            <div
              style={{
                color: 'var(--text-2)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                From 2020 to 2026, Arvin Nundloll served as Director of Strategy
                &amp; Business Development at Comcast Advertising — the ad arm
                of the largest cable operator in the United States. His mandate
                was simple to state and hard to execute: prove that television
                advertising moves money.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                The project that defined his tenure was a closed-loop attribution
                study with Mastercard. By matching Effectv&apos;s household-level
                TV impression data against Mastercard&apos;s transaction network,
                the team demonstrated, for the first time at scale, that a TV ad
                seen in a specific household directly correlated with a purchase
                at a specific retailer within a defined attribution window.
              </p>
              <p>
                This wasn&apos;t a modeled estimate or a survey. It was
                transactional proof. The kind of closed loop that digital
                promised for twenty years but TV had never delivered — until
                that study.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote
            className="rounded-2xl px-8 py-7 mb-16"
            style={{
              background: 'rgba(0,66,37,0.07)',
              border: '1px solid rgba(0,66,37,0.25)',
              borderLeft: '3px solid var(--accent)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: 1.55,
                fontWeight: 400,
                color: 'var(--text-1)',
                marginBottom: '1rem',
              }}
            >
              &ldquo;We proved TV worked — but only because Mastercard let us
              close the loop. I kept thinking: what if the medium itself came
              pre-wired with the same data layer? You wouldn&apos;t need a bank
              to loan you the proof.&rdquo;
            </p>
            <footer style={{ fontSize: '0.8125rem', color: 'var(--text-3)', letterSpacing: '0.04em' }}>
              ARVIN NUNDLOLL · FOUNDER, VIDEOEV
            </footer>
          </blockquote>

          {/* The connection */}
          <div className="mb-16">
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The Insight</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '1.5rem',
              }}
            >
              The EV charger is a Mastercard terminal for impressions.
            </h2>

            <div
              style={{
                color: 'var(--text-2)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                OCPP 2.0.1 — the open protocol that modern EV chargers speak —
                transmits the vehicle&apos;s VIN, the battery state-of-charge,
                and the session duration directly to the network operator. That
                data is precise, real-time, and tied to a physical transaction: a
                person, in a vehicle, at a location, for a defined block of time.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Amazon Marketing Cloud closes the other half of the loop. When an
                ad impression served during that charging session is later matched
                against an Amazon purchase, you get the same closed-loop proof
                that required a Mastercard partnership at Comcast — but built
                into the medium itself from day one.
              </p>
              <p>
                VideoEV is, at its core, an attribution product that happens to
                also be an ad network. The medium was designed around
                measurability, not retrofitted for it.
              </p>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="mb-16">
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Background</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  role: 'Director, Strategy & BD',
                  org: 'Comcast Advertising',
                  years: '2020 – 2026',
                  note: 'Mastercard closed-loop attribution · Effectv national sales strategy',
                  accent: true,
                },
                {
                  role: 'Founder & CEO',
                  org: 'VideoEV',
                  years: '2025 – Present',
                  note: 'Self-serve Vehicle Media Network · OCPP 2.0.1 · Amazon AMC',
                  accent: true,
                },
                {
                  role: 'Strategy & Partnerships',
                  org: 'Media & Entertainment',
                  years: 'Prior',
                  note: 'Cross-screen audience measurement · programmatic strategy',
                  accent: false,
                },
                {
                  role: 'B.S. Business',
                  org: 'University',
                  years: 'Academic',
                  note: 'Finance & Marketing concentration',
                  accent: false,
                },
              ].map((item) => (
                <div
                  key={item.org}
                  className="rounded-xl p-5"
                  style={{
                    background: item.accent
                      ? 'rgba(0,66,37,0.08)'
                      : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${item.accent ? 'rgba(212,175,55,0.18)' : 'var(--border)'}`,
                  }}
                >
                  <div
                    className="font-semibold"
                    style={{ fontSize: '0.9375rem', marginBottom: '2px' }}
                  >
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: item.accent ? 'var(--accent)' : 'var(--text-3)',
                      marginBottom: '0.625rem',
                      fontWeight: 500,
                    }}
                  >
                    {item.org} · {item.years}
                  </div>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-3)',
                      lineHeight: 1.55,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why now */}
          <div className="mb-16">
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Why Now</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '1.5rem',
              }}
            >
              The OCPP 2.0.1 window is open for exactly one cycle.
            </h2>

            <div
              style={{
                color: 'var(--text-2)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                The US EV charging network is in the middle of its infrastructure
                build. Operators are deploying hardware, standardising on OCPP
                2.0.1, and looking for revenue models that don&apos;t require
                them to become media companies. That window — before the market
                consolidates around two or three dominant platforms — is the
                window VideoEV is built to occupy.
              </p>
              <p>
                The attribution layer, the programmatic stack, and the direct
                relationships with CPOs all exist. The product is live. The
                inventory is real. What comes next is scale.
              </p>
            </div>
          </div>

          {/* CTA strip */}
          <div
            className="rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'rgba(212,175,55,0.04)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <div>
              <div
                className="font-bold"
                style={{ fontSize: '1.125rem', marginBottom: '4px' }}
              >
                Get in touch directly
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
                For advertising, partnerships, press, or investor inquiries.
              </p>
            </div>
            <a
              href="mailto:sales@videoev.com"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              sales@videoev.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </article>
  );
}
