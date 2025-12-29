"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

const projects = [
  {
    id: 'harbour-trade',
    image: '/img/harbour-trade-long.png',
    url: 'https://demo-trade.kainuotech.com/',
    titleKey: 'web_proj1_title',
    descKey: 'web_proj1_desc',
    tagKey: 'tag_corporate'
  },
  {
    id: 'flow-space',
    image: '/img/flow-space-long.png',
    url: 'https://flow.kainuotech.com/',
    titleKey: 'web_proj2_title',
    descKey: 'web_proj2_desc',
    tagKey: 'tag_studio'
  },
  {
    id: 'moment-cafe',
    image: '/img/moment-cafe-long.png',
    url: 'https://moment-cafe.vercel.app/',
    titleKey: 'web_proj3_title',
    descKey: 'web_proj3_desc',
    tagKey: 'tag_fnb'
  }
];

export default function HeroSlider() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#1A1A1A]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7 }}
              className="w-full h-full"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${currentProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top'
                }}
              />
            </motion.div>
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

          {/* Content */}
          <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-[#D4AF37] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                {t(currentProject.tagKey)}
              </span>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                {t(currentProject.titleKey)}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                {t(currentProject.descKey)}
              </p>

              <div className="flex gap-4">
                <a 
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#1A1A1A] rounded-full font-medium hover:bg-[#D4AF37] transition-all"
                >
                  {t('btn_visit_live')}
                </a>
                <Link 
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#1A1A1A] transition-all"
                >
                  {t('btn_view_work')}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Progress Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#D4AF37] w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
