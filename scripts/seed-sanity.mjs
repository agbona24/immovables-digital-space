import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'yo8ru1s1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// Helper to create slug
const createSlug = (text) => ({
  _type: 'slug',
  current: text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
});

async function seedData() {
  console.log('🌱 Starting Sanity seed...\n');

  // ============ AUTHORS ============
  console.log('Creating authors...');
  const authors = [
    { _type: 'author', name: 'Tunde Adeyemi', slug: createSlug('tunde-adeyemi'), bio: 'AI & Digital Strategy Expert at IDS' },
    { _type: 'author', name: 'Adaobi Okonkwo', slug: createSlug('adaobi-okonkwo'), bio: 'Business Automation Specialist' },
    { _type: 'author', name: 'Emeka Nwosu', slug: createSlug('emeka-nwosu'), bio: 'SEO & Search Marketing Lead' },
    { _type: 'author', name: 'Fatima Bello', slug: createSlug('fatima-bello'), bio: 'Senior Digital Marketing Strategist' },
  ];

  const createdAuthors = {};
  for (const author of authors) {
    const created = await client.create(author);
    createdAuthors[author.name] = created._id;
    console.log(`  ✓ Author: ${author.name}`);
  }

  // ============ CATEGORIES ============
  console.log('\nCreating categories...');
  const categories = [
    { _type: 'category', title: 'AI', slug: createSlug('ai'), description: 'Artificial Intelligence & Automation' },
    { _type: 'category', title: 'SEO', slug: createSlug('seo'), description: 'Search Engine Optimization' },
    { _type: 'category', title: 'Marketing', slug: createSlug('marketing'), description: 'Digital Marketing Strategies' },
    { _type: 'category', title: 'Technology', slug: createSlug('technology'), description: 'Web & Software Development' },
  ];

  const createdCategories = {};
  for (const category of categories) {
    const created = await client.create(category);
    createdCategories[category.title] = created._id;
    console.log(`  ✓ Category: ${category.title}`);
  }

  // ============ TEAM MEMBERS ============
  console.log('\nCreating team members...');
  const teamMembers = [
    {
      _type: 'teamMember',
      name: 'Afuda-iyoke Jude',
      slug: createSlug('afuda-iyoke-jude'),
      role: 'CEO/MD',
      bio: 'Visionary leader with 10+ years in digital transformation. Jude founded IDS with the mission to bring world-class digital solutions to African businesses.',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      order: 1,
    },
    {
      _type: 'teamMember',
      name: 'Afuda-iyoke Promise',
      slug: createSlug('afuda-iyoke-promise'),
      role: 'COO',
      bio: 'Operations expert ensuring seamless project delivery and client satisfaction. Promise brings strategic oversight to all IDS operations.',
      linkedin: 'https://linkedin.com',
      order: 2,
    },
    {
      _type: 'teamMember',
      name: 'Azeez Agbona O.',
      slug: createSlug('azeez-agbona'),
      role: 'Head of I.T',
      bio: 'Technical architect with expertise in AI, cloud infrastructure, and enterprise solutions. Azeez leads our development team to build cutting-edge solutions.',
      linkedin: 'https://linkedin.com',
      order: 3,
    },
    {
      _type: 'teamMember',
      name: 'Sherif Badrudeen Olalekan',
      slug: createSlug('sherif-badrudeen-olalekan'),
      role: 'HR',
      bio: 'People-focused HR professional building the IDS team culture. Sherif ensures we attract and retain top talent in the industry.',
      linkedin: 'https://linkedin.com',
      order: 4,
    },
  ];

  for (const member of teamMembers) {
    await client.create(member);
    console.log(`  ✓ Team Member: ${member.name}`);
  }

  // ============ PACKAGES ============
  console.log('\nCreating packages...');
  const packages = [
    {
      _type: 'package',
      name: 'Starter',
      price: '₦500K',
      period: 'one-time',
      description: 'Perfect for startups and small businesses looking to establish their digital presence.',
      features: [
        '5-page responsive website',
        'Mobile-optimized design',
        'Basic SEO setup',
        'Contact form integration',
        'Social media links',
        '1 month support',
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom integrations',
        'AI chatbot',
      ],
      highlighted: false,
      order: 1,
    },
    {
      _type: 'package',
      name: 'Growth',
      price: '₦1M',
      period: 'one-time',
      description: 'For growing businesses ready to expand their digital footprint and reach.',
      features: [
        '10-page responsive website',
        'Advanced SEO optimization',
        'Blog/News section',
        'Email marketing integration',
        'Analytics dashboard',
        'WhatsApp integration',
        '3 months support',
      ],
      notIncluded: [
        'Full e-commerce',
        'AI automation',
      ],
      highlighted: true,
      order: 2,
    },
    {
      _type: 'package',
      name: 'Professional',
      price: '₦2M',
      period: 'one-time',
      description: 'Comprehensive solution for established businesses seeking advanced digital capabilities.',
      features: [
        'Unlimited pages',
        'E-commerce integration',
        'AI chatbot assistant',
        'CRM integration',
        'Advanced analytics',
        'Marketing automation',
        'Priority support',
        '6 months support',
      ],
      notIncluded: [],
      highlighted: false,
      order: 3,
    },
    {
      _type: 'package',
      name: 'Enterprise',
      price: 'Custom',
      period: 'one-time',
      description: 'Tailored enterprise solutions with dedicated support and custom development.',
      features: [
        'Custom web application',
        'Full AI integration',
        'Dedicated project manager',
        'Custom API development',
        'Enterprise security',
        '24/7 priority support',
        '12 months support',
        'Training & documentation',
      ],
      notIncluded: [],
      highlighted: false,
      order: 4,
    },
  ];

  for (const pkg of packages) {
    await client.create(pkg);
    console.log(`  ✓ Package: ${pkg.name}`);
  }

  // ============ PROJECTS ============
  console.log('\nCreating projects...');
  const projects = [
    {
      _type: 'project',
      title: 'TechVentures Nigeria',
      slug: createSlug('techventures-nigeria'),
      client: 'TechVentures Ltd',
      category: 'website',
      description: 'Complete digital transformation for one of Nigeria\'s leading tech investment firms. Built a modern, responsive website with investor portal and real-time portfolio tracking.',
      results: ['+200% lead generation', '3.5s faster load time', '85% mobile engagement'],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      featured: true,
    },
    {
      _type: 'project',
      title: 'Lagos Gourmet Delivery',
      slug: createSlug('lagos-gourmet-delivery'),
      client: 'Lagos Gourmet',
      category: 'ecommerce',
      description: 'Premium food delivery platform with real-time tracking, multi-vendor support, and seamless payment integration for the Lagos market.',
      results: ['₦50M+ monthly transactions', '40K active users', '4.8★ app rating'],
      technologies: ['React Native', 'Node.js', 'Stripe', 'Google Maps API'],
      featured: true,
    },
    {
      _type: 'project',
      title: 'HealthFirst AI Assistant',
      slug: createSlug('healthfirst-ai-assistant'),
      client: 'HealthFirst Clinics',
      category: 'ai',
      description: 'AI-powered patient intake and appointment scheduling system. Reduced wait times and improved patient experience across 12 clinic locations.',
      results: ['60% faster check-in', '90% patient satisfaction', '35% cost reduction'],
      technologies: ['OpenAI GPT-4', 'Python', 'WhatsApp Business API'],
      featured: true,
    },
    {
      _type: 'project',
      title: 'Naija Fashion Week',
      slug: createSlug('naija-fashion-week'),
      client: 'NFW Events',
      category: 'branding',
      description: 'Complete brand identity and digital presence for Nigeria\'s premier fashion event. Created immersive website with virtual runway experience.',
      results: ['2M+ social impressions', '150% ticket sales increase', '50+ media features'],
      technologies: ['Three.js', 'GSAP', 'Shopify', 'Instagram API'],
      featured: false,
    },
    {
      _type: 'project',
      title: 'AgriConnect Platform',
      slug: createSlug('agriconnect-platform'),
      client: 'AgriConnect NG',
      category: 'marketing',
      description: 'Digital marketing campaign and platform connecting Nigerian farmers directly with urban buyers. Implemented SEO, content marketing, and paid campaigns.',
      results: ['10K+ farmer signups', '300% organic traffic', 'Featured in TechCabal'],
      technologies: ['WordPress', 'HubSpot', 'Google Ads', 'Facebook Ads'],
      featured: false,
    },
    {
      _type: 'project',
      title: 'EduTech Learning App',
      slug: createSlug('edutech-learning-app'),
      client: 'EduTech Africa',
      category: 'mobile',
      description: 'Mobile learning platform designed for African students with offline capabilities, gamification, and adaptive learning paths.',
      results: ['100K+ downloads', '45min avg session', '92% course completion'],
      technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'AWS'],
      featured: false,
    },
  ];

  for (const project of projects) {
    await client.create(project);
    console.log(`  ✓ Project: ${project.title}`);
  }

  // ============ POSTS/ARTICLES ============
  console.log('\nCreating blog posts...');
  const posts = [
    {
      _type: 'post',
      title: 'The Future of AI in Business: 2026 Trends Every CEO Must Know',
      slug: createSlug('future-of-ai-in-business-2026'),
      author: { _type: 'reference', _ref: createdAuthors['Tunde Adeyemi'] },
      categories: [{ _type: 'reference', _ref: createdCategories['AI'] }],
      publishedAt: '2026-03-08T10:00:00Z',
      excerpt: 'Artificial intelligence is reshaping how businesses operate. Discover the key AI trends that will define competitive advantage in 2026.',
      readTime: 8,
      featured: true,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'Artificial intelligence has moved from a futuristic concept to a business necessity. In 2026, companies that fail to integrate AI into their operations risk falling behind competitors who are leveraging these powerful tools to enhance efficiency, reduce costs, and deliver superior customer experiences.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Generative AI Goes Mainstream' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'From content creation to product design, generative AI is transforming how businesses create value. Companies are using AI to generate marketing copy, design prototypes, and even write code at unprecedented speeds.' }] },
        { _type: 'block', _key: 'h2', style: 'h2', children: [{ _type: 'span', text: '2. AI-Powered Customer Service' }] },
        { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', text: 'Intelligent chatbots and virtual assistants are handling increasingly complex customer interactions, providing 24/7 support while reducing operational costs by up to 40%.' }] },
      ],
    },
    {
      _type: 'post',
      title: 'Why Your Business Needs AI Automation Now (Not Later)',
      slug: createSlug('why-business-needs-ai-automation-now'),
      author: { _type: 'reference', _ref: createdAuthors['Adaobi Okonkwo'] },
      categories: [{ _type: 'reference', _ref: createdCategories['AI'] }],
      publishedAt: '2026-03-05T10:00:00Z',
      excerpt: 'Learn why businesses that delay AI implementation risk falling behind and how to start your automation journey today.',
      readTime: 6,
      featured: false,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'The question is no longer whether to adopt AI automation, but how quickly you can implement it. Businesses that delay risk losing competitive advantage to more agile competitors.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: 'The Cost of Waiting' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'Every month you delay AI adoption, your competitors gain ground. They are automating repetitive tasks, freeing their teams to focus on high-value work that drives growth.' }] },
      ],
    },
    {
      _type: 'post',
      title: '10 SEO Strategies That Actually Work in 2026',
      slug: createSlug('10-seo-strategies-2026'),
      author: { _type: 'reference', _ref: createdAuthors['Emeka Nwosu'] },
      categories: [{ _type: 'reference', _ref: createdCategories['SEO'] }],
      publishedAt: '2026-03-02T10:00:00Z',
      excerpt: 'Cut through the noise with proven SEO tactics that deliver real results in the AI-driven search landscape.',
      readTime: 10,
      featured: false,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'Search engine optimization has evolved dramatically with AI-powered search engines. Here are the strategies that actually move the needle in 2026.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. Semantic Content Optimization' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'Search engines now understand context and intent. Focus on creating comprehensive content that answers user questions thoroughly rather than keyword stuffing.' }] },
      ],
    },
    {
      _type: 'post',
      title: 'Building a Digital Marketing Strategy for Nigerian Businesses',
      slug: createSlug('digital-marketing-strategy-nigerian-businesses'),
      author: { _type: 'reference', _ref: createdAuthors['Fatima Bello'] },
      categories: [{ _type: 'reference', _ref: createdCategories['Marketing'] }],
      publishedAt: '2026-02-28T10:00:00Z',
      excerpt: 'A comprehensive guide to creating effective digital marketing strategies tailored for the Nigerian market.',
      readTime: 12,
      featured: false,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'Nigeria\'s digital landscape presents unique opportunities and challenges. This guide helps you navigate both to create a winning digital marketing strategy.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: 'Understanding the Nigerian Digital Consumer' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'With over 100 million internet users, Nigeria has Africa\'s largest online market. Mobile-first is not just a strategy here—it\'s a necessity.' }] },
      ],
    },
    {
      _type: 'post',
      title: 'The Complete Guide to WhatsApp Business Automation',
      slug: createSlug('complete-guide-whatsapp-business-automation'),
      author: { _type: 'reference', _ref: createdAuthors['Tunde Adeyemi'] },
      categories: [{ _type: 'reference', _ref: createdCategories['AI'] }],
      publishedAt: '2026-02-25T10:00:00Z',
      excerpt: 'Transform your WhatsApp into a 24/7 sales machine with these automation strategies and tools.',
      readTime: 9,
      featured: false,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'WhatsApp is the most popular messaging app in Nigeria. Learn how to leverage WhatsApp Business API with AI to automate customer service and drive sales around the clock.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: 'Why WhatsApp for Business?' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'With 98% open rates and instant delivery, WhatsApp outperforms email and SMS for business communication in Nigeria.' }] },
      ],
    },
    {
      _type: 'post',
      title: 'Web Design Trends Dominating 2026',
      slug: createSlug('web-design-trends-2026'),
      author: { _type: 'reference', _ref: createdAuthors['Fatima Bello'] },
      categories: [{ _type: 'reference', _ref: createdCategories['Technology'] }],
      publishedAt: '2026-02-20T10:00:00Z',
      excerpt: 'From AI-generated interfaces to immersive experiences, explore the design trends shaping the digital landscape.',
      readTime: 7,
      featured: false,
      body: [
        { _type: 'block', _key: 'intro', style: 'normal', children: [{ _type: 'span', text: 'Web design continues to evolve at a rapid pace. These are the trends defining premium digital experiences in 2026.' }] },
        { _type: 'block', _key: 'h1', style: 'h2', children: [{ _type: 'span', text: '1. AI-Personalized Interfaces' }] },
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', text: 'Websites now adapt in real-time based on user behavior, preferences, and context, creating unique experiences for each visitor.' }] },
      ],
    },
  ];

  for (const post of posts) {
    await client.create(post);
    console.log(`  ✓ Post: ${post.title}`);
  }

  // ============ SERVICES ============
  console.log('\nCreating services...');
  const services = [
    {
      _type: 'service',
      title: 'Website Development',
      slug: createSlug('website-development'),
      icon: 'Globe',
      shortDescription: 'Custom, responsive websites built with cutting-edge technology that drive results and elevate your brand.',
      features: ['Custom Design', 'Responsive Development', 'CMS Integration', 'Performance Optimization', 'SEO-Ready'],
      order: 1,
    },
    {
      _type: 'service',
      title: 'AI Solutions',
      slug: createSlug('ai-solutions'),
      icon: 'Bot',
      shortDescription: 'Intelligent automation, chatbots, and AI-powered tools that transform your business operations.',
      features: ['AI Chatbots', 'Process Automation', 'Predictive Analytics', 'Natural Language Processing', 'Custom AI Models'],
      order: 2,
    },
    {
      _type: 'service',
      title: 'Digital Marketing',
      slug: createSlug('digital-marketing'),
      icon: 'Megaphone',
      shortDescription: 'Data-driven marketing strategies that reach your audience and convert them into loyal customers.',
      features: ['Social Media Marketing', 'Content Strategy', 'Email Campaigns', 'PPC Advertising', 'Analytics & Reporting'],
      order: 3,
    },
    {
      _type: 'service',
      title: 'Brand Identity',
      slug: createSlug('brand-identity'),
      icon: 'Palette',
      shortDescription: 'Comprehensive branding solutions that create memorable identities and build lasting connections.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Print & Digital Assets'],
      order: 4,
    },
    {
      _type: 'service',
      title: 'SEO Optimization',
      slug: createSlug('seo-optimization'),
      icon: 'Search',
      shortDescription: 'Strategic SEO services that improve visibility, drive organic traffic, and boost conversions.',
      features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO', 'Performance Tracking'],
      order: 5,
    },
    {
      _type: 'service',
      title: 'Software Development',
      slug: createSlug('software-development'),
      icon: 'Code',
      shortDescription: 'Custom software solutions, web applications, and mobile apps built for scale and performance.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions', 'Enterprise Software'],
      order: 6,
    },
  ];

  for (const service of services) {
    await client.create(service);
    console.log(`  ✓ Service: ${service.title}`);
  }

  // ============ TESTIMONIALS ============
  console.log('\nCreating testimonials...');
  const testimonials = [
    {
      _type: 'testimonial',
      name: 'Chioma Eze',
      role: 'CEO',
      company: 'TechVentures Nigeria',
      quote: 'IDS transformed our entire digital presence. Their team delivered a website that not only looks stunning but actually converts visitors into investors. Our lead generation increased by 200% within the first quarter.',
      rating: 5,
      featured: true,
    },
    {
      _type: 'testimonial',
      name: 'Olumide Adesanya',
      role: 'Managing Director',
      company: 'Lagos Gourmet',
      quote: 'The e-commerce platform IDS built for us handles thousands of transactions daily without a hitch. Their AI-powered recommendation system has increased our average order value by 35%.',
      rating: 5,
      featured: true,
    },
    {
      _type: 'testimonial',
      name: 'Dr. Amina Yusuf',
      role: 'Medical Director',
      company: 'HealthFirst Clinics',
      quote: 'The AI assistant IDS developed has revolutionized our patient intake process. Wait times are down 60%, and patient satisfaction scores have never been higher. Truly transformative technology.',
      rating: 5,
      featured: true,
    },
    {
      _type: 'testimonial',
      name: 'Funke Adebayo',
      role: 'Marketing Director',
      company: 'Naija Fashion Week',
      quote: 'Working with IDS was a game-changer for our brand. They created an immersive digital experience that captured the essence of Nigerian fashion and helped us reach 2 million people online.',
      rating: 5,
      featured: false,
    },
    {
      _type: 'testimonial',
      name: 'Ibrahim Musa',
      role: 'Founder',
      company: 'AgriConnect NG',
      quote: 'IDS didn\'t just build us a platform—they understood our mission to connect farmers with markets. Their digital marketing expertise helped us onboard over 10,000 farmers in our first year.',
      rating: 5,
      featured: false,
    },
  ];

  for (const testimonial of testimonials) {
    await client.create(testimonial);
    console.log(`  ✓ Testimonial: ${testimonial.name}`);
  }

  console.log('\n✅ Sanity seed complete!');
  console.log('\nContent created:');
  console.log(`  - ${authors.length} Authors`);
  console.log(`  - ${categories.length} Categories`);
  console.log(`  - ${teamMembers.length} Team Members`);
  console.log(`  - ${packages.length} Packages`);
  console.log(`  - ${projects.length} Projects`);
  console.log(`  - ${posts.length} Blog Posts`);
  console.log(`  - ${services.length} Services`);
  console.log(`  - ${testimonials.length} Testimonials`);
}

seedData().catch(console.error);
