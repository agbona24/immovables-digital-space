import { getTeamMembers } from '../../../lib/sanity';
import AboutClient from './AboutClient';

export const revalidate = 60;

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();
  
  return <AboutClient teamMembers={teamMembers} />;
}
