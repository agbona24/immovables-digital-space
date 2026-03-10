'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  Shield,
  Send,
  User,
  Star,
  CheckCheck,
  TrendingUp,
  RefreshCw,
  Database,
  Mail,
  Bell,
  Settings,
  ArrowDown,
  Filter
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

// AI Sales Chatbot Widget
const ChatbotWidget = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! Looking for help?' }
  ]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const conversation = [
      { type: 'user', text: 'Yes, I need pricing info' },
      { type: 'bot', text: 'Great! What product interests you?' },
      { type: 'user', text: 'Enterprise plan' },
      { type: 'bot', text: "I'll connect you with sales! 🚀" },
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < conversation.length) {
        const currentIndex = index;
        setTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev.slice(-2), conversation[currentIndex]]);
          setTyping(false);
        }, 600);
        index++;
      } else {
        index = 0;
        setMessages([{ type: 'bot', text: 'Hi! Looking for help?' }]);
      }
    }, 1800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-4 h-72 flex flex-col">
      <div className="flex items-center gap-2 pb-3 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#F15924] flex items-center justify-center">
          <Bot size={16} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Sales Assistant</p>
          <p className="text-green-400 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Active
          </p>
        </div>
      </div>
      
      <div className="flex-1 py-3 space-y-2 overflow-hidden">
        {messages.filter(msg => msg && msg.type).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`px-3 py-2 rounded-xl text-xs max-w-[75%] ${
              msg.type === 'user' 
                ? 'bg-[#F15924] text-white rounded-br-none' 
                : 'bg-white/10 text-white rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <div className="flex gap-1 p-2">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.4, delay: i * 0.1, repeat: Infinity }}
                className="w-2 h-2 bg-[#F15924] rounded-full"
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex gap-2 pt-2 border-t border-white/10">
        <div className="flex-1 bg-white/5 rounded-full px-3 py-2 text-xs text-gray-400">
          Type a message...
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full bg-[#F15924] flex items-center justify-center"
        >
          <Send size={14} className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

// WhatsApp Bot Widget
const WhatsAppWidget = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to our WhatsApp! 💬' }
  ]);

  useEffect(() => {
    const conversation = [
      { type: 'user', text: 'Show me products' },
      { type: 'bot', text: '📱 Here are our top picks:' },
      { type: 'bot', text: '1. Premium Plan\n2. Business Plan\n3. Starter Plan' },
      { type: 'user', text: 'Order #2 please' },
      { type: 'bot', text: '✅ Order confirmed! Track: #WA2847' },
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < conversation.length) {
        const currentIndex = index;
        setTimeout(() => {
          setMessages(prev => [...prev.slice(-3), conversation[currentIndex]]);
        }, 300);
        index++;
      } else {
        index = 0;
        setMessages([{ type: 'bot', text: 'Welcome to our WhatsApp! 💬' }]);
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#075E54] rounded-2xl p-4 h-72 flex flex-col">
      <div className="flex items-center gap-2 pb-3 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
          <Phone size={16} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Business Bot</p>
          <p className="text-green-300 text-xs">online</p>
        </div>
        <CheckCheck size={16} className="text-[#25D366]" />
      </div>
      
      <div className="flex-1 py-3 space-y-2 overflow-hidden bg-[#ECE5DD]/5 -mx-4 px-4 rounded" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
        {messages.filter(msg => msg && msg.type).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`px-3 py-2 rounded-lg text-xs max-w-[75%] whitespace-pre-line ${
              msg.type === 'user' 
                ? 'bg-[#DCF8C6] text-gray-800' 
                : 'bg-white text-gray-800'
            }`}>
              {msg.text}
              <span className="text-[10px] text-gray-500 ml-2">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Lead Qualification Widget
const LeadWidget = () => {
  const [leads, setLeads] = useState([
    { name: 'John D.', score: 45, status: 'new' },
    { name: 'Sarah M.', score: 72, status: 'warm' },
    { name: 'Mike R.', score: 95, status: 'hot' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeads(prev => prev.map(lead => ({
        ...lead,
        score: Math.min(100, lead.score + Math.floor(Math.random() * 10)),
        status: lead.score > 80 ? 'hot' : lead.score > 50 ? 'warm' : 'new'
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-4 h-72 flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-[#F15924]" />
          <span className="text-white text-sm font-medium">Lead Scoring</span>
        </div>
        <div className="flex items-center gap-1 text-green-400 text-xs">
          <TrendingUp size={12} />
          <span>+24%</span>
        </div>
      </div>
      
      <div className="flex-1 py-3 space-y-3">
        {leads.map((lead, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 rounded-xl p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={12} className="text-white" />
                </div>
                <span className="text-white text-sm">{lead.name}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                lead.status === 'hot' ? 'bg-red-500/20 text-red-400' :
                lead.status === 'warm' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {lead.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lead.score}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full rounded-full ${
                    lead.score > 80 ? 'bg-red-500' :
                    lead.score > 50 ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}
                />
              </div>
              <span className="text-white text-xs font-bold">{lead.score}%</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="pt-2 border-t border-white/10 flex justify-between items-center">
        <span className="text-gray-400 text-xs">AI-scored leads</span>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <RefreshCw size={14} className="text-[#F15924]" />
        </motion.div>
      </div>
    </div>
  );
};

// Customer Support Widget
const SupportWidget = () => {
  const [tickets, setTickets] = useState([
    { id: '#1247', issue: 'Login issue', status: 'resolved', time: '2m' },
    { id: '#1248', issue: 'Payment failed', status: 'processing', time: '5m' },
    { id: '#1249', issue: 'Feature request', status: 'pending', time: '1m' },
  ]);
  const [resolved, setResolved] = useState(89);

  useEffect(() => {
    const interval = setInterval(() => {
      setResolved(prev => Math.min(99, prev + 1) === 99 ? 85 : prev + 1);
      setTickets(prev => prev.map((ticket, i) => ({
        ...ticket,
        status: i === 0 ? 'resolved' : 
                i === 1 && Math.random() > 0.5 ? 'resolved' : ticket.status
      })));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-4 h-72 flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Headphones size={18} className="text-[#F15924]" />
          <span className="text-white text-sm font-medium">AI Support</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span className="text-green-400 text-xs">Live</span>
        </div>
      </div>
      
      <div className="flex-1 py-3">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <svg className="w-20 h-20 -rotate-90">
              <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
              <motion.circle
                cx="40" cy="40" r="35"
                stroke="#F15924"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDasharray: '0 220' }}
                animate={{ strokeDasharray: `${resolved * 2.2} 220` }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{resolved}%</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {tickets.map((ticket, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">{ticket.id}</span>
                <span className="text-white text-xs">{ticket.issue}</span>
              </div>
              <span className={`text-xs ${
                ticket.status === 'resolved' ? 'text-green-400' :
                ticket.status === 'processing' ? 'text-yellow-400' :
                'text-blue-400'
              }`}>
                {ticket.status === 'resolved' && <CheckCircle size={12} />}
                {ticket.status === 'processing' && <RefreshCw size={12} className="animate-spin" />}
                {ticket.status === 'pending' && <Clock size={12} />}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Workflow Automation Widget
const WorkflowWidget = () => {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { icon: Mail, label: 'Trigger', color: '#F15924' },
    { icon: Filter, label: 'Filter', color: '#2563EB' },
    { icon: Database, label: 'CRM', color: '#10B981' },
    { icon: Bell, label: 'Notify', color: '#8B5CF6' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-4 h-72 flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Workflow size={18} className="text-[#F15924]" />
          <span className="text-white text-sm font-medium">Automation</span>
        </div>
        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Running</span>
      </div>
      
      <div className="flex-1 py-4 flex items-center justify-center">
        <div className="relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {nodes.map((_, i) => {
              if (i === nodes.length - 1) return null;
              return (
                <motion.line
                  key={i}
                  x1={40 + i * 55}
                  y1="45"
                  x2={40 + (i + 1) * 55}
                  y2="45"
                  stroke={activeNode > i ? '#F15924' : 'rgba(255,255,255,0.2)'}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>
          
          <div className="flex gap-6 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: activeNode === i ? 1.2 : 1,
                  y: activeNode === i ? -5 : 0
                }}
                className="flex flex-col items-center gap-2"
              >
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeNode >= i ? 'shadow-lg' : ''
                  }`}
                  style={{ 
                    backgroundColor: activeNode >= i ? node.color : 'rgba(255,255,255,0.1)',
                    boxShadow: activeNode === i ? `0 0 20px ${node.color}50` : 'none'
                  }}
                >
                  <node.icon size={20} className="text-white" />
                </div>
                <span className={`text-xs ${activeNode >= i ? 'text-white' : 'text-gray-500'}`}>
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pt-3 border-t border-white/10">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-gray-400">Tasks automated today</span>
          <span className="text-[#F15924] font-bold">1,247</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-full bg-gradient-to-r from-[#F15924] to-[#FF6B4A]"
          />
        </div>
      </div>
    </div>
  );
};

const solutionWidgets = [ChatbotWidget, WhatsAppWidget, LeadWidget, SupportWidget, WorkflowWidget];

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
      <section className="relative py-32" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
      <section className="py-24 bg-gradient-to-br from-[#FAFBFC] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#F15924]/30 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl gradient-orange mx-auto flex items-center justify-center mb-4"
                >
                  <benefit.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/97 to-[#0A2540]/97" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
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
              className="inline-block text-[#F15924] font-semibold mb-4 px-4 py-2 bg-[#F15924]/10 rounded-full"
            >
              OUR AI SOLUTIONS
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              AI Systems Built for Business Growth
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-400"
            >
              Cutting-edge AI solutions designed to automate operations, 
              enhance customer experience, and drive revenue.
            </motion.p>
          </motion.div>

          <div className="space-y-0">
            {aiSolutions.map((solution, index) => {
              const Widget = solutionWidgets[index];
              const isLight = index === 1 || index === 3;
              
              return (
                <div 
                  key={index}
                  className={`py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 ${isLight ? 'bg-gradient-to-br from-[#FAFBFC] to-white' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <motion.div 
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mb-6"
                      >
                        <solution.icon size={32} className="text-white" />
                      </motion.div>
                      <h3 className={`text-2xl md:text-3xl font-bold ${isLight ? 'text-[#1E293B]' : 'text-white'} mb-4`}>
                        {solution.title}
                      </h3>
                      <p className={`text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'} mb-6`}>
                        {solution.description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className={`font-bold ${isLight ? 'text-[#1E293B]' : 'text-white'} mb-4`}>Key Features:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {solution.features.map((feature, i) => (
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

                      <div className="flex items-center gap-6">
                        <Link 
                          href="/contact"
                          className="inline-flex items-center gap-2 btn-primary"
                        >
                          Get Started <ArrowRight size={18} />
                        </Link>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-[#F15924]">{solution.stats.value}</p>
                          <p className={`${isLight ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{solution.stats.label}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {Widget && <Widget />}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/95 to-[#0F172A]/95" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#F15924]/10 rounded-full blur-[100px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-[80px]" />
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
              { step: '1', title: 'Assessment', desc: 'We analyze your current processes and identify AI opportunities', icon: BarChart },
              { step: '2', title: 'Strategy', desc: 'Custom AI implementation plan aligned with your goals', icon: Brain },
              { step: '3', title: 'Implementation', desc: 'We build and deploy your AI systems with thorough testing', icon: Settings },
              { step: '4', title: 'Optimization', desc: 'Continuous improvement based on performance data', icon: TrendingUp }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center relative group hover:border-[#F15924]/50 transition-all"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#F15924] to-transparent z-10" />
                )}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full gradient-orange mx-auto flex items-center justify-center mb-4"
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <span className="absolute top-2 right-4 text-4xl font-bold text-white/5 group-hover:text-[#F15924]/20 transition-colors">
                  {item.step}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F15924]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#F15924]/30 transition-all"
              >
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">{item.industry}</h3>
                <p className="text-gray-600 text-sm">{item.use}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative" style={{ backgroundImage: 'url(/hero2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
              Ready to Automate Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto relative"
            >
              Get a free AI assessment and discover how automation can transform your operations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative"
            >
              <Link href="/contact" className="bg-white text-[#F15924] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/free-audit" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all">
                Get Free Assessment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
