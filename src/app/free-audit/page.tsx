import { getFreeAuditPage, getSiteSettings } from '@/lib/sanity';
import FreeAuditClient from './FreeAuditClient';

export const revalidate = 60;

export default async function FreeAuditPage() {
  const [pageData, siteSettings] = await Promise.all([
    getFreeAuditPage(),
    getSiteSettings()
  ]);

  return <FreeAuditClient pageData={pageData} siteSettings={siteSettings} />;
}
