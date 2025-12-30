"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-[#1A1A1A]">
          {language === 'en' ? 'Terms of Service' : language === 'zh-TW' ? '條款與細則' : '条款与细则'}
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
              {language === 'en' ? 'Acceptance of Terms' : language === 'zh-TW' ? '接受條款' : '接受条款'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
                : language === 'zh-TW'
                ? '通過訪問和使用本網站，您接受並同意受本協議條款和規定的約束。'
                : '通过访问和使用本网站，您接受并同意受本协议条款和规定的约束。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Use of Services' : language === 'zh-TW' ? '服務使用' : '服务使用'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'You agree to use our services only for lawful purposes and in accordance with these Terms of Service.'
                : language === 'zh-TW'
                ? '您同意僅出於合法目的並按照本服務條款使用我們的服務。'
                : '您同意仅出于合法目的并按照本服务条款使用我们的服务。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Intellectual Property' : language === 'zh-TW' ? '知識產權' : '知识产权'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'The content, organization, graphics, design, and other matters related to this website are protected under applicable copyrights and other proprietary laws.'
                : language === 'zh-TW'
                ? '與本網站相關的內容、組織、圖形、設計和其他事項均受適用的版權和其他專有法律保護。'
                : '与本网站相关的内容、组织、图形、设计和其他事项均受适用的版权和其他专有法律保护。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Limitation of Liability' : language === 'zh-TW' ? '責任限制' : '责任限制'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'Kainuo Innovision Tech shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.'
                : language === 'zh-TW'
                ? '凱諾創享科技不對因您使用我們的服務而產生的任何間接、附帶、特殊、後果性或懲罰性損害承擔責任。'
                : '凯诺创享科技不对因您使用我们的服务而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Changes to Terms' : language === 'zh-TW' ? '條款變更' : '条款变更'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.'
                : language === 'zh-TW'
                ? '我們保留隨時修改這些條款的權利。在任何更改後您繼續使用本網站表示您接受新條款。'
                : '我们保留随时修改这些条款的权利。在任何更改后您继续使用本网站表示您接受新条款。'
              }
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-[#1A1A1A]">
              {language === 'en' ? 'Contact Us' : language === 'zh-TW' ? '聯絡我們' : '联系我们'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {language === 'en'
                ? 'If you have any questions about these Terms of Service, please contact us at contact@kainuotech.com'
                : language === 'zh-TW'
                ? '如果您對本服務條款有任何疑問，請通過 contact@kainuotech.com 與我們聯繫'
                : '如果您对本服务条款有任何疑问，请通过 contact@kainuotech.com 与我们联系'
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

