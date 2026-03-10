'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

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

const projects = [
  {
    title: 'TechVentures Platform',
    category: 'Web Development',
    industry: 'Technology',
    description: 'A comprehensive tech investment platform with real-time portfolio tracking, AI-powered insights, and seamless user experience.',
    results: ['300% increase in user engagement', '50% reduction in support tickets', '4.9/5 user satisfaction rating'],
    gradient: 'from-[#F15924] to-[#FF4924]'
  },
  {
    title: 'EstateFlow CRM',
    category: 'Business Software',
    industry: 'Real Estate',
    description: 'Custom CRM solution for managing property listings, client relationships, and automated follow-ups.',
    results: ['5x faster lead processing', '80% automation of routine tasks', '200% increase in conversions'],
    gradient: 'from-[#2563EB] to-[#60a5fa]'
  },
  {
    title: 'EduSmart System',
    category: 'AI Automation',
    industry: 'Education',
    description: 'AI-powered student enrollment and management system with chatbot support and automated communications.',
    results: ['60% reduction in admin work', '3x enrollment increase', '90% query automation'],
    gradient: 'from-[#0A2540] to-[#0F172A]'
  },
  {
    title: 'ShopNow E-commerce',
    category: 'E-commerce',
    industry: 'Retail',
    description: 'Full-featured e-commerce platform with AI product recommendations and WhatsApp ordering integration.',
    results: ['400% online sales growth', '25% higher average order value', '50% repeat customer rate'],
    gradient: 'from-[#F15924] to-[#FF4924]'
  },
  {
    title: 'LuxStay Booking',
    category: 'Web Development',
    industry: 'Hospitality',
    description: 'Modern hotel booking website with AI concierge chatbot and integrated reservation management.',
    results: ['45% increase in direct bookings', '70% reduction in call volume', '35% higher guest satisfaction'],
    gradient: 'from-[#2563EB] to-[#60a5fa]'
  },
  {
    title: 'FinTrack Dashboard',
    category: 'Business Software',
    industry: 'Finance',
    description: 'Financial analytics dashboard with real-time reporting, automated alerts, and predictive insights.',
    results: ['Real-time financial visibility', '80% faster reporting', 'Fraud detection automation'],
    gradient: 'from-[#0A2540] to-[#0F172A]'
  }
];

const categories = ['All', 'Web Development', 'Business Software', 'AI Automation', 'E-commerce', 'Digital Marketing'];

export default function PortfolioPage() {
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
            <span className="inline-block text-[#F15924] font-semibold mb-4">OUR WORK</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects That{' '}
              <span className="text-gradient-orange">Drive Results</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries 
              and see how we&apos;ve helped businesses transform digitally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
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

      {/* Projects Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                    <button className="bg-white text-[#1E293B] px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#F15924] bg-[#F15924]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#F15924] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2">KEY RESULTS</p>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#F15924] rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <span className="inline-block bg-[#F15924] text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                  FEATURED CASE STUDY
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  How We Increased Premium Properties&apos; Visibility by 300%
                </h2>
                <p className="text-gray-300 mb-8">
                  A comprehensive digital transformation that revolutionized how 
                  this real estate company generates and manages leads through 
                  AI-powered automation and strategic digital marketing.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-[#F15924]">300%</p>
                    <p className="text-sm text-gray-400">Visibility Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#F15924]">5x</p>
                    <p className="text-sm text-gray-400">Lead Generation</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#F15924]">40%</p>
                    <p className="text-sm text-gray-400">Cost Reduction</p>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#F15924] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF4924] transition-colors"
                >
                  Read Full Case Study <ArrowRight size={18} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-[#F15924] to-[#FF4924] hidden lg:flex items-center justify-center p-16">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-3xl mx-auto flex items-center justify-center mb-6">
                    <span className="text-6xl font-bold text-white">PP</span>
                  </div>
                  <p className="text-white font-bold text-xl">Premium Properties Ltd</p>
                  <p className="text-white/80">Real Estate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="btn-secondary flex items-center justify-center gap-2">
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
