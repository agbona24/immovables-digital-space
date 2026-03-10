'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

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

const articles = [
  {
    title: 'The Future of AI in Business: 2026 Trends Every CEO Must Know',
    excerpt: 'Artificial intelligence is reshaping how businesses operate. Discover the key AI trends that will define competitive advantage in 2026.',
    category: 'AI',
    author: 'Tunde Adeyemi',
    date: 'March 8, 2026',
    readTime: '8 min read',
    featured: true,
    gradient: 'from-[#F15924] to-[#FF4924]'
  },
  {
    title: 'Why Your Business Needs AI Automation Now (Not Later)',
    excerpt: 'Learn why businesses that delay AI implementation risk falling behind and how to start your automation journey today.',
    category: 'AI',
    author: 'Adaobi Okonkwo',
    date: 'March 5, 2026',
    readTime: '6 min read',
    featured: false,
    gradient: 'from-[#2563EB] to-[#60a5fa]'
  },
  {
    title: '10 SEO Strategies That Actually Work in 2026',
    excerpt: 'Cut through the noise with proven SEO tactics that deliver real results in the AI-driven search landscape.',
    category: 'SEO',
    author: 'Emeka Nwosu',
    date: 'March 2, 2026',
    readTime: '10 min read',
    featured: false,
    gradient: 'from-[#0A2540] to-[#0F172A]'
  },
  {
    title: 'Building a Digital Marketing Strategy for Nigerian Businesses',
    excerpt: 'A comprehensive guide to creating effective digital marketing strategies tailored for the Nigerian market.',
    category: 'Marketing',
    author: 'Fatima Bello',
    date: 'February 28, 2026',
    readTime: '12 min read',
    featured: false,
    gradient: 'from-[#F15924] to-[#FF4924]'
  },
  {
    title: 'The Complete Guide to WhatsApp Business Automation',
    excerpt: 'Transform your WhatsApp into a 24/7 sales machine with these automation strategies and tools.',
    category: 'AI',
    author: 'Tunde Adeyemi',
    date: 'February 25, 2026',
    readTime: '9 min read',
    featured: false,
    gradient: 'from-[#2563EB] to-[#60a5fa]'
  },
  {
    title: 'Web Design Trends Dominating 2026',
    excerpt: 'From AI-generated interfaces to immersive experiences, explore the design trends shaping the digital landscape.',
    category: 'Technology',
    author: 'Fatima Bello',
    date: 'February 20, 2026',
    readTime: '7 min read',
    featured: false,
    gradient: 'from-[#0A2540] to-[#0F172A]'
  }
];

const categories = ['All', 'AI', 'Marketing', 'SEO', 'Technology'];

export default function InsightsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F15924]/20 rounded-full blur-3xl pulse-glow" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-[#F15924] font-semibold mb-4">INSIGHTS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stay Ahead with Digital{' '}
              <span className="text-gradient-orange">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert articles on AI, marketing, technology, and business growth 
              to keep you informed and inspired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-[#F15924] text-white' 
                    : 'bg-[#F8FAFC] text-gray-600 hover:bg-[#F15924]/10 hover:text-[#F15924]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <span className="inline-block bg-[#F15924] text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                  FEATURED
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {articles[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {articles[0].readTime}
                  </span>
                </div>
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#F15924] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF4924] transition-colors"
                >
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
              <div className={`bg-gradient-to-br ${articles[0].gradient} hidden lg:block`} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.slice(1).map((article, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-[#F8FAFC] rounded-2xl overflow-hidden card-hover group"
              >
                <div className={`h-48 bg-gradient-to-br ${article.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#F15924] bg-[#F15924]/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-3 group-hover:text-[#F15924] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{article.author}</span>
                    <span className="text-gray-500">{article.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <button className="bg-[#F8FAFC] text-[#1E293B] px-8 py-3 rounded-lg font-semibold hover:bg-[#F15924]/10 hover:text-[#F15924] transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 gradient-dark grid-pattern relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Get weekly insights on AI, digital marketing, and business growth 
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#F15924]"
              />
              <button 
                type="submit"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
