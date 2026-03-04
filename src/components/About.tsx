export default function About() {
  return (
    <article>
      {/* Hero */}
      <section
        className="relative"
        style={{ paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
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

          {/* Origin */}
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
              Six years building closed-loop attribution at Comcast.
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
                Six years at Comcast Advertising as Director of Strategy &amp;
                Business Development. The job was selling ideas to a sales org,
                which means the ideas needed hard numbers behind them. TV
                advertising at that scale is a multi-billion dollar machine.
                The standing question nobody had fully answered: does any of it
                actually move purchase behaviour?
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                The Mastercard study answered it. Effectv&apos;s household-level
                TV impression data, matched against Mastercard transaction
                records — a specific household saw a specific spot, that
                cardholder spent at the advertised retailer within the
                attribution window. No panel. No model. Card swipes.
              </p>
              <p>
                That wasn&apos;t how TV attribution had worked before. The
                closed loop that digital promised for twenty years and TV
                never delivered — until that study. The honest reaction was:
                why did this require a bank to make it work?
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
              &ldquo;We proved TV worked — but only because Mastercard handed
              us the transaction data. The whole time I kept thinking: what if
              the medium came with that data layer already in it? You
              wouldn&apos;t need a bank to loan you the proof.&rdquo;
            </p>
            <footer style={{ fontSize: '0.8125rem', color: 'var(--text-3)', letterSpacing: '0.04em' }}>
              ARVIN NUNDLOLL · FOUNDER, VIDEOEV
            </footer>
          </blockquote>

          {/* The Insight */}
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
                OCPP 2.0.1 is the protocol modern EV chargers speak. Every
                session, the charger transmits the vehicle VIN,
                battery state-of-charge, and session duration directly to the
                network operator. Precise, real-time data tied to a physical
                transaction — a specific person, in a specific vehicle, at a
                specific location, for a defined block of time.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Amazon Marketing Cloud closes the other side. An ad impression
                during that charging session, later matched to an Amazon
                purchase — same closed-loop proof that took a Mastercard
                partnership to achieve at Comcast. No third-party data deal
                needed. The charger sends the signal.
              </p>
              <p>
                VideoEV isn&apos;t an ad network with measurement bolted on.
                The attribution layer came first. The ad network was built
                to make use of it.
              </p>
            </div>
          </div>

          {/* Team Behind the Moat */}
          <div className="mb-16">
            <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The Team Behind the Moat</p>
            <h2
              className="font-bold"
              style={{
                fontSize: 'clamp(1.625rem, 3vw, 2.25rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                marginBottom: '1.75rem',
              }}
            >
              Built by the Architects of Modern Video Attribution.
            </h2>

            {/* Founder card */}
            <div
              className="rounded-2xl p-7 mb-8"
              style={{
                background: 'rgba(0,66,37,0.08)',
                border: '1px solid rgba(0,66,37,0.3)',
              }}
            >
              <div className="mb-6">
                <div className="font-bold" style={{ fontSize: '1.125rem', letterSpacing: '-0.01em', marginBottom: '3px' }}>
                  Arvin Nundloll
                </div>
                <div className="eyebrow" style={{ color: 'var(--accent)', fontSize: '0.65rem' }}>
                  Founder &amp; CEO · VideoEV
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  'Former Director of Strategy & Business Development at Comcast Advertising and Senior Product Manager at Amazon.',
                  'Pioneered closed-loop video attribution by launching a first-of-its-kind commerce-data partnership with Mastercard, proving $6M+ in incremental sales for major retailers.',
                  "Architected the 'Ads-in-a-Box' platform for FreeWheel, bundling SSP/DSP integrations to scale mid-market publisher revenue.",
                ].map((bullet) => (
                  <div key={bullet} className="flex gap-3">
                    <div
                      className="flex-shrink-0 rounded-full mt-2"
                      style={{ width: '5px', height: '5px', background: 'var(--accent)' }}
                    />
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder quote */}
            <blockquote
              className="rounded-2xl px-8 py-7"
              style={{
                background: 'rgba(0,66,37,0.05)',
                border: '1px solid rgba(0,66,37,0.2)',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  color: 'var(--text-1)',
                  marginBottom: '1rem',
                }}
              >
                &ldquo;At Comcast, I built the multi-tier attribution models that justified premium
                video CPMs for 10,000+ customers. VideoEV takes that exact
                &lsquo;Ads-in-a-Box&rsquo; framework and applies it to the fastest-growing
                physical real estate in the world: the EV charging stall.&rdquo;
              </p>
              <footer style={{ fontSize: '0.8125rem', color: 'var(--text-3)', letterSpacing: '0.04em' }}>
                ARVIN NUNDLOLL · FOUNDER, VIDEOEV
              </footer>
            </blockquote>
          </div>

          {/* Why Now */}
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
                The US charging network is still being built. Most operators
                right now are running infrastructure at a loss, watching for
                any recurring revenue that doesn&apos;t require them to hire a
                media sales team. OCPP 2.0.1 is the standard being deployed at
                scale — the first version of the protocol that exposes enough
                vehicle data to make audience targeting actually work.
              </p>
              <p>
                That window, before two or three platforms consolidate the
                inventory, is short. The attribution layer, the programmatic
                stack, and the CPO relationships all exist. The product is
                live. The inventory is real. What comes next is scale.
              </p>
            </div>
          </div>

          {/* CTA strip */}
          <div
            className="rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'rgba(0,66,37,0.08)',
              border: '1px solid rgba(0,66,37,0.3)',
            }}
          >
            <div>
              <div className="font-bold" style={{ fontSize: '1.125rem', marginBottom: '4px' }}>
                Talk to Arvin directly
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', lineHeight: 1.5 }}>
                Advertising, partnerships, press, investor inquiries.
              </p>
            </div>
            <a
              href="mailto:sales@videoev.com"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              sales@videoev.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </article>
  );
}
