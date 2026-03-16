"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'web' | 'products'>('web');

  const plans = [
    {
      name: t('pkg1_title'),
      price: 'HK$3,880',
      description: t('pkg1_for'),
      features: [
        t('pkg1_f1'),
        t('pkg1_f2'),
        t('pkg1_f3'),
        t('pkg1_f4'),
        t('pkg1_f5'),
        t('pkg1_f6'),
        t('pkg1_f7'),
        t('pkg1_update'),
        t('pkg1_f8')
      ],
      cta: t('btn_select'),
      popular: false
    },
    {
      name: t('pkg2_title'),
      price: 'HK$5,880',
      description: t('pkg2_for'),
      features: [
        t('pkg2_f1'),
        t('pkg2_f2'),
        t('pkg2_f3'),
        t('pkg2_f4'),
        t('pkg2_f5'),
        t('pkg2_f6'),
        t('pkg2_f7'),
        t('pkg2_update'),
        t('pkg2_f8')
      ],
      cta: t('btn_select'),
      popular: true
    },
    {
      name: t('pkg_pro_title'),
      price: 'HK$8,880',
      pricePrefix: t('price_from'),
      description: t('pkg_pro_for'),
      features: [
        t('pkg_pro_f1'),
        t('pkg_pro_f3'),
        t('pkg_pro_f5'),
        t('pkg_pro_f6'),
        t('pkg_pro_f7')
      ],
      cta: t('btn_select'),
      popular: false
    },
    {
      name: t('pkg_ent_title'),
      price: 'HK$16,880',
      pricePrefix: t('price_from'),
      description: t('pkg_ent_for'),
      features: [
        t('pkg_ent_f1'),
        t('pkg_ent_f2'),
        t('pkg_ent_f3'),
        t('pkg_ent_f4'),
        t('pkg_ent_f5'),
        t('pkg_ent_f6'),
        t('pkg_ent_f7')
      ],
      cta: t('btn_contact'),
      popular: false
    }
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
            {t('services_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services_desc')}
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'web' 
                    ? 'bg-[#1A1A1A] text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t('pricing_tab_web')}
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'products' 
                    ? 'bg-[#1A1A1A] text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t('pricing_tab_products')}
              </button>
            </div>
          </div>
        </div>

        {/* Web Development Pricing */}
        {activeTab === 'web' && (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col ${plan.popular ? 'border-2 border-[#D4AF37]' : 'border border-gray-100'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                  {t('price_most_popular')}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold mb-2 text-[#1A1A1A]">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  {plan.pricePrefix && <span className="text-sm text-gray-500">{plan.pricePrefix}</span>}
                  <span className="text-3xl font-bold text-[#D4AF37]">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className={`block w-full text-center ${
                    plan.popular 
                      ? 'button-3d button-3d-gold' 
                      : 'button-3d'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 bg-white rounded-2xl p-10 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold mb-4">{t('pkg3_title')}</h2>
            <p className="text-gray-600">{t('pkg3_for')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4 text-lg border-b border-gray-100 pb-2">{t('addons_essentials')}</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between"><span>{t('pkg3_f1')}</span> <span className="font-bold">{t('pkg3_f1_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_f2')}</span> <span className="font-bold">{t('pkg3_f2_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_f3')}</span> <span className="font-bold">{t('pkg3_f3_price')}</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4 text-lg border-b border-gray-100 pb-2">{t('addons_advanced')}</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between"><span>{t('pkg3_pay')}</span> <span className="font-bold">{t('pkg3_pay_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_login')}</span> <span className="font-bold">{t('pkg3_login_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_f5')}</span> <span className="font-bold">{t('pkg3_f5_price')}</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#D4AF37] mb-4 text-lg border-b border-gray-100 pb-2">{t('addons_support')}</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between"><span>{t('pkg3_f4')}</span> <span className="font-bold">{t('pkg3_f4_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_update')}</span> <span className="font-bold">{t('pkg3_update_price')}</span></li>
                <li className="flex justify-between"><span>{t('pkg3_cms')}</span> <span className="font-bold">{t('pkg3_cms_price')}</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-block border-b-2 border-[#1A1A1A] pb-1 font-medium hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              {t('addons_cta')}
            </Link>
          </div>
        </div>
        </>
        )}

        {/* Products Pricing */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <p className="text-center text-gray-600 mb-12">{t('pricing_products_desc')}</p>
            
            {/* Custly CRM */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#1B5E20] flex items-center justify-center overflow-hidden p-1.5"><Image src="/img/custly-logo.svg" alt="Custly" width={28} height={28} className="w-7 h-7 object-contain brightness-0 invert" /></div>
                    <h3 className="text-2xl font-serif font-bold">{t('product_custly_name')}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 uppercase tracking-wider">{t('products_status_live')}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{t('product_custly_tagline')}</p>
                  <p className="text-gray-600 text-sm">{t('product_custly_desc')}</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-500">$20{t('pricing_per_month')} · $168{t('pricing_per_year')}</div>
                    <div className="text-2xl font-bold text-[#D4AF37]">$399 <span className="text-sm font-normal text-gray-500">{t('pricing_one_time')}</span></div>
                    <div className="text-xs text-gray-400">{t('products_free_trial')} · 14 days</div>
                  </div>
                  <a href="https://custlycrm.com" target="_blank" rel="noopener noreferrer" className="button-3d button-3d-gold text-sm inline-flex items-center gap-2">
                    {t('products_visit')} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Kinolu */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center overflow-hidden p-1.5"><Image src="/img/kinolu-logo.png" alt="Kinolu" width={28} height={28} className="w-7 h-7 object-contain brightness-0 invert" /></div>
                    <h3 className="text-2xl font-serif font-bold">{t('product_kinolu_name')}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-100 text-green-700 uppercase tracking-wider">{t('products_status_live')}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{t('product_kinolu_tagline')}</p>
                  <p className="text-gray-600 text-sm">{t('product_kinolu_desc')}</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-500">{t('pricing_free')} · $2.99{t('pricing_per_month')} · $29.99{t('pricing_per_year')}</div>
                    <div className="text-2xl font-bold text-[#D4AF37]">$49.99 <span className="text-sm font-normal text-gray-500">{t('pricing_one_time')}</span></div>
                  </div>
                  <a href="https://kinolu.cam" target="_blank" rel="noopener noreferrer" className="button-3d button-3d-gold text-sm inline-flex items-center gap-2">
                    {t('products_visit')} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Velo Studio */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#89A389] flex items-center justify-center overflow-hidden p-1.5"><Image src="/img/velo-logo.svg" alt="Velo Studio" width={28} height={28} className="w-7 h-7 object-contain brightness-0 invert" /></div>
                    <h3 className="text-2xl font-serif font-bold">{t('product_velo_name')}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 uppercase tracking-wider">{t('products_status_beta')}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{t('product_velo_tagline')}</p>
                  <p className="text-gray-600 text-sm">{t('product_velo_desc')}</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="space-y-2 mb-6">
                    <div className="text-2xl font-bold text-[#D4AF37]">$8<span className="text-sm font-normal text-gray-500">{t('pricing_per_month')}</span></div>
                    <div className="text-sm text-gray-500">$68{t('pricing_per_year')} (save 29%)</div>
                    <div className="text-xs text-gray-400">{t('products_free_trial')} · 7 days</div>
                  </div>
                  <a href="https://velostudio.app" target="_blank" rel="noopener noreferrer" className="button-3d button-3d-gold text-sm inline-flex items-center gap-2">
                    {t('products_visit')} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mood Balloon */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 opacity-75">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#E8A87C] text-white flex items-center justify-center font-bold text-sm">🎈</div>
                    <h3 className="text-2xl font-serif font-bold">{t('product_mood_name')}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 uppercase tracking-wider">{t('products_status_review')}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{t('product_mood_tagline')}</p>
                  <p className="text-gray-600 text-sm">{t('product_mood_desc')}</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="space-y-2 mb-6">
                    <div className="text-2xl font-bold text-gray-300">{t('app_coming_soon')}</div>
                  </div>
                  <span className="px-6 py-3 bg-gray-100 text-gray-400 text-sm font-medium uppercase tracking-wider rounded-full cursor-default inline-block">
                    {t('app_coming_soon')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
