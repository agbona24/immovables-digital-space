'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Bot, 
  Globe, 
  Palette, 
  Search, 
  Zap, 
  Code,
  Building2,
  GraduationCap,
  ShoppingBag,
  Store,
  Hotel,
  Briefcase,
  Rocket,
  MessageSquare,
  Phone,
  Users,
  Headphones,
  Workflow,
  TrendingUp,
  Shield,
  Eye,
  Target,
  Settings,
  CheckCircle,
  Star,
  Quote,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  Database,
  LineChart,
  Bell,
  Mail
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Icon mapping for industries
const industryIconMap: Record<string, React.ElementType> = {
  Building2,
  GraduationCap,
  ShoppingBag,
  Store,
  Hotel,
  Briefcase,
  Rocket,
  Code
};

// Fallback data
const fallbackIndustries = [
  { icon: 'Building2', name: 'Real Estate', projects: '35+', color: 'from-[#F15924] to-[#FF6B35]' },
  { icon: 'GraduationCap', name: 'Education', projects: '28+', color: 'from-[#2563EB] to-[#3B82F6]' },
  { icon: 'ShoppingBag', name: 'Retail', projects: '42+', color: 'from-[#F15924] to-[#FF6B35]' },
  { icon: 'Store', name: 'E-commerce', projects: '50+', color: 'from-[#2563EB] to-[#3B82F6]' },
  { icon: 'Hotel', name: 'Hospitality', projects: '22+', color: 'from-[#2563EB] to-[#3B82F6]' },
  { icon: 'Briefcase', name: 'Corporate', projects: '38+', color: 'from-[#F15924] to-[#FF6B35]' },
  { icon: 'Rocket', name: 'Startups', projects: '45+', color: 'from-[#2563EB] to-[#3B82F6]' },
  { icon: 'Code', name: 'Tech', projects: '30+', color: 'from-[#F15924] to-[#FF6B35]' }
];

const fallbackTestimonials = [
  {
    quote: "IDS built our entire digital infrastructure from scratch. The results have been phenomenal - 200% increase in leads within 3 months.",
    author: "Chioma Okafor",
    role: "Director, EduTech Academy",
    stars: 5
  },
  {
    quote: "The AI automation they implemented saved us 20 hours per week. Our customer response time went from hours to seconds.",
    author: "Ibrahim Hassan",
    role: "CEO, Sahara Retail",
    stars: 5
  },
  {
    quote: "Professional team that truly understands modern business needs. Our new website is generating 4x more inquiries than before.",
    author: "Folake Adeyemi",
    role: "MD, Prestige Hotels",
    stars: 5
  }
];

const fallbackPackages = [
  {
    name: 'Starter',
    price: '₦350K',
    period: 'one-time',
    features: ['5-Page Website', 'Basic SEO Setup', 'Mobile Responsive', '1 Month Support'],
    highlight: false
  },
  {
    name: 'Growth',
    price: '₦750K',
    period: 'one-time',
    features: ['10-Page Website', 'Advanced SEO', 'Basic AI Chatbot', 'Social Media Setup', '3 Months Support'],
    highlight: false
  },
  {
    name: 'Professional',
    price: '₦1.5M',
    period: 'one-time',
    features: ['Custom Website', 'Full SEO Strategy', 'AI Automation', 'CRM Integration', 'Marketing Campaigns', '6 Months Support'],
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: ['Full Digital System', 'Custom AI Solutions', 'Dedicated Team', 'Priority Support', '24/7 Monitoring', 'Ongoing Optimization'],
    highlight: false
  }
];

const fallbackPortfolio = [
  {
    title: 'Affordable Gadgets',
    category: 'E-commerce Website',
    image: '/portfolio/affordable.png',
    url: 'https://www.affordablegadgets.ng/'
  },
  {
    title: 'Cascadia Holdings',
    category: 'Corporate Website',
    image: '/portfolio/cascadia.png',
    url: 'https://www.cascadiaholdings.net/'
  },
  {
    title: 'MPS Solar',
    category: 'Energy Solutions Website',
    image: '/portfolio/mpssolar.png',
    url: 'https://mps.solar/'
  }
];

const fallbackPageData = {
  heroTitle: 'Build Digital Systems That',
  heroHighlight: 'Drive Growth',
  heroSubtitle: 'We create powerful digital infrastructure for ambitious businesses — websites, AI automation, and marketing systems that work 24/7.',
  heroCta1Text: 'Start Your Project',
  heroCta1Link: '/contact',
  heroCta2Text: 'Get Free Audit',
  heroCta2Link: '/free-audit',
  servicesTitle: 'Solutions That Drive',
  servicesSubtitle: 'Comprehensive digital services designed to transform your business into a market leader.',
  aboutTitle: 'The Future of Business is',
  aboutContent: 'In 2026, successful companies operate on structured digital systems that automate growth and scale with AI intelligence.',
  ctaTitle: 'Ready to Build a Powerful',
  ctaSubtitle: "Let's transform your business with intelligent digital infrastructure that attracts customers and drives growth."
};

const fallbackCaseStudy = {
  company: 'Premium Properties Ltd',
  industry: 'Real Estate',
  stats: [
    { value: '300%', label: 'Visibility Increase' },
    { value: '5x', label: 'Lead Generation' },
    { value: '40%', label: 'Cost Reduction' }
  ],
  quote: "IDS transformed our entire digital presence. The AI chatbot handles 80% of our inquiries automatically, and our website now generates 5x more qualified leads than before.",
  author: 'Adebayo Johnson',
  authorRole: 'CEO, Premium Properties',
  features: [
    'Custom website with property search & listings',
    'AI chatbot for 24/7 lead qualification',
    'Automated email marketing sequences',
    'SEO optimization & Google Ads management',
    'CRM integration for lead tracking'
  ]
};

const fallbackAuditItems = [
  'Website Performance Analysis',
  'SEO Health Check',
  'Competitor Analysis',
  'Conversion Optimization Tips',
  'AI Automation Opportunities'
];

interface Industry {
  icon: string;
  name: string;
  projects: string;
  color: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  stars: number;
  image?: string;
}

interface Package {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  url: string;
}

interface PageData {
  heroTitle?: string;
  heroHighlight?: string;
  heroSubtitle?: string;
  heroCta1Text?: string;
  heroCta1Link?: string;
  heroCta2Text?: string;
  heroCta2Link?: string;
  servicesTitle?: string;
  servicesSubtitle?: string;
  aboutTitle?: string;
  aboutContent?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

interface HomeClientProps {
  pageData: PageData | null;
  industries: Industry[] | null;
  testimonials: Testimonial[] | null;
  packages: Package[] | null;
  portfolio: PortfolioItem[] | null;
}

export default function HomeClient({ 
  pageData, 
  industries, 
  testimonials, 
  packages, 
  portfolio 
}: HomeClientProps) {
  const page = { ...fallbackPageData, ...pageData };
  const industryList = industries && industries.length > 0 ? industries : fallbackIndustries;
  const testimonialList = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const packageList = packages && packages.length > 0 ? packages : fallbackPackages;
  const portfolioList = portfolio && portfolio.length > 0 ? portfolio : fallbackPortfolio;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F15924]/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#10B981]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          {/* Animated SVG Lines & Vectors */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F15924" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F15924" stopOpacity="0" />
                <stop offset="50%" stopColor="#F15924" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F15924" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
              <pattern id="trianglePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,5 95,95 5,95" fill="none" stroke="#F15924" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#trianglePattern)" opacity="0.3" />
            
            <path 
              d="M0,200 Q200,250 400,200 T800,200" 
              stroke="url(#lineGrad1)" 
              strokeWidth="1" 
              fill="none" 
              className="animate-dash"
              opacity="0.3"
            />
            <path 
              d="M0,400 Q300,350 600,400 T1200,400" 
              stroke="url(#lineGrad1)" 
              strokeWidth="1" 
              fill="none" 
              className="animate-dash"
              opacity="0.2"
              style={{ animationDelay: '0.5s' }}
            />
            <path 
              d="M0,600 Q400,650 800,600 T1600,600" 
              stroke="url(#lineGrad2)" 
              strokeWidth="1.5" 
              fill="none" 
              className="animate-dash"
              opacity="0.25"
              style={{ animationDelay: '1s' }}
            />
            
            <motion.polygon
              points="100,30 130,50 130,90 100,110 70,90 70,50"
              fill="none"
              stroke="#F15924"
              strokeWidth="1"
              opacity="0.2"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '100px 70px' }}
            />
            
            <motion.polygon
              points="1300,100 1350,150 1300,200 1250,150"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1"
              opacity="0.15"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ transformOrigin: '1300px 150px' }}
            />
            
            <circle cx="200" cy="150" r="3" fill="#F15924" opacity="0.4">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="350" r="3" fill="#2563EB" opacity="0.4">
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="200" r="3" fill="#F15924" opacity="0.4">
              <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
            </circle>
            
            <line x1="200" y1="150" x2="400" y2="350" stroke="url(#lineGrad3)" strokeWidth="0.5" opacity="0.3" />
            <line x1="400" y1="350" x2="600" y2="200" stroke="url(#lineGrad2)" strokeWidth="0.5" opacity="0.3" />
            
            <path d="M100,500 C200,450 300,550 400,500 S600,400 700,500" stroke="url(#lineGrad2)" strokeWidth="1" fill="none" opacity="0.2" className="animate-dash" />
          </svg>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#F15924] rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Blue Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`blue-${i}`}
              className="absolute w-1.5 h-1.5 bg-[#2563EB] rounded-full"
              style={{
                right: `${10 + i * 15}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Rotating Rings */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#F15924]/20 rounded-full spin-slow" />
          <div className="absolute top-32 right-32 w-20 h-20 border border-[#2563EB]/20 rounded-full spin-slow-reverse" />
          <div className="absolute bottom-40 left-20 w-24 h-24 border border-white/10 rounded-full spin-slow" />
          <div className="absolute top-40 left-40 w-16 h-16 border border-[#F15924]/15 rounded-full spin-slow-reverse" />
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#F15924]/20"
            style={{ transform: 'rotate(45deg)' }}
            animate={{ rotate: [45, 405] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/6 w-12 h-12 border border-[#2563EB]/15"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Dotted Circle Vectors */}
          <svg className="absolute top-1/4 left-1/3 w-40 h-40" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#F15924" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite" />
            </circle>
          </svg>
          <svg className="absolute bottom-1/4 right-1/3 w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.15">
              <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="25s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-[#F15924] rounded-full animate-pulse" />
                <span className="text-sm text-white/80 font-medium">Premium Digital Agency</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
                {page.heroTitle}{' '}
                <span className="relative">
                  <span className="text-[#F15924]">{page.heroHighlight}</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#F15924" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {page.heroSubtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href={page.heroCta1Link || '/contact'}
                  className="group btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  {page.heroCta1Text} 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href={page.heroCta2Link || '/free-audit'}
                  className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  {page.heroCta2Text}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Service Hub Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#F15924] to-[#FF4924] flex items-center justify-center shadow-2xl shadow-[#F15924]/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <div className="text-center">
                      <p className="text-white font-bold text-lg">IDS</p>
                      <p className="text-white/80 text-xs">Digital Systems</p>
                    </div>
                  </motion.div>
                </div>

                {/* Connection Lines SVG */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 500">
                  <defs>
                    <linearGradient id="lineGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F15924" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F15924" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="lineGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  <line x1="250" y1="250" x2="250" y2="80" stroke="url(#lineGradOrange)" strokeWidth="2" className="animate-dash" />
                  <line x1="250" y1="250" x2="420" y2="150" stroke="url(#lineGradBlue)" strokeWidth="2" className="animate-dash" style={{ animationDelay: '0.2s' }} />
                  <line x1="250" y1="250" x2="420" y2="350" stroke="url(#lineGradOrange)" strokeWidth="2" className="animate-dash" style={{ animationDelay: '0.4s' }} />
                  <line x1="250" y1="250" x2="250" y2="420" stroke="url(#lineGradBlue)" strokeWidth="2" className="animate-dash" style={{ animationDelay: '0.6s' }} />
                  <line x1="250" y1="250" x2="80" y2="350" stroke="url(#lineGradOrange)" strokeWidth="2" className="animate-dash" style={{ animationDelay: '0.8s' }} />
                  <line x1="250" y1="250" x2="80" y2="150" stroke="url(#lineGradBlue)" strokeWidth="2" className="animate-dash" style={{ animationDelay: '1s' }} />
                  
                  <circle r="4" fill="#F15924" className="animate-pulse">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M250,250 L250,80" />
                  </circle>
                  <circle r="4" fill="#2563EB" className="animate-pulse">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M250,250 L420,150" />
                  </circle>
                  <circle r="4" fill="#F15924" className="animate-pulse">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M250,250 L420,350" />
                  </circle>
                </svg>

                {/* Service Node 1 - AI Solutions */}
                <motion.div 
                  className="absolute top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#F15924]/30 flex flex-col items-center justify-center shadow-lg shadow-[#F15924]/20 group hover:border-[#F15924] transition-all cursor-pointer">
                    <Bot size={28} className="text-[#F15924] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">AI Solutions</span>
                  </div>
                </motion.div>

                {/* Service Node 2 - Web Dev */}
                <motion.div 
                  className="absolute top-20 right-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#2563EB]/30 flex flex-col items-center justify-center shadow-lg shadow-[#2563EB]/20 group hover:border-[#2563EB] transition-all cursor-pointer">
                    <Code size={28} className="text-[#2563EB] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">Web Dev</span>
                  </div>
                </motion.div>

                {/* Service Node 3 - Marketing */}
                <motion.div 
                  className="absolute bottom-32 right-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#F15924]/30 flex flex-col items-center justify-center shadow-lg shadow-[#F15924]/20 group hover:border-[#F15924] transition-all cursor-pointer">
                    <TrendingUp size={28} className="text-[#F15924] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">Marketing</span>
                  </div>
                </motion.div>

                {/* Service Node 4 - SEO */}
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#2563EB]/30 flex flex-col items-center justify-center shadow-lg shadow-[#2563EB]/20 group hover:border-[#2563EB] transition-all cursor-pointer">
                    <Search size={28} className="text-[#2563EB] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">SEO</span>
                  </div>
                </motion.div>

                {/* Service Node 5 - Branding */}
                <motion.div 
                  className="absolute bottom-32 left-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#F15924]/30 flex flex-col items-center justify-center shadow-lg shadow-[#F15924]/20 group hover:border-[#F15924] transition-all cursor-pointer">
                    <Palette size={28} className="text-[#F15924] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">Branding</span>
                  </div>
                </motion.div>

                {/* Service Node 6 - Global Reach */}
                <motion.div 
                  className="absolute top-20 left-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 2.5 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-[#2563EB]/30 flex flex-col items-center justify-center shadow-lg shadow-[#2563EB]/20 group hover:border-[#2563EB] transition-all cursor-pointer">
                    <Globe size={28} className="text-[#2563EB] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-white mt-1">Global</span>
                  </div>
                </motion.div>

                {/* Orbiting Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-white/10 rounded-full spin-slow" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full spin-slow-reverse" />

                {/* Floating Status Badges */}
                <motion.div 
                  className="absolute top-1/3 right-0 bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-1.5 backdrop-blur-sm"
                  animate={{ x: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Live Systems</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-1/3 left-0 bg-[#F15924]/20 border border-[#F15924]/30 rounded-lg px-3 py-1.5 backdrop-blur-sm"
                  animate={{ x: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-[#F15924]" />
                    <span className="text-xs text-[#F15924] font-medium">AI Powered</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#F15924] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Section 2: Premium Bento Grid - Why Digital Systems */}
      <section className="py-32 bg-[#FAFBFC] relative">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <span className="inline-flex items-center gap-2 text-[#F15924] font-semibold text-sm tracking-wider mb-6">
              <span className="w-8 h-[2px] bg-[#F15924]" />
              THE DIGITAL REVOLUTION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
              {page.aboutTitle}{' '}
              <span className="relative">
                <span className="text-[#F15924]">Digital Systems</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="#F15924" strokeWidth="2" fill="none" className="animate-dash" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {page.aboutContent}
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#F15924]/10 rounded-full blur-[100px] group-hover:bg-[#F15924]/20 transition-all duration-700" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#2563EB]/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F15924] flex items-center justify-center">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">Core Feature</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AI-First Operations
                </h3>
                <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                  Leverage machine learning and automation to handle repetitive tasks, 
                  freeing your team to focus on strategic growth.
                </p>

                {/* Live Dashboard Preview */}
                <div className="bg-[#0F1D32]/80 backdrop-blur rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-white font-medium">Performance Metrics</span>
                    <span className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <motion.p 
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        98.5%
                      </motion.p>
                      <p className="text-xs text-gray-500">Uptime</p>
                    </div>
                    <div>
                      <motion.p 
                        className="text-2xl font-bold text-[#F15924]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        2.3s
                      </motion.p>
                      <p className="text-xs text-gray-500">Avg. Response</p>
                    </div>
                    <div>
                      <motion.p 
                        className="text-2xl font-bold text-[#2563EB]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        24/7
                      </motion.p>
                      <p className="text-xs text-gray-500">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Top Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-5 bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#F15924]/30 hover:shadow-[0_20px_60px_-15px_rgba(241,89,36,0.15)] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <PieChart size={24} className="text-white" />
                </div>
                <span className="text-gray-400 text-sm font-medium">Analytics</span>
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Real-time analytics and insights to optimize every aspect of your digital presence.
              </p>
            </motion.div>

            {/* Right Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-5 bg-gradient-to-br from-[#F15924] to-[#FF4924] rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <Activity size={24} className="text-white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium">Growth</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scale Infinitely</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Systems that grow with your business without increasing operational costs.
                </p>
              </div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-6 md:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 text-center"
            >
              <Cpu size={32} className="text-[#2563EB] mx-auto mb-4" />
              <p className="text-2xl font-bold text-[#0A2540]">500+</p>
              <p className="text-sm text-gray-500">Automations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-6 md:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#F15924]/30 hover:shadow-[0_20px_60px_-15px_rgba(241,89,36,0.1)] transition-all duration-500 text-center"
            >
              <Database size={32} className="text-[#F15924] mx-auto mb-4" />
              <p className="text-2xl font-bold text-[#0A2540]">99.9%</p>
              <p className="text-sm text-gray-500">Uptime SLA</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 text-center"
            >
              <LineChart size={32} className="text-[#2563EB] mx-auto mb-4" />
              <p className="text-2xl font-bold text-[#0A2540]">300%</p>
              <p className="text-sm text-gray-500">Avg. Growth</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section className="py-32 bg-[#FAFBFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center justify-center gap-2 text-[#F15924] font-semibold text-sm tracking-wider mb-6">
              <span className="w-8 h-[2px] bg-[#F15924]" />
              INDUSTRIES WE SERVE
              <span className="w-8 h-[2px] bg-[#F15924]" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Transforming Industries
            </h2>
            <p className="text-lg text-gray-500">
              We&apos;ve helped businesses across diverse sectors achieve digital excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industryList.map((industry, index) => {
              const IconComponent = industryIconMap[industry.icon] || Building2;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${index % 2 === 0 ? 'md:mt-8' : ''}`}
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group cursor-pointer h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent size={26} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2540] mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-400">{industry.projects} Projects</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: AI Business Systems */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border border-[#F15924]/50 rounded-full" />
          <div className="absolute top-32 right-32 w-48 h-48 border border-[#2563EB]/50 rounded-full" />
          <div className="absolute top-44 right-44 w-32 h-32 border border-[#F15924]/50 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#F15924] font-semibold mb-4">
                AI-POWERED AUTOMATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI Business Systems for the{' '}
                <span className="text-[#F15924]">Modern Enterprise</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Harness the power of artificial intelligence to automate customer 
                interactions, qualify leads, and streamline your business operations.
              </p>

              <div className="space-y-4">
                {[
                  { icon: MessageSquare, text: 'AI Sales Chatbots' },
                  { icon: Phone, text: 'AI WhatsApp Sales Bots' },
                  { icon: Users, text: 'AI Lead Qualification Systems' },
                  { icon: Headphones, text: 'AI Customer Support Automation' },
                  { icon: Workflow, text: 'Workflow Automation Systems' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 glass rounded-lg p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F15924] flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link 
                href="/ai-solutions"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                Explore AI Solutions <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              {/* AI System Dashboard */}
              <div className="bg-[#0A1628] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#0F1D32] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={18} className="text-[#F15924]" />
                    <span className="text-white text-sm font-medium">IDS AI Control Center</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Active</span>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0F1D32] rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Active Conversations</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">247</span>
                        <span className="text-xs text-green-400 flex items-center gap-1">
                          <TrendingUp size={10} /> +18%
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#0F1D32] rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Leads Qualified</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#F15924]">89</span>
                        <span className="text-xs text-gray-400">today</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F1D32] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare size={14} className="text-[#2563EB]" />
                      <span className="text-xs text-white">Live AI Interactions</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-[10px] text-white">JD</div>
                        <div className="bg-[#1E293B] rounded-lg p-2 text-xs text-gray-300 flex-1">
                          What are your pricing plans?
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#F15924] flex items-center justify-center">
                          <Bot size={12} className="text-white" />
                        </div>
                        <div className="bg-[#F15924]/20 border border-[#F15924]/30 rounded-lg p-2 text-xs text-white flex-1">
                          We have 4 packages starting from ₦350K. Would you like me to explain each?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0F1D32] rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Response Rate</span>
                      <span className="text-xs text-[#F15924]">98.7%</span>
                    </div>
                    <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
                      <div className="h-full w-[98.7%] bg-gradient-to-r from-[#F15924] to-[#FF4924] rounded-full" />
                    </div>
                  </div>

                  <div className="bg-[#0F1D32] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Workflow size={14} className="text-[#2563EB]" />
                      <span className="text-xs text-white">Automation Pipeline</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {['Lead Capture', 'Qualification', 'Nurture', 'Convert'].map((step, i) => (
                        <div key={i} className="flex items-center">
                          <div className={`px-2 py-1 rounded text-[10px] ${i < 3 ? 'bg-green-500/20 text-green-400' : 'bg-[#1E293B] text-gray-400'}`}>
                            {step}
                          </div>
                          {i < 3 && <ArrowRight size={10} className="text-gray-500 mx-1" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                className="absolute -top-3 -right-3 bg-[#F15924] text-white rounded-lg px-3 py-2 shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle size={14} />
                  <span>New lead qualified!</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <motion.span 
                variants={fadeInUp}
                className="inline-block text-[#F15924] font-semibold mb-4"
              >
                OUR WORK
              </motion.span>
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-[#1E293B]"
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 text-[#F15924] font-semibold hover:text-[#FF4924] transition-colors"
              >
                View All Projects <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioList.slice(0, 3).map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group cursor-pointer block"
              >
                <div className="aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      View Project
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#F15924] font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#F15924] transition-colors">
                  {project.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 8: Case Study */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0F172A] to-[#0A2540] rounded-3xl p-8 lg:p-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#F15924] flex items-center justify-center">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{fallbackCaseStudy.company}</h4>
                    <p className="text-gray-400">{fallbackCaseStudy.industry}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                  {fallbackCaseStudy.stats.map((stat, index) => (
                    <div key={index}>
                      <p className="text-3xl font-bold text-[#F15924]">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300">
                  &ldquo;{fallbackCaseStudy.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F15924]" />
                  <div>
                    <p className="text-white font-semibold">{fallbackCaseStudy.author}</p>
                    <p className="text-gray-400 text-sm">{fallbackCaseStudy.authorRole}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#F15924] font-semibold mb-4">
                CASE STUDY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                How IDS Helped {fallbackCaseStudy.company} Increase Visibility by{' '}
                <span className="text-[#F15924]">300%</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {fallbackCaseStudy.company} was struggling with low online visibility and manual 
                lead processing. We implemented a complete digital transformation including 
                a new website, AI-powered chatbot, and automated marketing systems.
              </p>

              <div className="space-y-4 mb-8">
                {fallbackCaseStudy.features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#F15924] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 btn-primary"
              >
                View Full Case Study <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-[#F15924] font-semibold mb-4"
            >
              TESTIMONIALS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonialList.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F8FAFC] rounded-2xl p-8 relative"
              >
                <Quote size={48} className="text-[#F15924]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#F15924] fill-[#F15924]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-orange" />
                  <div>
                    <p className="font-semibold text-[#1E293B]">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 10: Packages */}
      <section className="py-24 gradient-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-[#F15924] font-semibold mb-4"
            >
              PRICING
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Digital Packages
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300"
            >
              Choose the perfect package to launch or scale your digital presence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packageList.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 ${
                  pkg.highlight 
                    ? 'bg-gradient-to-b from-[#F15924] to-[#FF4924] glow-orange' 
                    : 'glass'
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block bg-white text-[#F15924] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/ {pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle size={16} className={pkg.highlight ? 'text-white' : 'text-[#F15924]'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.highlight 
                      ? 'bg-white text-[#F15924] hover:bg-gray-100' 
                      : 'bg-[#F15924] text-white hover:bg-[#FF4924]'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 11: Free Audit Lead Magnet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F172A] to-[#0A2540] rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 border border-[#F15924] rounded-full" />
              <div className="absolute top-20 right-20 w-60 h-60 border border-[#2563EB] rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-[#F15924] text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                  FREE RESOURCE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Free Digital Audit Worth{' '}
                  <span className="text-[#F15924]">₦150,000</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Discover gaps in your digital presence and get actionable recommendations 
                  to improve your online visibility and lead generation.
                </p>
                <ul className="space-y-3">
                  {fallbackAuditItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle size={18} className="text-[#F15924]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-[#1E293B] mb-6">
                  Request Your Free Audit
                </h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text"
                      placeholder="Business Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="url"
                      placeholder="Website URL"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none text-gray-500">
                      <option value="">Select Industry</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="corporate">Corporate</option>
                      <option value="startup">Startup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    Get My Free Audit <ArrowRight size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Final CTA */}
      <section className="py-24 gradient-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {page.ctaTitle}{' '}
              <span className="text-[#F15924]">Digital System?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {page.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link href="/free-audit" className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
                Get Free Audit First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
