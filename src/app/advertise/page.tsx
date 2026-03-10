import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import BuyingTerminal from '@/components/BuyingTerminal';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'Advertise — VideoEV',
  description: 'Reach EV drivers with session-resolved audience targeting. Set your CPM, choose your surfaces, and track every outcome in real time. Minimum buys start at $5k.',
};

export default function AdvertisePage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>
        <BuyingTerminal />
      </div>
      <Footer />
      <ContactModal />
    </main>
  );
}
