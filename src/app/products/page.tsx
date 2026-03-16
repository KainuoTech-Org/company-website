"use client";

import Link from 'next/link';
import { ExternalLink, Smartphone, Monitor, Globe, Heart } from 'lucide-react';
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
      icon: <Globe className="w-8 h-8" />,
      platform: 'Web App',
      color: '#1B5E20',
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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      ),
      platform: 'PWA (iOS / Android / Web)',
      color: '#000000',
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
      icon: <Monitor className="w-8 h-8" />,
      platform: 'macOS App',
      color: '#89A389',
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
      icon: <Smartphone className="w-8 h-8" />,
      platform: 'iOS App',
      color: '#E8A87C',
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
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left: Product Info */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="p-3 rounded-2xl text-white"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.icon}
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
                  <div className="grid grid-cols-2 gap-3 mb-8">
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

                {/* Right: Visual / Pricing Summary */}
                <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-medium">
                      {t('products_view_pricing')}
                    </div>
                    <div className="text-lg font-bold text-[#1A1A1A] mb-6">
                      {product.pricing}
                    </div>
                    
                    {/* Product screenshot placeholder */}
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
                          <div className="text-center">
                            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-400 text-sm">{t('app_coming_soon')}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
