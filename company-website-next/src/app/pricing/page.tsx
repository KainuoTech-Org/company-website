"use client";

import Link from 'next/link';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();

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
        </div>

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
      </div>
    </div>
  );
}
