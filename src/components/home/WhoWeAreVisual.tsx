"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeAreVisual() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-[480px] bg-[#1A1A1A] rounded-3xl" />;

  return (
    <div className="h-[480px] rounded-3xl relative overflow-hidden bg-[#0A0A0A] shadow-2xl border border-white/5">
      <AnimatePresence mode="wait">
        {activeIndex === 0 ? (
          <TerminalVisual key="terminal" t={t} />
        ) : (
          <OrbitVisual key="orbit" t={t} />
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'bg-[#D4AF37] w-6' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TerminalVisual({ t }: { t: any }) {
  const [displayText, setDisplayText] = useState("");
  const fullText = '"Web Experience", "Digital Products", "Custom Solutions"';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 p-6 md:p-10 flex flex-col bg-[#0F0F11] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 mt-4 pointer-events-none">
        <div className="text-[#fff] text-5xl md:text-7xl font-bold font-serif leading-[0.9] tracking-tight mb-1">HELLO,<br />WORLD.</div>
        <div className="text-[#79c0ff] text-lg md:text-xl font-medium">Efficiency meets Aesthetics</div>
      </div>

      <div className="mt-auto mb-4 bg-[#0A0A0F]/95 border border-white/10 rounded-2xl p-5 md:p-8 font-mono text-[10px] md:text-xs shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-md relative z-10 transform scale-[0.85] md:scale-95 origin-bottom-left">
        <div className="flex gap-1.5 mb-6 border-b border-white/5 pb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-auto text-white/20 text-[10px] uppercase tracking-widest font-sans">index.tsx</span>
        </div>
        
        <div className="space-y-1.5">
          <div className="text-[#6a737d] italic">/** {t('nav_brand')} **/</div>
          <div>
            <span className="text-[#ff79c6]">const</span>{" "}
            <span className="text-[#79c0ff]">Config</span> = {"{"}
          </div>
          <div className="pl-4">
            <span className="text-[#d2a8ff]">stack</span>: <span className="text-[#a5d6ff]">"Next.js / React"</span>,
          </div>
          <div className="pl-4">
            <span className="text-[#d2a8ff]">build</span>: [
          </div>
          <div className="pl-8 text-[#a5d6ff] min-h-[1.2em]">
            "{displayText}"
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 bg-[#79c0ff] ml-1 align-middle"
            />
          </div>
          <div className="pl-4">]</div>
          <div>{"};"}</div>
        </div>

        {/* Tech Dock */}
        <div className="mt-6 pt-4 border-t border-white/5 flex gap-4 overflow-hidden">
          {['react', 'nextdotjs', 'typescript', 'swift', 'sanity', 'stripe', 'vercel', 'github'].map((icon) => (
            <img 
              key={icon}
              src={`https://cdn.simpleicons.org/${icon}/ffffff`} 
              alt={icon}
              className="h-4 w-auto opacity-30"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function OrbitVisual({ t }: { t: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Original Split Background from launch-row.html */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-[#f2f2f2] relative overflow-hidden flex items-center justify-center">
          <div className="absolute font-black text-[180px] opacity-[0.04] rotate-90 whitespace-nowrap left-[-60px] tracking-tighter select-none pointer-events-none">
            TRADITION
          </div>
        </div>
        <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute font-black text-[180px] opacity-[0.04] -rotate-90 whitespace-nowrap right-[-40px] tracking-tighter select-none pointer-events-none">
            DIGITAL
          </div>
        </div>
      </div>
      
      {/* Top Identity Text */}
      <div className="absolute top-16 w-full text-center z-20 px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] tracking-tight leading-tight mb-2">
            Bridging Tradition<br />
            <span className="flex items-center justify-center gap-3">
              → <span className="text-[#111]">Digital Precision</span>
            </span>
          </h2>
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.3em] font-medium mt-4">
            KAINUO INNOVISION TECH CO., LIMITED
          </p>
        </motion.div>
      </div>

      {/* Orbiting Rings */}
      <div className="relative w-full h-full flex items-center justify-center scale-[0.85] md:scale-100 mt-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] border border-dashed border-black/10 rounded-full"
        >
          <OrbitIcon icon="react" color="61DAFB" top="0" left="50%" />
          <OrbitIcon icon="nextdotjs" color="000000" bottom="0" left="50%" />
          <OrbitIcon icon="typescript" color="3178C6" left="0" top="50%" />
          <OrbitIcon icon="vercel" color="000000" right="0" top="50%" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute w-[420px] h-[420px] border border-dashed border-black/5 rounded-full"
        >
          <OrbitIcon icon="swift" color="FA7343" top="15%" left="15%" />
          <OrbitIcon icon="stripe" color="635BFF" top="15%" right="15%" />
          <OrbitIcon icon="shopify" color="95BF47" bottom="15%" left="15%" />
          <OrbitIcon icon="github" color="181717" bottom="15%" right="15%" />
        </motion.div>

        {/* Center Logo Bubble - Simplified to match original */}
        <div className="relative z-10 p-10 bg-white rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center">
          <img src="/logo.svg" alt="Logo" className="h-16 md:h-20 w-auto" />
        </div>
      </div>
    </motion.div>
  );
}

function OrbitIcon({ icon, color, top, left, right, bottom }: any) {
  return (
    <div 
      className="absolute bg-white p-2.5 md:p-3 rounded-xl shadow-lg border border-gray-50 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left, right, bottom }}
    >
      <img src={`https://cdn.simpleicons.org/${icon}/${color}`} alt={icon} className="w-full h-full object-contain" />
    </div>
  );
}
