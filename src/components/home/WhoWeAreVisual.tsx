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

  if (!mounted) return <div className="h-[450px] bg-[#1A1A1A] rounded-3xl" />;

  return (
    <div className="h-[450px] rounded-3xl relative overflow-hidden bg-[#0A0A0A] shadow-2xl border border-white/5">
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
      className="absolute inset-0 p-8 flex flex-col justify-center bg-[#0F0F11]"
    >
      <div className="mb-8">
        <div className="text-[#79c0ff] text-5xl md:text-6xl font-bold font-serif mb-2 tracking-tight">HELLO,</div>
        <div className="text-white text-5xl md:text-6xl font-bold font-serif tracking-tight">WORLD.</div>
      </div>

      <div className="bg-[#0A0A0F]/80 border border-white/10 rounded-xl p-6 font-mono text-sm md:text-base shadow-2xl backdrop-blur-sm relative">
        <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-3">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-auto text-white/20 text-xs uppercase tracking-widest">index.tsx</span>
        </div>
        
        <div className="space-y-1">
          <div className="text-white/30 italic mb-2">/** {t('nav_brand')} **/</div>
          <div>
            <span className="text-[#ff79c6]">const</span>{" "}
            <span className="text-[#79c0ff]">Config</span> = {"{"}
          </div>
          <div className="pl-6">
            <span className="text-[#d2a8ff]">stack</span>: <span className="text-[#a5d6ff]">"Next.js / React"</span>,
          </div>
          <div className="pl-6">
            <span className="text-[#d2a8ff]">build</span>: [
          </div>
          <div className="pl-12 text-[#a5d6ff]">
            "{displayText}"
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-[#79c0ff] ml-1 align-middle"
            />
          </div>
          <div className="pl-6">]</div>
          <div>{"};"}</div>
        </div>

        {/* Tech Dock */}
        <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 overflow-hidden">
          {['react', 'nextdotjs', 'typescript', 'swift', 'sanity', 'stripe', 'vercel', 'github'].map((icon) => (
            <img 
              key={icon}
              src={`https://cdn.simpleicons.org/${icon}/ffffff`} 
              alt={icon}
              className="h-5 w-auto opacity-40 hover:opacity-100 transition-opacity"
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
      className="absolute inset-0 flex items-center justify-center bg-[#F9F7F2]"
    >
      {/* Light Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* Orbiting Rings */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] border border-dashed border-black/10 rounded-full"
        >
          <OrbitIcon icon="react" color="61DAFB" top="0" left="50%" />
          <OrbitIcon icon="nextdotjs" color="000000" bottom="0" left="50%" />
          <OrbitIcon icon="typescript" color="3178C6" left="0" top="50%" />
          <OrbitIcon icon="vercel" color="000000" right="0" top="50%" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] border border-dashed border-black/5 rounded-full"
        >
          <OrbitIcon icon="swift" color="FA7343" top="15%" left="15%" />
          <OrbitIcon icon="stripe" color="635BFF" top="15%" right="15%" />
          <OrbitIcon icon="shopify" color="95BF47" bottom="15%" left="15%" />
          <OrbitIcon icon="github" color="181717" bottom="15%" right="15%" />
        </motion.div>

        {/* Center Logo */}
        <div className="relative z-10 p-8 bg-white rounded-full shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
          <img src="/logo.svg" alt="Logo" className="h-16 w-auto mb-4" />
          <div className="max-w-[200px]">
            <div className="text-[#1A1A1A] font-serif font-bold text-xl leading-tight mb-1">
              Bridging Tradition
            </div>
            <div className="text-[#D4AF37] text-2xl font-bold">→ Digital Precision</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OrbitIcon({ icon, color, top, left, right, bottom }: any) {
  return (
    <div 
      className="absolute bg-white p-3 rounded-xl shadow-lg border border-gray-50 flex items-center justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left, right, bottom }}
    >
      <img src={`https://cdn.simpleicons.org/${icon}/${color}`} alt={icon} className="w-full h-full object-contain" />
    </div>
  );
}
