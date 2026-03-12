'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Home, Briefcase, Settings, Mail, 
  LayoutGrid, Sparkles, Building2, FolderOpen, 
  Package, BookOpen, Info, ChevronRight, Phone
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Settings },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Sparkles },
  { name: 'Industries', href: '/industries', icon: Building2 },
  { name: 'Portfolio', href: '/portfolio', icon: FolderOpen },
  { name: 'Packages', href: '/packages', icon: Package },
  { name: 'Insights', href: '/insights', icon: BookOpen },
];

// Bottom nav items for mobile (5 max for native feel)
const bottomNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Portfolio', href: '/portfolio', icon: LayoutGrid },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A2540] shadow-lg' : 'bg-[#0A2540]/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="IDS Logo" 
                width={50} 
                height={50}
                className="h-10 w-auto lg:h-12"
              />
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg">IMMOVABLES</span>
                <span className="text-[#F15924] font-light text-sm block -mt-1">DIGITAL SPACE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    isActive(item.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F15924] transform transition-transform origin-left ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/free-audit"
                className="text-[#F15924] hover:text-[#FF4924] font-medium text-sm transition-colors"
              >
                Free Audit
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-2.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu - Native App Style */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Slide-up Menu Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0A2540] rounded-t-3xl max-h-[85vh] overflow-hidden"
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 rounded-full bg-white/30" />
              </div>

              {/* Menu Header */}
              <div className="px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/logo.png" 
                    alt="IDS" 
                    width={40} 
                    height={40}
                    className="rounded-xl"
                  />
                  <div>
                    <h2 className="text-white font-bold text-lg">Navigate</h2>
                    <p className="text-gray-400 text-sm">Find your way</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Menu Items */}
              <div className="overflow-y-auto max-h-[55vh] overscroll-contain">
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all active:scale-[0.98] ${
                            active 
                              ? 'bg-[#F15924] text-white' 
                              : 'text-gray-300 hover:bg-white/5 active:bg-white/10'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            active ? 'bg-white/20' : 'bg-white/5'
                          }`}>
                            <Icon size={20} />
                          </div>
                          <span className="font-medium text-base flex-1">{item.name}</span>
                          <ChevronRight size={18} className="text-gray-500" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="px-4 pb-4">
                  <div className="p-4 bg-gradient-to-r from-[#F15924]/20 to-[#FF6B35]/10 rounded-2xl">
                    <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/free-audit"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-xl text-white font-medium text-sm active:scale-95 transition-transform"
                      >
                        <Sparkles size={16} />
                        Free Audit
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#F15924] rounded-xl text-white font-medium text-sm active:scale-95 transition-transform"
                      >
                        <Phone size={16} />
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar - Mobile Only (Native App Style) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        {/* Safe area gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540] to-transparent h-24 -translate-y-4" />
        
        <div className="relative bg-[#0A2540]/95 backdrop-blur-xl border-t border-white/10 pb-safe">
          <div className="flex items-center justify-around px-2 py-2">
            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col items-center gap-1 py-2 px-4 min-w-[60px] relative group"
                >
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-2 rounded-xl transition-colors ${
                      active ? 'bg-[#F15924]' : ''
                    }`}
                  >
                    <Icon size={22} className={active ? 'text-white' : 'text-gray-400'} />
                    {active && (
                      <motion.div
                        layoutId="bottomNavIndicator"
                        className="absolute inset-0 bg-[#F15924] rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                  <span className={`text-[10px] font-medium transition-colors ${
                    active ? 'text-[#F15924]' : 'text-gray-500'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
            
            {/* More Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col items-center gap-1 py-2 px-4 min-w-[60px]"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl"
              >
                <Menu size={22} className="text-gray-400" />
              </motion.div>
              <span className="text-[10px] font-medium text-gray-500">More</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
