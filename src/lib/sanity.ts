import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = 'yo8ru1s1';
export const dataset = 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled due to CDN DNS issues
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// Helper queries
export const queries = {
  // Blog posts
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    "author": author->{name, image, role},
    "categories": categories[]->{ title, slug, color }
  }`,
  
  featuredPosts: `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    "author": author->{name, image, role},
    "categories": categories[]->{ title, slug, color }
  }`,
  
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    body,
    "author": author->{name, image, role, bio},
    "categories": categories[]->{ title, slug, color }
  }`,

  // Projects
  allProjects: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    client,
    image,
    category,
    description,
    results,
    technologies,
    link,
    featured
  }`,
  
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc)[0...6] {
    _id,
    title,
    slug,
    client,
    image,
    category,
    description,
    link
  }`,

  // Services
  allServices: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    description,
    features,
    image
  }`,

  // Team
  allTeamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    image,
    bio,
    linkedin,
    twitter,
    email
  }`,

  // Testimonials
  allTestimonials: `*[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    company,
    image,
    quote,
    rating,
    featured
  }`,
  
  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    role,
    company,
    image,
    quote,
    rating
  }`,

  // Packages
  allPackages: `*[_type == "package"] | order(order asc) {
    _id,
    name,
    price,
    period,
    description,
    features,
    notIncluded,
    highlighted,
    ctaText
  }`,

  // Categories
  allCategories: `*[_type == "category"] {
    _id,
    title,
    slug,
    description,
    color
  }`,

  // Authors
  allAuthors: `*[_type == "author"] {
    _id,
    name,
    slug,
    image,
    role,
    bio
  }`,

  // Site Settings
  siteSettings: `*[_type == "siteSettings"][0] {
    companyName,
    tagline,
    logo,
    email,
    supportEmail,
    phone1,
    phone2,
    address,
    businessHours,
    socialLinks,
    footerText
  }`,

  // Home Page
  homePage: `*[_type == "homePage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    heroCta1Text,
    heroCta1Link,
    heroCta2Text,
    heroCta2Link,
    stats,
    servicesTitle,
    servicesSubtitle,
    aboutTitle,
    aboutContent,
    aboutFeatures,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Services Page
  servicesPage: `*[_type == "servicesPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    processTitle,
    processSteps,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // AI Solutions Page
  aiSolutionsPage: `*[_type == "aiSolutionsPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    benefitsTitle,
    benefitsSubtitle,
    benefits,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Industries Page
  industriesPage: `*[_type == "industriesPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Contact Page
  contactPage: `*[_type == "contactPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    formTitle,
    formSubtitle,
    mapEmbedUrl
  }`,

  // Free Audit Page
  freeAuditPage: `*[_type == "freeAuditPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    heroChecklist,
    auditIncludes,
    formTitle,
    formSubtitle,
    ctaTitle,
    ctaSubtitle
  }`,

  // About Page
  aboutPage: `*[_type == "aboutPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    missionTitle,
    missionContent,
    visionTitle,
    visionContent,
    valuesTitle,
    values,
    stats,
    teamTitle,
    teamSubtitle,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Insights Page
  insightsPage: `*[_type == "insightsPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    categories,
    newsletterTitle,
    newsletterSubtitle
  }`,

  // Portfolio Page
  portfolioPage: `*[_type == "portfolioPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    categories,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Packages Page
  packagesPage: `*[_type == "packagesPage"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    heroImage,
    comparisonTitle,
    comparisonSubtitle,
    faqTitle,
    faqSubtitle,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink
  }`,

  // Industries
  allIndustries: `*[_type == "industry"] | order(order asc) {
    _id,
    name,
    slug,
    icon,
    description,
    solutions,
    stat,
    image
  }`,

  // AI Solutions
  allAiSolutions: `*[_type == "aiSolution"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    features,
    benefits,
    image
  }`,

  // FAQs
  allFaqs: `*[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }`,

  faqsByCategory: `*[_type == "faq" && category == $category] | order(order asc) {
    _id,
    question,
    answer
  }`,
};

// Fetch functions
export async function getPosts() {
  try {
    const posts = await client.fetch(queries.allPosts);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getFeaturedPosts() {
  try {
    const posts = await client.fetch(queries.featuredPosts);
    return posts || [];
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await client.fetch(queries.postBySlug, { slug });
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function getProjects() {
  try {
    const projects = await client.fetch(queries.allProjects);
    return projects || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

const categoryLabels: Record<string, string> = {
  website: 'Website Development',
  ai: 'AI Solutions',
  branding: 'Branding',
  marketing: 'Digital Marketing',
  ecommerce: 'E-commerce Website',
  mobile: 'Mobile App',
};

// Fallback portfolio data when Sanity is unavailable
const fallbackPortfolio = [
  { title: 'Cascadia Holdings', category: 'Logistics, Green Energy and Farm Stead', image: '/portfolio/cascadia.png', url: 'https://www.cascadiaholdings.net/' },
  { title: 'Affordable Gadgets', category: 'No 1 Gadgets Store in Ogun State', image: '/portfolio/affordable.png', url: 'https://www.affordablegadgets.ng/' },
  { title: 'MPS Solar Energy', category: 'Premium Power, Security & Smart Automation', image: '/portfolio/mpssolar.png', url: 'https://mps.solar/' },
];

export async function getFeaturedProjects() {
  try {
    const projects = await client.fetch(queries.featuredProjects);
    
    if (!projects || projects.length === 0) {
      return fallbackPortfolio;
    }

    const returnedTitles = new Set(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      projects.map((project: any) => String(project.title || '').toLowerCase())
    );

    const hasExpectedFeaturedProjects = fallbackPortfolio.every((project) =>
      returnedTitles.has(project.title.toLowerCase())
    );

    if (!hasExpectedFeaturedProjects) {
      return fallbackPortfolio;
    }
    
    // Transform to match PortfolioItem interface expected by HomeClient
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return projects.map((project: any) => ({
      title: project.title,
      category: categoryLabels[project.category] || project.category,
      image: project.image ? urlFor(project.image).url() : '/portfolio/placeholder.png',
      url: project.link || '#',
    }));
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return fallbackPortfolio;
  }
}

export async function getServices() {
  try {
    const services = await client.fetch(queries.allServices);
    return services || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getTeamMembers() {
  try {
    const members = await client.fetch(queries.allTeamMembers);
    return members || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    const testimonials = await client.fetch(queries.allTestimonials);
    return testimonials || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getFeaturedTestimonials() {
  try {
    const testimonials = await client.fetch(queries.featuredTestimonials);
    return testimonials || [];
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

export async function getPackages() {
  try {
    const packages = await client.fetch(queries.allPackages);
    return packages || [];
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    const categories = await client.fetch(queries.allCategories);
    return categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Site Settings & Pages
export async function getSiteSettings() {
  try {
    return await client.fetch(queries.siteSettings);
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function getHomePage() {
  try {
    const page = await client.fetch(queries.homePage);
    return page || null;
  } catch (error) {
    console.error('Error fetching home page:', error);
    return null;
  }
}

export async function getServicesPage() {
  try {
    return await client.fetch(queries.servicesPage);
  } catch (error) {
    console.error('Error fetching services page:', error);
    return null;
  }
}

export async function getAiSolutionsPage() {
  try {
    return await client.fetch(queries.aiSolutionsPage);
  } catch (error) {
    console.error('Error fetching AI solutions page:', error);
    return null;
  }
}

export async function getIndustriesPage() {
  try {
    return await client.fetch(queries.industriesPage);
  } catch (error) {
    console.error('Error fetching industries page:', error);
    return null;
  }
}

export async function getContactPage() {
  try {
    return await client.fetch(queries.contactPage);
  } catch (error) {
    console.error('Error fetching contact page:', error);
    return null;
  }
}

export async function getFreeAuditPage() {
  try {
    return await client.fetch(queries.freeAuditPage);
  } catch (error) {
    console.error('Error fetching free audit page:', error);
    return null;
  }
}

export async function getAboutPage() {
  try {
    return await client.fetch(queries.aboutPage);
  } catch (error) {
    console.error('Error fetching about page:', error);
    return null;
  }
}

export async function getInsightsPage() {
  try {
    return await client.fetch(queries.insightsPage);
  } catch (error) {
    console.error('Error fetching insights page:', error);
    return null;
  }
}

export async function getPortfolioPage() {
  try {
    return await client.fetch(queries.portfolioPage);
  } catch (error) {
    console.error('Error fetching portfolio page:', error);
    return null;
  }
}

export async function getPackagesPage() {
  try {
    return await client.fetch(queries.packagesPage);
  } catch (error) {
    console.error('Error fetching packages page:', error);
    return null;
  }
}

// Industries & AI Solutions
export async function getIndustries() {
  try {
    const industries = await client.fetch(queries.allIndustries);
    return industries || [];
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

export async function getAiSolutions() {
  try {
    const solutions = await client.fetch(queries.allAiSolutions);
    return solutions || [];
  } catch (error) {
    console.error('Error fetching AI solutions:', error);
    return [];
  }
}

// FAQs
export async function getFaqs() {
  try {
    const faqs = await client.fetch(queries.allFaqs);
    return faqs || [];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

export async function getFaqsByCategory(category: string) {
  try {
    const faqs = await client.fetch(queries.faqsByCategory, { category });
    return faqs || [];
  } catch (error) {
    console.error('Error fetching FAQs by category:', error);
    return [];
  }
}
