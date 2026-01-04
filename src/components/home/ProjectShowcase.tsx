"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

const projects = [
  {
    id: 'chengjian-municipal',
    image: '/img/chengjian-municipal-long.jpg',
    url: 'https://cychengjian.com/',
    titleKey: 'web_proj10_title',
    descKey: 'web_proj10_desc',
    tagKey: 'tag_municipal',
    isRealProject: true
  },
  {
    id: 'retroloop',
    image: '/img/retroloop-long.png',
    url: 'https://retroloop.vercel.app/',
    titleKey: 'web_proj4_title',
    descKey: 'web_proj4_desc',
    tagKey: 'tag_vintage'
  },
  {
    id: 'moment-cafe',
    image: '/img/moment-cafe-long.png',
    url: 'https://moment-cafe.vercel.app/',
    titleKey: 'web_proj3_title',
    descKey: 'web_proj3_desc',
    tagKey: 'tag_fnb'
  },
  {
    id: 'natura',
    image: '/img/natura-long.png',
    url: 'https://05-natura-beauty.vercel.app',
    titleKey: 'web_proj8_title',
    descKey: 'web_proj8_desc',
    tagKey: 'tag_beauty'
  },
  {
    id: 'lumina',
    image: '/img/lumina-long.png',
    url: 'https://04-lumina-dental.vercel.app',
    titleKey: 'web_proj7_title',
    descKey: 'web_proj7_desc',
    tagKey: 'tag_healthcare'
  },
  {
    id: 'novatrix',
    image: '/img/novatrix-long.png',
    url: 'https://01-tech-saas.vercel.app',
    titleKey: 'web_proj5_title',
    descKey: 'web_proj5_desc',
    tagKey: 'tag_tech'
  }
];

export default function ProjectShowcase() {
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
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4"
          >
            {t('works_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('works_subtitle')}
          </motion.p>
        </div>

        {/* Project Showcase with Breathing Space */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '16/9' }}
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

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                    {t(currentProject.titleKey)}
                  </h3>
                  
                  <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
                    {t(currentProject.descKey)}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-[#1A1A1A] rounded-full font-medium hover:bg-[#D4AF37] transition-all"
                    >
                      {currentProject.isRealProject ? t('btn_visit_site') : t('btn_visit_live')}
                    </a>
                    <Link 
                      href="/portfolio"
                      className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#1A1A1A] transition-all"
                    >
                      {t('btn_view_work')}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#D4AF37] w-12' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

