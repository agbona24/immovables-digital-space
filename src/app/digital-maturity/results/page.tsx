'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Trophy, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Star,
  Rocket,
  Target
} from 'lucide-react';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = parseInt(searchParams.get('score') || '0');
  const email = searchParams.get('email') || '';

  const [maturity, setMaturity] = useState({
    level: '',
    color: '',
    emoji: '',
    message: '',
    priorities: [] as string[],
  });

  useEffect(() => {
    if (!score) {
      router.push('/digital-maturity');
      return;
    }

    // Calculate maturity level
    if (score < 30) {
      setMaturity({
        level: 'Digital Beginner',
        color: '#ef4444',
        emoji: '🌱',
        message: 'You\'re just starting your digital journey. There\'s huge potential for growth!',
        priorities: [
          'Build or redesign your website',
          'Set up Google Analytics',
          'Create social media presence',
          'Start basic SEO optimization',
        ],
      });
    } else if (score < 50) {
      setMaturity({
        level: 'Digital Explorer',
        color: '#f59e0b',
        emoji: '🚀',
        message: 'You have the basics covered but there\'s room for significant improvement.',
        priorities: [
          'Optimize mobile experience',
          'Improve SEO strategy',
          'Launch email marketing campaigns',
          'Enhance website conversion rates',
        ],
      });
    } else if (score < 75) {
      setMaturity({
        level: 'Digital Achiever',
        color: '#3b82f6',
        emoji: '⭐',
        message: 'You\'re doing well! Let\'s take your digital presence to the next level.',
        priorities: [
          'Implement advanced analytics',
          'Create content marketing strategy',
          'A/B test conversion funnels',
          'Explore AI-powered solutions',
        ],
      });
    } else {
      setMaturity({
        level: 'Digital Leader',
        color: '#10b981',
        emoji: '🏆',
        message: 'Excellent! You\'re ahead of the curve in digital maturity.',
        priorities: [
          'Maintain competitive advantage',
          'Test emerging technologies',
          'Scale successful strategies',
          'Mentor others in your industry',
        ],
      });
    }
  }, [score, router]);

  if (!maturity.level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading your results...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#1a3a5c] to-[#0A2540] py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Celebration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center mb-12"
        >
          <div className="text-8xl mb-4">{maturity.emoji}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Your Digital Maturity Score
          </h1>
        </motion.div>

        {/* Score Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mb-8"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="text-9xl font-bold mb-4"
              style={{ color: maturity.color }}
            >
              {score}%
            </motion.div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
              {maturity.level}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {maturity.message}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ delay: 0.6, duration: 1 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${maturity.color}, ${maturity.color}dd)` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-8">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-800 font-medium">
                  Full Report Sent!
                </p>
                <p className="text-green-700 text-sm">
                  A detailed analysis has been sent to <strong>{email}</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Priorities */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl p-12 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-[#F15924]" />
            <h3 className="text-3xl font-bold text-[#0A2540]">
              Your Top Priorities
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {maturity.priorities.map((priority, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F15924] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{priority}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#F15924] to-[#ff7849] rounded-3xl shadow-2xl p-12 text-center text-white"
        >
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Improve Your Score?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a customized action plan to boost your digital maturity 
            and grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F15924] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#F15924] transition-all"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-white">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Join 100+ businesses we've helped improve their digital presence
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] via-[#1a3a5c] to-[#0A2540]">
        <div className="text-white text-xl">Loading your results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
