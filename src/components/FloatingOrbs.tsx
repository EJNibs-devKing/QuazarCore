'use client';

import { useEffect, useState } from 'react';

interface Orb {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    // Generate floating orbs
    const generateOrbs = () => {
      const colors = [
        'rgba(79, 195, 247, 0.3)', // Cyan
        'rgba(66, 165, 245, 0.25)', // Blue
        'rgba(100, 181, 246, 0.2)', // Light Blue
        'rgba(129, 212, 250, 0.15)', // Very Light Blue
      ];

      const newOrbs: Orb[] = [];
      for (let i = 0; i < 15; i++) {
        newOrbs.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: 40 + Math.random() * 80, // 40-120px
          duration: 20 + Math.random() * 30, // 20-50s
          delay: Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setOrbs(newOrbs);
    };

    generateOrbs();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-2xl animate-float-slow"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animation: `floatOrb ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
