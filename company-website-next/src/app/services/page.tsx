"use client";

import Link from 'next/link';
import { ArrowRight, Code, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'web',
      title: t('nav_web_dev'),
      description: 'We build fast, secure, and SEO-optimized websites using modern frameworks.', // Needs dictionary key if fully dynamic, but using English fallback for now or need to add more keys
      icon: <Code className="w-10 h-10 text-[#D4AF37]" />,
      features: ['Next.js / React Architecture', 'Headless CMS Integration', 'E-commerce Solutions', 'Performance Optimization']
    },
    {
      id: 'app',
      title: t('nav_mobile'),
      description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
      icon: <Smartphone className="w-10 h-10 text-[#D4AF37]" />,
      features: ['iOS Native Development', 'React Native / Expo', 'PWA (Progressive Web Apps)', 'App Store Optimization']
    }
  ];

  const process = [
    {
      step: '01',
      title: t('step1_title'),
      desc: t('step1_desc')
    },
    {
      step: '02',
      title: t('step2_title'),
      desc: t('step2_desc')
    },
    {
      step: '03',
      title: t('step3_title'),
      desc: t('step3_desc')
    },
    {
      step: '04',
      title: t('step4_title'),
      desc: t('step4_desc')
    }
  ];

  const techStack = [
    { name: 'Next.js 16', category: 'Frontend' },
    { name: 'React', category: 'Library' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Swift', category: 'Mobile' },
    { name: 'Python', category: 'Backend/Data' },
    { name: 'Supabase', category: 'CMS/Database' },
    { name: 'Vercel', category: 'Deployment' }
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 container mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-[#1A1A1A]">
          {t('web_dev_title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          {t('hero_desc')}
        </p>
      </section>

      {/* Services List */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="mb-6 p-4 bg-[#F9F7F2] rounded-2xl inline-block group-hover:bg-[#1A1A1A] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">{t('process_title')}</h2>
          <p className="text-gray-600">{t('process_desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-serif font-bold text-gray-200 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-[1px] bg-gray-200 -z-10 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#1A1A1A] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Technology Stack</h2>
              <p className="text-gray-400 text-lg mb-8">
                We use the latest, most robust technologies to ensure your digital product is scalable, secure, and future-proof.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors">
                {t('btn_start')} <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="p-6 border border-gray-800 rounded-xl hover:border-[#D4AF37] transition-colors">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tech.category}</div>
                  <div className="font-bold text-lg">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
