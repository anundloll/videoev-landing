import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import InvestmentThesis from '@/components/InvestmentThesis';

export const metadata: Metadata = {
  title: 'Investor Relations — VideoEV',
  description: 'VideoEV is raising a $2M seed round to scale the world\'s first Vehicle Media Network. OCPP 2.0.1, Amazon AMC attribution, 500 "High-IQ" screen nodes.',
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>
        <InvestmentThesis />
      </div>
      <Footer />
    </main>
  );
}
