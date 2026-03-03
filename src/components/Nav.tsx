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
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
              <path d="M7.5 1L1 9h5.5L5 15l7-8.5H6L7.5 1Z" fill="#000" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-white text-base tracking-tight">VideoEV</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" style={{ color: 'var(--text-2)', fontSize: '0.875rem' }} className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#surfaces" style={{ color: 'var(--text-2)', fontSize: '0.875rem' }} className="hover:text-white transition-colors">
            Ad Formats
          </a>
          <a href="#audience" style={{ color: 'var(--text-2)', fontSize: '0.875rem' }} className="hover:text-white transition-colors">
            Audience
          </a>
          <a
            href="https://demo.videoev.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
            className="hover:text-white transition-colors"
          >
            Live Demo
          </a>
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => openModal('partner')} className="btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            For Networks
          </button>
          <button onClick={() => openModal('advertiser')} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            Get Media Kit
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
          <a href="#how-it-works" style={{ color: 'var(--text-2)', paddingTop: '1rem' }} onClick={() => setOpen(false)}>How It Works</a>
          <a href="#surfaces" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Ad Formats</a>
          <a href="#audience" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Audience</a>
          <a href="https://demo.videoev.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-2)' }} onClick={() => setOpen(false)}>Live Demo</a>
          <div className="flex flex-col gap-3 pt-2">
            <button onClick={() => { openModal('partner'); setOpen(false); }} className="btn-ghost">For Charging Networks</button>
            <button onClick={() => { openModal('advertiser'); setOpen(false); }} className="btn-primary">Get Media Kit</button>
          </div>
        </div>
      )}
    </nav>
  );
}
