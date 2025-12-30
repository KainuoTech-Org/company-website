"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium border border-gray-200 rounded-full p-1 bg-white/50 backdrop-blur-sm">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full transition-all ${language === 'en' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('zh-TW')}
        className={`px-3 py-1 rounded-full transition-all ${language === 'zh-TW' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
      >
        繁
      </button>
      <button 
        onClick={() => setLanguage('zh-CN')}
        className={`px-3 py-1 rounded-full transition-all ${language === 'zh-CN' ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
      >
        简
      </button>
    </div>
  );
}
