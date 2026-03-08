import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import BuyingTerminal from '@/components/BuyingTerminal';
import SearchSaturation from '@/components/SearchSaturation';
import AMCAttribution from '@/components/AMCAttribution';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'For Brands — VideoEV',
  description: 'Escape Amazon Search saturation. VideoEV delivers premium EV charging video inventory with VIN-confirmed audience targeting and closed-loop AMC attribution.',
};

export default function ForBrandsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />
      <div style={{ paddingTop: '4rem' }}>
        <BuyingTerminal />
        <SearchSaturation />
        <AMCAttribution />
      </div>
      <Footer />
      <ContactModal />
    </main>
  );
}
