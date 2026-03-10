import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import RevenueTerminal from '@/components/RevenueTerminal';
import ROICalculator from '@/components/ROICalculator';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'Network Partners — VideoEV',
  description: 'Turn your EV charging infrastructure into a recurring revenue line. Zero upfront investment. Revenue share on every session. Works with existing OCPP hardware.',
};

export default function NetworkPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>
        <RevenueTerminal />
        <ROICalculator />
      </div>
      <Footer />
      <ContactModal />
    </main>
  );
}
