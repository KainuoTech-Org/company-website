"use client";

import HeroIntro from '@/components/home/HeroIntro';
import ProjectShowcase from '@/components/home/ProjectShowcase';
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
    { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/black' },
    { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal/black' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/black' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/black' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/black' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/black' },
  ];

  return (
    <div className="flex flex-col pb-20 relative">
      <InteractiveBackground />
      
      {/* Hero Introduction Section */}
      <HeroIntro />
      
      {/* Project Showcase Section */}
      <ProjectShowcase />
      
      {/* About Preview */}
      <section className="container mx-auto px-6 py-20">
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
      <section className="bg-[#1A1A1A] text-white py-24 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none leading-none translate-x-1/4 -translate-y-1/4">
          SERVICES
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">{t('nav_services')}</h2>
              <p className="text-gray-400 text-lg">
                {t('services_desc')}
              </p>
            </div>
            <Link href="/services" className="button-3d button-3d-gold text-sm">
              {t('btn_view_work')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: t('nav_web_dev'), 
                desc: t('service_web_desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                title: t('nav_mobile'), 
                desc: t('service_mobile_desc'),
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <Link 
                href="/services" 
                key={index} 
                className="group p-10 border border-white/10 rounded-3xl hover:border-[#D4AF37] transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] relative overflow-hidden"
              >
                <div className="mb-8 p-4 bg-white/5 rounded-2xl inline-block text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A1A1A] transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn More 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-0 group-hover:opacity-[0.03] rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
