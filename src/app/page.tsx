"use client";

import HeroIntro from '@/components/home/HeroIntro';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import InteractiveBackground from '@/components/home/InteractiveBackground';
import WhoWeAreVisual from '@/components/home/WhoWeAreVisual';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const techStack = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/black' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/black' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/black' },
    { name: 'Swift', icon: 'https://cdn.simpleicons.org/swift/black' },
    { name: 'Sanity', icon: 'https://cdn.simpleicons.org/sanity/black' },
    { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/black' },
    { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe/black' },
    { name: 'PayPal', icon: 'https://cdn.simpleicons.org/paypal/black' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/black' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/black' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/black' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/black' },
  ];

  return (
    <div className="flex flex-col relative">
      <InteractiveBackground />
      
      {/* Hero Introduction Section */}
      <HeroIntro />
      
      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Our Products Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] font-medium mb-4 block">
                {t('home_products_title')}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {t('home_products_desc')}
              </h2>
            </div>
            <Link href="/products" className="button-3d text-sm">
              {t('btn_view_work')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t('product_custly_name'), tagline: t('product_custly_tagline'), url: 'https://custlycrm.com', status: t('products_status_live'), statusColor: 'bg-green-100 text-green-700', color: '#1B5E20', logo: '/img/custly-logo.svg', isAppIcon: false },
              { name: t('product_kinolu_name'), tagline: t('product_kinolu_tagline'), url: 'https://kinolu.cam', status: t('products_status_live'), statusColor: 'bg-green-100 text-green-700', color: '#000000', logo: '/img/kinolu-logo.png', isAppIcon: true },
              { name: t('product_velo_name'), tagline: t('product_velo_tagline'), url: 'https://velostudio.app', status: t('products_status_beta'), statusColor: 'bg-blue-100 text-blue-700', color: '#89A389', logo: '/img/velo-logo.svg', isAppIcon: false },
              { name: t('product_mood_name'), tagline: t('product_mood_tagline'), url: '#', status: t('products_status_review'), statusColor: 'bg-amber-100 text-amber-700', color: '#E8A87C', logo: '/img/mood-balloon-logo.png', isAppIcon: true },
            ].map((product, index) => (
              <Link
                href={product.url !== '#' ? product.url : '/products'}
                target={product.url !== '#' ? '_blank' : undefined}
                rel={product.url !== '#' ? 'noopener noreferrer' : undefined}
                key={index}
                className="group p-8 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  {product.isAppIcon ? (
                    <Image src={product.logo!} alt={product.name} width={40} height={40} className="w-10 h-10 rounded-xl object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden p-1.5" style={{ backgroundColor: product.color }}>
                      <Image src={product.logo!} alt={product.name} width={28} height={28} className="w-7 h-7 object-contain brightness-0 invert" />
                    </div>
                  )}
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: t('nav_web_dev'), 
                desc: t('service_web_desc'),
                href: '/services',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                title: t('nav_mobile'), 
                desc: t('service_mobile_desc'),
                href: '/services',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: t('home_products_title'), 
                desc: t('home_products_desc'),
                href: '/products',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <Link 
                href={service.href} 
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
