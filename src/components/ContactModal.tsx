'use client';
import { useState, useEffect, useCallback } from 'react';
import type { ModalType } from '@/lib/openModal';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwWCnZIBRpiGM2iMv9TQSlywCOui3yRyslCprJ7B1bJ-HZ9ZcEGdF0yVe8PBiC7qk8d/exec';

type Status = 'idle' | 'loading' | 'success' | 'error';

const COMPANY_TYPES = ['Brand', 'Agency', 'Retailer', 'Other'];

const ADVERTISER_BUDGETS = [
  '$5k – $15k / month',
  '$15k – $50k / month',
  '$50k – $150k / month',
  '$150k+ / month',
];

const PARTNER_SIZES = [
  '1 – 10 stalls',
  '11 – 50 stalls',
  '51 – 200 stalls',
  '200+ stalls',
];

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M6.5 11l3 3 6-6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid var(--border)',
  color: 'var(--text-1)',
  outline: 'none',
  width: '100%',
  borderRadius: '0.5rem',
  padding: '0.625rem 1rem',
  fontSize: '0.9375rem',
  appearance: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  color: 'var(--text-2)',
  marginBottom: '0.375rem',
};

export default function ContactModal() {
  const [type, setType] = useState<ModalType | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [email, setEmail] = useState('');
  const [extra, setExtra] = useState('');

  const resetForm = useCallback(() => {
    setStatus('idle');
    setName('');
    setCompany('');
    setCompanyType('');
    setEmail('');
    setExtra('');
  }, []);

  const close = useCallback(() => {
    setType(null);
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ type: ModalType }>).detail;
      setType(detail.type);
      resetForm();
    };
    window.addEventListener('videoev:openModal', handler);
    return () => window.removeEventListener('videoev:openModal', handler);
  }, [resetForm]);

  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [type, close]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, name, company, companyType, email, extra }),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (!type) return null;

  const isAdv = type === 'advertiser';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl"
        style={{
          background: '#0d0d0d',
          border: '1px solid rgba(212,175,55,0.2)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-white/10"
          style={{ color: 'var(--text-3)', background: 'rgba(255,255,255,0.05)', fontSize: '0.875rem' }}
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center px-8 py-12">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              <CheckIcon />
            </div>
            <h3 className="font-bold mb-2" style={{ fontSize: '1.375rem' }}>
              {isAdv ? 'Request received' : 'Thanks for reaching out'}
            </h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '34ch', margin: '0 auto 2rem' }}>
              {isAdv
                ? "We'll send your media kit and follow up within one business day."
                : "Someone from the VideoEV team will be in touch about your network shortly."}
            </p>
            <button onClick={close} className="btn-primary mx-auto" style={{ display: 'inline-flex' }}>
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="eyebrow mb-2">
              {isAdv ? 'Get Started' : 'For Charging Networks'}
            </div>
            <h3 className="font-bold mb-7" style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>
              {isAdv ? 'Launch your campaign' : 'Connect your network'}
            </h3>

            <form onSubmit={submit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label style={labelStyle}>Your name</label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  style={inputStyle}
                />
              </div>

              {/* Company + Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>{isAdv ? 'Company' : 'Network name'}</label>
                  <input
                    required
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder={isAdv ? 'Acme Corp' : 'ChargePoint'}
                    style={inputStyle}
                  />
                </div>
                {isAdv && (
                  <div>
                    <label style={labelStyle}>Company type</label>
                    <select
                      value={companyType}
                      onChange={e => setCompanyType(e.target.value)}
                      style={{ ...inputStyle, color: companyType ? 'var(--text-1)' : 'var(--text-3)' }}
                    >
                      <option value="">Select type</option>
                      {COMPANY_TYPES.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Work email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  style={inputStyle}
                />
              </div>

              {/* Budget / station count */}
              <div>
                <label style={labelStyle}>
                  {isAdv ? 'Estimated monthly budget' : 'Number of stalls'}
                </label>
                <select
                  value={extra}
                  onChange={e => setExtra(e.target.value)}
                  style={{ ...inputStyle, color: extra ? 'var(--text-1)' : 'var(--text-3)' }}
                >
                  <option value="">Select a range</option>
                  {(isAdv ? ADVERTISER_BUDGETS : PARTNER_SIZES).map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary mt-1"
                style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.65 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
              >
                {status === 'loading' ? (
                  'Sending…'
                ) : (
                  <>
                    {isAdv ? 'Send request' : 'Get in touch'}
                    <ArrowIcon />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p style={{ fontSize: '0.8125rem', color: '#f87171', textAlign: 'center', marginTop: '-0.5rem' }}>
                  Something went wrong. Email us directly at{' '}
                  <a href="mailto:sales@videoev.com" style={{ color: '#f87171', textDecoration: 'underline' }}>
                    sales@videoev.com
                  </a>
                </p>
              )}

              <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', textAlign: 'center', marginTop: '-0.5rem' }}>
                {isAdv ? 'We respond within one business day.' : 'Currently expanding with US charging networks.'}{' '}
                Prefer email?{' '}
                <a href="mailto:sales@videoev.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                  sales@videoev.com
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
