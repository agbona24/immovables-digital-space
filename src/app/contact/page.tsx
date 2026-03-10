'use client';

import { motion } from 'framer-motion';
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
  Linkedin,
  Facebook
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

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: [
      '12 Obasanjo Way, Off Akin Olugbade',
      'Ita Eko, Abeokuta',
      'Ogun State, Nigeria'
    ]
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+234 813 283 3083', '+234 800 IDS HELP']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@immovablesdigital.com', 'support@immovablesdigital.com']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM']
  }
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' }
];

const faqs = [
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

export default function ContactPage() {
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
              Let&apos;s Build Something{' '}
              <span className="text-gradient-orange">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital presence? We&apos;d love to hear about 
              your project and explore how we can help you achieve your goals.
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
              <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E293B]">
                    Send Us a Message
                  </h2>
                </div>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What service are you interested in? *
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20"
                    >
                      <option value="">Select budget range</option>
                      <option value="350k-750k">₦350,000 - ₦750,000</option>
                      <option value="750k-1.5m">₦750,000 - ₦1,500,000</option>
                      <option value="1.5m-3m">₦1,500,000 - ₦3,000,000</option>
                      <option value="3m+">₦3,000,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-[#F15924] focus:outline-none focus:ring-2 focus:ring-[#F15924]/20 resize-none"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
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
                      <p className="font-semibold text-[#1E293B]">12 Obasanjo Way</p>
                      <p className="text-gray-600">Abeokuta, Ogun State</p>
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
            {faqs.map((faq, index) => (
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
                href="tel:+2348132833083"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Us Now
              </a>
              <a 
                href="mailto:hello@immovablesdigital.com"
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
