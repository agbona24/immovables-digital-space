'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Star, Crown, Building } from 'lucide-react';

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

// Fallback packages data
const fallbackPackages = [
  {
    name: 'Starter',
    price: '₦500K',
    period: 'one-time',
    icon: 'Zap',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    features: [
      '5-Page Responsive Website',
      'Custom Design',
      'Basic SEO Setup',
      'Mobile Optimized',
      'Contact Form Integration',
      'Social Media Links',
      'Google Analytics Setup',
      '1 Month Support'
    ],
    notIncluded: [
      'AI Chatbot',
      'CRM Integration',
      'Marketing Campaigns',
      'Advanced SEO'
    ],
    highlight: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    price: '₦1M',
    period: 'one-time',
    icon: 'Star',
    description: 'Ideal for growing businesses ready to scale their online presence and lead generation.',
    features: [
      '10-Page Responsive Website',
      'Premium Design',
      'Advanced SEO Optimization',
      'Basic AI Chatbot',
      'WhatsApp Integration',
      'Social Media Setup',
      'Email Marketing Setup',
      'Blog/Content Section',
      'Lead Capture Forms',
      '3 Months Support'
    ],
    notIncluded: [
      'Custom AI Solutions',
      'Full Marketing Campaigns'
    ],
    highlight: false,
    cta: 'Choose Growth'
  },
  {
    name: 'Professional',
    price: '₦2M',
    period: 'one-time',
    icon: 'Crown',
    description: 'Complete digital solution for businesses serious about dominating their market.',
    features: [
      'Custom Website Design & Dev',
      'Full SEO Strategy & Implementation',
      'AI Sales Chatbot',
      'WhatsApp Automation',
      'CRM Integration',
      'Marketing Campaign Setup',
      'Email Automation Sequences',
      'Social Media Marketing',
      'Analytics Dashboard',
      'Lead Qualification System',
      'Content Strategy',
      '6 Months Support'
    ],
    notIncluded: [],
    highlight: true,
    cta: 'Go Professional'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    icon: 'Building',
    description: 'Full-scale digital transformation for large organizations with complex needs.',
    features: [
      'Full Digital Infrastructure',
      'Custom AI Solutions',
      'Enterprise Software Development',
      'Dedicated Project Team',
      'Priority 24/7 Support',
      'Advanced Analytics & BI',
      'Multi-platform Integration',
      'Custom Training',
      'Ongoing Optimization',
      'SLA Guarantee',
      'Scalable Architecture',
      'Compliance & Security'
    ],
    notIncluded: [],
    highlight: false,
    cta: 'Contact Sales'
  }
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap,
  Star,
  Crown,
  Building,
};

const addOns = [
  { name: 'AI WhatsApp Bot', price: '₦150K' },
  { name: 'Additional Website Pages (per 5)', price: '₦75K' },
  { name: 'E-commerce Integration', price: '₦200K' },
  { name: 'Monthly SEO Service', price: '₦100K/mo' },
  { name: 'Social Media Management', price: '₦80K/mo' },
  { name: 'Video Production', price: '₦150K' }
];

interface Package {
  _id?: string;
  name: string;
  price?: string;
  period?: string;
  description?: string;
  features?: string[];
  notIncluded?: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface PackagesClientProps {
  packages: Package[];
}

export default function PackagesClient({ packages: sanityPackages }: PackagesClientProps) {
  // Transform Sanity packages to match the expected format, or use fallback
  const packages = sanityPackages.length > 0 ? sanityPackages.map((pkg, index) => ({
    name: pkg.name,
    price: pkg.price || '₦500K',
    period: pkg.period || 'one-time',
    icon: index === 0 ? 'Zap' : index === 1 ? 'Star' : index === 2 ? 'Crown' : 'Building',
    description: pkg.description || '',
    features: pkg.features || [],
    notIncluded: pkg.notIncluded || [],
    highlight: pkg.highlighted || false,
    cta: pkg.ctaText || 'Get Started'
  })) : fallbackPackages;

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
            <span className="inline-block text-[#F15924] font-semibold mb-4">PRICING</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transparent Pricing for{' '}
              <span className="text-gradient-orange">Every Business</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package to launch or scale your digital presence. 
              All packages include quality design, development, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-gradient-to-br from-[#FAFBFC] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packages.map((pkg, index) => {
              const IconComponent = iconMap[pkg.icon] || Zap;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`rounded-3xl p-8 ${
                    pkg.highlight 
                      ? 'bg-gradient-to-b from-[#F15924] to-[#FF4924] glow-orange scale-105' 
                      : 'bg-white shadow-lg'
                  }`}
                >
                  {pkg.highlight && (
                    <span className="inline-block bg-white text-[#F15924] text-xs font-bold px-3 py-1 rounded-full mb-4">
                      MOST POPULAR
                    </span>
                  )}
                  
                  <div className={`w-14 h-14 rounded-xl ${pkg.highlight ? 'bg-white/20' : 'gradient-orange'} flex items-center justify-center mb-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-[#1E293B]'}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${pkg.highlight ? 'text-white' : 'text-[#1E293B]'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm ml-2 ${pkg.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                      / {pkg.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-6 ${pkg.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                  
                  <Link 
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors mb-6 ${
                      pkg.highlight 
                        ? 'bg-white text-[#F15924] hover:bg-gray-100' 
                        : 'bg-[#F15924] text-white hover:bg-[#FF4924]'
                    }`}
                  >
                    {pkg.cta}
                  </Link>

                  <div className="space-y-3">
                    <p className={`text-xs font-semibold ${pkg.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                      WHAT&apos;S INCLUDED
                    </p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-white' : 'text-[#F15924]'}`} />
                        <span className={`text-sm ${pkg.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/97 to-[#0F172A]/97" />
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
              ADD-ONS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Enhance Your Package
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300"
            >
              Add extra features and services to customize your package.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center justify-between bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
              >
                <span className="font-medium text-white">{addon.name}</span>
                <span className="font-bold text-[#F15924]">{addon.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-[#F15924] font-semibold mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B]"
            >
              Common Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                q: 'How long does a project typically take?',
                a: 'Starter packages are delivered in 2-3 weeks, Growth in 4-6 weeks, Professional in 6-8 weeks, and Enterprise projects vary based on scope.'
              },
              {
                q: 'What payment options are available?',
                a: 'We accept bank transfers, cards, and offer payment plans for larger projects. Typically 50% upfront and 50% on completion.'
              },
              {
                q: 'Do you provide hosting and maintenance?',
                a: 'Yes, all packages include initial setup. Ongoing hosting and maintenance can be added as a monthly service.'
              },
              {
                q: 'Can I upgrade my package later?',
                a: 'Absolutely! You can upgrade at any time and we\'ll credit your previous investment toward the new package.'
              },
              {
                q: 'What if I need something not listed?',
                a: 'Contact us for a custom quote. We can build tailored solutions for any requirement.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="font-bold text-[#1E293B] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Not Sure Which Package is Right for You?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a free consultation to discuss your needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={18} />
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
