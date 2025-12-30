"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AboutHeroVisual() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[450px] bg-[#F9F7F2] rounded-3xl" />;

  const keywords = [
    { text: "Innovation", x: -140, y: -90, size: "text-lg", color: "text-[#D4AF37]", delay: 0 },
    { text: "Scalability", x: 160, y: -70, size: "text-base", color: "text-gray-600", delay: 1 },
    { text: "Security", x: -100, y: 110, size: "text-base", color: "text-gray-600", delay: 2 },
    { text: "Performance", x: 120, y: 100, size: "text-lg", color: "text-[#1A1A1A]", delay: 0.5 },
    { text: "User Centric", x: 0, y: -140, size: "text-xl", color: "text-[#1A1A1A] font-bold", delay: 1.5 },
    { text: "Global", x: -180, y: 10, size: "text-sm", color: "text-gray-400", delay: 2.5 },
    { text: "Mobile First", x: 180, y: 30, size: "text-sm", color: "text-gray-400", delay: 0.8 },
    { text: "AI Ready", x: 0, y: 160, size: "text-base", color: "text-[#D4AF37]", delay: 1.8 },
  ];

  return (
    <div className="h-[450px] rounded-3xl relative overflow-hidden bg-[#F9F7F2] shadow-xl border border-white/50 group">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Central Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full opacity-10 blur-2xl animate-pulse" />
          <div className="w-24 h-24 border border-[#D4AF37]/30 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm relative z-10">
            <img src="/logo.svg" alt="Kainuo" className="w-12 h-auto" />
          </div>
          
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] border border-dashed border-gray-300 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-40px] border border-dotted border-gray-200 rounded-full"
          />
        </motion.div>
      </div>

      {/* Floating Animated Keywords */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {keywords.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: item.x, 
              y: item.y,
            }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="absolute"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: item.delay
              }}
              className={`flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-white/50 ${item.color} ${item.size} whitespace-nowrap hover:scale-110 transition-transform cursor-pointer pointer-events-auto`}
            >
              {item.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

