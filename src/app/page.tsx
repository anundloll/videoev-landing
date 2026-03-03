import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import TheMedium from '@/components/TheMedium';
import HowItWorks from '@/components/HowItWorks';
import Surfaces from '@/components/Surfaces';
import Audience from '@/components/Audience';
import Targeting from '@/components/Targeting';
import DualCTA from '@/components/DualCTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'VideoEV — Premium Video Advertising at EV Charging Stations',
  description: 'VideoEV is a video advertising network that reaches high-income EV drivers during their 30-minute charging session across kiosk, mobile, and in-car screens.',
  openGraph: {
    title: 'VideoEV — Premium Video Advertising at EV Charging Stations',
    description: 'Reach 248,000 high-income EV drivers per month. VIN-confirmed audience targeting. $18–$34 CPM.',
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
      <HowItWorks />
      <Surfaces />
      <Audience />
      <Targeting />
      <DualCTA />
      <Footer />
      <ContactModal />
    </main>
  );
}
