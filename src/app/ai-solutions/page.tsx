'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Bot, 
  MessageSquare,
  Phone,
  Users,
  Headphones,
  Workflow,
  Zap,
  CheckCircle,
  Brain,
  Sparkles,
  BarChart,
  Clock,
  Shield
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

const aiSolutions = [
  {
    icon: MessageSquare,
    title: 'AI Sales Chatbots',
    description: 'Intelligent chatbots that engage website visitors, answer questions, and qualify leads 24/7.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Lead qualification logic',
      'CRM integration',
      'Conversation analytics',
      'Human handoff capability'
    ],
    stats: { value: '80%', label: 'of inquiries handled automatically' }
  },
  {
    icon: Phone,
    title: 'AI WhatsApp Sales Bots',
    description: 'Automate your WhatsApp business communication with AI-powered conversational bots.',
    features: [
      'Automated responses',
      'Product catalogs',
      'Order processing',
      'Payment integration',
      'Appointment booking',
      'Broadcast messaging'
    ],
    stats: { value: '3x', label: 'faster response time' }
  },
  {
    icon: Users,
    title: 'AI Lead Qualification',
    description: 'Automatically score and qualify leads based on behavior, demographics, and engagement patterns.',
    features: [
      'Behavioral scoring',
      'Predictive analytics',
      'Automated segmentation',
      'Lead routing',
      'Nurture sequences',
      'Sales alerts'
    ],
    stats: { value: '60%', label: 'more qualified leads' }
  },
  {
    icon: Headphones,
    title: 'AI Customer Support',
    description: 'Provide instant, accurate customer support with AI that understands context and intent.',
    features: [
      'Ticket automation',
      'Knowledge base AI',
      'Sentiment analysis',
      'Escalation rules',
      'Multi-channel support',
      'Performance analytics'
    ],
    stats: { value: '90%', label: 'resolution rate' }
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect your tools and automate repetitive tasks to boost productivity and reduce errors.',
    features: [
      'Process automation',
      'API integrations',
      'Data synchronization',
      'Custom triggers',
      'Conditional logic',
      'Reporting dashboards'
    ],
    stats: { value: '20hrs', label: 'saved per week' }
  }
];

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Your AI systems work around the clock, engaging customers even when your team is offline.'
  },
  {
    icon: Zap,
    title: 'Instant Response',
    description: 'Respond to customer inquiries in seconds, not hours or days.'
  },
  {
    icon: BarChart,
    title: 'Scalable Operations',
    description: 'Handle unlimited conversations simultaneously without increasing headcount.'
  },
  {
    icon: Shield,
    title: 'Consistent Quality',
    description: 'Deliver the same high-quality experience to every customer, every time.'
  }
];

export default function AISolutionsPage() {
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
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-[#F15924]" />
                <span className="text-sm text-gray-300">AI-Powered Business Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-gradient-orange">AI Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Harness the power of artificial intelligence to automate customer interactions, 
                qualify leads, and scale your operations without limits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Get AI Solutions <ArrowRight size={18} />
                </Link>
                <Link href="/free-audit" className="btn-secondary flex items-center justify-center gap-2">
                  Free AI Assessment
                </Link>
              </div>
            </motion.div>

            {/* AI Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-2 border-[#F15924]/20 absolute animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#F15924] rounded-full" />
                </div>
                <div className="w-64 h-64 rounded-full border-2 border-[#2563EB]/20 absolute animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#2563EB] rounded-full" />
                </div>
                <div className="w-48 h-48 rounded-full border-2 border-[#F15924]/20 absolute animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#F15924] rounded-full" />
                </div>
                <div className="w-32 h-32 rounded-full gradient-orange glow-orange flex items-center justify-center">
                  <Brain size={48} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-orange mx-auto flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
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
              OUR AI SOLUTIONS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              AI Systems Built for Business Growth
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600"
            >
              Cutting-edge AI solutions designed to automate operations, 
              enhance customer experience, and drive revenue.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-6">
                    <solution.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-[#1E293B] mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-[#F15924]" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#F15924] font-semibold hover:text-[#FF4924]"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-3xl p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F15924]/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl gradient-orange flex items-center justify-center mb-8 mx-auto">
                        <solution.icon size={40} className="text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-5xl font-bold text-[#F15924] mb-2">{solution.stats.value}</p>
                        <p className="text-gray-300">{solution.stats.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              HOW IT WORKS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Getting Started with AI
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
              { step: '1', title: 'Assessment', desc: 'We analyze your current processes and identify AI opportunities' },
              { step: '2', title: 'Strategy', desc: 'Custom AI implementation plan aligned with your goals' },
              { step: '3', title: 'Implementation', desc: 'We build and deploy your AI systems with thorough testing' },
              { step: '4', title: 'Optimization', desc: 'Continuous improvement based on performance data' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-orange mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
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
              USE CASES
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              AI Solutions for Every Industry
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { industry: 'Real Estate', use: 'Property inquiry chatbots, virtual tours, lead qualification' },
              { industry: 'E-commerce', use: 'Product recommendations, order tracking, customer service' },
              { industry: 'Healthcare', use: 'Appointment scheduling, FAQ automation, patient follow-ups' },
              { industry: 'Education', use: 'Enrollment assistance, student support, course recommendations' },
              { industry: 'Finance', use: 'Account inquiries, loan applications, fraud detection' },
              { industry: 'Hospitality', use: 'Booking assistance, concierge services, review management' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F8FAFC] rounded-2xl p-6 card-hover"
              >
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">{item.industry}</h3>
                <p className="text-gray-600 text-sm">{item.use}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#F15924] to-[#FF4924]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get a free AI assessment and discover how automation can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#F15924] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Get Free Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
