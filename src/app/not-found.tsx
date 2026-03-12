'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search, ArrowLeft, MessageCircle, Compass } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Compass },
    { name: 'Free Audit', href: '/free-audit', icon: Search },
    { name: 'Contact Us', href: '/contact', icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0d2d4d] to-[#0A2540] flex items-center justify-center px-4 py-20">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F15924]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#F15924] to-[#ff7849] leading-none">
              404
            </span>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -right-4"
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for seems to have wandered off into the digital void. Let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {popularPages.map((page, index) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon className="w-6 h-6 text-[#F15924] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">{page.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#F15924] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d94d1a] transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Fun fact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-gray-500 text-sm"
        >
          💡 Fun fact: The first 404 error was named after a room (Room 404) at CERN where the web was invented.
        </motion.p>
      </div>
    </div>
  );
}
