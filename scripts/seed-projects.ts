import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

const client = createClient({
  projectId: 'yo8ru1s1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

interface ProjectData {
  title: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  link: string;
  featured: boolean;
  order: number;
  imagePath: string;
  technologies: string[];
  results: string[];
}

const projects: ProjectData[] = [
  {
    title: 'Cascadia Holdings',
    slug: 'cascadia-holdings',
    client: 'Cascadia Holdings',
    category: 'website',
    description: 'Premium corporate website for a leading investment and holdings company. Built with modern design principles, smooth animations, and comprehensive corporate information architecture.',
    link: 'https://www.cascadiaholdings.net/',
    featured: true,
    order: 1,
    imagePath: 'public/portfolio/cascadia.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    results: ['300% increase in inquiries', 'Professional brand presence', '40% lower bounce rate'],
  },
  {
    title: 'Affordable Gadgets',
    slug: 'affordable-gadgets',
    client: 'Affordable Gadgets Nigeria',
    category: 'ecommerce',
    description: 'Full-featured e-commerce platform for a leading electronics and gadgets retailer in Nigeria. Complete with product catalog, shopping cart, payment integration, and order management.',
    link: 'https://www.affordablegadgets.ng/',
    featured: true,
    order: 2,
    imagePath: 'public/portfolio/affordable.png',
    technologies: ['Next.js', 'React', 'E-commerce Platform', 'Payment Gateway'],
    results: ['5x sales increase', '200+ products listed', '24/7 automated orders'],
  },
  {
    title: 'MPS Solar',
    slug: 'mps-solar',
    client: 'MPS Solar Energy',
    category: 'website',
    description: 'Modern website for a renewable energy company showcasing solar solutions, installations, and sustainable energy products. Features calculator tools and service booking.',
    link: 'https://mps.solar/',
    featured: true,
    order: 3,
    imagePath: 'public/portfolio/mpssolar.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Interactive Calculators'],
    results: ['150% more leads', 'Global reach established', 'Streamlined quotations'],
  },
];

async function uploadImage(filePath: string) {
  const absolutePath = path.join(process.cwd(), filePath);
  const imageBuffer = fs.readFileSync(absolutePath);
  const fileName = path.basename(filePath);
  
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: fileName,
  });
  
  return asset;
}

async function seedProjects() {
  console.log('🚀 Starting to seed projects...\n');

  // First, delete existing projects with matching slugs
  for (const project of projects) {
    const existing = await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, {
      slug: project.slug,
    });
    
    if (existing) {
      console.log(`🗑️  Deleting existing project: ${project.title}`);
      await client.delete(existing._id);
    }
  }

  // Create new projects
  for (const project of projects) {
    console.log(`📷 Uploading image for ${project.title}...`);
    const imageAsset = await uploadImage(project.imagePath);
    
    console.log(`✨ Creating project: ${project.title}`);
    
    const doc = {
      _type: 'project',
      title: project.title,
      slug: {
        _type: 'slug',
        current: project.slug,
      },
      client: project.client,
      category: project.category,
      description: project.description,
      link: project.link,
      featured: project.featured,
      order: project.order,
      technologies: project.technologies,
      results: project.results,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      },
    };

    await client.create(doc);
    console.log(`✅ Created: ${project.title}\n`);
  }

  console.log('🎉 All projects seeded successfully!');
}

seedProjects().catch(console.error);
