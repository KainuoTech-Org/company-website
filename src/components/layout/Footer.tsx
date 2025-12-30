"use client";

import Link from 'next/link';
import { navigation, socialLinks } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold mb-6 block">
              {t('nav_brand')}
            </Link>
            <p className="text-gray-400 max-w-md">
              {t('about_subtitle')}. {t('about_p1')}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="border border-gray-700 rounded px-3 py-1.5 flex items-center gap-2 bg-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-gray-300">
                  D-U-N-S® Registered
                </span>
                <span className="text-[#D4AF37] text-xs font-mono ml-1">77-331-5956</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#D4AF37]">{t('footer_explore')}</h4>
            <ul className="space-y-3">
              {navigation.map((item: any) => (
                <li key={item.key}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#D4AF37]">{t('footer_connect')}</h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-6">
                <a 
                  href="mailto:contact@kainuotech.com" 
                  className="text-white font-medium border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors"
                >
                  contact@kainuotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {t('footer_copyright')}. {t('footer_rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">{t('footer_privacy')}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t('footer_terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
