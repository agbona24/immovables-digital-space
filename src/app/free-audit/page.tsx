'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  BarChart, 
  Target, 
  Users, 
  Zap,
  FileText,
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

const auditIncludes = [
  {
    icon: Search,
    title: 'Website Performance Analysis',
    description: 'Speed, mobile responsiveness, and user experience evaluation.'
  },
  {
    icon: BarChart,
    title: 'SEO Health Check',
    description: 'Technical SEO issues, keyword opportunities, and ranking potential.'
  },
  {
    icon: Target,
    title: 'Competitor Analysis',
    description: 'How you stack up against competitors in your digital presence.'
  },
  {
    icon: Users,
    title: 'User Experience Review',
    description: 'Navigation, conversion paths, and user journey optimization.'
  },
  {
    icon: Zap,
    title: 'AI Automation Opportunities',
    description: 'Areas where AI can automate and improve your operations.'
  },
  {
    icon: FileText,
    title: 'Actionable Report',
    description: 'Detailed PDF report with prioritized recommendations.'
  }
];

export default function FreeAuditPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F15924]/20 rounded-full blur-3xl pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-[#F15924] text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                FREE RESOURCE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get Your Free Digital Audit Worth{' '}
                <span className="text-gradient-orange">₦150,000</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover gaps in your digital presence and get actionable recommendations 
                to improve your online visibility, lead generation, and business growth.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive website analysis',
                  'SEO and visibility assessment',
                  'Competitor benchmarking',
                  'AI automation opportunities',
                  'Detailed PDF report'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} className="text-[#F15924]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
                  Request Your Free Audit
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input 
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL *
                    </label>
                    <input 
                      type="url"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                    >
                      <option value="">Select your industry</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail / E-commerce</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="technology">Technology</option>
                      <option value="corporate">Corporate / Professional</option>
                      <option value="startup">Startup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Marketing Challenge
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20 resize-none"
                      placeholder="What's your biggest digital marketing challenge?"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                  >
                    Get My Free Audit <ArrowRight size={20} />
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    No spam. We&apos;ll only contact you about your audit.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
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
              WHAT&apos;S INCLUDED
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              Your Free Audit Includes
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600"
            >
              A comprehensive analysis of your digital presence with actionable insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {auditIncludes.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F8FAFC] rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F8FAFC]">
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
              HOW IT WORKS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B]"
            >
              3 Simple Steps
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '1',
                title: 'Submit Form',
                description: 'Fill out the form above with your business details and website.'
              },
              {
                step: '2',
                title: 'We Analyze',
                description: 'Our team conducts a comprehensive audit of your digital presence.'
              },
              {
                step: '3',
                title: 'Get Report',
                description: 'Receive a detailed PDF report with actionable recommendations.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full gradient-orange mx-auto flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 gradient-dark grid-pattern relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-10">
              <p className="text-xl text-white mb-8">
                &ldquo;The free audit from IDS revealed optimization opportunities we had 
                completely missed. Within 3 months of implementing their recommendations, 
                our organic traffic increased by 150%.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-orange" />
                <div className="text-left">
                  <p className="text-white font-bold">Adebayo Johnson</p>
                  <p className="text-gray-400">CEO, Premium Properties Ltd</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail size={48} className="text-[#F15924] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out to us directly if you have any questions about the free audit.
            </p>
            <a 
              href="mailto:hello@immovablesdigital.com"
              className="inline-flex items-center gap-2 text-[#F15924] font-semibold text-lg hover:text-[#FF4924]"
            >
              hello@immovablesdigital.com <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
