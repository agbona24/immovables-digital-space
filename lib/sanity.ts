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
