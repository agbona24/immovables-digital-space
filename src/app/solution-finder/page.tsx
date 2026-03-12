'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles,
  Globe,
  Palette,
  TrendingUp,
  Search,
  Bot,
  Code,
  Building2,
  Users,
  Target,
  Zap,
  RotateCcw
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    label: string;
    value: string;
    icon: React.ElementType;
    points: Record<string, number>;
  }[];
}

interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  color: string;
  link: string;
  cta: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your primary business goal right now?",
    subtitle: "Select the option that best describes your main focus",
    options: [
      { 
        label: "Get more customers online", 
        value: "customers",
        icon: Users,
        points: { website: 3, marketing: 3, seo: 2, branding: 1 }
      },
      { 
        label: "Build or improve my brand", 
        value: "brand",
        icon: Palette,
        points: { branding: 4, website: 2, marketing: 1 }
      },
      { 
        label: "Automate repetitive tasks", 
        value: "automate",
        icon: Zap,
        points: { ai: 4, software: 3 }
      },
      { 
        label: "Build custom software/app", 
        value: "software",
        icon: Code,
        points: { software: 4, website: 1, ai: 2 }
      },
    ]
  },
  {
    id: 2,
    question: "Do you currently have a website?",
    options: [
      { 
        label: "No, I need one built", 
        value: "no-website",
        icon: Globe,
        points: { website: 4, branding: 2 }
      },
      { 
        label: "Yes, but it needs improvement", 
        value: "needs-work",
        icon: Target,
        points: { website: 3, seo: 3, marketing: 1 }
      },
      { 
        label: "Yes, it's working well", 
        value: "good-website",
        icon: CheckCircle,
        points: { marketing: 2, seo: 2, ai: 2 }
      },
      { 
        label: "I need a web application", 
        value: "web-app",
        icon: Code,
        points: { software: 4, ai: 2 }
      },
    ]
  },
  {
    id: 3,
    question: "What's your biggest challenge?",
    subtitle: "Understanding your pain points helps us recommend the right solution",
    options: [
      { 
        label: "Not enough leads/inquiries", 
        value: "leads",
        icon: TrendingUp,
        points: { marketing: 4, seo: 3, ai: 2 }
      },
      { 
        label: "Can't be found on Google", 
        value: "visibility",
        icon: Search,
        points: { seo: 4, website: 2, marketing: 2 }
      },
      { 
        label: "Spending too much time on repetitive work", 
        value: "time",
        icon: Zap,
        points: { ai: 4, software: 3 }
      },
      { 
        label: "Brand looks unprofessional", 
        value: "brand-issue",
        icon: Palette,
        points: { branding: 4, website: 2 }
      },
    ]
  },
  {
    id: 4,
    question: "What's your industry?",
    options: [
      { 
        label: "Real Estate / Property", 
        value: "real-estate",
        icon: Building2,
        points: { website: 2, marketing: 2, ai: 2, seo: 1 }
      },
      { 
        label: "E-commerce / Retail", 
        value: "ecommerce",
        icon: Globe,
        points: { website: 3, marketing: 3, seo: 2 }
      },
      { 
        label: "Professional Services", 
        value: "services",
        icon: Users,
        points: { website: 2, branding: 2, seo: 2, ai: 1 }
      },
      { 
        label: "Healthcare / Wellness", 
        value: "healthcare",
        icon: Target,
        points: { website: 2, ai: 3, software: 2 }
      },
    ]
  },
  {
    id: 5,
    question: "How soon do you need results?",
    options: [
      { 
        label: "As soon as possible (1-2 weeks)", 
        value: "urgent",
        icon: Zap,
        points: { marketing: 2, ai: 3 }
      },
      { 
        label: "Within 1-2 months", 
        value: "soon",
        icon: Target,
        points: { website: 2, branding: 2, marketing: 2 }
      },
      { 
        label: "3-6 months is fine", 
        value: "flexible",
        icon: TrendingUp,
        points: { seo: 3, software: 2, branding: 2 }
      },
      { 
        label: "Building for long-term growth", 
        value: "long-term",
        icon: Building2,
        points: { seo: 3, software: 3, ai: 2 }
      },
    ]
  },
];

const solutions: Solution[] = [
  {
    id: 'website',
    title: 'Website Development',
    description: 'A professional, high-converting website that represents your brand and turns visitors into customers.',
    features: ['Custom design', 'Mobile responsive', 'Fast loading', 'SEO-ready', 'Easy to update'],
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    link: '/services#website',
    cta: 'Start Your Website Project'
  },
  {
    id: 'branding',
    title: 'Brand Identity Design',
    description: 'A complete brand identity that makes you stand out and builds trust with your audience.',
    features: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography', 'Brand assets'],
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    link: '/services#branding',
    cta: 'Transform Your Brand'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, generate leads, and grow your revenue.',
    features: ['Social media marketing', 'Paid advertising', 'Content strategy', 'Email marketing', 'Analytics'],
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    link: '/services#marketing',
    cta: 'Boost Your Marketing'
  },
  {
    id: 'seo',
    title: 'SEO & Visibility',
    description: 'Get found on Google and attract organic traffic from people actively searching for your services.',
    features: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Content optimization', 'Local SEO'],
    icon: Search,
    color: 'from-green-500 to-emerald-500',
    link: '/services#seo',
    cta: 'Improve Your Rankings'
  },
  {
    id: 'ai',
    title: 'AI Automation Solutions',
    description: 'Intelligent automation that handles repetitive tasks, engages customers 24/7, and saves you time.',
    features: ['AI chatbots', 'WhatsApp automation', 'Lead qualification', 'Customer support AI', 'Workflow automation'],
    icon: Bot,
    color: 'from-violet-500 to-purple-500',
    link: '/ai-solutions',
    cta: 'Automate Your Business'
  },
  {
    id: 'software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your business processes and workflows.',
    features: ['Web applications', 'Mobile apps', 'Business tools', 'Integrations', 'Dashboards'],
    icon: Code,
    color: 'from-slate-600 to-slate-800',
    link: '/services#software',
    cta: 'Build Your Solution'
  },
];

export default function SolutionFinderQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<Record<string, number>>({
    website: 0,
    branding: 0,
    marketing: 0,
    seo: 0,
    ai: 0,
    software: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswer = (option: typeof questions[0]['options'][0]) => {
    setSelectedOption(option.value);
    
    // Update scores based on points
    const newScores = { ...scores };
    Object.entries(option.points).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);
    
    // Save answer
    setAnswers({ ...answers, [currentQuestion]: option.value });

    // Move to next question after animation
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 400);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({
      website: 0,
      branding: 0,
      marketing: 0,
      seo: 0,
      ai: 0,
      software: 0
    });
    setShowResults(false);
    setSelectedOption(null);
  };

  // Get top 3 solutions based on scores
  const getTopSolutions = () => {
    const sortedSolutions = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([id]) => solutions.find(s => s.id === id)!);
    return sortedSolutions;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0d2d4d] to-[#0A2540] py-20 px-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F15924]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F15924]/20 text-[#F15924] px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Solution Finder</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Perfect Digital Solution
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Answer 5 quick questions and we&apos;ll recommend the best services to help your business grow.
          </p>
        </motion.div>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#F15924] to-[#ff7849]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  {questions[currentQuestion].question}
                </h2>
                {questions[currentQuestion].subtitle && (
                  <p className="text-gray-400 mb-8">
                    {questions[currentQuestion].subtitle}
                  </p>
                )}

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => {
                    const Icon = option.icon;
                    const isSelected = selectedOption === option.value;
                    
                    return (
                      <motion.button
                        key={option.value}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 group ${
                          isSelected 
                            ? 'bg-[#F15924] text-white scale-[0.98]' 
                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: isSelected ? 0.98 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected 
                            ? 'bg-white/20' 
                            : 'bg-[#F15924]/20 group-hover:bg-[#F15924]/30'
                        }`}>
                          <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#F15924]'}`} />
                        </div>
                        <span className="text-lg font-medium">{option.label}</span>
                        {isSelected && (
                          <CheckCircle className="w-6 h-6 ml-auto" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation */}
                {currentQuestion > 0 && (
                  <motion.button
                    onClick={goBack}
                    className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <ArrowLeft size={18} />
                    Go back
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Results Header */}
            <div className="bg-gradient-to-r from-[#F15924] to-[#ff7849] rounded-3xl p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Your Recommended Solutions
              </h2>
              <p className="text-white/80">
                Based on your answers, here are the best solutions for your business:
              </p>
            </div>

            {/* Solution Cards */}
            {getTopSolutions().map((solution, index) => {
              const Icon = solution.icon;
              const score = scores[solution.id];
              const maxScore = Math.max(...Object.values(scores));
              const percentage = Math.round((score / maxScore) * 100);
              
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                        {index === 0 && (
                          <span className="bg-[#F15924] text-white text-xs px-2 py-1 rounded-full">
                            Best Match
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      
                      {/* Match Score */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Match Score</span>
                          <span className="text-[#F15924] font-semibold">{percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${solution.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {solution.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={solution.link}
                        className="inline-flex items-center gap-2 text-[#F15924] hover:text-[#ff7849] font-semibold transition-colors"
                      >
                        {solution.cta}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-400 mb-4">
                Book a free consultation call to discuss your needs in detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#F15924] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d94d1a] transition-colors"
                >
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Get Free Audit First
                </Link>
              </div>
            </motion.div>

            {/* Restart */}
            <div className="text-center">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw size={18} />
                Take the quiz again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
