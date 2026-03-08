import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developers — VideoEV',
  description:
    'Integrate EV charging session data into your ad stack in minutes. VideoEV provides a single normalized webhook API, sandbox environment, and SDK for CSMS partners and ad tech teams.',
};

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
