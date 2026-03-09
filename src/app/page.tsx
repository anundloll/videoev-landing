import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import TheMedium from '@/components/TheMedium';
import BuyingTerminal from '@/components/BuyingTerminal';
import RevenueTerminal from '@/components/RevenueTerminal';
import EnterpriseIntegrations from '@/components/EnterpriseIntegrations';
import AMCAttribution from '@/components/AMCAttribution';
import HowItWorks from '@/components/HowItWorks';
import Surfaces from '@/components/Surfaces';
import Dayparting from '@/components/Dayparting';
import Audience from '@/components/Audience';
import Targeting from '@/components/Targeting';
import TechSpecs from '@/components/TechSpecs';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'VideoEV — The Operating System for Vehicle Media',
  description: 'VideoEV is the first self-serve Vehicle Media Network. Brands buy by vehicle segment, CPOs earn passive yield. OCPP 2.0.1 · Amazon Marketing Cloud · OpenRTB 2.6.',
  openGraph: {
    title: 'VideoEV — The Operating System for Vehicle Media',
    description: 'Self-serve VMN. Brands buy impressions by vehicle segment. CPOs earn passive yield on every charging session.',
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
      <BuyingTerminal />
      <RevenueTerminal />
      <EnterpriseIntegrations />
      <AMCAttribution />
      <HowItWorks />
      <Surfaces />
      <Dayparting />
      <Audience />
      <Targeting />
      <TechSpecs />
      <DualCTA />
      <Footer />
      <ContactModal />
    </main>
  );
}
