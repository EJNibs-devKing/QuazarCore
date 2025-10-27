'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState, useRef } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  height?: 'screen' | 'half' | 'tall';
  overlay?: 'dark' | 'medium' | 'light' | 'none';
}

export default function ParallaxSection({
  backgroundImage,
  children,
  height = 'screen',
  overlay = 'light'
}: ParallaxSectionProps) {
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // TRUE PARALLAX EFFECT - Background moves slower than scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Background moves at 50% speed (slower than scroll)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  // Background also scales slightly for depth
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, [backgroundImage]);

  const heightClass = {
    screen: 'h-screen',
    half: 'h-[50vh]',
    tall: 'h-[80vh]'
  }[height];

  // Much lighter overlays to show images better
  const overlayClass = {
    dark: 'bg-gradient-to-b from-black/40 via-black/20 to-black/40',
    medium: 'bg-gradient-to-b from-black/30 via-black/10 to-black/30',
    light: 'bg-gradient-to-b from-black/20 via-transparent to-black/20',
    none: 'bg-transparent'
  }[overlay];

  return (
    <section
      ref={sectionRef}
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden group`}
    >
      {/* TRUE PARALLAX Background - Moves at different speed */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          y: backgroundY,
          scale: backgroundScale,
        }}
      />

      {/* Overlay - much lighter now */}
      <div className={`absolute inset-0 ${overlayClass} transition-opacity duration-500 group-hover:opacity-70`} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-twinkle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
