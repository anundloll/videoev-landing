import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import StakeholderSection from '@/components/StakeholderSection';
import TheMedium from '@/components/TheMedium';
import AMCAttribution from '@/components/AMCAttribution';
import HowItWorks from '@/components/HowItWorks';
import Surfaces from '@/components/Surfaces';
import Audience from '@/components/Audience';
import Targeting from '@/components/Targeting';
import TechSpecs from '@/components/TechSpecs';
import ROICalculator from '@/components/ROICalculator';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'VideoEV — Premium Video Advertising at EV Charging Stations',
  description: 'VideoEV is a video advertising network that reaches high-income EV drivers during their 20-minute charging session. OpenRTB 2.6, VAST 4.2, Amazon AMC attribution.',
  openGraph: {
    title: 'VideoEV — Premium Video Advertising at EV Charging Stations',
    description: 'Reach 248,000 high-income EV drivers per month. VIN-confirmed audience targeting. Amazon AMC closed-loop attribution. $25 CPM.',
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
      <StakeholderSection />
      <TheMedium />
      <AMCAttribution />
      <HowItWorks />
      <Surfaces />
      <Audience />
      <Targeting />
      <TechSpecs />
      <ROICalculator />
      <DualCTA />
      <Footer />
      <ContactModal />
    </main>
  );
}
