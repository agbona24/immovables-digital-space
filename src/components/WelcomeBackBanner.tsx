'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import { 
  getVisitorProfile, 
  isReturningVisitor, 
  getDaysSinceFirstVisit,
  getRecommendations 
} from '@/lib/personalization';

export default function WelcomeBackBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Check if returning visitor
    if (isReturningVisitor()) {
      const visitorProfile = getVisitorProfile();
      setProfile(visitorProfile);
      setRecommendations(getRecommendations());
      
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !profile) return null;

  const daysSince = getDaysSinceFirstVisit();
  const visitMessage = profile.visitCount === 2 
    ? 'Welcome back!' 
    : `Welcome back for visit #${profile.visitCount}!`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed top-20 left-0 right-0 z-40 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#F15924] to-[#ff7849] rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 opacity-10">
                <Sparkles className="w-32 h-32" />
              </div>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{visitMessage}</h3>
                    <p className="text-white/90 text-sm">
                      {daysSince > 0 && `It's been ${daysSince} day${daysSince > 1 ? 's' : ''} since your last visit`}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personalized message */}
                  <div>
                    {profile.industry && (
                      <p className="mb-3">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {profile.industry.replace('-', ' ')} Industry
                        </span>
                      </p>
                    )}
                    
                    {profile.completedAssessment ? (
                      <div className="flex items-start gap-2">
                        <Award className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Assessment Completed!</p>
                          <p className="text-sm text-white/90">
                            Your digital maturity score: <strong>{profile.assessmentScore}%</strong>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Haven't taken the assessment yet?</p>
                          <p className="text-sm text-white/90">
                            Discover your digital maturity in just 2 minutes
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center">
                    {!profile.completedAssessment ? (
                      <Link
                        href="/digital-maturity"
                        onClick={handleClose}
                        className="w-full bg-white text-[#F15924] px-6 py-3 rounded-lg font-bold text-center hover:shadow-xl transition-all"
                      >
                        Take Free Assessment
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        onClick={handleClose}
                        className="w-full bg-white text-[#F15924] px-6 py-3 rounded-lg font-bold text-center hover:shadow-xl transition-all"
                      >
                        Let's Grow Your Business
                      </Link>
                    )}
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      <strong>For you:</strong> {recommendations[0]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
