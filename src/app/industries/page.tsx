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
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F15924]/10 group-hover:bg-[#F15924] mx-auto flex items-center justify-center mb-3 transition-colors">
                  <industry.icon size={24} className="text-[#F15924] group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-semibold text-[#1E293B]">{industry.name}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => (
        <section 
          key={industry.name}
          id={industry.name.toLowerCase().replace(' ', '-')}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-6">
                  <industry.icon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                  {industry.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-[#1E293B] mb-4">Solutions We Provide:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.solutions.map((solution, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#F15924]" />
                        <span className="text-gray-600 text-sm">{solution}</span>
                      </div>
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
                <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#F15924]/10 rounded-full blur-3xl" />
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 rounded-3xl gradient-orange mx-auto flex items-center justify-center mb-8">
                      <industry.icon size={48} className="text-white" />
                    </div>
                    <p className="text-white text-lg font-medium mb-2">Results That Matter</p>
                    <p className="text-[#F15924] text-xl font-bold">{industry.stats}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 gradient-hero grid-pattern relative">
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
