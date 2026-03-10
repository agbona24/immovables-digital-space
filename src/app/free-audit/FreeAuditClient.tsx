'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  BarChart, 
  Target, 
  Users, 
  Zap,
  FileText,
  Mail,
  Loader2,
  Sparkles,
  Gift
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Search,
  BarChart,
  Target,
  Users,
  Zap,
  FileText
};

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

// Fallback data
const fallbackPageData = {
  heroSubtitle: 'FREE RESOURCE',
  heroTitle: 'Get Your Free Digital Audit Worth',
  heroHighlight: '₦150,000',
  heroDescription: 'Discover gaps in your digital presence and get actionable recommendations to improve your online visibility, lead generation, and business growth.',
  heroChecklist: [
    'Comprehensive website analysis',
    'SEO and visibility assessment',
    'Competitor benchmarking',
    'AI automation opportunities',
    'Detailed PDF report'
  ],
  formTitle: 'Request Your Free Audit',
  formButtonText: 'Get My Free Audit',
  formDisclaimer: "No spam. We'll only contact you about your audit.",
  auditIncludes: [
    {
      icon: 'Search',
      title: 'Website Performance Analysis',
      description: 'Speed, mobile responsiveness, and user experience evaluation.'
    },
    {
      icon: 'BarChart',
      title: 'SEO Health Check',
      description: 'Technical SEO issues, keyword opportunities, and ranking potential.'
    },
    {
      icon: 'Target',
      title: 'Competitor Analysis',
      description: 'How you stack up against competitors in your digital presence.'
    },
    {
      icon: 'Users',
      title: 'User Experience Review',
      description: 'Navigation, conversion paths, and user journey optimization.'
    },
    {
      icon: 'Zap',
      title: 'AI Automation Opportunities',
      description: 'Areas where AI can automate and improve your operations.'
    },
    {
      icon: 'FileText',
      title: 'Actionable Report',
      description: 'Detailed PDF report with prioritized recommendations.'
    }
  ],
  processSteps: [
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
  ],
  testimonial: {
    quote: 'The free audit from IDS revealed optimization opportunities we had completely missed. Within 3 months of implementing their recommendations, our organic traffic increased by 150%.',
    author: 'Adebayo Johnson',
    role: 'CEO, Premium Properties Ltd'
  },
  contactTitle: 'Have Questions?',
  contactDescription: 'Reach out to us directly if you have any questions about the free audit.',
  contactEmail: 'info@immovablestech.com'
};

const fallbackIndustries = [
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail / E-commerce' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'technology', label: 'Technology' },
  { value: 'corporate', label: 'Corporate / Professional' },
  { value: 'startup', label: 'Startup' },
  { value: 'other', label: 'Other' }
];

interface AuditItem {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface PageData {
  heroSubtitle?: string;
  heroTitle?: string;
  heroHighlight?: string;
  heroDescription?: string;
  heroChecklist?: string[];
  formTitle?: string;
  formButtonText?: string;
  formDisclaimer?: string;
  auditIncludes?: AuditItem[];
  processSteps?: ProcessStep[];
  testimonial?: Testimonial;
  contactTitle?: string;
  contactDescription?: string;
  contactEmail?: string;
}

interface SiteSettings {
  email?: string;
}

interface FreeAuditClientProps {
  pageData: PageData | null;
  siteSettings: SiteSettings | null;
}

export default function FreeAuditClient({ pageData, siteSettings }: FreeAuditClientProps) {
  const page = { ...fallbackPageData, ...pageData };
  const auditItems = page.auditIncludes || fallbackPageData.auditIncludes;
  const processSteps = page.processSteps || fallbackPageData.processSteps;
  const testimonial = page.testimonial || fallbackPageData.testimonial;
  const contactEmail = siteSettings?.email || page.contactEmail || fallbackPageData.contactEmail;

  // Form state
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    industry: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'free-audit',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          businessName: '',
          websiteUrl: '',
          email: '',
          phone: '',
          industry: '',
          challenge: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
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
                {page.heroSubtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {page.heroTitle}{' '}
                <span className="text-gradient-orange">{page.heroHighlight}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {page.heroDescription}
              </p>
              <div className="space-y-4">
                {(page.heroChecklist || []).map((item, index) => (
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
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#F15924] to-[#FF7A50] rounded-full blur-2xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full blur-2xl opacity-30" />
                
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Header badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#F15924] to-[#FF7A50] text-white text-xs font-bold px-4 py-2 rounded-bl-2xl flex items-center gap-1">
                    <Gift size={14} /> LIMITED OFFER
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <CheckCircle size={40} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Request Submitted!</h3>
                        <p className="text-gray-600 mb-6">
                          We&apos;ll analyze your digital presence and send your free audit report within 48 hours.
                        </p>
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="text-[#F15924] font-semibold hover:underline"
                        >
                          Submit another request
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#F15924] to-[#FF7A50] rounded-xl flex items-center justify-center">
                            <Sparkles size={24} className="text-white" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-[#1E293B]">
                              {page.formTitle}
                            </h2>
                            <p className="text-sm text-gray-500">Takes less than 2 minutes</p>
                          </div>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Business Name *
                              </label>
                              <input 
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Your Business"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Industry *
                              </label>
                              <select 
                                name="industry"
                                value={formData.industry}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200"
                              >
                                <option value="">Select industry</option>
                                {fallbackIndustries.map((industry) => (
                                  <option key={industry.value} value={industry.value}>
                                    {industry.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Website URL *
                            </label>
                            <input 
                              type="url"
                              name="websiteUrl"
                              value={formData.websiteUrl}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="you@company.com"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                              </label>
                              <input 
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="+234 800 000 0000"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Main Challenge (Optional)
                            </label>
                            <textarea 
                              name="challenge"
                              value={formData.challenge}
                              onChange={handleInputChange}
                              rows={2}
                              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                              placeholder="What's your biggest digital challenge?"
                            />
                          </div>
                          
                          {submitStatus === 'error' && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                            >
                              {errorMessage}
                            </motion.div>
                          )}
                          
                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#F15924] to-[#FF7A50] hover:from-[#D94D1D] hover:to-[#F15924] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-lg transition-all duration-300 shadow-lg shadow-[#F15924]/30 hover:shadow-xl hover:shadow-[#F15924]/40 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 size={22} className="animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                {page.formButtonText} <ArrowRight size={20} />
                              </>
                            )}
                          </button>
                          
                          <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-2">
                            <CheckCircle size={14} className="text-green-500" />
                            {page.formDisclaimer}
                          </p>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
            {auditItems.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Search;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-[#F8FAFC] rounded-2xl p-8 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
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
            {processSteps.map((item, index) => (
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
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-orange" />
                <div className="text-left">
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
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
              {page.contactTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {page.contactDescription}
            </p>
            <a 
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-[#F15924] font-semibold text-lg hover:text-[#FF4924]"
            >
              {contactEmail} <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
