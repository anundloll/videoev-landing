'use client';
import Link from 'next/link';
import { useState } from 'react';
import { openModal } from '@/lib/openModal';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(5,5,5,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
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
        </Link>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/for-brands"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            For Brands
          </Link>
          <Link
            href="/network"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            For CPOs
          </Link>
          <Link
            href="/targeting"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Data & Targeting
          </Link>
          <Link
            href="/identity"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Identity Graph
          </Link>
          <Link
            href="/technology"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Technology
          </Link>
          <Link
            href="/about"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => openModal('advertiser')}
            className="btn-primary"
            style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-white transition-all" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-px bg-white" />
          <span className="block w-5 h-px bg-white transition-all" style={{ opacity: open ? 0 : 1 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <Link href="/for-brands" style={{ color: 'var(--text-2)', paddingTop: '1rem' }} onClick={() => setOpen(false)}>For Brands</Link>
          <Link href="/network" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>For CPOs</Link>
          <Link href="/targeting" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Data & Targeting</Link>
          <Link href="/identity" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Identity Graph</Link>
          <Link href="/technology" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Technology</Link>
          <Link href="/about" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>About</Link>
          <div className="pt-2">
            <button
              onClick={() => { openModal('advertiser'); setOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
