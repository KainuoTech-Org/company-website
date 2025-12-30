"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav_services'), href: '/services' },
    { name: t('nav_works'), href: '/portfolio' },
    { name: t('nav_pricing'), href: '/pricing' },
    { name: t('nav_about'), href: '/about' },
    { name: t('nav_contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-start">
          <img 
            src="/logo.svg" 
            alt="Kainuo" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] ml-1">
            Innovision Tech
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 min-w-[400px] justify-end">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#D4AF37] whitespace-nowrap',
                  pathname === item.href ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-gray-200 pl-8 ml-4">
            <LanguageSwitcher />

            <Link
              href="/contact"
              className="px-6 py-2 bg-[#1A1A1A] text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-[#D4AF37] transition-colors whitespace-nowrap"
            >
              {t('btn_start')}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="p-2 text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#F9F7F2] border-t border-gray-100 shadow-lg md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'text-lg font-medium py-2 border-b border-gray-100 last:border-0',
                    pathname === item.href ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 px-6 py-3 bg-[#1A1A1A] text-white text-center font-medium uppercase tracking-wider rounded-full"
              >
                {t('btn_start')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
