import { getPackages } from '../../../lib/sanity';
import PackagesClient from './PackagesClient';

export const revalidate = 60;

export default async function PackagesPage() {
  const packages = await getPackages();
  
  return <PackagesClient packages={packages} />;
}
