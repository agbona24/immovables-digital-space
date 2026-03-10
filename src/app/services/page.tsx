'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Globe, 
  Palette, 
  TrendingUp, 
  Search, 
  Bot, 
  Code,
  CheckCircle,
  Layers,
  Smartphone,
  Zap,
  BarChart,
  Share2,
  Mail,
  Target,
  Settings
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

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    description: 'Custom-built, high-performance websites designed to convert visitors into customers.',
    features: [
      'Custom Design & Development',
      'E-commerce Solutions',
      'Web Applications',
      'Landing Pages',
      'Portal Development',
      'CMS Integration'
    ],
    benefits: [
      'Mobile-first responsive design',
      'SEO-optimized structure',
      'Fast loading speeds',
      'Secure & scalable architecture'
    ]
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Create a distinctive brand identity that resonates with your target audience and sets you apart.',
    features: [
      'Logo Design',
      'Brand Strategy',
      'Visual Identity Systems',
      'Brand Guidelines',
      'Rebranding',
      'Brand Collateral'
    ],
    benefits: [
      'Stand out from competition',
      'Build brand recognition',
      'Create emotional connections',
      'Consistent brand experience'
    ]
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that maximize ROI and drive sustainable business growth.',
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'PPC Advertising',
      'Marketing Automation',
      'Analytics & Reporting'
    ],
    benefits: [
      'Increased brand visibility',
      'Higher engagement rates',
      'Quality lead generation',
      'Measurable results'
    ]
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Visibility',
    description: 'Dominate search results and establish your digital presence where your customers are looking.',
    features: [
      'Technical SEO Audits',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'SEO Reporting'
    ],
    benefits: [
      'Higher search rankings',
      'Organic traffic growth',
      'Improved user experience',
      'Long-term visibility'
    ]
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent automation systems that streamline operations, reduce costs, and enhance customer experience.',
    features: [
      'AI Chatbots',
      'WhatsApp Automation',
      'Lead Qualification',
      'Customer Support AI',
      'Workflow Automation',
      'Predictive Analytics'
    ],
    benefits: [
      '24/7 customer engagement',
      'Reduced operational costs',
      'Faster response times',
      'Scalable operations'
    ]
  },
  {
    id: 'software',
    icon: Code,
    title: 'Business Software',
    description: 'Custom software solutions tailored to your specific business needs and workflows.',
    features: [
      'Custom Applications',
      'CRM Systems',
      'ERP Solutions',
      'API Development',
      'SaaS Products',
      'System Integration'
    ],
    benefits: [
      'Streamlined workflows',
      'Increased productivity',
      'Data centralization',
      'Competitive advantage'
    ]
  }
];

export default function ServicesPage() {
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
            <span className="inline-block text-[#F15924] font-semibold mb-4">OUR SERVICES</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Solutions That{' '}
              <span className="text-gradient-orange">Drive Growth</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital services designed to transform your business 
              into a market leader in the AI-powered era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.id}`}
                variants={fadeInUp}
                className="group bg-[#F8FAFC] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#0A2540] hover:to-[#0F172A] transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}`}
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
                  <service.icon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-[#1E293B] mb-4">What We Offer:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#F15924]" />
                        <span className="text-gray-600 text-sm">{feature}</span>
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
                className={`bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h4 className="text-white font-bold mb-6">Key Benefits:</h4>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 glass rounded-lg p-4">
                      <div className="w-8 h-8 rounded-lg bg-[#F15924] flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 gradient-dark grid-pattern relative">
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
              OUR PROCESS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              How We Work With You
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business, goals, and challenges' },
              { step: '02', title: 'Strategy', desc: 'Creating a tailored digital roadmap' },
              { step: '03', title: 'Execution', desc: 'Building and implementing solutions' },
              { step: '04', title: 'Growth', desc: 'Optimizing for continuous improvement' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full gradient-orange mx-auto flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F15924] to-[#FF4924] rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#F15924] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
