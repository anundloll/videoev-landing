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
            className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--accent-green)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
              <path d="M7.5 1L1 9h5.5L5 15l7-8.5H6L7.5 1Z" fill="#D4AF37" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-white text-base tracking-tight">VideoEV</span>
        </Link>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#advertisers"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Inventory Search
          </a>
          <a
            href="#advertisers"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            For Brands
          </a>
          <a
            href="#cpos"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            For CPOs
          </a>
          <a
            href="#tech"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Right CTA — Launch Campaign */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => openModal('advertiser')}
            className="btn-primary"
            style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
          >
            Launch Campaign
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
          <a href="#advertisers" style={{ color: 'var(--text-2)', paddingTop: '1rem' }} onClick={() => setOpen(false)}>Inventory Search</a>
          <a href="#advertisers" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>For Brands</a>
          <a href="#cpos" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>For CPOs</a>
          <a href="#tech" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Contact Us</a>
          <div className="pt-2">
            <button
              onClick={() => { openModal('advertiser'); setOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Launch Campaign
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
