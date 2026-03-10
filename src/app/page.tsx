import { client, getHomePage, getIndustries, getTestimonials, getPackages, getFeaturedProjects } from '@/lib/sanity';
import HomeClient from './HomeClient';

export const revalidate = 60;

export default async function HomePage() {
  const [pageData, industries, testimonials, packages, portfolio] = await Promise.all([
    getHomePage(),
    getIndustries(),
    getTestimonials(),
    getPackages(),
    getFeaturedProjects()
  ]);

  return (
    <HomeClient 
      pageData={pageData} 
      industries={industries}
      testimonials={testimonials}
      packages={packages}
      portfolio={portfolio}
    />
  );
}
