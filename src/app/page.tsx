import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import TheMedium from '@/components/TheMedium';
import Audience from '@/components/Audience';
import HowItWorks from '@/components/HowItWorks';
import DataProducts from '@/components/DataProducts';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'VideoEV — The Operating System for Vehicle Media',
  description: 'VideoEV is the first Vehicle Media Network powered by a Vehicle Identity Graph. OCPP session identifiers resolved to Make, Model, and MSRP proxy. Brands buy by vehicle segment. CPOs earn passive yield.',
  openGraph: {
    title: 'VideoEV — The Operating System for Vehicle Media',
    description: 'The first VMN with a Vehicle Identity Graph. OCPP identifiers resolved to verified vehicle profiles. Brands buy by segment. CPOs earn passive yield.',
    url: 'https://videoev.com',
    siteName: 'VideoEV',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <Hero />
      <StatsBar />
      <TheMedium />
      <Audience />
      <HowItWorks />
      <DataProducts />
      <DualCTA />
      <Footer />
      <ContactModal />
    </main>
  );
}
