import { getIndustriesPage, getIndustries } from '@/lib/sanity';
import IndustriesClient from './IndustriesClient';

export const revalidate = 60;

export default async function IndustriesPage() {
  const [pageData, industries] = await Promise.all([
    getIndustriesPage(),
    getIndustries()
  ]);

  return <IndustriesClient pageData={pageData} industries={industries} />;
}
