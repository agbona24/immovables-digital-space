'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Award, 
  Zap,
  CheckCircle,
  Globe,
  Bot,
  TrendingUp
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

const team = [
  {
    name: 'Tunde Adeyemi',
    role: 'Founder & CEO',
    bio: 'Visionary tech entrepreneur with 10+ years in digital transformation.'
  },
  {
    name: 'Adaobi Okonkwo',
    role: 'CTO',
    bio: 'AI specialist and software architect driving technical innovation.'
  },
  {
    name: 'Emeka Nwosu',
    role: 'Head of Marketing',
    bio: 'Digital marketing expert with expertise in growth strategies.'
  },
  {
    name: 'Fatima Bello',
    role: 'Creative Director',
    bio: 'Award-winning designer creating impactful brand experiences.'
  }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technology and creative solutions to solve complex business challenges.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every strategy and solution we implement is measured by its impact on your business growth.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, fully invested in your success.'
  },
  {
    icon: Zap,
    title: 'Speed & Excellence',
    description: 'We deliver high-quality solutions efficiently without compromising on quality.'
  }
];

export default function AboutPage() {
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
            <span className="inline-block text-[#F15924] font-semibold mb-4">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Africa&apos;s Digital{' '}
              <span className="text-gradient-orange">Future</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Immovables Digital Space is a leading digital infrastructure company 
              transforming how African businesses leverage technology for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl p-10"
            >
              <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg">
                To empower African businesses with world-class digital infrastructure, 
                AI automation, and intelligent marketing systems that drive sustainable 
                growth and establish market leadership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F8FAFC] rounded-3xl p-10"
            >
              <div className="w-16 h-16 rounded-xl gradient-blue flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To become Africa&apos;s most trusted digital transformation partner, 
                pioneering AI-driven business solutions that position African 
                enterprises on the global stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#F15924] font-semibold mb-4">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                From Vision to Digital Revolution
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2021, Immovables Digital Space emerged from a simple observation: 
                African businesses needed access to the same caliber of digital infrastructure 
                available to global enterprises.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders, with backgrounds in AI, software development, and digital marketing, 
                came together to bridge this gap. What started as a small team building websites 
                has evolved into a full-service digital transformation company serving clients 
                across multiple industries.
              </p>
              <p className="text-gray-600">
                Today, we&apos;re at the forefront of AI-powered business solutions, helping 
                companies automate operations, generate leads, and scale efficiently using 
                cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '15+', label: 'Team Members' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg"
                >
                  <p className="text-4xl font-bold text-[#F15924] mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              OUR VALUES
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              What Drives Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-orange mx-auto flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
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
              OUR APPROACH
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              How We Deliver Excellence
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
                step: '01',
                title: 'Discovery & Strategy',
                description: 'We dive deep into understanding your business, audience, and goals to create a tailored digital strategy.'
              },
              {
                step: '02',
                title: 'Design & Development',
                description: 'Our team crafts stunning designs and builds robust solutions using the latest technologies.'
              },
              {
                step: '03',
                title: 'Launch & Optimize',
                description: 'We launch your project with ongoing optimization to ensure continuous growth and improvement.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-2xl p-8"
              >
                <span className="text-5xl font-bold text-[#F15924]/30">{item.step}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#F8FAFC]" id="team">
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
              OUR TEAM
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              Meet the Experts Behind IDS
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="h-48 gradient-orange" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E293B] mb-1">{member.name}</h3>
                  <p className="text-[#F15924] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#F15924] font-semibold mb-4">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                Your Success is Our Priority
              </h2>
              <p className="text-gray-600 mb-8">
                We combine deep technical expertise with strategic business understanding 
                to deliver solutions that actually drive results.
              </p>

              <div className="space-y-4">
                {[
                  'AI-first approach to business solutions',
                  'Proven track record with 150+ successful projects',
                  'Full-service digital transformation capabilities',
                  'Dedicated support and continuous optimization',
                  'Local expertise with global standards'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#F15924] flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center">
                <Globe size={40} className="text-[#F15924] mx-auto mb-4" />
                <h4 className="font-bold text-[#1E293B] mb-2">Global Standards</h4>
                <p className="text-sm text-gray-600">World-class solutions tailored for African markets</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center">
                <Bot size={40} className="text-[#F15924] mx-auto mb-4" />
                <h4 className="font-bold text-[#1E293B] mb-2">AI Expertise</h4>
                <p className="text-sm text-gray-600">Cutting-edge AI automation at your service</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center">
                <TrendingUp size={40} className="text-[#F15924] mx-auto mb-4" />
                <h4 className="font-bold text-[#1E293B] mb-2">Growth Focused</h4>
                <p className="text-sm text-gray-600">Every solution designed for measurable impact</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center">
                <Award size={40} className="text-[#F15924] mx-auto mb-4" />
                <h4 className="font-bold text-[#1E293B] mb-2">Award Winning</h4>
                <p className="text-sm text-gray-600">Recognized for excellence in digital solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build a powerful digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="btn-secondary flex items-center justify-center gap-2">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
