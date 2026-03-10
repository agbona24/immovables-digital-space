import { getProjects } from '../../../lib/sanity';
import PortfolioClient from './PortfolioClient';

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await getProjects();
  
  return <PortfolioClient projects={projects} />;
}
