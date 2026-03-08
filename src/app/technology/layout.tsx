import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology — VideoEV',
  description:
    'VideoEV is a CSMS-agnostic middleware that normalizes EV charging session data in real time, hashes all vehicle identifiers, and delivers a single unified webhook payload to any ad stack — without storing raw PII.',
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
