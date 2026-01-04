"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  image: string;
  url: string;
  description: string;
  noScroll?: boolean;
  isRealProject?: boolean;
}

interface ProjectPreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectPreviewModal({ project, isOpen, onClose }: ProjectPreviewModalProps) {
  const { t } = useLanguage();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[85vh] bg-[#F9F7F2] shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row rounded-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Image Section - Scrollable on mobile, Fixed on Desktop */}
            <div className="w-full md:w-2/3 h-1/2 md:h-auto relative bg-gray-100 overflow-hidden group">
               <div 
                 className={`w-full h-full ${project.noScroll ? 'overflow-hidden flex items-center justify-center' : 'overflow-y-auto custom-scrollbar'}`}
                 style={{ scrollBehavior: 'smooth' }}
               >
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className={`${project.noScroll ? 'w-full h-full object-contain p-4' : 'w-full h-auto object-cover'}`} 
                 />
               </div>
               
               {/* Overlay Hint */}
               {!project.noScroll && (
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 Scroll to view full design
               </div>
               )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col bg-white border-l border-gray-100">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A] leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3 text-sm text-[#D4AF37] font-semibold tracking-wider uppercase">
                    <CheckCircle2 size={16} />
                    <span>{t('proj_status_latest')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                {project.url !== '#' ? (
                         <a
                           href={project.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-2 w-full py-4 bg-[#1A1A1A] text-white font-medium uppercase tracking-wider hover:bg-[#D4AF37] transition-all duration-300 rounded-lg group"
                         >
                           <span>{project.isRealProject ? t('btn_visit_site') : t('btn_visit_live')}</span>
                           <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                         </a>
                ) : (
                  <button disabled className="flex items-center justify-center gap-2 w-full py-4 bg-gray-200 text-gray-400 font-medium uppercase tracking-wider rounded-lg cursor-not-allowed">
                    <span>{t('app_coming_soon')}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

