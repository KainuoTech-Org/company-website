"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Try to parse error as JSON, fallback to status text
        let errorMessage = 'Failed to send message';
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          try {
            const errData = await response.json();
            errorMessage = errData.message || errorMessage;
          } catch (e) {
            // Ignore parse error and use default
          }
        } else {
          errorMessage = `Server Error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-20 text-[#1A1A1A]">
          {t('contact_title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <p className="text-xl text-gray-600 mb-12 max-w-md">
              {t('contact_intro')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_label_email')}</h3>
                  <a href="mailto:contact@kainuotech.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                    contact@kainuotech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_label_whatsapp')}</h3>
                  <a href="https://wa.me/85293412653" target="_blank" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                    +852 9341 2653
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#D4AF37]">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.067 5.591-.139.558-.505 1.968-.578 2.241-.101.378.14.376.295.27.245-.168 1.652-1.112 2.308-1.555.774.22 1.597.338 2.449.338.358 0 .708-.023 1.053-.061-.03-.238-.052-.479-.052-.724 0-3.924 3.657-7.105 8.168-7.105 1.006 0 1.972.16 2.873.453C18.667 4.88 14.102 2.188 8.691 2.188zm8.019 7.444c-3.692 0-6.686 2.624-6.686 5.86 0 1.968.167 1.83 2.134 3.208-.101.408-.363 1.442-.416 1.641-.073.277.103.275.215.197.179-.123 1.209-.815 1.691-1.14 1.139 1.187 6.643 2.508 8.016 1.229 1.464-1.364 1.732-3.218 1.732-5.135 0-3.236-2.994-5.86-6.686-5.86zM6.216 5.856c.49 0 .886.353.886.79 0 .436-.396.79-.886.79-.49 0-.886-.354-.886-.79 0-.437.396-.79.886-.79zm4.771 0c.49 0 .886.353.886.79 0 .436-.397.79-.886.79-.49 0-.886-.354-.886-.79 0-.437.396-.79.886-.79zM14.6 13.06c-.44 0-.796-.318-.796-.71s.356-.71.796-.71c.44 0 .796.318.796.71s-.356.71-.796.71zm4.275 0c-.44 0-.796-.318-.796-.71s.356-.71.796-.71c.44 0 .796.318.796.71s-.356.71-.796.71z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_label_wechat')}</h3>
                  <p className="text-gray-600">
                    +86 18937380958
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('contact_label_address')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('contact_address_text')}
                  </p>
                  <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.477967923484!2d114.1923483!3d22.3940888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404063630630637%3A0x3063063063063063!2sHopeful%20Factory%20Centre!5e0!3m2!1sen!2shk!4v1629789000000!5m2!1sen!2shk" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4">{t('contact_success_title')}</h3>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    {t('contact_success_desc')}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="button-3d inline-block px-8"
                  >
                    {t('contact_success_btn')}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 w-full" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-500">{t('contact_name_label')}</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name" 
                        required
                        className="w-full px-4 py-3 bg-[#F9F7F2] border-0 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-500">{t('contact_email_label')}</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email" 
                        required
                        className="w-full px-4 py-3 bg-[#F9F7F2] border-0 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-500">{t('contact_subject_label')}</label>
                    <select 
                      id="subject" 
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-[#F9F7F2] border-0 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all appearance-none"
                    >
                      <option value="">{t('contact_subject_placeholder')}</option>
                      <option value="project">{t('contact_subject_project')}</option>
                      <option value="collaboration">{t('contact_subject_collab')}</option>
                      <option value="other">{t('contact_subject_other')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-500">{t('contact_msg_label')}</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[#F9F7F2] border-0 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-3d w-full text-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : t('contact_send_btn')}
                  </button>

                  {error && (
                    <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
