"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeAreVisual() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] bg-gray-100 rounded-2xl" />;

  return (
    <div className="h-[400px] rounded-2xl relative overflow-hidden group bg-[#1A1A1A]">
      {/* Abstract Geometric Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#D4AF37] opacity-20"
          style={{
            width: 100 + i * 100,
            height: 100 + i * 100,
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: ['-50%', '-48%', '-52%', '-50%'],
            y: ['-50%', '-52%', '-48%', '-50%'],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Central Brand Mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="w-32 h-32 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center">
            <div className="w-24 h-24 border border-[#D4AF37] flex items-center justify-center">
              <span className="font-serif text-4xl text-[#D4AF37] font-bold -rotate-45">K</span>
            </div>
          </div>
          
          {/* Pulsing light effect */}
          <motion.div 
            className="absolute inset-0 bg-[#D4AF37] rounded-full blur-3xl opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Elegant Bottom Label */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-4">
        <div className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-medium">
          Digital Craftsmanship
        </div>
        <div className="w-12 h-[1px] bg-[#D4AF37]" />
      </div>
      
      {/* Interactive Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
}

