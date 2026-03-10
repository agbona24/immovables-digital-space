'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code,
  Megaphone,
  Palette,
  Youtube,
  Send,
  Sparkles,
  Globe,
  Zap
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services#web', icon: Code },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Bot },
    { name: 'Digital Marketing', href: '/services#marketing', icon: Megaphone },
    { name: 'Branding', href: '/services#branding', icon: Palette },
  ],
  resources: [
    { name: 'Blog', href: '/insights' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Free Audit', href: '/free-audit' },
    { name: 'Packages', href: '/packages' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
  { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
  { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A2540] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F15924]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="footerLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F15924" stopOpacity="0" />
              <stop offset="50%" stopColor="#F15924" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F15924" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0" y1="100" x2="100%" y2="100"
            stroke="url(#footerLineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-[#F15924] to-[#FF6B35] rounded-3xl p-12 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-10">
              <Globe size={200} />
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <Sparkles className="text-white" size={20} />
                  <span className="text-white/90 font-medium">Ready to Transform?</span>
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s Build Something Extraordinary Together
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Get a free digital audit and discover how AI-powered solutions can accelerate your business growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/free-audit" 
                    className="inline-flex items-center gap-2 bg-white text-[#F15924] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    Get Free Audit <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    Book a Call <Phone size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <Zap className="text-[#F15924]" size={20} />
                <span className="text-[#F15924] font-semibold text-sm uppercase tracking-wider">Newsletter</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Stay Ahead with AI & Digital Insights
              </h3>
              <p className="text-gray-400">
                Get weekly tips on AI automation, digital marketing, and business growth.
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex w-full lg:w-auto bg-white/5 border border-white/10 rounded-2xl p-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-transparent focus:outline-none text-white placeholder-gray-500"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F15924] hover:bg-[#FF6B35] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
              >
                <Send size={18} />
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Image 
                  src="/logo.png" 
                  alt="IDS Logo" 
                  width={50} 
                  height={50}
                  className="h-14 w-auto"
                />
              </motion.div>
              <div>
                <span className="text-white font-bold text-xl group-hover:text-[#F15924] transition-colors">IMMOVABLES</span>
                <span className="text-[#F15924] font-light text-sm block -mt-1">DIGITAL SPACE</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building powerful digital infrastructure for modern businesses through AI automation, 
              intelligent marketing systems, and cutting-edge technology solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: social.color }}
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:text-white transition-all border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services with Icons */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-[#F15924]" />
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-white group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#F15924]/20 transition-colors">
                      <link.icon size={14} className="text-[#F15924]" />
                    </div>
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-[#F15924]" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F15924] hover:pl-2 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-[#F15924]" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F15924] hover:pl-2 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Quick Contact */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Quick Contact</p>
              <a href="tel:+2348132833083" className="text-white font-semibold hover:text-[#F15924] transition-colors block">
                +234 813 283 3083
              </a>
              <a href="tel:+2348167145405" className="text-white font-semibold hover:text-[#F15924] transition-colors block mt-1">
                +234 816 714 5405
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: 'Address', value: '12 Obasanjo Way, Abeokuta, Nigeria' },
              { icon: Phone, label: 'Phone', value: '+234 813 283 3083 / +234 816 714 5405' },
              { icon: Mail, label: 'Email', value: 'info@immovablestech.com' }
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#F15924]/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F15924]/20 to-[#F15924]/10 flex items-center justify-center">
                  <item.icon size={20} className="text-[#F15924]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-[#071B2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Immovables Digital Space. All rights reserved.
            </motion.p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#F15924] rounded-full flex items-center justify-center shadow-lg shadow-[#F15924]/25 z-50 hover:bg-[#FF6B35] transition-colors"
      >
        <ArrowRight size={20} className="rotate-[-90deg] text-white" />
      </motion.button>
    </footer>
  );
}
