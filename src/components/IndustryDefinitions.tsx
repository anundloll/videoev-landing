const TERMS = [
  {
    abbr: 'VMN',
    name: 'Vehicle Media Network',
    def: 'A bi-directional media layer that sits on top of energy infrastructure. VideoEV is the first VMN — we don\'t just put a screen next to a charger, we integrate with the charger\'s data protocol to serve context-aware ads.',
    tag: 'Category',
    tagColor: '#004225',
  },
  {
    abbr: 'CPO',
    name: 'Charge Point Operator',
    def: 'The owners and installers of EV charging hardware — companies like EVgo, ChargePoint, and Blink. VideoEV partners with CPOs to deploy media on their networks. In return, CPOs receive a passive revenue share that offsets hardware CapEx.',
    tag: 'Partner',
    tagColor: '#3B82F6',
  },
  {
    abbr: 'eMSP',
    name: 'e-Mobility Service Provider',
    def: 'The apps EV drivers use to find, start, and pay for charging sessions. eMSPs control the in-app experience — VideoEV\'s mobile surface runs as a native placement inside these session screens, guaranteeing impressions during the charge.',
    tag: 'Distribution',
    tagColor: '#8B5CF6',
  },
  {
    abbr: 'OCPP 2.0.1',
    name: 'Open Charge Point Protocol',
    def: 'The universal language of EV chargers. OCPP 2.0.1 is the data protocol that flows between charger and network. VideoEV reads the SoC (battery %) and VIN (Vehicle ID) from this stream to calculate session length and confirm vehicle identity — enabling targeting that\'s impossible in any other media format.',
    tag: 'Infrastructure',
    tagColor: '#F59E0B',
  },
  {
    abbr: 'SoC',
    name: 'State of Charge',
    def: 'The vehicle\'s battery percentage at plug-in. A 10% SoC means ~40 minutes of charging. VideoEV uses SoC to calculate "Attention Time" — the precise window available for an ad sequence. This turns a utility signal into a media scheduling input.',
    tag: 'Data Signal',
    tagColor: '#EF4444',
  },
];

export default function IndustryDefinitions() {
  return (
    <section
      className="py-20"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>System Infrastructure</p>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '1.125rem' }}
          >
            The stack behind the screen
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1.0625rem', lineHeight: 1.65, fontWeight: 300 }}>
            VideoEV is not a billboard company with a software layer. It is a
            protocol-native media network built on top of the EV charging stack.
            Here is every layer that makes it work.
          </p>
        </div>

        {/* Glossary grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TERMS.map((t) => (
            <div
              key={t.abbr}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Top row: abbr + tag */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div
                    className="font-bold"
                    style={{ fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--accent)', lineHeight: 1 }}
                  >
                    {t.abbr}
                  </div>
                  <div
                    className="font-medium"
                    style={{ fontSize: '0.8125rem', color: 'var(--text-2)', marginTop: '0.25rem' }}
                  >
                    {t.name}
                  </div>
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: t.tagColor + '14',
                    color: t.tagColor,
                    border: `1px solid ${t.tagColor}30`,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                    fontSize: '0.6rem',
                    marginTop: '2px',
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-4" style={{ height: '1px', background: 'var(--border)' }} />

              {/* Definition */}
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300, flex: 1 }}>
                {t.def}
              </p>
            </div>
          ))}

          {/* Connecting card */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-between md:col-span-2 lg:col-span-1"
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, var(--bg) 100%)',
              border: '1px solid rgba(34,197,94,0.2)',
            }}
          >
            <div>
              <div
                className="font-bold mb-1"
                style={{ fontSize: '1.125rem', letterSpacing: '-0.01em' }}
              >
                How they connect
              </div>
              <p style={{ fontSize: '0.8375rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                OCPP 2.0.1 delivers the SoC and VIN from the charger.
                VideoEV reads these signals via the CPO network, calculates
                Attention Time, and serves a targeted ad pod — tracked
                through the eMSP app and attributed via Amazon AMC.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                Protocol-native, not screen-first
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
