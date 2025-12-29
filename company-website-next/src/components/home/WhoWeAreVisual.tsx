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
    <div className="h-[400px] rounded-2xl relative overflow-hidden group shadow-lg">
      {/* Background with animated gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#000000]"
        animate={{
          background: [
            "linear-gradient(to bottom right, #1A1A1A, #2A2A2A, #000000)",
            "linear-gradient(to bottom right, #1A1A1A, #3A3A3A, #1A1A1A)",
            "linear-gradient(to bottom right, #000000, #2A2A2A, #1A1A1A)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Abstract Shapes */}
      <motion.div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-10"
        style={{ 
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
            {t('nav_brand')}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-white font-bold leading-tight mb-6">
            Digital Craftsmanship<br/>for Business Growth
          </h3>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Floating cards animation effect */}
        <motion.div 
          className="absolute bottom-[-100px] left-0 w-full h-[200px] opacity-20 pointer-events-none"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          {/* Decorative elements */}
        </motion.div>
      </div>
      
      {/* Interactive Overlay on Hover */}
      <motion.div 
        className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-500"
      />
    </div>
  );
}

