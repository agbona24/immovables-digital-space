import { getAiSolutionsPage, getAiSolutions, client } from '@/lib/sanity';
import AiSolutionsClient from './AiSolutionsClient';

export const revalidate = 60;

async function getAiBenefits() {
  return client.fetch(`
    *[_type == "aiBenefit"] | order(order asc) {
      icon,
      title,
      description
    }
  `);
}

export default async function AiSolutionsPage() {
  const [pageData, aiSolutions, benefits] = await Promise.all([
    getAiSolutionsPage(),
    getAiSolutions(),
    getAiBenefits()
  ]);

  return <AiSolutionsClient pageData={pageData} aiSolutions={aiSolutions} benefits={benefits} />;
}
