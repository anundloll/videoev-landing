import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About — VideoEV',
  description: 'VideoEV is the first self-serve Vehicle Media Network — built attribution-first, from the ground up. OCPP 2.0.1 · Amazon Marketing Cloud · OpenRTB 2.6.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>
        <About />
      </div>
      <Footer />
    </main>
  );
}
