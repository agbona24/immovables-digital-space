import { getContactPage, getSiteSettings, getFaqs } from '@/lib/sanity';
import ContactClient from './ContactClient';

export const revalidate = 60;

export default async function ContactPage() {
  const [pageData, siteSettings, faqs] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
    getFaqs(),
  ]);

  return (
    <ContactClient 
      pageData={pageData} 
      siteSettings={siteSettings}
      faqs={faqs}
    />
  );
}
