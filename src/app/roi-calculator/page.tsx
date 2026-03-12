'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function ROICalculator() {
  const [currentLeads, setCurrentLeads] = useState<number>(50);
  const [conversionRate, setConversionRate] = useState<number>(5);
  const [averageValue, setAverageValue] = useState<number>(500000);
  const [hoursWasted, setHoursWasted] = useState<number>(20);
  const [hourlyRate, setHourlyRate] = useState<number>(5000);
  const [showResults, setShowResults] = useState(false);

  // Calculations with AI/automation improvements
  const currentRevenue = Math.round((currentLeads * (conversionRate / 100)) * averageValue);
  const improvedConversionRate = Math.min(conversionRate * 2, 30); // Double conversion, max 30%
  const improvedLeads = Math.round(currentLeads * 1.5); // 50% more leads
  const improvedRevenue = Math.round((improvedLeads * (improvedConversionRate / 100)) * averageValue);
  const revenueIncrease = improvedRevenue - currentRevenue;
  
  const currentWastedCost = hoursWasted * hourlyRate * 4; // Monthly
  const timeSaved = Math.round(hoursWasted * 0.7); // 70% time saved
  const moneySaved = timeSaved * hourlyRate * 4;
  
  const totalROI = revenueIncrease + moneySaved;
  const annualROI = totalROI * 12;

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
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0d2d4d] to-[#0A2540] py-20 px-4">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F15924]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-4">
            <Calculator size={18} />
            <span className="text-sm font-semibold">ROI Calculator</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your AI & Digital ROI
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            See how much revenue you could generate and money you could save with AI automation and digital solutions.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="text-[#F15924]" />
            Your Current Situation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Leads */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Monthly Leads/Inquiries
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F15924]/50"
                />
                <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <input
                type="range"
                min="10"
                max="500"
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full mt-2 accent-[#F15924]"
              />
            </div>

            {/* Conversion Rate */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Conversion Rate (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F15924]/50"
                />
                <TrendingUp className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full mt-2 accent-[#F15924]"
              />
            </div>

            {/* Average Sale Value */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Average Sale/Contract Value (₦)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={averageValue}
                  onChange={(e) => setAverageValue(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F15924]/50"
                />
                <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={averageValue}
                onChange={(e) => setAverageValue(Number(e.target.value))}
                className="w-full mt-2 accent-[#F15924]"
              />
            </div>

            {/* Hours on Repetitive Tasks */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Hours/Week on Repetitive Tasks
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={hoursWasted}
                  onChange={(e) => setHoursWasted(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F15924]/50"
                />
                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={hoursWasted}
                onChange={(e) => setHoursWasted(Number(e.target.value))}
                className="w-full mt-2 accent-[#F15924]"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-8 bg-gradient-to-r from-[#F15924] to-[#ff7849] text-white py-4 rounded-xl font-bold hover:from-[#d94d1a] hover:to-[#e86a3d] transition-all flex items-center justify-center gap-2"
          >
            Calculate My ROI
            <Sparkles size={20} />
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
            {/* Summary Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-center">
              <h2 className="text-white text-xl mb-2">Your Potential Annual ROI</h2>
              <motion.p
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.3 }}
                className="text-5xl md:text-6xl font-black text-white"
              >
                {formatCurrency(annualROI)}
              </motion.p>
              <p className="text-white/80 mt-2">per year with AI & digital solutions</p>
            </div>

            {/* Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Revenue Increase */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Revenue Increase</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Monthly Revenue</span>
                    <span className="text-white font-medium">{formatCurrency(currentRevenue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Improved Monthly Revenue</span>
                    <span className="text-green-400 font-medium">{formatCurrency(improvedRevenue)}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Monthly Increase</span>
                    <span className="text-green-400 font-bold">{formatCurrency(revenueIncrease)}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <p className="text-sm text-blue-300">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Based on 50% more leads & 2x conversion rate
                  </p>
                </div>
              </motion.div>

              {/* Time & Cost Savings */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Time & Cost Savings</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Time Wasted/Week</span>
                    <span className="text-white font-medium">{hoursWasted} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time Saved/Week</span>
                    <span className="text-green-400 font-medium">{timeSaved} hours</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Monthly Savings</span>
                    <span className="text-green-400 font-bold">{formatCurrency(moneySaved)}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-sm text-purple-300">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    AI automation reduces manual work by 70%
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#F15924]/20 border border-[#F15924]/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Achieve These Results?
              </h3>
              <p className="text-gray-300 mb-6">
                Get a free audit and custom strategy to maximize your ROI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 bg-[#F15924] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d94d1a] transition-colors"
                >
                  Get Free Audit
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
