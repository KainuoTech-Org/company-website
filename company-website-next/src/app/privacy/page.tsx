"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[#1A1A1A]">
          {language === 'en' ? 'Privacy Policy' : language === 'zh-TW' ? '隱私政策' : '隐私政策'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            {language === 'en' 
              ? 'Last updated: December 30, 2025' 
              : language === 'zh-TW' 
              ? '最後更新：2025年12月30日' 
              : '最后更新：2025年12月30日'
            }
          </p>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Information We Collect' : language === 'zh-TW' ? '我們收集的信息' : '我们收集的信息'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.'
                : language === 'zh-TW'
                ? '我們收集您直接提供給我們的信息，例如當您創建帳戶、填寫表格或與我們溝通時。這可能包括您的姓名、電子郵件地址、電話號碼以及您選擇提供的任何其他信息。'
                : '我们收集您直接提供给我们的信息，例如当您创建帐户、填写表格或与我们沟通时。这可能包括您的姓名、电子邮件地址、电话号码以及您选择提供的任何其他信息。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'How We Use Your Information' : language === 'zh-TW' ? '我們如何使用您的信息' : '我们如何使用您的信息'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to personalize your experience.'
                : language === 'zh-TW'
                ? '我們使用收集的信息來提供、維護和改進我們的服務，與您溝通，監控和分析趨勢和使用情況，並個性化您的體驗。'
                : '我们使用收集的信息来提供、维护和改进我们的服务，与您沟通，监控和分析趋势和使用情况，并个性化您的体验。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Information Sharing' : language === 'zh-TW' ? '信息共享' : '信息共享'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.'
                : language === 'zh-TW'
                ? '除本隱私政策中所述或經您同意外，我們不會與第三方共享您的個人信息。'
                : '除本隐私政策中所述或经您同意外，我们不会与第三方共享您的个人信息。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Data Security' : language === 'zh-TW' ? '數據安全' : '数据安全'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.'
                : language === 'zh-TW'
                ? '我們採取合理措施來幫助保護您的個人信息免受丟失、盜竊、濫用、未經授權的訪問、披露、更改和破壞。'
                : '我们采取合理措施来帮助保护您的个人信息免受丢失、盗窃、滥用、未经授权的访问、披露、更改和破坏。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Contact Us' : language === 'zh-TW' ? '聯絡我們' : '联系我们'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'If you have any questions about this Privacy Policy, please contact us at contact@kainuotech.com'
                : language === 'zh-TW'
                ? '如果您對本隱私政策有任何疑問，請通過 contact@kainuotech.com 與我們聯繫'
                : '如果您对本隐私政策有任何疑问，请通过 contact@kainuotech.com 与我们联系'
              }
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-[#D4AF37] hover:text-[#1A1A1A] transition-colors font-medium"
          >
            ← {language === 'en' ? 'Back to Home' : language === 'zh-TW' ? '返回首頁' : '返回首页'}
          </Link>
        </div>
      </div>
    </div>
  );
}

