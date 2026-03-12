import { getAiSolutionsPage, getAiSolutions, client } from '@/lib/sanity';
import AiSolutionsClient from './AiSolutionsClient';

export const revalidate = 60;

async function getAiBenefits() {
  try {
    const benefits = await client.fetch(`
      *[_type == "aiBenefit"] | order(order asc) {
        icon,
        title,
        description
      }
    `);
    return benefits || [];
  } catch (error) {
    console.error('Error fetching AI benefits:', error);
    return [];
  }
}

export default async function AiSolutionsPage() {
  const [pageData, aiSolutions, benefits] = await Promise.all([
    getAiSolutionsPage(),
    getAiSolutions(),
    getAiBenefits()
  ]);

  return <AiSolutionsClient pageData={pageData} aiSolutions={aiSolutions} benefits={benefits} />;
}
