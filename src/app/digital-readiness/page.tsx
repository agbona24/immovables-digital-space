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
  TrendingUp,
  Bot,
  Search,
  Share2,
  Shield,
  RotateCcw,
  AlertCircle,
  Zap
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  category: string;
  options: {
    label: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Do you have a professional website?",
    category: "Website",
    options: [
      { label: "No website at all", score: 0 },
      { label: "Basic website, needs improvement", score: 1 },
      { label: "Good website but outdated", score: 2 },
      { label: "Modern, mobile-responsive website", score: 3 },
    ]
  },
  {
    id: 2,
    question: "How do customers find your business online?",
    category: "Digital Presence",
    options: [
      { label: "They don't - mostly word of mouth", score: 0 },
      { label: "Basic Google listing only", score: 1 },
      { label: "Social media and Google", score: 2 },
      { label: "Multiple channels with good visibility", score: 3 },
    ]
  },
  {
    id: 3,
    question: "Are you using any form of digital marketing?",
    category: "Marketing",
    options: [
      { label: "No digital marketing at all", score: 0 },
      { label: "Occasional social media posts", score: 1 },
      { label: "Regular social media + some ads", score: 2 },
      { label: "Full digital marketing strategy", score: 3 },
    ]
  },
  {
    id: 4,
    question: "How do you handle customer inquiries?",
    category: "Customer Service",
    options: [
      { label: "Manual calls and WhatsApp only", score: 0 },
      { label: "Email + WhatsApp", score: 1 },
      { label: "Website forms + social DMs", score: 2 },
      { label: "Automated responses + CRM system", score: 3 },
    ]
  },
  {
    id: 5,
    question: "Do you use any automation or AI tools?",
    category: "Automation",
    options: [
      { label: "No automation at all", score: 0 },
      { label: "Basic email autoresponders", score: 1 },
      { label: "Some automation (scheduling, etc.)", score: 2 },
      { label: "AI chatbots, workflow automation", score: 3 },
    ]
  },
  {
    id: 6,
    question: "How do you track your business performance?",
    category: "Analytics",
    options: [
      { label: "No tracking - just gut feeling", score: 0 },
      { label: "Basic sales records", score: 1 },
      { label: "Some analytics and reporting", score: 2 },
      { label: "Comprehensive dashboards & KPIs", score: 3 },
    ]
  },
  {
    id: 7,
    question: "Is your brand consistent across all platforms?",
    category: "Branding",
    options: [
      { label: "No consistent branding", score: 0 },
      { label: "Have a logo, nothing else", score: 1 },
      { label: "Logo + some brand colors", score: 2 },
      { label: "Full brand guidelines & consistency", score: 3 },
    ]
  },
  {
    id: 8,
    question: "How secure is your digital infrastructure?",
    category: "Security",
    options: [
      { label: "Not sure / No security measures", score: 0 },
      { label: "Basic password protection", score: 1 },
      { label: "SSL + basic security", score: 2 },
      { label: "Comprehensive security measures", score: 3 },
    ]
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Website": Globe,
  "Digital Presence": Search,
  "Marketing": TrendingUp,
  "Customer Service": Share2,
  "Automation": Bot,
  "Analytics": TrendingUp,
  "Branding": Sparkles,
  "Security": Shield,
};

const getScoreLevel = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return { level: 'Advanced', color: 'from-green-500 to-emerald-500', text: 'text-green-400', bg: 'bg-green-500/20' };
  if (percentage >= 60) return { level: 'Intermediate', color: 'from-blue-500 to-cyan-500', text: 'text-blue-400', bg: 'bg-blue-500/20' };
  if (percentage >= 40) return { level: 'Developing', color: 'from-yellow-500 to-orange-500', text: 'text-yellow-400', bg: 'bg-yellow-500/20' };
  return { level: 'Beginner', color: 'from-red-500 to-orange-500', text: 'text-red-400', bg: 'bg-red-500/20' };
};

export default function DigitalReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (score: number) => {
    setSelectedOption(score);
    setAnswers({ ...answers, [currentQuestion]: score });

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 300);
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
    setShowResults(false);
    setSelectedOption(null);
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const scoreLevel = getScoreLevel(totalScore, maxScore);
  const percentage = Math.round((totalScore / maxScore) * 100);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Get weak areas (scores 0-1)
  const getWeakAreas = () => {
    return questions.filter((q, i) => answers[i] !== undefined && answers[i] <= 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0d2d4d] to-[#0A2540] py-20 px-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full mb-4">
            <Zap size={18} />
            <span className="text-sm font-semibold">Digital Readiness Quiz</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Ready Is Your Business for Digital Growth?
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Take this 2-minute quiz to assess your digital readiness and get personalized recommendations.
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
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
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
                <div className="flex items-center gap-2 text-purple-400 text-sm mb-4">
                  {(() => {
                    const Icon = categoryIcons[questions[currentQuestion].category] || Globe;
                    return <Icon size={16} />;
                  })()}
                  <span>{questions[currentQuestion].category}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-8">
                  {questions[currentQuestion].question}
                </h2>

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isSelected = selectedOption === option.score;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${
                          isSelected 
                            ? 'bg-purple-500 text-white scale-[0.98]' 
                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: isSelected ? 0.98 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-lg">{option.label}</span>
                        {isSelected && <CheckCircle className="w-5 h-5 ml-auto" />}
                      </motion.button>
                    );
                  })}
                </div>

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
            {/* Score Card */}
            <div className={`bg-gradient-to-br ${scoreLevel.color} rounded-3xl p-8 text-center`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-5xl font-black text-white">{percentage}%</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {scoreLevel.level} Level
              </h2>
              <p className="text-white/80">
                Your Digital Readiness Score: {totalScore}/{maxScore} points
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Score Breakdown</h3>
              <div className="space-y-4">
                {questions.map((q, index) => {
                  const score = answers[index] || 0;
                  const Icon = categoryIcons[q.category] || Globe;
                  const scoreWidth = (score / 3) * 100;
                  
                  return (
                    <div key={q.id} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{q.category}</span>
                          <span className={score <= 1 ? 'text-red-400' : 'text-green-400'}>{score}/3</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${score <= 1 ? 'bg-red-500' : score === 2 ? 'bg-yellow-500' : 'bg-green-500'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${scoreWidth}%` }}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weak Areas */}
            {getWeakAreas().length > 0 && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="font-bold">Areas Needing Improvement</h3>
                </div>
                <div className="space-y-2">
                  {getWeakAreas().map((area) => (
                    <div key={area.id} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      <span>{area.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-[#F15924]/20 border border-[#F15924]/30 rounded-2xl p-8 text-center">
              <Sparkles className="w-10 h-10 text-[#F15924] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Your Personalized Roadmap
              </h3>
              <p className="text-gray-300 mb-6">
                Our experts can help you address these gaps and build a strong digital foundation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 bg-[#F15924] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d94d1a] transition-colors"
                >
                  Get Free Digital Audit
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/solution-finder"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
                >
                  Find Your Solution
                </Link>
              </div>
            </div>

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
