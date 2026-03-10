'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  Settings,
  MessageSquare,
  Send,
  MousePointer,
  Eye,
  Heart,
  Users,
  Star,
  Sparkles,
  PenTool,
  Layout,
  Monitor,
  Database,
  Cloud,
  Shield,
  Cpu,
  Activity
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

// Animated Website Builder Widget
const WebsiteWidget = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock(prev => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 overflow-hidden">
      <div className="absolute top-3 left-3 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      
      <div className="mt-6 space-y-3">
        {/* Header */}
        <motion.div 
          animate={{ opacity: activeBlock === 0 ? 1 : 0.5, scale: activeBlock === 0 ? 1.02 : 1 }}
          className="h-8 bg-gradient-to-r from-[#F15924] to-[#FF6B4A] rounded-lg flex items-center px-3"
        >
          <div className="w-16 h-2 bg-white/30 rounded" />
          <div className="ml-auto flex gap-2">
            <div className="w-8 h-2 bg-white/30 rounded" />
            <div className="w-8 h-2 bg-white/30 rounded" />
          </div>
        </motion.div>
        
        {/* Hero */}
        <motion.div 
          animate={{ opacity: activeBlock === 1 ? 1 : 0.5, scale: activeBlock === 1 ? 1.02 : 1 }}
          className="h-20 bg-white/10 rounded-lg p-3"
        >
          <div className="w-24 h-2 bg-white/40 rounded mb-2" />
          <div className="w-32 h-3 bg-[#F15924]/60 rounded mb-2" />
          <div className="w-16 h-4 bg-[#F15924] rounded" />
        </motion.div>
        
        {/* Grid */}
        <motion.div 
          animate={{ opacity: activeBlock === 2 ? 1 : 0.5, scale: activeBlock === 2 ? 1.02 : 1 }}
          className="grid grid-cols-3 gap-2"
        >
          {[1,2,3].map(i => (
            <div key={i} className="h-12 bg-white/10 rounded-lg" />
          ))}
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          animate={{ opacity: activeBlock === 3 ? 1 : 0.5, scale: activeBlock === 3 ? 1.02 : 1 }}
          className="h-6 bg-white/5 rounded-lg"
        />
      </div>
      
      <motion.div 
        animate={{ x: [0, 80, 80, 0], y: [0, 20, 60, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-4 right-4"
      >
        <MousePointer size={20} className="text-[#F15924]" />
      </motion.div>
    </div>
  );
};

// Animated Branding Widget
const BrandingWidget = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#F15924', '#2563EB', '#10B981', '#8B5CF6'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 mx-auto mb-4"
          >
            <motion.div 
              animate={{ backgroundColor: colors[colorIndex] }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-2xl rotate-45"
              style={{ backgroundColor: colors[colorIndex] }}
            />
            <div className="absolute inset-3 bg-[#0A2540] rounded-xl rotate-45 flex items-center justify-center">
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white font-bold text-2xl -rotate-45"
              >
                IDS
              </motion.span>
            </div>
          </motion.div>
          
          <div className="flex justify-center gap-2 mt-4">
            {colors.map((color, i) => (
              <motion.div
                key={i}
                animate={{ scale: i === colorIndex ? 1.3 : 1 }}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          
          <div className="mt-4 flex justify-center gap-2">
            <PenTool size={16} className="text-gray-400" />
            <Sparkles size={16} className="text-[#F15924]" />
            <Palette size={16} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Marketing Widget
const MarketingWidget = () => {
  const [metrics, setMetrics] = useState({ views: 0, clicks: 0, conversions: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        views: (prev.views + Math.floor(Math.random() * 50)) % 10000,
        clicks: (prev.clicks + Math.floor(Math.random() * 10)) % 1000,
        conversions: (prev.conversions + Math.floor(Math.random() * 3)) % 100
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 overflow-hidden">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { icon: Eye, label: 'Views', value: metrics.views, color: '#F15924' },
          { icon: MousePointer, label: 'Clicks', value: metrics.clicks, color: '#2563EB' },
          { icon: Target, label: 'Conv.', value: metrics.conversions, color: '#10B981' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            className="bg-white/10 rounded-xl p-3 text-center"
          >
            <item.icon size={18} className="mx-auto mb-1" style={{ color: item.color }} />
            <p className="text-white font-bold text-sm">{item.value.toLocaleString()}</p>
            <p className="text-gray-400 text-xs">{item.label}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Analytics Chart */}
      <div className="h-20 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 rounded-t"
            style={{ backgroundColor: i === 5 ? '#F15924' : 'rgba(241, 89, 36, 0.3)' }}
          />
        ))}
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <TrendingUp size={14} className="text-green-500" />
          <span className="text-green-500 text-xs font-medium">+24%</span>
        </div>
        <span className="text-gray-400 text-xs">Last 7 days</span>
      </div>
    </div>
  );
};

// Animated SEO Widget
const SEOWidget = () => {
  const [rank, setRank] = useState(15);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRank(prev => Math.max(1, prev - 1 === 0 ? 15 : prev - 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 overflow-hidden">
      {/* Search Bar */}
      <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 mb-4">
        <Search size={16} className="text-gray-400" />
        <span className="text-gray-600 text-sm">your business keywords</span>
      </div>
      
      {/* Rankings */}
      <div className="space-y-2">
        {[1, 2, 3].map((pos) => (
          <motion.div
            key={pos}
            animate={{ 
              backgroundColor: rank === pos ? 'rgba(241, 89, 36, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              borderColor: rank === pos ? '#F15924' : 'transparent'
            }}
            className="flex items-center gap-3 p-2 rounded-lg border"
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${rank === pos ? 'bg-[#F15924] text-white' : 'bg-white/20 text-gray-400'}`}>
              {pos}
            </span>
            <div className="flex-1">
              <div className={`h-2 rounded ${rank === pos ? 'bg-[#F15924]' : 'bg-white/20'}`} style={{ width: `${100 - pos * 15}%` }} />
            </div>
            {rank === pos && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-[#F15924]"
              >
                <Star size={14} fill="#F15924" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <motion.p 
          key={rank}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl font-bold text-[#F15924]"
        >
          #{rank}
        </motion.p>
        <p className="text-gray-400 text-xs">Current Ranking</p>
      </div>
    </div>
  );
};

// Animated AI Chat Widget
const AIWidget = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help?' },
  ]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const responses = [
      { type: 'user', text: 'I need information' },
      { type: 'bot', text: 'Sure! Let me help you...' },
      { type: 'user', text: 'Thanks!' },
      { type: 'bot', text: 'You\'re welcome! 🤖' },
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < responses.length) {
        const currentIndex = index; // Capture index for closure
        setTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev.slice(-2), responses[currentIndex]]);
          setTyping(false);
        }, 500);
        index++;
      } else {
        index = 0;
        setMessages([{ type: 'bot', text: 'Hello! How can I help?' }]);
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-4 overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#F15924] flex items-center justify-center">
          <Bot size={16} className="text-white" />
        </div>
        <div>
          <p className="text-white text-sm font-medium">AI Assistant</p>
          <p className="text-green-400 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Online
          </p>
        </div>
      </div>
      
      <div className="flex-1 space-y-2 overflow-hidden">
        {messages.filter(msg => msg && msg.type).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`px-3 py-1.5 rounded-xl text-xs max-w-[80%] ${
              msg.type === 'user' 
                ? 'bg-[#F15924] text-white rounded-br-none' 
                : 'bg-white/10 text-white rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <div className="flex gap-1 px-3">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.4, delay: i * 0.1, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-3 flex gap-2">
        <div className="flex-1 bg-white/10 rounded-full px-3 py-1.5">
          <span className="text-gray-400 text-xs">Type a message...</span>
        </div>
        <button className="w-7 h-7 rounded-full bg-[#F15924] flex items-center justify-center">
          <Send size={12} className="text-white" />
        </button>
      </div>
    </div>
  );
};

// Animated Software Widget
const SoftwareWidget = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 5) % 105);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 overflow-hidden">
      {/* Code Editor Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-gray-400 text-xs">app.tsx</span>
        </div>
      </div>
      
      {/* Code Lines */}
      <div className="space-y-1 font-mono text-xs">
        {[
          { indent: 0, color: '#F15924', text: 'const' },
          { indent: 1, color: '#2563EB', text: 'buildApp = () => {' },
          { indent: 2, color: '#10B981', text: 'return <App />' },
          { indent: 1, color: '#2563EB', text: '}' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-2"
            style={{ paddingLeft: `${line.indent * 12}px` }}
          >
            <span className="text-gray-500 w-4">{i + 1}</span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Build Progress */}
      <div className="mt-4 bg-white/5 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Cpu size={12} className="text-[#F15924]" />
            Building...
          </span>
          <span className="text-[#F15924] text-xs font-bold">{Math.min(progress, 100)}%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#F15924] to-[#FF6B4A]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-center gap-3">
        <Database size={14} className="text-gray-400" />
        <Cloud size={14} className="text-[#F15924]" />
        <Shield size={14} className="text-gray-400" />
      </div>
    </div>
  );
};

const serviceWidgets: { [key: string]: React.ComponentType } = {
  web: WebsiteWidget,
  branding: BrandingWidget,
  marketing: MarketingWidget,
  seo: SEOWidget,
  ai: AIWidget,
  software: SoftwareWidget,
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
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/85 to-[#0F172A]/90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F15924]/20 rounded-full blur-3xl pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#F15924] font-semibold mb-4 px-4 py-2 bg-[#F15924]/10 rounded-full"
            >
              OUR SERVICES
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Solutions That{' '}
              <span className="text-gradient-orange">Drive Growth</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Comprehensive digital services designed to transform your business 
              into a market leader in the AI-powered era.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="btn-secondary flex items-center gap-2">
                Get Free Audit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#F15924] font-semibold mb-4 block">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Full-Stack Digital Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to execution, we deliver end-to-end solutions that power business growth
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.id}`}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 hover:bg-white hover:border-[#F15924]/50 hover:shadow-xl transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-6"
                >
                  <service.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#F15924] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#F15924] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections with Widgets */}
      {services.map((service, index) => {
        const Widget = serviceWidgets[service.id];
        const isLight = index === 1 || index === 3 || index === 5; // Branding, SEO, Software are light
        return (
          <section 
            key={service.id}
            id={service.id}
            className={`py-24 ${isLight ? 'bg-gradient-to-br from-[#FAFBFC] to-white' : (index % 2 === 0 ? 'bg-[#0F172A]' : 'bg-[#0A2540]')} relative overflow-hidden`}
          >
            <div className="absolute inset-0 overflow-hidden">
              {isLight ? (
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
              ) : index % 2 === 0 ? (
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
              ) : (
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
              )}
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-6"
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${isLight ? 'text-[#1E293B]' : 'text-white'} mb-6`}>
                    {service.title}
                  </h2>
                  <p className={`text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'} mb-8`}>
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className={`font-bold ${isLight ? 'text-[#1E293B]' : 'text-white'} mb-4`}>What We Offer:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={16} className="text-[#F15924] flex-shrink-0" />
                          <span className={`${isLight ? 'text-gray-600' : 'text-gray-300'} text-sm`}>{feature}</span>
                        </motion.div>
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
                  {/* Animated Widget */}
                  <div className="h-80">
                    {Widget && <Widget />}
                  </div>
                  
                  {/* Benefits */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {service.benefits.map((benefit, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`${isLight ? 'bg-white shadow-lg border border-gray-100' : 'bg-white/5 backdrop-blur border border-white/10'} rounded-xl p-4 flex items-center gap-3`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#F15924]/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={14} className="text-[#F15924]" />
                        </div>
                        <span className={`${isLight ? 'text-gray-700' : 'text-gray-300'} text-sm`}>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px] -translate-x-1/2" />
        </div>
        
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
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              How We Work With You
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600"
            >
              A proven methodology that delivers results
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business, goals, and challenges', icon: Search },
              { step: '02', title: 'Strategy', desc: 'Creating a tailored digital roadmap', icon: Target },
              { step: '03', title: 'Execution', desc: 'Building and implementing solutions', icon: Code },
              { step: '04', title: 'Growth', desc: 'Optimizing for continuous improvement', icon: TrendingUp }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center relative group"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#F15924] to-transparent" />
                )}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-full gradient-orange mx-auto flex items-center justify-center mb-6 relative z-10"
                >
                  <item.icon size={28} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 group-hover:text-[#F15924]/20 transition-colors">
                  {item.step}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 to-[#0F172A]/95" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F15924]/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#F15924] to-[#FF4924] rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 relative"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto relative"
            >
              Let&apos;s discuss how our services can help transform your business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative"
            >
              <Link href="/contact" className="bg-white text-[#F15924] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2">
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-2">
                Get Free Audit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
