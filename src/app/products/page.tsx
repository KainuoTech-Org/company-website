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
      logoIsAppIcon: false,
      logoBg: '#1B5E20',
      platform: 'Web App',
      color: '#1B5E20',
      screenshots: [
        '/img/custlycrm/custly-screenshot-1.png',
        '/img/custlycrm/custly-screenshot-2.png',
        '/img/custlycrm/custly-screenshot-3.png',
        '/img/custlycrm/custly-screenshot-4.png',
        '/img/custlycrm/custly-screenshot-5.png',
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
      url: 'https://www.kinolu.cam/landing',
      status: 'live',
      statusLabel: t('products_status_live'),
      pricing: `${t('pricing_free')} · $2.99/mo · $49.99 lifetime`,
      logo: '/img/kinolu-logo.png',
      logoIsAppIcon: true,
      logoBg: '#000000',
      platform: 'PWA (iOS / Android / Web)',
      color: '#000000',
      screenshots: [
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
      logoIsAppIcon: false,
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
      logo: '/img/mood-balloon-logo.png',
      logoIsAppIcon: true,
      logoBg: '#E8A87C',
      platform: 'iOS App',
      color: '#E8A87C',
      screenshots: [
        '/img/Mood balloon/mood-screenshot-1.png',
        '/img/Mood balloon/mood-screenshot-2.png',
        '/img/Mood balloon/mood-screenshot-3.png',
        '/img/Mood balloon/mood-screenshot-4.png',
        '/img/Mood balloon/mood-screenshot-5.png',
        '/img/Mood balloon/mood-screenshot-6.png',
        '/img/Mood balloon/mood-screenshot-7.png',
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

        {/* Products */}
        <div className="space-y-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Top: Product Info */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  {/* Left: Main Info */}
                  <div className="flex-1 max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      {product.logoIsAppIcon ? (
                        <Image src={product.logo!} alt={product.name} width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" />
                      ) : (
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden p-2"
                          style={{ backgroundColor: product.logoBg }}
                        >
                          <Image src={product.logo!} alt={product.name} width={40} height={40} className="w-10 h-10 object-contain brightness-0 invert" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="text-2xl md:text-3xl font-serif font-bold">{product.name}</h2>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${statusStyles[product.status]}`}>
                            {product.statusLabel}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
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

                  {/* Right: Pricing */}
                  <div className="md:text-right shrink-0">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-medium">
                      {t('products_view_pricing')}
                    </div>
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {product.pricing}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Screenshots — full width */}
              {(product.screenshots.length > 0 || 'heroImage' in product || product.url !== '#') && (
                <div className="bg-gray-50 border-t border-gray-100 px-8 md:px-12 py-8">
                  {product.screenshotType === 'mobile' ? (
                    /* Mobile app: show phones in rows, centered */
                    <div className="flex flex-wrap justify-center items-end gap-3 md:gap-5">
                      {product.screenshots.map((src, idx) => (
                        <div
                          key={idx}
                          className="w-[20%] min-w-[100px] max-w-[150px] rounded-2xl overflow-hidden shadow-md"
                        >
                          <Image
                            src={src}
                            alt={`${product.name} screenshot ${idx + 1}`}
                            width={642}
                            height={1389}
                            className="w-full h-auto block"
                          />
                        </div>
                      ))}
                    </div>
                  ) : product.screenshots.length > 0 ? (
                    /* Desktop: carousel */
                    <DesktopScreenshotCarousel screenshots={product.screenshots} name={product.name} />
                  ) : product.url !== '#' ? (
                    /* Fallback: iframe preview */
                    <div className="aspect-[16/10] bg-gray-200 rounded-2xl overflow-hidden relative">
                      <iframe
                        src={product.url}
                        className="w-full h-full border-0 pointer-events-none scale-[0.5] origin-top-left"
                        style={{ width: '200%', height: '200%' }}
                        title={product.name}
                        loading="lazy"
                        sandbox="allow-same-origin"
                      />
                    </div>
                  ) : null}
                </div>
              )}
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

/* Desktop screenshot carousel */
function DesktopScreenshotCarousel({ screenshots, name }: { screenshots: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="aspect-[16/10] overflow-hidden rounded-2xl relative bg-gray-100 shadow-md">
        <Image
          src={screenshots[currentIndex]}
          alt={`${name} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover object-top"
        />
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
          >
            <ChevronRight size={18} />
          </button>
          <div className="flex justify-center gap-2 mt-4">
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
