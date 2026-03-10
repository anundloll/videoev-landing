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
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-green)' }}
              >
                <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                  <rect x="8" y="22" width="84" height="56" rx="7" stroke="white" strokeWidth="6"/>
                  <circle cx="50" cy="50" r="16" stroke="#00a896" strokeWidth="4"/>
                  <path d="M45 43l16 7-16 7V43z" fill="#00a896"/>
                </svg>
              </div>
              <span className="font-semibold text-base tracking-tight">
                <span className="text-white">Video</span><span style={{ color: 'var(--accent)' }}>EV</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', lineHeight: 1.65, maxWidth: '32ch' }}>
              The operating system for vehicle media. Self-serve VMN built on
              OCPP 2.0.1 and Amazon Marketing Cloud.
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

          {/* Platform */}
          <div>
            <div className="eyebrow mb-4" style={{ color: 'var(--text-3)' }}>Platform</div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Inventory Search', href: '/#advertisers' },
                { label: 'For Brands', href: '/#advertisers' },
                { label: 'For CPOs', href: '/#cpos' },
                { label: 'Tech Stack', href: '/#tech' },
                { label: 'Identity Graph', href: '/identity' },
                { label: 'About', href: '/about' },
                { label: 'Live Demo', href: 'https://demo.videoev.com' },
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
                { label: 'Advertising', href: '/advertise' },
                { label: 'Network Partnerships', href: '/network' },
                { label: 'Investor Relations', href: '/investors' },
                { label: 'Press', href: 'mailto:sales@videoev.com' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto') ? undefined : l.href.startsWith('http') ? '_blank' : undefined}
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
