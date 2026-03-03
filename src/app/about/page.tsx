import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About — VideoEV',
  description: 'VideoEV was founded by Arvin Nundloll, former Director of Strategy & Business Development at Comcast Advertising, where he pioneered closed-loop attribution for brands including Mastercard.',
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
