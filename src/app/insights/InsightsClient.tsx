'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  TrendingUp, 
  Sparkles,
  BookOpen,
  Eye,
  Heart,
  Share2,
  Bot,
  Megaphone,
  Search,
  Code
} from 'lucide-react';
import { urlFor } from '@/lib/sanity';

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

// Fallback articles data
const fallbackArticles = [
  {
    title: 'The Future of AI in Business: 2026 Trends Every CEO Must Know',
    slug: 'future-of-ai-in-business-2026',
    excerpt: 'Artificial intelligence is reshaping how businesses operate. Discover the key AI trends that will define competitive advantage in 2026.',
    category: 'AI',
    icon: 'Bot',
    author: 'Tunde Adeyemi',
    date: 'March 8, 2026',
    readTime: '8 min read',
    featured: true,
    gradient: 'from-[#F15924] to-[#FF4924]',
    views: '2.4K',
    likes: 156
  },
  {
    title: 'Why Your Business Needs AI Automation Now (Not Later)',
    slug: 'why-business-needs-ai-automation-now',
    excerpt: 'Learn why businesses that delay AI implementation risk falling behind and how to start your automation journey today.',
    category: 'AI',
    icon: 'Sparkles',
    author: 'Adaobi Okonkwo',
    date: 'March 5, 2026',
    readTime: '6 min read',
    featured: false,
    gradient: 'from-[#2563EB] to-[#60a5fa]',
    views: '1.8K',
    likes: 98
  },
  {
    title: '10 SEO Strategies That Actually Work in 2026',
    slug: '10-seo-strategies-2026',
    excerpt: 'Cut through the noise with proven SEO tactics that deliver real results in the AI-driven search landscape.',
    category: 'SEO',
    icon: 'Search',
    author: 'Emeka Nwosu',
    date: 'March 2, 2026',
    readTime: '10 min read',
    featured: false,
    gradient: 'from-[#10B981] to-[#34D399]',
    views: '3.2K',
    likes: 234
  },
  {
    title: 'Building a Digital Marketing Strategy for Nigerian Businesses',
    slug: 'digital-marketing-strategy-nigerian-businesses',
    excerpt: 'A comprehensive guide to creating effective digital marketing strategies tailored for the Nigerian market.',
    category: 'Marketing',
    icon: 'Megaphone',
    author: 'Fatima Bello',
    date: 'February 28, 2026',
    readTime: '12 min read',
    featured: false,
    gradient: 'from-[#8B5CF6] to-[#A78BFA]',
    views: '2.1K',
    likes: 167
  },
  {
    title: 'The Complete Guide to WhatsApp Business Automation',
    slug: 'complete-guide-whatsapp-business-automation',
    excerpt: 'Transform your WhatsApp into a 24/7 sales machine with these automation strategies and tools.',
    category: 'AI',
    icon: 'MessageSquare',
    author: 'Tunde Adeyemi',
    date: 'February 25, 2026',
    readTime: '9 min read',
    featured: false,
    gradient: 'from-[#F15924] to-[#FF4924]',
    views: '4.1K',
    likes: 312
  },
  {
    title: 'Web Design Trends Dominating 2026',
    slug: 'web-design-trends-2026',
    excerpt: 'From AI-generated interfaces to immersive experiences, explore the design trends shaping the digital landscape.',
    category: 'Technology',
    icon: 'Code',
    author: 'Fatima Bello',
    date: 'February 20, 2026',
    readTime: '7 min read',
    featured: false,
    gradient: 'from-[#0A2540] to-[#1E3A5F]',
    views: '1.5K',
    likes: 89
  }
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot,
  Sparkles,
  Search,
  Megaphone,
  Code,
  BookOpen,
};

const categories = [
  { name: 'All', icon: BookOpen },
  { name: 'AI', icon: Bot },
  { name: 'Marketing', icon: Megaphone },
  { name: 'SEO', icon: Search },
  { name: 'Technology', icon: Code }
];

const categoryGradients: Record<string, string> = {
  'AI': 'from-[#F15924] to-[#FF4924]',
  'Marketing': 'from-[#8B5CF6] to-[#A78BFA]',
  'SEO': 'from-[#10B981] to-[#34D399]',
  'Technology': 'from-[#0A2540] to-[#1E3A5F]',
};

interface Post {
  _id?: string;
  title: string;
  slug?: { current: string };
  excerpt?: string;
  mainImage?: unknown;
  publishedAt?: string;
  readTime?: string;
  featured?: boolean;
  author?: { name: string; image?: unknown; role?: string };
  categories?: Array<{ title: string; slug?: { current: string }; color?: string }>;
}

interface InsightsClientProps {
  posts: Post[];
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function InsightsClient({ posts }: InsightsClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  // Transform Sanity posts to match the expected format, or use fallback
  const articles = posts.length > 0 ? posts.map(post => {
    const categoryTitle = post.categories?.[0]?.title || 'Technology';
    return {
      title: post.title,
      excerpt: post.excerpt || '',
      category: categoryTitle,
      icon: categoryTitle === 'AI' ? 'Bot' : categoryTitle === 'Marketing' ? 'Megaphone' : categoryTitle === 'SEO' ? 'Search' : 'Code',
      author: post.author?.name || 'IDS Team',
      date: formatDate(post.publishedAt),
      readTime: post.readTime || '5 min read',
      featured: post.featured || false,
      gradient: categoryGradients[categoryTitle] || 'from-[#0A2540] to-[#1E3A5F]',
      views: '1.2K',
      likes: 89,
      slug: post.slug?.current,
      mainImage: post.mainImage
    };
  }) : fallbackArticles;

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles.find(a => a.featured) || articles[0];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F15924]/20 rounded-full blur-3xl pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <TrendingUp size={16} className="text-[#F15924]" />
              <span className="text-sm text-gray-300">Latest insights from industry experts</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay Ahead with Digital{' '}
              <span className="text-gradient-orange">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Expert articles on AI, marketing, technology, and business growth 
              to keep you informed and inspired.
            </p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { value: `${articles.length}+`, label: 'Articles' },
                { value: '15K+', label: 'Readers' },
                { value: '4.9', label: 'Avg Rating' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-[#F15924]">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-[#0A2540] border-b border-white/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.name 
                    ? 'bg-[#F15924] text-white shadow-lg shadow-[#F15924]/25' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon size={16} />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC]/95 via-white/90 to-[#F8FAFC]/95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-[#F15924] text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  FEATURED ARTICLE
                </motion.span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <User size={14} />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye size={18} />
                    <span>{featuredArticle.views} views</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Heart size={18} className="text-red-400" />
                    <span>{featuredArticle.likes} likes</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={`/insights/${(featuredArticle as typeof articles[0]).slug || '#'}`}
                    className="inline-flex items-center gap-2 bg-[#F15924] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#FF4924] transition-all shadow-lg shadow-[#F15924]/25 hover:shadow-[#F15924]/40"
                  >
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
              <div className="relative hidden lg:block">
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredArticle.gradient}`} />
                <div className="absolute inset-0 bg-[#0A2540]/30" />
                {/* Animated Reading Widget */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 w-full max-w-sm"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#F15924] flex items-center justify-center">
                        <BookOpen className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Reading Progress</p>
                        <p className="text-gray-400 text-sm">{featuredArticle.category} Article</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-300 mb-2">
                          <span>Progress</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            68%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '68%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[#F15924] to-[#FF4924] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">8</p>
                          <p className="text-xs text-gray-400">Minutes</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#F15924]">24</p>
                          <p className="text-xs text-gray-400">Highlights</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">5</p>
                          <p className="text-xs text-gray-400">Notes</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest <span className="text-gradient-orange">Articles</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of insights on AI, marketing, and digital transformation
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.slice(activeCategory === 'All' ? 1 : 0).map((article, index) => {
              const IconComponent = iconMap[article.icon] || Code;
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  onMouseEnter={() => setHoveredArticle(index)}
                  onMouseLeave={() => setHoveredArticle(null)}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group hover:border-[#F15924]/50 transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <motion.div
                      animate={{ scale: hoveredArticle === index ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <IconComponent size={64} className="text-white/30" />
                    </motion.div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <IconComponent size={12} />
                        {article.category}
                      </span>
                    </div>
                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-xs text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#F15924] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm border-t border-white/10 pt-4">
                      <span className="text-gray-400 flex items-center gap-2">
                        <User size={14} />
                        {article.author}
                      </span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Eye size={14} />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                        <Heart size={14} className="text-red-400" />
                        {article.likes}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="ml-auto text-gray-400 hover:text-[#F15924] transition-colors"
                      >
                        <Share2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                  {/* Read More Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: hoveredArticle === index ? 1 : 0, y: hoveredArticle === index ? 0 : 20 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/90 to-transparent"
                  >
                    <Link 
                      href={`/insights/${(article as typeof articles[0]).slug || '#'}`}
                      className="inline-flex items-center gap-2 text-[#F15924] font-semibold hover:underline"
                    >
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#F15924] transition-all border border-white/20 hover:border-transparent"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
