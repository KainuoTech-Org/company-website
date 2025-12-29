"use client";

import HeroSlider from '@/components/home/HeroSlider';
import InteractiveBackground from '@/components/home/InteractiveBackground';
import WhoWeAreVisual from '@/components/home/WhoWeAreVisual';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const techStack = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/black' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/black' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/black' },
    { name: 'Swift', icon: 'https://cdn.simpleicons.org/swift/black' },
    { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/black' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/black' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/black' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/black' },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 relative">
      <InteractiveBackground />
      <HeroSlider />
      
      {/* About Preview */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
              {t('home_who_we_are_title')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {t('home_who_we_are_desc')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('about_p1')}
            </p>
            <Link 
              href="/about"
              className="button-3d text-sm tracking-wider"
            >
              {t('nav_about')}
            </Link>

            {/* Tech Icons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6">
                {techStack.map((tech) => (
                  <div key={tech.name} className="tech-icon-wrapper">
                    <img src={tech.icon} alt={tech.name} className="h-6 w-auto" />
                    <span className="tech-icon-tooltip">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl relative overflow-hidden group">
             <WhoWeAreVisual />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl font-bold">{t('nav_services')}</h2>
            <Link href="/services" className="hidden md:block text-gray-400 hover:text-white transition-colors">
              {t('btn_view_work')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t('nav_web_dev'), desc: 'Next.js, React, and modern headless CMS solutions.' },
              { title: t('nav_mobile'), desc: 'Native iOS and cross-platform web applications.' }
            ].map((service, index) => (
              <div key={index} className="border-t border-gray-700 pt-8 hover:border-[#D4AF37] transition-colors group cursor-pointer">
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
