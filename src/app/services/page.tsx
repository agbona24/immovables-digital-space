import { getServicesPage, getServices } from '@/lib/sanity';
import ServicesClient from './ServicesClient';

export const revalidate = 60;

export default async function ServicesPage() {
  const [pageData, services] = await Promise.all([
    getServicesPage(),
    getServices()
  ]);

  return <ServicesClient pageData={pageData} services={services} />;
}
