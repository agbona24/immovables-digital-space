'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Target,
  Building2,
  Sparkles,
  CheckCircle,
  Info
} from 'lucide-react';

const industries = [
  { value: 'ecommerce', label: 'E-commerce / Retail', minPercent: 8, maxPercent: 12 },
  { value: 'realestate', label: 'Real Estate', minPercent: 5, maxPercent: 10 },
  { value: 'professional', label: 'Professional Services', minPercent: 6, maxPercent: 10 },
  { value: 'healthcare', label: 'Healthcare / Wellness', minPercent: 5, maxPercent: 8 },
  { value: 'hospitality', label: 'Hospitality / Restaurants', minPercent: 8, maxPercent: 15 },
  { value: 'education', label: 'Education / Training', minPercent: 5, maxPercent: 10 },
  { value: 'tech', label: 'Technology / SaaS', minPercent: 10, maxPercent: 20 },
  { value: 'manufacturing', label: 'Manufacturing / B2B', minPercent: 3, maxPercent: 6 },
];

const businessStages = [
  { value: 'startup', label: 'Startup (0-2 years)', multiplier: 1.5 },
  { value: 'growing', label: 'Growing (2-5 years)', multiplier: 1.2 },
  { value: 'established', label: 'Established (5+ years)', multiplier: 1.0 },
];

const goals = [
  { value: 'awareness', label: 'Brand Awareness', allocation: { content: 35, social: 30, ads: 20, seo: 15 } },
  { value: 'leads', label: 'Lead Generation', allocation: { content: 20, social: 20, ads: 40, seo: 20 } },
  { value: 'sales', label: 'Direct Sales', allocation: { content: 15, social: 15, ads: 50, seo: 20 } },
  { value: 'retention', label: 'Customer Retention', allocation: { content: 40, social: 25, ads: 15, seo: 20 } },
];

export default function MarketingBudgetCalculator() {
  const [revenue, setRevenue] = useState<number>(10000000);
  const [industry, setIndustry] = useState<string>('professional');
  const [stage, setStage] = useState<string>('growing');
  const [goal, setGoal] = useState<string>('leads');
  const [showResults, setShowResults] = useState(false);

  const selectedIndustry = industries.find(i => i.value === industry)!;
  const selectedStage = businessStages.find(s => s.value === stage)!;
  const selectedGoal = goals.find(g => g.value === goal)!;

  const basePercent = (selectedIndustry.minPercent + selectedIndustry.maxPercent) / 2;
  const adjustedPercent = basePercent * selectedStage.multiplier;
  
  const monthlyBudget = Math.round((revenue * (adjustedPercent / 100)) / 12);
  const annualBudget = monthlyBudget * 12;

  const allocation = {
    content: Math.round(monthlyBudget * (selectedGoal.allocation.content / 100)),
    social: Math.round(monthlyBudget * (selectedGoal.allocation.social / 100)),
    ads: Math.round(monthlyBudget * (selectedGoal.allocation.ads / 100)),
    seo: Math.round(monthlyBudget * (selectedGoal.allocation.seo / 100)),
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCalculate = () => {
    setShowResults(true);
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0d2d4d] to-[#0A2540] py-20 px-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F15924]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full mb-4">
            <Calculator size={18} />
            <span className="text-sm font-semibold">Marketing Budget Calculator</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Much Should You Spend on Marketing?
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get a data-driven marketing budget recommendation based on your industry, business stage, and goals.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8"
        >
          <div className="space-y-8">
            {/* Annual Revenue */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                <TrendingUp className="text-blue-400 w-5 h-5" />
                Annual Revenue (₦)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <input
                type="range"
                min="1000000"
                max="100000000"
                step="1000000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full mt-3 accent-blue-500"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>₦1M</span>
                <span>₦100M</span>
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                <Building2 className="text-blue-400 w-5 h-5" />
                Industry
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.value}
                    onClick={() => setIndustry(ind.value)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      industry === ind.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Business Stage */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                <Sparkles className="text-blue-400 w-5 h-5" />
                Business Stage
              </label>
              <div className="grid grid-cols-3 gap-3">
                {businessStages.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setStage(s.value)}
                    className={`p-4 rounded-xl text-sm font-medium transition-all ${
                      stage === s.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                <Target className="text-blue-400 w-5 h-5" />
                Primary Marketing Goal
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    className={`p-4 rounded-xl text-sm font-medium transition-all ${
                      goal === g.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2"
          >
            Calculate My Budget
            <Calculator size={20} />
          </button>
        </motion.div>

        {/* Results */}
        {showResults && (
          <motion.div
            id="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Recommended Budget */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-center">
              <h2 className="text-white text-xl mb-2">Recommended Monthly Budget</h2>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="text-5xl md:text-6xl font-black text-white"
              >
                {formatCurrency(monthlyBudget)}
              </motion.p>
              <p className="text-white/80 mt-2">
                {formatCurrency(annualBudget)} annually ({adjustedPercent.toFixed(1)}% of revenue)
              </p>
            </div>

            {/* Budget Range Info */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-3">
                <Info className="text-blue-400 w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-1">Industry Benchmark</h3>
                  <p className="text-gray-400 text-sm">
                    {selectedIndustry.label} businesses typically spend {selectedIndustry.minPercent}%-{selectedIndustry.maxPercent}% of revenue on marketing.
                    {selectedStage.multiplier > 1 && " Growing businesses often invest more to capture market share."}
                  </p>
                </div>
              </div>
            </div>

            {/* Budget Allocation */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Recommended Budget Allocation</h3>
              <p className="text-gray-400 text-sm mb-4">
                Based on your goal: <span className="text-blue-400 font-medium">{selectedGoal.label}</span>
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Content Marketing', amount: allocation.content, percent: selectedGoal.allocation.content, color: 'from-purple-500 to-pink-500' },
                  { name: 'Social Media', amount: allocation.social, percent: selectedGoal.allocation.social, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Paid Advertising', amount: allocation.ads, percent: selectedGoal.allocation.ads, color: 'from-orange-500 to-red-500' },
                  { name: 'SEO & Organic', amount: allocation.seo, percent: selectedGoal.allocation.seo, color: 'from-green-500 to-emerald-500' },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-white font-bold">{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <p className="text-sm text-gray-400">{formatCurrency(item.amount)}/month</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What You Can Achieve */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">What This Budget Can Achieve</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Professional social media management",
                  "Targeted paid advertising campaigns",
                  "SEO optimization for organic growth",
                  "Quality content creation",
                  "Email marketing automation",
                  "Analytics and performance tracking"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#F15924]/20 border border-[#F15924]/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Help Maximizing Your Marketing Budget?
              </h3>
              <p className="text-gray-300 mb-6">
                We&apos;ll create a custom marketing strategy that delivers results within your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 bg-[#F15924] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d94d1a] transition-colors"
                >
                  Get Free Marketing Audit
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
                >
                  View Our Packages
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
