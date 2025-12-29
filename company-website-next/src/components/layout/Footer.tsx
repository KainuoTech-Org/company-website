import Link from 'next/link';
import { navigation, socialLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold mb-6 block">
              Kainuo Innovision
            </Link>
            <p className="text-gray-400 max-w-md">
              Digital craftsmanship for business growth. We build bespoke websites and applications that transform your vision into reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#D4AF37]">Explore</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#D4AF37]">Connect</h4>
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
          <p>&copy; {currentYear} Kainuo Innovision Tech Co., Limited. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
