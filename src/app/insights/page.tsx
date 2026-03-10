import { getPosts } from '@/lib/sanity';
import InsightsClient from './InsightsClient';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function InsightsPage() {
  const posts = await getPosts();
  
  return <InsightsClient posts={posts} />;
}
