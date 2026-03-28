'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  TrendingUp, 
  Globe, 
  Users, 
  BarChart3,
  Smartphone,
  Search,
  ShoppingCart,
  Mail,
  Award
} from 'lucide-react';
import { initVisitorProfile, updateIndustry, addInterest, completeAssessment } from '@/lib/personalization';

interface Question {
  id: number;
  category: string;
  icon: React.ReactNode;
  question: string;
  options: {
    text: string;
    score: number;
    insight: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: 'Business Info',
    icon: <Globe className="w-6 h-6" />,
    question: 'What industry does your business operate in?',
    options: [
      { text: 'Real Estate', score: 0, insight: 'real-estate' },
      { text: 'Healthcare', score: 0, insight: 'healthcare' },
      { text: 'E-commerce/Retail', score: 0, insight: 'ecommerce' },
      { text: 'Technology/SaaS', score: 0, insight: 'technology' },
      { text: 'Professional Services', score: 0, insight: 'professional-services' },
      { text: 'Other', score: 0, insight: 'other' },
    ],
  },
  {
    id: 2,
    category: 'Website',
    icon: <Globe className="w-6 h-6" />,
    question: 'How would you rate your current website?',
    options: [
      { text: 'Don\'t have a website yet', score: 0, insight: 'Need website development' },
      { text: 'Outdated (3+ years old)', score: 2, insight: 'Website redesign recommended' },
      { text: 'Decent but needs improvements', score: 5, insight: 'Website optimization needed' },
      { text: 'Modern and functional', score: 8, insight: 'Good foundation' },
      { text: 'Excellent, cutting-edge', score: 10, insight: 'Strong digital presence' },
    ],
  },
  {
    id: 3,
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    question: 'Is your website mobile-responsive?',
    options: [
      { text: 'No mobile version', score: 0, insight: 'Mobile optimization critical' },
      { text: 'Partially responsive', score: 3, insight: 'Mobile UX needs work' },
      { text: 'Fully responsive', score: 7, insight: 'Good mobile experience' },
      { text: 'Mobile-first design', score: 10, insight: 'Excellent mobile strategy' },
      { text: 'Not sure', score: 1, insight: 'Audit needed' },
    ],
  },
  {
    id: 4,
    category: 'SEO',
    icon: <Search className="w-6 h-6" />,
    question: 'How visible is your business in search engines?',
    options: [
      { text: 'Can\'t find us on Google', score: 0, insight: 'SEO strategy needed urgently' },
      { text: 'Only when searching exact business name', score: 2, insight: 'Basic SEO required' },
      { text: 'Appear for some relevant keywords', score: 5, insight: 'SEO optimization recommended' },
      { text: 'Top 3 for main keywords', score: 8, insight: 'Strong SEO performance' },
      { text: 'Dominating search results', score: 10, insight: 'Excellent SEO' },
    ],
  },
  {
    id: 5,
    category: 'Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    question: 'Do you track website analytics?',
    options: [
      { text: 'No tracking at all', score: 0, insight: 'Analytics setup critical' },
      { text: 'Basic tracking (Google Analytics)', score: 5, insight: 'Need advanced analytics' },
      { text: 'Multiple tools, regular monitoring', score: 8, insight: 'Good data practice' },
      { text: 'Advanced analytics with dashboards', score: 10, insight: 'Data-driven excellence' },
    ],
  },
  {
    id: 6,
    category: 'Social Media',
    icon: <Users className="w-6 h-6" />,
    question: 'How active is your social media presence?',
    options: [
      { text: 'No social media', score: 0, insight: 'Social media strategy needed' },
      { text: 'Have accounts but rarely post', score: 2, insight: 'Content strategy required' },
      { text: 'Active on 1-2 platforms', score: 5, insight: 'Expand social presence' },
      { text: 'Consistent multi-platform presence', score: 8, insight: 'Strong social engagement' },
      { text: 'Viral content & high engagement', score: 10, insight: 'Social media mastery' },
    ],
  },
  {
    id: 7,
    category: 'E-commerce',
    icon: <ShoppingCart className="w-6 h-6" />,
    question: 'Can customers purchase/book online?',
    options: [
      { text: 'No online transactions', score: 0, insight: 'E-commerce opportunity' },
      { text: 'Basic contact form only', score: 2, insight: 'Need online booking/sales' },
      { text: 'Online booking/quotes', score: 5, insight: 'Good foundation' },
      { text: 'Full e-commerce with payments', score: 10, insight: 'Complete digital sales' },
      { text: 'Not applicable to my business', score: 5, insight: 'Service-based model' },
    ],
  },
  {
    id: 8,
    category: 'Email Marketing',
    icon: <Mail className="w-6 h-6" />,
    question: 'Do you have an email marketing strategy?',
    options: [
      { text: 'No email marketing', score: 0, insight: 'Email strategy needed' },
      { text: 'Occasional ad-hoc emails', score: 3, insight: 'Automation recommended' },
      { text: 'Regular newsletters', score: 6, insight: 'Good engagement' },
      { text: 'Automated campaigns & segmentation', score: 10, insight: 'Advanced email marketing' },
    ],
  },
  {
    id: 9,
    category: 'Content',
    icon: <TrendingUp className="w-6 h-6" />,
    question: 'How often do you create new content?',
    options: [
      { text: 'Never or very rarely', score: 0, insight: 'Content strategy critical' },
      { text: 'A few times a year', score: 2, insight: 'Increase content frequency' },
      { text: 'Monthly', score: 5, insight: 'Good content rhythm' },
      { text: 'Weekly or more', score: 8, insight: 'Strong content engine' },
      { text: 'Daily content creation', score: 10, insight: 'Content excellence' },
    ],
  },
  {
    id: 10,
    category: 'Overall',
    icon: <Award className="w-6 h-6" />,
    question: 'What\'s your biggest digital challenge?',
    options: [
      { text: 'Not enough website traffic', score: 0, insight: 'SEO' },
      { text: 'Low conversion rates', score: 0, insight: 'CRO' },
      { text: 'Poor mobile experience', score: 0, insight: 'Mobile-Optimization' },
      { text: 'Limited online visibility', score: 0, insight: 'Digital-Marketing' },
      { text: 'Outdated technology', score: 0, insight: 'Web-Development' },
    ],
  },
];

export default function DigitalMaturityClient() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [industry, setIndustry] = useState('');
  const [interest, setInterest] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize visitor profile
    initVisitorProfile();
  }, []);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const isLastQuestion = currentStep === questions.length - 1;
  const showContactForm = currentStep === questions.length;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentStep]: optionIndex };
    setAnswers(newAnswers);

    // Track industry selection
    if (currentStep === 0) {
      const selectedIndustry = questions[0].options[optionIndex].insight;
      setIndustry(selectedIndustry);
      updateIndustry(selectedIndustry);
    }

    // Track interest from last question
    if (currentStep === 9) {
      const selectedInterest = questions[9].options[optionIndex].insight;
      setInterest(selectedInterest);
      addInterest(selectedInterest);
    }

    // Auto-advance after selection (except last question)
    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(questions.length); // Show contact form
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach((question, index) => {
      if (index === 0 || index === 9) return; // Skip industry and challenge questions

      const answerIndex = answers[index];
      if (answerIndex !== undefined) {
        totalScore += question.options[answerIndex].score;
        maxScore += 10;
      }
    });

    return Math.round((totalScore / maxScore) * 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const score = calculateScore();
    
    try {
      // Save assessment completion
      completeAssessment(score);

      // Send results via email
      const response = await fetch('/api/submit-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          industry,
          interest,
          score,
          answers,
        }),
      });

      if (response.ok) {
        // Redirect to results page with score
        router.push(`/digital-maturity/results?score=${score}&email=${formData.email}`);
      } else {
        alert('Failed to submit assessment. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit assessment. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#1a3a5c] to-[#0A2540] py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Digital Maturity Assessment
          </h1>
          <p className="text-xl text-gray-300">
            Discover your digital strengths and opportunities in just 2 minutes
          </p>
        </motion.div>

        {/* Progress Bar */}
        {currentStep < questions.length && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-[#F15924] font-semibold">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F15924] to-[#ff7849]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!showContactForm ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {/* Question */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#F15924]/10 rounded-lg text-[#F15924]">
                    {currentQuestion.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#F15924] uppercase tracking-wide">
                    {currentQuestion.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      answers[currentStep] === index
                        ? 'border-[#F15924] bg-[#F15924]/5 shadow-lg'
                        : 'border-gray-200 hover:border-[#F15924]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-[#0A2540]">
                        {option.text}
                      </span>
                      {answers[currentStep] === index && (
                        <Check className="w-6 h-6 text-[#F15924]" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Navigation */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-8 flex items-center gap-2 text-gray-600 hover:text-[#F15924] transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous Question
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-2">
                  Assessment Complete!
                </h2>
                <p className="text-gray-600">
                  Get your personalized digital maturity report instantly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15924] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15924] focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F15924] focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#F15924] to-[#ff7849] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Getting Your Results...'
                  ) : (
                    <>
                      Get My Digital Maturity Report
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your results will be sent to your email instantly
                </p>
              </form>

              <button
                onClick={handleBack}
                className="mt-6 flex items-center gap-2 text-gray-600 hover:text-[#F15924] transition-colors mx-auto"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
