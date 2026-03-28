import { Metadata } from 'next';
import DigitalMaturityClient from './DigitalMaturityClient';

export const metadata: Metadata = {
  title: 'Digital Maturity Assessment | Immovables Digital Space',
  description: 'Discover your digital strengths and opportunities. Take our 2-minute assessment and get a personalized digital maturity report.',
};

export default function DigitalMaturityPage() {
  return <DigitalMaturityClient />;
}
