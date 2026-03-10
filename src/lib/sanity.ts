import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = 'yo8ru1s1';
export const dataset = 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
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
  return client.fetch(queries.allPosts);
}

export async function getFeaturedPosts() {
  return client.fetch(queries.featuredPosts);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(queries.postBySlug, { slug });
}

export async function getProjects() {
  return client.fetch(queries.allProjects);
}

export async function getFeaturedProjects() {
  return client.fetch(queries.featuredProjects);
}

export async function getServices() {
  return client.fetch(queries.allServices);
}

export async function getTeamMembers() {
  return client.fetch(queries.allTeamMembers);
}

export async function getTestimonials() {
  return client.fetch(queries.allTestimonials);
}

export async function getFeaturedTestimonials() {
  return client.fetch(queries.featuredTestimonials);
}

export async function getPackages() {
  return client.fetch(queries.allPackages);
}

export async function getCategories() {
  return client.fetch(queries.allCategories);
}

// Site Settings & Pages
export async function getSiteSettings() {
  return client.fetch(queries.siteSettings);
}

export async function getHomePage() {
  return client.fetch(queries.homePage);
}

export async function getServicesPage() {
  return client.fetch(queries.servicesPage);
}

export async function getAiSolutionsPage() {
  return client.fetch(queries.aiSolutionsPage);
}

export async function getIndustriesPage() {
  return client.fetch(queries.industriesPage);
}

export async function getContactPage() {
  return client.fetch(queries.contactPage);
}

export async function getFreeAuditPage() {
  return client.fetch(queries.freeAuditPage);
}

export async function getAboutPage() {
  return client.fetch(queries.aboutPage);
}

export async function getInsightsPage() {
  return client.fetch(queries.insightsPage);
}

export async function getPortfolioPage() {
  return client.fetch(queries.portfolioPage);
}

export async function getPackagesPage() {
  return client.fetch(queries.packagesPage);
}

// Industries & AI Solutions
export async function getIndustries() {
  return client.fetch(queries.allIndustries);
}

export async function getAiSolutions() {
  return client.fetch(queries.allAiSolutions);
}

// FAQs
export async function getFaqs() {
  return client.fetch(queries.allFaqs);
}

export async function getFaqsByCategory(category: string) {
  return client.fetch(queries.faqsByCategory, { category });
}
