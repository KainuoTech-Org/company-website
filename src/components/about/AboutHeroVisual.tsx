"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AboutHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const keywords = [
    { text: "Innovation", x: -120, y: -80, size: "text-lg", color: "text-[#D4AF37]" },
    { text: "Scalability", x: 140, y: -60, size: "text-base", color: "text-gray-600" },
    { text: "Security", x: -80, y: 90, size: "text-base", color: "text-gray-600" },
    { text: "Performance", x: 100, y: 80, size: "text-lg", color: "text-[#1A1A1A]" },
    { text: "User Centric", x: 0, y: -120, size: "text-xl", color: "text-[#1A1A1A] font-bold" },
    { text: "Global", x: -160, y: 0, size: "text-sm", color: "text-gray-400" },
    { text: "Mobile First", x: 160, y: 20, size: "text-sm", color: "text-gray-400" },
    { text: "AI Ready", x: 0, y: 140, size: "text-base", color: "text-[#D4AF37]" },
  ];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="h-[450px] rounded-3xl relative overflow-hidden bg-[#F9F7F2] shadow-xl border border-white/50 cursor-crosshair group"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Central Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
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

      {/* Interactive Floating Keywords */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {keywords.map((item, index) => {
          // Create parallax effect: items move opposite to mouse
          // Closer items (larger font) move more? Or randomness?
          // Let's make them move based on their position to create a "depth" feel
          const factor = (index % 3) + 1; 
          const moveX = useTransform(springX, (x) => x / (5 * factor));
          const moveY = useTransform(springY, (y) => y / (5 * factor));

          return (
            <motion.div
              key={index}
              style={{ x: moveX, y: moveY }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: item.x, // Base position
                y: item.y 
              }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`absolute flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-white/50 ${item.color} ${item.size} whitespace-nowrap`}
            >
              {item.text}
            </motion.div>
          );
        })}
      </div>

      {/* Mouse Follower Dot */}
      <motion.div 
        className="absolute w-8 h-8 rounded-full border border-[#D4AF37] opacity-0 pointer-events-none z-20 mix-blend-multiply"
        style={{ x: springX, y: springY, opacity: hovered ? 0.5 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#D4AF37] rounded-full" />
      </motion.div>

    </div>
  );
}

