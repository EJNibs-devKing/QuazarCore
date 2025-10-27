'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Our Origin', href: '/company' },
  { name: 'Industries & Solutions', href: '/industries' },
  { name: 'Clouds & Tools', href: '/clouds-tools' },
  { name: 'Services', href: '/services' },
  { name: 'Insights', href: '/insights' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - matching homepage style */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group relative">
            <motion.img
              src="https://ugc.same-assets.com/xFdY_imh3EKlXBTQVjSqHczkLwnUdkIm.png"
              alt="QuazarCore Logo"
              className="w-8 h-8 md:w-10 md:h-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative text-2xl md:text-3xl font-bold glow-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                QuazarCore
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300 font-medium group"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      backgroundPosition: hoveredItem === item.name ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                    }}
                    transition={{ duration: 3, repeat: hoveredItem === item.name ? Infinity : 0 }}
                    style={{ backgroundSize: '200% 100%' }}
                  />

                  {/* Text with glow effect */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] whitespace-nowrap">
                    {item.name}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredItem === item.name ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Corner accents */}
                  {hoveredItem === item.name && (
                    <>
                      <motion.div
                        className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </>
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Beam Us Up</span>
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.svg
                key={mobileMenuOpen ? 'close' : 'menu'}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 space-y-4 overflow-hidden bg-black/95 backdrop-blur-md rounded-lg px-2"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-blue-500/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beam Us Up
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
