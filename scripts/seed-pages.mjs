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

async function seedAllContent() {
  console.log('🌱 Starting comprehensive Sanity seed...\n');

  // ============ SITE SETTINGS ============
  console.log('Creating site settings...');
  await client.create({
    _type: 'siteSettings',
    companyName: 'Immovables Digital Space',
    tagline: 'Premium Digital Solutions for Modern Businesses',
    email: 'info@immovablestech.com',
    supportEmail: 'support@immovablestech.com',
    phone1: '+234 813 283 3083',
    phone2: '+234 816 714 5405',
    address: '12 Obasanjo Way, Off Akin Olugbade\nIta Eko, Abeokuta\nOgun State, Nigeria',
    businessHours: [
      'Monday - Friday: 9AM - 6PM',
      'Saturday: 10AM - 4PM',
      'Sunday: Closed'
    ],
    socialLinks: {
      instagram: 'https://instagram.com/immovablesdigital',
      twitter: 'https://twitter.com/immovablestech',
      linkedin: 'https://linkedin.com/company/immovables-digital-space',
      facebook: 'https://facebook.com/immovablesdigital',
      whatsapp: '+2348132833083',
    },
    footerText: '© 2026 Immovables Digital Space. All rights reserved.',
  });
  console.log('  ✓ Site Settings');

  // ============ HOME PAGE ============
  console.log('\nCreating home page content...');
  await client.create({
    _type: 'homePage',
    heroTitle: 'Transform Your Business with',
    heroHighlight: 'AI-Powered Digital Solutions',
    heroSubtitle: 'We build stunning websites, intelligent AI systems, and powerful digital strategies that accelerate growth and drive measurable results for ambitious businesses.',
    heroCta1Text: 'Start Your Project',
    heroCta1Link: '/contact',
    heroCta2Text: 'View Our Work',
    heroCta2Link: '/portfolio',
    stats: [
      { value: '150+', label: 'Projects Delivered' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '₦500M+', label: 'Client Revenue Generated' },
      { value: '50+', label: 'AI Solutions Deployed' },
    ],
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive digital solutions designed to elevate your brand and accelerate growth',
    aboutTitle: 'Why Choose IDS?',
    aboutContent: 'We combine cutting-edge technology with creative excellence to deliver digital solutions that drive real business results. Our team of experts brings years of experience across industries.',
    aboutFeatures: [
      'Premium quality at competitive prices',
      'AI-first approach to all solutions',
      'Dedicated project managers',
      'Ongoing support & maintenance',
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaSubtitle: 'Get a free digital audit worth ₦150,000 and discover how we can help you achieve your goals.',
    ctaButtonText: 'Get Free Audit',
    ctaButtonLink: '/free-audit',
  });
  console.log('  ✓ Home Page');

  // ============ SERVICES PAGE ============
  console.log('\nCreating services page content...');
  await client.create({
    _type: 'servicesPage',
    heroTitle: 'Premium Digital Services for',
    heroHighlight: 'Modern Businesses',
    heroSubtitle: 'From stunning websites to intelligent AI solutions, we deliver end-to-end digital services that drive growth and establish market leadership.',
    processTitle: 'Our Process',
    processSteps: [
      { number: '01', title: 'Discovery', description: 'We dive deep into your business, understanding your goals, challenges, and target audience to create a tailored strategy.' },
      { number: '02', title: 'Strategy', description: 'Our team develops a comprehensive roadmap with clear milestones, timelines, and deliverables aligned with your objectives.' },
      { number: '03', title: 'Design & Build', description: 'We craft beautiful, functional solutions using the latest technologies and best practices in design and development.' },
      { number: '04', title: 'Launch & Grow', description: 'We deploy your solution and provide ongoing support, optimization, and scaling to ensure continued success.' },
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Let\'s discuss how our services can help transform your business.',
    ctaButtonText: 'Contact Us',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ Services Page');

  // ============ AI SOLUTIONS PAGE ============
  console.log('\nCreating AI solutions page content...');
  await client.create({
    _type: 'aiSolutionsPage',
    heroTitle: 'Transform Operations with',
    heroHighlight: 'Intelligent AI Solutions',
    heroSubtitle: 'Harness the power of artificial intelligence to automate tasks, enhance customer experiences, and drive unprecedented business growth.',
    benefitsTitle: 'Why AI for Your Business?',
    benefitsSubtitle: 'AI isn\'t just for tech giants. We make intelligent automation accessible to businesses of all sizes.',
    benefits: [
      { icon: 'Clock', title: '24/7 Availability', description: 'AI systems work around the clock, ensuring your business never sleeps.' },
      { icon: 'TrendingUp', title: 'Increased Efficiency', description: 'Automate repetitive tasks and free your team to focus on high-value work.' },
      { icon: 'Shield', title: 'Cost Reduction', description: 'Reduce operational costs by up to 40% with intelligent automation.' },
      { icon: 'Zap', title: 'Faster Response', description: 'Instant responses to customer queries, improving satisfaction and conversions.' },
    ],
    ctaTitle: 'Ready for AI Transformation?',
    ctaSubtitle: 'Let\'s explore how AI can revolutionize your business operations.',
    ctaButtonText: 'Schedule Consultation',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ AI Solutions Page');

  // ============ INDUSTRIES PAGE ============
  console.log('\nCreating industries page content...');
  await client.create({
    _type: 'industriesPage',
    heroTitle: 'Tailored Solutions for',
    heroHighlight: 'Every Industry',
    heroSubtitle: 'We understand that every industry has unique challenges. Our specialized solutions are designed to address the specific needs of your sector.',
    ctaTitle: 'Don\'t See Your Industry?',
    ctaSubtitle: 'We work with businesses across all sectors. Let\'s discuss your specific needs.',
    ctaButtonText: 'Get Custom Solution',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ Industries Page');

  // ============ CONTACT PAGE ============
  console.log('\nCreating contact page content...');
  await client.create({
    _type: 'contactPage',
    heroTitle: 'Let\'s Build Something',
    heroHighlight: 'Amazing Together',
    heroSubtitle: 'Ready to transform your digital presence? Get in touch and let\'s discuss how we can help you achieve your goals.',
    formTitle: 'Send Us a Message',
    formSubtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
  });
  console.log('  ✓ Contact Page');

  // ============ FREE AUDIT PAGE ============
  console.log('\nCreating free audit page content...');
  await client.create({
    _type: 'freeAuditPage',
    heroTitle: 'Get Your Free Digital Audit Worth',
    heroHighlight: '₦150,000',
    heroSubtitle: 'Discover gaps in your digital presence and get actionable recommendations to improve your online visibility, lead generation, and business growth.',
    heroChecklist: [
      'Comprehensive website analysis',
      'SEO and visibility assessment',
      'Competitor benchmarking',
      'AI automation opportunities',
      'Detailed PDF report',
    ],
    auditIncludes: [
      { icon: 'Search', title: 'Website Performance Analysis', description: 'Speed, mobile responsiveness, and user experience evaluation.' },
      { icon: 'BarChart', title: 'SEO Health Check', description: 'Technical SEO issues, keyword opportunities, and ranking potential.' },
      { icon: 'Target', title: 'Competitor Analysis', description: 'How you stack up against competitors in your digital presence.' },
      { icon: 'Users', title: 'User Experience Review', description: 'Navigation, conversion paths, and user journey optimization.' },
      { icon: 'Zap', title: 'AI Automation Opportunities', description: 'Areas where AI can automate and improve your operations.' },
      { icon: 'FileText', title: 'Actionable Report', description: 'Detailed PDF report with prioritized recommendations.' },
    ],
    formTitle: 'Request Your Free Audit',
    formSubtitle: 'Fill in your details and we\'ll send your comprehensive audit within 48 hours.',
    ctaTitle: 'Limited Time Offer',
    ctaSubtitle: 'This ₦150,000 value audit is completely free for the first 50 businesses each month.',
  });
  console.log('  ✓ Free Audit Page');

  // ============ ABOUT PAGE ============
  console.log('\nCreating about page content...');
  await client.create({
    _type: 'aboutPage',
    heroTitle: 'We Are',
    heroHighlight: 'Immovables Digital Space',
    heroSubtitle: 'A team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions and AI-powered technologies.',
    missionTitle: 'Our Mission',
    missionContent: 'To empower African businesses with world-class digital solutions that drive growth, efficiency, and competitive advantage in the global marketplace.',
    visionTitle: 'Our Vision',
    visionContent: 'To become Africa\'s leading digital transformation partner, known for innovation, excellence, and measurable results.',
    valuesTitle: 'Our Core Values',
    values: [
      { icon: 'Star', title: 'Excellence', description: 'We deliver nothing less than exceptional quality in everything we do.' },
      { icon: 'Users', title: 'Partnership', description: 'We see ourselves as an extension of your team, invested in your success.' },
      { icon: 'Zap', title: 'Innovation', description: 'We stay ahead of trends to bring you the most effective solutions.' },
      { icon: 'Shield', title: 'Integrity', description: 'Honest communication and transparent processes guide all our work.' },
    ],
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '150+', label: 'Projects Completed' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '50+', label: 'Team Members' },
    ],
    teamTitle: 'Meet Our Leadership',
    teamSubtitle: 'The visionaries driving innovation and excellence at IDS',
    ctaTitle: 'Want to Join Our Team?',
    ctaSubtitle: 'We\'re always looking for talented individuals who share our passion for digital excellence.',
    ctaButtonText: 'View Careers',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ About Page');

  // ============ INSIGHTS PAGE ============
  console.log('\nCreating insights page content...');
  await client.create({
    _type: 'insightsPage',
    heroTitle: 'Insights &',
    heroHighlight: 'Resources',
    heroSubtitle: 'Expert perspectives on digital transformation, AI innovation, and growth strategies for modern businesses.',
    categories: ['All', 'AI', 'SEO', 'Marketing', 'Technology'],
    newsletterTitle: 'Subscribe to Our Newsletter',
    newsletterSubtitle: 'Get the latest insights, trends, and tips delivered straight to your inbox.',
  });
  console.log('  ✓ Insights Page');

  // ============ PORTFOLIO PAGE ============
  console.log('\nCreating portfolio page content...');
  await client.create({
    _type: 'portfolioPage',
    heroTitle: 'Our',
    heroHighlight: 'Portfolio',
    heroSubtitle: 'Explore our collection of successful projects and see the transformative results we\'ve delivered for our clients.',
    categories: ['All', 'Website', 'AI', 'Branding', 'Marketing', 'E-commerce', 'Mobile'],
    ctaTitle: 'Ready to Start Your Project?',
    ctaSubtitle: 'Let\'s create something amazing together. Join our list of successful partners.',
    ctaButtonText: 'Start a Project',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ Portfolio Page');

  // ============ PACKAGES PAGE ============
  console.log('\nCreating packages page content...');
  await client.create({
    _type: 'packagesPage',
    heroTitle: 'Transparent',
    heroHighlight: 'Pricing',
    heroSubtitle: 'Choose the perfect package for your business needs. All packages include our premium quality and dedicated support.',
    comparisonTitle: 'Compare Packages',
    comparisonSubtitle: 'Find the right fit for your business needs and budget',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Got questions? We\'ve got answers.',
    ctaTitle: 'Need a Custom Solution?',
    ctaSubtitle: 'Our Enterprise package can be tailored to your specific requirements.',
    ctaButtonText: 'Contact Sales',
    ctaButtonLink: '/contact',
  });
  console.log('  ✓ Packages Page');

  // ============ INDUSTRIES ============
  console.log('\nCreating industries...');
  const industries = [
    {
      _type: 'industry',
      name: 'Real Estate',
      slug: createSlug('real-estate'),
      icon: 'Building2',
      description: 'Digital solutions for property developers, agents, and real estate companies to showcase listings, capture leads, and automate client communications.',
      solutions: [
        'Property listing websites',
        'Virtual tour integration',
        'AI property chatbots',
        'Lead management CRM',
        'Automated follow-ups',
        'Digital marketing campaigns',
      ],
      stat: '250% average increase in property inquiries',
      order: 1,
    },
    {
      _type: 'industry',
      name: 'Education',
      slug: createSlug('education'),
      icon: 'GraduationCap',
      description: 'Transform educational institutions with modern websites, enrollment systems, and AI-powered student engagement tools.',
      solutions: [
        'School/University websites',
        'Online enrollment systems',
        'Learning management platforms',
        'Student portal development',
        'AI admissions chatbots',
        'Parent communication systems',
      ],
      stat: '3x improvement in enrollment conversion',
      order: 2,
    },
    {
      _type: 'industry',
      name: 'Retail',
      slug: createSlug('retail'),
      icon: 'ShoppingBag',
      description: 'Empower retail businesses with digital storefronts, inventory management, and customer engagement automation.',
      solutions: [
        'E-commerce platforms',
        'POS integration',
        'Inventory management',
        'Customer loyalty systems',
        'WhatsApp ordering bots',
        'Marketing automation',
      ],
      stat: '180% increase in online sales',
      order: 3,
    },
    {
      _type: 'industry',
      name: 'E-commerce',
      slug: createSlug('ecommerce'),
      icon: 'Store',
      description: 'Build and scale online stores with powerful e-commerce solutions, payment integration, and AI-driven personalization.',
      solutions: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Product recommendation AI',
        'Order management systems',
        'Customer service automation',
        'Analytics & reporting',
      ],
      stat: '4x improvement in conversion rates',
      order: 4,
    },
    {
      _type: 'industry',
      name: 'Hospitality',
      slug: createSlug('hospitality'),
      icon: 'Hotel',
      description: 'Elevate guest experiences with booking systems, AI concierge services, and reputation management tools.',
      solutions: [
        'Hotel booking websites',
        'Reservation management',
        'AI concierge chatbots',
        'Guest feedback systems',
        'Restaurant ordering apps',
        'Loyalty program platforms',
      ],
      stat: '35% increase in direct bookings',
      order: 5,
    },
    {
      _type: 'industry',
      name: 'Professional Services',
      slug: createSlug('professional-services'),
      icon: 'Briefcase',
      description: 'Digital presence for law firms, consultancies, and professional service providers to establish authority and generate qualified leads.',
      solutions: [
        'Professional websites',
        'Client portal development',
        'Appointment scheduling',
        'Document automation',
        'Lead qualification bots',
        'Reputation management',
      ],
      stat: '200% increase in qualified leads',
      order: 6,
    },
  ];

  for (const industry of industries) {
    await client.create(industry);
    console.log(`  ✓ Industry: ${industry.name}`);
  }

  // ============ AI SOLUTIONS ============
  console.log('\nCreating AI solutions...');
  const aiSolutions = [
    {
      _type: 'aiSolution',
      title: 'AI Sales Chatbots',
      slug: createSlug('ai-sales-chatbots'),
      icon: 'Bot',
      shortDescription: 'Intelligent chatbots that qualify leads, answer questions, and drive conversions 24/7.',
      features: [
        'Natural language understanding',
        'Lead qualification',
        'Product recommendations',
        'Seamless handoff to humans',
        'Multi-platform deployment',
      ],
      benefits: [
        { title: 'Always Available', description: 'Engage visitors and capture leads around the clock.' },
        { title: 'Instant Responses', description: 'No more waiting - customers get answers immediately.' },
        { title: 'Consistent Quality', description: 'Every conversation follows your best practices.' },
      ],
      order: 1,
    },
    {
      _type: 'aiSolution',
      title: 'WhatsApp Automation',
      slug: createSlug('whatsapp-automation'),
      icon: 'MessageSquare',
      shortDescription: 'Transform WhatsApp into a powerful sales and support channel with intelligent automation.',
      features: [
        'Automated responses',
        'Order processing',
        'Appointment booking',
        'Payment integration',
        'Broadcast messaging',
      ],
      benefits: [
        { title: 'Meet Customers Where They Are', description: 'WhatsApp has 98% open rates in Nigeria.' },
        { title: 'Reduce Response Time', description: 'From hours to seconds with automation.' },
        { title: 'Scale Support', description: 'Handle thousands of conversations simultaneously.' },
      ],
      order: 2,
    },
    {
      _type: 'aiSolution',
      title: 'AI Voice Agents',
      slug: createSlug('ai-voice-agents'),
      icon: 'Phone',
      shortDescription: 'Intelligent voice assistants that handle calls, take orders, and provide support.',
      features: [
        'Natural voice interactions',
        'Call handling & routing',
        'Order taking',
        'Appointment scheduling',
        'Multi-language support',
      ],
      benefits: [
        { title: 'Never Miss a Call', description: 'Every call is answered, every opportunity captured.' },
        { title: 'Reduce Wait Times', description: 'No hold music - immediate assistance.' },
        { title: 'Lower Costs', description: 'Handle more calls without more staff.' },
      ],
      order: 3,
    },
    {
      _type: 'aiSolution',
      title: 'Customer Service AI',
      slug: createSlug('customer-service-ai'),
      icon: 'Headphones',
      shortDescription: 'AI-powered support systems that resolve issues quickly and improve satisfaction.',
      features: [
        'Ticket auto-routing',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics',
      ],
      benefits: [
        { title: 'Faster Resolution', description: 'Resolve 60% of issues without human intervention.' },
        { title: 'Happier Customers', description: 'Quick, accurate responses improve satisfaction.' },
        { title: 'Empowered Agents', description: 'AI assists your team for better outcomes.' },
      ],
      order: 4,
    },
    {
      _type: 'aiSolution',
      title: 'Workflow Automation',
      slug: createSlug('workflow-automation'),
      icon: 'Workflow',
      shortDescription: 'Automate repetitive tasks and streamline operations with intelligent process automation.',
      features: [
        'Process mapping',
        'Task automation',
        'Data integration',
        'Approval workflows',
        'Performance tracking',
      ],
      benefits: [
        { title: 'Save Time', description: 'Automate hours of manual work daily.' },
        { title: 'Reduce Errors', description: 'Eliminate human error in repetitive tasks.' },
        { title: 'Scale Operations', description: 'Grow without proportional staff increases.' },
      ],
      order: 5,
    },
  ];

  for (const solution of aiSolutions) {
    await client.create(solution);
    console.log(`  ✓ AI Solution: ${solution.title}`);
  }

  // ============ FAQs ============
  console.log('\nCreating FAQs...');
  const faqs = [
    {
      _type: 'faq',
      question: 'How quickly can you start on my project?',
      answer: 'Depending on the scope and our current workload, we typically start within 1-2 weeks of project confirmation. For urgent projects, we can often accommodate faster timelines.',
      category: 'process',
      order: 1,
    },
    {
      _type: 'faq',
      question: 'What is your typical project timeline?',
      answer: 'Website projects typically take 4-8 weeks. AI integration projects range from 2-6 weeks depending on complexity. We provide detailed timelines during the proposal stage.',
      category: 'process',
      order: 2,
    },
    {
      _type: 'faq',
      question: 'Do you offer ongoing support?',
      answer: 'Yes! All our packages include maintenance periods, and we offer ongoing support and retainer packages for continued development, updates, and technical assistance.',
      category: 'support',
      order: 3,
    },
    {
      _type: 'faq',
      question: 'What areas do you serve?',
      answer: 'We work with businesses across Nigeria and internationally. Remote collaboration is our specialty, and we have successfully delivered projects for clients in over 10 countries.',
      category: 'general',
      order: 4,
    },
    {
      _type: 'faq',
      question: 'Can I upgrade my package later?',
      answer: 'Absolutely! You can upgrade your package at any time. We\'ll apply any unused value from your current package toward the upgrade.',
      category: 'pricing',
      order: 5,
    },
    {
      _type: 'faq',
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, cards, and can also arrange payment plans for larger projects. A 50% deposit is typically required to begin work.',
      category: 'pricing',
      order: 6,
    },
    {
      _type: 'faq',
      question: 'Do you provide training?',
      answer: 'Yes, we provide comprehensive training on how to manage and update your website or AI systems. We also provide detailed documentation for reference.',
      category: 'support',
      order: 7,
    },
    {
      _type: 'faq',
      question: 'What makes IDS different from other agencies?',
      answer: 'We combine premium design quality with AI-first solutions, offering capabilities that most agencies simply can\'t match. Plus, our pricing is competitive for the Nigerian market.',
      category: 'general',
      order: 8,
    },
  ];

  for (const faq of faqs) {
    await client.create(faq);
    console.log(`  ✓ FAQ: ${faq.question.substring(0, 40)}...`);
  }

  console.log('\n✅ Comprehensive seed complete!');
  console.log('\nNew content created:');
  console.log('  - 1 Site Settings');
  console.log('  - 10 Page Configurations');
  console.log(`  - ${industries.length} Industries`);
  console.log(`  - ${aiSolutions.length} AI Solutions`);
  console.log(`  - ${faqs.length} FAQs`);
}

seedAllContent().catch(console.error);
