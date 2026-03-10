'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  Instagram,
  Twitter,
  Facebook,
  CheckCircle,
  Loader2,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

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
  heroTitle: "Let's Build Something",
  heroHighlight: 'Amazing Together',
  heroSubtitle: "Ready to transform your digital presence? We'd love to hear about your project and explore how we can help you achieve your goals.",
  formTitle: 'Send Us a Message',
  formSubtitle: "Fill out the form below and we'll get back to you within 24 hours.",
};

const fallbackSiteSettings = {
  address: '12 Obasanjo Way, Off Akin Olugbade\nIta Eko, Abeokuta\nOgun State, Nigeria',
  phone1: '+234 813 283 3083',
  phone2: '+234 816 714 5405',
  email: 'info@immovablestech.com',
  supportEmail: 'support@immovablestech.com',
  businessHours: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
  socialLinks: {
    instagram: 'https://www.instagram.com/immovables_tech',
    twitter: 'https://x.com/immovablestech',
    facebook: 'https://www.facebook.com/share/1ANA4tiymV/',
    tiktok: 'https://www.tiktok.com/@immovablestech',
    threads: 'https://www.threads.com/@immovables_tech',
  },
};

const fallbackFaqs = [
  {
    question: 'How quickly can you start on my project?',
    answer: 'Depending on the scope and our current workload, we typically start within 1-2 weeks of project confirmation.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Website projects typically take 4-8 weeks. AI integration projects range from 2-6 weeks depending on complexity.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! All our packages include maintenance periods, and we offer ongoing support and retainer packages.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We work with businesses across Nigeria and internationally. Remote collaboration is our specialty.'
  }
];

interface ContactClientProps {
  pageData?: typeof fallbackPageData | null;
  siteSettings?: typeof fallbackSiteSettings | null;
  faqs?: typeof fallbackFaqs | null;
}

export default function ContactClient({ pageData, siteSettings, faqs }: ContactClientProps) {
  const page = pageData || fallbackPageData;
  const settings = siteSettings || fallbackSiteSettings;
  const faqList = faqs && faqs.length > 0 ? faqs : fallbackFaqs;

  const addressLines = settings.address?.split('\n') || ['12 Obasanjo Way, Off Akin Olugbade', 'Ita Eko, Abeokuta', 'Ogun State, Nigeria'];

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
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
          formType: 'contact',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: addressLines
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [settings.phone1, settings.phone2].filter(Boolean)
    },
    {
      icon: Mail,
      title: 'Email',
      details: [settings.email, settings.supportEmail].filter(Boolean)
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: settings.businessHours || ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM']
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: settings.socialLinks?.instagram || 'https://www.instagram.com/immovables_tech', label: 'Instagram' },
    { icon: Facebook, href: settings.socialLinks?.facebook || 'https://www.facebook.com/share/1ANA4tiymV/', label: 'Facebook' },
    { icon: Twitter, href: settings.socialLinks?.twitter || 'https://x.com/immovablestech', label: 'X' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F15924]/20 rounded-full blur-3xl pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#F15924] font-semibold mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {page.heroTitle}{' '}
              <span className="text-gradient-orange">{page.heroHighlight}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {page.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#F15924] to-[#FF7A50] rounded-full blur-2xl opacity-30" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full blur-2xl opacity-20" />
                
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
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
                        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Message Sent!</h3>
                        <p className="text-gray-600 mb-6">
                          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="text-[#F15924] font-semibold hover:underline"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#F15924] to-[#FF7A50] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F15924]/30">
                            <Sparkles size={28} className="text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-[#1E293B]">
                              {page.formTitle || 'Send Us a Message'}
                            </h2>
                            <p className="text-sm text-gray-500">We respond within 24 hours</p>
                          </div>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name *
                              </label>
                              <input 
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Last Name *
                              </label>
                              <input 
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-5">
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
                                placeholder="john@company.com"
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
                              Company Name
                            </label>
                            <input 
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                              placeholder="Your Company"
                            />
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Service Interested In *
                              </label>
                              <select 
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200"
                              >
                                <option value="">Select a service</option>
                                <option value="website">Website Development</option>
                                <option value="branding">Branding & Design</option>
                                <option value="marketing">Digital Marketing</option>
                                <option value="seo">SEO Services</option>
                                <option value="ai">AI Automation</option>
                                <option value="software">Business Software</option>
                                <option value="all">Full Package</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Project Budget
                              </label>
                              <select 
                                name="budget"
                                value={formData.budget}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200"
                              >
                                <option value="">Select budget range</option>
                                <option value="350k-750k">₦350,000 - ₦750,000</option>
                                <option value="750k-1.5m">₦750,000 - ₦1,500,000</option>
                                <option value="1.5m-3m">₦1,500,000 - ₦3,000,000</option>
                                <option value="3m+">₦3,000,000+</option>
                                <option value="not-sure">Not sure yet</option>
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Tell us about your project *
                            </label>
                            <textarea 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={4}
                              required
                              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 focus:bg-white focus:border-[#F15924] focus:outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                              placeholder="Describe your project, goals, and any specific requirements..."
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
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message <Send size={20} />
                              </>
                            )}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  Have a question or want to discuss your project? Reach out through 
                  any of these channels and we&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#F15924]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-[#F15924]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1E293B] mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="pt-6">
                <h3 className="font-bold text-[#1E293B] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-gray-600 hover:bg-[#F15924] hover:text-white transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div variants={fadeInUp} className="pt-4">
                <div className="w-full h-64 rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                  <div className="glass-light w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="text-[#F15924] mx-auto mb-3" />
                      <p className="font-semibold text-[#1E293B]">{addressLines[0]}</p>
                      <p className="text-gray-600">{addressLines[1]}, {addressLines[2]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Action */}
              <motion.div variants={fadeInUp}>
                <div className="gradient-orange rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-3">
                    Want a Quick Response?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Get your free digital audit and we&apos;ll reach out within 24 hours.
                  </p>
                  <Link 
                    href="/free-audit"
                    className="inline-flex items-center gap-2 bg-white text-[#F15924] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Audit <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="space-y-4"
          >
            {faqList.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6"
              >
                <h3 className="font-bold text-[#1E293B] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 gradient-dark grid-pattern relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how IDS can help you build a powerful digital presence 
              and automate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${settings.phone2?.replace(/\s/g, '') || '+2348167145405'}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Us Now
              </a>
              <a 
                href={`mailto:${settings.email || 'info@immovablestech.com'}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
