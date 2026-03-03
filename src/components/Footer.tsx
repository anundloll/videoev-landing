export default function Footer() {
  return (
    <footer
      className="py-14"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-black font-bold text-sm"
                style={{ background: 'var(--accent)' }}
              >
                ⚡
              </div>
              <span className="font-semibold text-white text-base tracking-tight">VideoEV</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', lineHeight: 1.65, maxWidth: '32ch' }}>
              Premium video advertising network for EV charging stations.
              Reach high-income drivers during the one moment they&apos;re
              guaranteed to be watching.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://demo.videoev.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}
                className="hover:text-white transition-colors"
              >
                Live Demo →
              </a>
              <a
                href="https://data.videoev.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}
                className="hover:text-white transition-colors"
              >
                Dashboard →
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="eyebrow mb-4" style={{ color: 'var(--text-3)' }}>Product</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Ad Formats', href: '#surfaces' },
                { label: 'Audience', href: '#audience' },
                { label: 'Live Demo', href: 'https://demo.videoev.com' },
                { label: 'Advertiser Dashboard', href: 'https://data.videoev.com' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '0.875rem', color: 'var(--text-3)' }}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow mb-4" style={{ color: 'var(--text-3)' }}>Contact</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Advertising', href: 'mailto:advertising@videoev.com' },
                { label: 'Network Partnerships', href: 'mailto:partners@videoev.com' },
                { label: 'Press', href: 'mailto:press@videoev.com' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontSize: '0.875rem', color: 'var(--text-3)' }}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} VideoEV. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-3)' }}>
            videoev.com
          </p>
        </div>
      </div>
    </footer>
  );
}
