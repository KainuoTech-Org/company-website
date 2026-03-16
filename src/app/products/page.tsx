"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();

  const products = [
    {
      id: 'custly',
      name: t('product_custly_name'),
      tagline: t('product_custly_tagline'),
      description: t('product_custly_desc'),
      features: [
        t('product_custly_f1'),
        t('product_custly_f2'),
        t('product_custly_f3'),
        t('product_custly_f4'),
      ],
      url: 'https://custlycrm.com',
      status: 'live',
      statusLabel: t('products_status_live'),
      pricing: '$20/mo · $168/yr · $399 lifetime',
      logo: '/img/custly-logo.svg',
      logoBg: '#1B5E20',
      platform: 'Web App',
      color: '#1B5E20',
      screenshots: [
        '/img/custlycrm/custly-screenshot-1.png',
        '/img/custlycrm/custly-screenshot-2.png',
        '/img/custlycrm/custly-screenshot-3.png',
      ],
      screenshotType: 'desktop' as const,
    },
    {
      id: 'kinolu',
      name: t('product_kinolu_name'),
      tagline: t('product_kinolu_tagline'),
      description: t('product_kinolu_desc'),
      features: [
        t('product_kinolu_f1'),
        t('product_kinolu_f2'),
        t('product_kinolu_f3'),
        t('product_kinolu_f4'),
      ],
      url: 'https://kinolu.cam',
      status: 'live',
      statusLabel: t('products_status_live'),
      pricing: `${t('pricing_free')} · $2.99/mo · $49.99 lifetime`,
      logo: '/img/kinolu-logo.png',
      logoBg: '#000000',
      platform: 'PWA (iOS / Android / Web)',
      color: '#000000',
      screenshots: [
        '/img/Kinolu/kinolu-screenshot-1.jpg',
        '/img/Kinolu/kinolu-screenshot-2.jpg',
        '/img/Kinolu/kinolu-screenshot-3.jpg',
      ],
      screenshotType: 'mobile' as const,
    },
    {
      id: 'velo-studio',
      name: t('product_velo_name'),
      tagline: t('product_velo_tagline'),
      description: t('product_velo_desc'),
      features: [
        t('product_velo_f1'),
        t('product_velo_f2'),
        t('product_velo_f3'),
        t('product_velo_f4'),
      ],
      url: 'https://velostudio.app',
      status: 'beta',
      statusLabel: t('products_status_beta'),
      pricing: '$8/mo · $68/yr',
      logo: '/img/velo-logo.svg',
      logoBg: '#89A389',
      platform: 'macOS App',
      color: '#89A389',
      screenshots: [],
      screenshotType: 'desktop' as const,
    },
    {
      id: 'mood-balloon',
      name: t('product_mood_name'),
      tagline: t('product_mood_tagline'),
      description: t('product_mood_desc'),
      features: [
        t('product_mood_f1'),
        t('product_mood_f2'),
        t('product_mood_f3'),
        t('product_mood_f4'),
      ],
      url: '#',
      status: 'review',
      statusLabel: t('products_status_review'),
      pricing: t('app_coming_soon'),
      logo: null,
      logoBg: '#E8A87C',
      platform: 'iOS App',
      color: '#E8A87C',
      screenshots: [
        '/img/Mood balloon/mood-screenshot-1.png',
        '/img/Mood balloon/mood-screenshot-2.png',
        '/img/Mood balloon/mood-screenshot-3.png',
        '/img/Mood balloon/mood-screenshot-4.png',
        '/img/Mood balloon/mood-screenshot-5.png',
      ],
      screenshotType: 'mobile' as const,
    },
  ];

  const statusStyles: Record<string, string> = {
    live: 'bg-green-100 text-green-700',
    beta: 'bg-blue-100 text-blue-700',
    review: 'bg-amber-100 text-amber-700',
    dev: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-[#1A1A1A]">
            {t('products_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {t('products_subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left: Product Info */}
                <div className="lg:col-span-2 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden p-2"
                      style={{ backgroundColor: product.logoBg }}
                    >
                      {product.logo ? (
                        <Image src={product.logo} alt={product.name} width={40} height={40} className="w-10 h-10 object-contain brightness-0 invert" />
                      ) : (
                        <span className="text-white text-xl font-bold">{product.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">{product.name}</h2>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${statusStyles[product.status]}`}>
                          {product.statusLabel}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 flex-wrap">
                    {product.url !== '#' ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-3d button-3d-gold text-sm inline-flex items-center gap-2"
                      >
                        {t('products_visit')}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="px-6 py-3 bg-gray-100 text-gray-400 text-sm font-medium uppercase tracking-wider rounded-full cursor-default">
                        {t('app_coming_soon')}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      {product.platform}
                    </span>
                  </div>
                </div>

                {/* Right: Screenshots Gallery */}
                <div className="lg:col-span-3 bg-gray-50 p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-medium">
                      {t('products_view_pricing')}
                    </div>
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {product.pricing}
                    </div>
                  </div>
                  
                  {/* Screenshots */}
                  {product.screenshots.length > 0 ? (
                    product.screenshotType === 'mobile' ? (
                      /* Mobile: show multiple phone screenshots side by side */
                      <div className="flex justify-center gap-3 overflow-x-auto py-4 px-2">
                        {product.screenshots.map((src, idx) => (
                          <div key={idx} className="flex-shrink-0 w-[140px] md:w-[160px] rounded-2xl overflow-hidden shadow-lg border-4 border-gray-800 bg-gray-800">
                            <div className="w-full h-3 bg-gray-800 flex justify-center items-end">
                              <div className="w-12 h-1.5 bg-gray-700 rounded-full mb-0.5" />
                            </div>
                            <Image 
                              src={src} 
                              alt={`${product.name} screenshot ${idx + 1}`} 
                              width={320} 
                              height={640} 
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Desktop: carousel of screenshots */
                      <DesktopScreenshotCarousel screenshots={product.screenshots} name={product.name} />
                    )
                  ) : (
                    /* No screenshots - show website preview via iframe */
                    <div className="aspect-[16/10] bg-gray-200 rounded-2xl overflow-hidden relative group-hover:shadow-lg transition-shadow duration-500">
                      {product.url !== '#' ? (
                        <iframe
                          src={product.url}
                          className="w-full h-full border-0 pointer-events-none scale-[0.5] origin-top-left"
                          style={{ width: '200%', height: '200%' }}
                          title={product.name}
                          loading="lazy"
                          sandbox="allow-same-origin"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-gray-400 text-sm">{t('app_coming_soon')}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-lg mb-6">
            {t('about_also_build')}
          </p>
          <Link 
            href="/contact"
            className="button-3d text-sm inline-block"
          >
            {t('btn_start')}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Desktop screenshot carousel component */
function DesktopScreenshotCarousel({ screenshots, name }: { screenshots: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      {/* Browser chrome mockup */}
      <div className="bg-gray-800 rounded-t-xl pt-3 px-4 pb-0">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-4 bg-gray-700 rounded-md h-5" />
        </div>
      </div>
      <div className="aspect-[16/10] overflow-hidden rounded-b-xl relative bg-gray-100">
        <Image
          src={screenshots[currentIndex]}
          alt={`${name} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Navigation */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          >
            <ChevronRight size={16} />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#D4AF37]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
