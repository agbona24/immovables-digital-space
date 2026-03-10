'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Building2,
  GraduationCap,
  ShoppingBag,
  Store,
  Hotel,
  Briefcase,
  Rocket,
  CheckCircle
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

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Digital solutions for property developers, agents, and real estate companies to showcase listings, capture leads, and automate client communications.',
    solutions: [
      'Property listing websites',
      'Virtual tour integration',
      'AI property chatbots',
      'Lead management CRM',
      'Automated follow-ups',
      'Digital marketing campaigns'
    ],
    stats: '250% average increase in property inquiries'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Transform educational institutions with modern websites, enrollment systems, and AI-powered student engagement tools.',
    solutions: [
      'School/University websites',
      'Online enrollment systems',
      'Learning management platforms',
      'Student portal development',
      'AI admissions chatbots',
      'Parent communication systems'
    ],
    stats: '3x improvement in enrollment conversion'
  },
  {
    icon: ShoppingBag,
    name: 'Retail',
    description: 'Empower retail businesses with digital storefronts, inventory management, and customer engagement automation.',
    solutions: [
      'E-commerce platforms',
      'POS integration',
      'Inventory management',
      'Customer loyalty systems',
      'WhatsApp ordering bots',
      'Marketing automation'
    ],
    stats: '180% increase in online sales'
  },
  {
    icon: Store,
    name: 'E-commerce',
    description: 'Build and scale online stores with powerful e-commerce solutions, payment integration, and AI-driven personalization.',
    solutions: [
      'Custom e-commerce development',
      'Payment gateway integration',
      'Product recommendation AI',
      'Order management systems',
      'Customer service automation',
      'Analytics & reporting'
    ],
    stats: '4x improvement in conversion rates'
  },
  {
    icon: Hotel,
    name: 'Hospitality',
    description: 'Elevate guest experiences with booking systems, AI concierge services, and reputation management tools.',
    solutions: [
      'Hotel booking websites',
      'Reservation management',
      'AI concierge chatbots',
      'Guest feedback systems',
      'Restaurant ordering apps',
      'Loyalty program platforms'
    ],
    stats: '35% increase in direct bookings'
  },
  {
    icon: Briefcase,
    name: 'Corporate',
    description: 'Professional digital presence and internal systems for corporate organizations and enterprises.',
    solutions: [
      'Corporate websites',
      'Intranet portals',
      'HR management systems',
      'Document management',
      'Internal communications',
      'Business intelligence dashboards'
    ],
    stats: '40% improvement in operational efficiency'
  },
  {
    icon: Rocket,
    name: 'Startups',
    description: 'Launch and scale your startup with agile digital solutions, MVP development, and growth-focused strategies.',
    solutions: [
      'MVP development',
      'SaaS platforms',
      'Investor pitch websites',
      'Growth marketing',
      'Product analytics',
      'Scalable architecture'
    ],
    stats: 'Average 6-week launch time'
  }
];

export default function IndustriesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
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
            <span className="inline-block text-[#F15924] font-semibold mb-4">INDUSTRIES</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Excellence Across{' '}
              <span className="text-gradient-orange">Industries</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We understand the unique challenges of different sectors and deliver 
              tailored solutions that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/97 to-[#0F172A]/97" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-20"
          >
            {industries.map((industry, index) => (
              <motion.a
                key={index}
                href={`#${industry.name.toLowerCase().replace(' ', '-')}`}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F15924]/20 group-hover:bg-[#F15924] mx-auto flex items-center justify-center mb-3 transition-colors">
                  <industry.icon size={24} className="text-[#F15924] group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-semibold text-white">{industry.name}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => {
        const isDark = index === 0 || index === 2 || index === 4 || index === 6;
        return (
        <section 
          key={industry.name}
          id={industry.name.toLowerCase().replace(' ', '-')}
          className={`py-24 relative overflow-hidden ${isDark ? 'bg-[#0A2540]' : 'bg-gradient-to-br from-[#FAFBFC] to-white'}`}
        >
          {isDark && (
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15924]/10 rounded-full blur-[100px]" />
          )}
          {!isDark && (
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
          )}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-6"
                >
                  <industry.icon size={32} className="text-white" />
                </motion.div>
                <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-[#1E293B]'} mb-4`}>
                  {industry.name}
                </h2>
                <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  {industry.description}
                </p>
                
                <div className="mb-8">
                  <h4 className={`font-bold ${isDark ? 'text-white' : 'text-[#1E293B]'} mb-4`}>Solutions We Provide:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.solutions.map((solution, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle size={16} className="text-[#F15924] flex-shrink-0" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className={`${isDark ? 'bg-white/5 backdrop-blur border border-white/10' : 'bg-gradient-to-br from-[#0A2540] to-[#0F172A]'} rounded-3xl p-10 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#F15924]/10 rounded-full blur-3xl" />
                  <div className="relative z-10 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-24 h-24 rounded-3xl gradient-orange mx-auto flex items-center justify-center mb-8"
                    >
                      <industry.icon size={48} className="text-white" />
                    </motion.div>
                    <p className="text-white text-lg font-medium mb-2">Results That Matter</p>
                    <p className="text-[#F15924] text-xl font-bold">{industry.stats}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 to-[#0F172A]/95" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F15924]/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss 
              how we can create a custom solution for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Contact Us <ArrowRight size={18} />
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
