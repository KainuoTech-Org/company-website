"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import WhoWeAreVisual from '@/components/home/WhoWeAreVisual';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        
        {/* Mission Statement */}
        <section className="mb-32 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-12 text-[#1A1A1A]">
            {t('about_subtitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            {t('about_p1')}
          </p>
        </section>

        {/* Who We Are */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <WhoWeAreVisual />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">{t('about_who_we_are')}</h2>
            <div className="space-y-6 text-lg text-gray-600 mb-8">
              <p>{t('about_p3')}</p>
              <p>{t('about_p4')}</p>
            </div>
            
            {/* DUNS Badge */}
            <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#F9F7F2] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 leading-none mb-1">D-U-N-S® Registered</div>
                <div className="text-lg font-mono font-bold text-[#1A1A1A]">77-331-5956</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Removed fake data */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y border-gray-200">
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
              {t('about_stat1_value')}
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
              {t('about_stat1_label')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
              {t('about_stat2_value')}
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
              {t('about_stat2_label')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
              {t('about_stat3_value')}
            </div>
            <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
              {t('about_stat3_label')}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-32">
          <h2 className="font-serif text-4xl font-bold mb-8">{t('about_cta')}</h2>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#D4AF37] transition-colors"
          >
            {t('about_cta_btn')}
          </Link>
        </section>

      </div>
    </div>
  );
}
