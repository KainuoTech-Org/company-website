"use client";

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ProjectPreviewModal from '@/components/portfolio/ProjectPreviewModal';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'web' | 'app'>('web');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const projects = [
    {
      id: 'retroloop',
      title: t('web_proj4_title'),
      category: t('tag_vintage'),
      type: 'web',
      image: '/img/retroloop-long.png',
      url: 'https://retroloop.vercel.app/',
      description: t('web_proj4_desc')
    },
    {
      id: 'moment-cafe',
      title: t('web_proj3_title'),
      category: t('tag_fnb'),
      type: 'web',
      image: '/img/moment-cafe-long.png',
      url: 'https://moment-cafe.vercel.app/',
      description: t('web_proj3_desc')
    },
    {
      id: 'natura',
      title: t('web_proj8_title'),
      category: t('tag_beauty'),
      type: 'web',
      image: '/img/natura-long.png',
      url: 'https://05-natura-beauty.vercel.app',
      description: t('web_proj8_desc')
    },
    {
      id: 'lumina',
      title: t('web_proj7_title'),
      category: t('tag_healthcare'),
      type: 'web',
      image: '/img/lumina-long.png',
      url: 'https://04-lumina-dental.vercel.app',
      description: t('web_proj7_desc')
    },
    {
      id: 'novatrix',
      title: t('web_proj5_title'),
      category: t('tag_tech'),
      type: 'web',
      image: '/img/novatrix-long.png',
      url: 'https://01-tech-saas.vercel.app',
      description: t('web_proj5_desc')
    },
    {
      id: 'harbour-trade',
      title: t('web_proj1_title'),
      category: t('tag_corporate'),
      type: 'web',
      image: '/img/harbour-trade-long.png',
      url: 'https://demo-trade.kainuotech.com/',
      description: t('web_proj1_desc')
    },
    {
      id: 'flow-space',
      title: t('web_proj2_title'),
      category: t('tag_studio'),
      type: 'web',
      image: '/img/flow-space-long.png',
      url: 'https://flow.kainuotech.com/',
      description: t('web_proj2_desc')
    },
    {
      id: 'aurelius',
      title: t('web_proj6_title'),
      category: t('tag_legal'),
      type: 'web',
      image: '/img/aurelius-long.png',
      url: 'https://02-aurelius-legal-v2.vercel.app',
      description: t('web_proj6_desc')
    },
    {
      id: 'vault-capital',
      title: t('web_proj9_title'),
      category: t('tag_finance'),
      type: 'web',
      image: '/img/vault-capital-long.png',
      url: 'https://03-vault-capital.vercel.app',
      description: t('web_proj9_desc')
    },
    {
      id: 'mood-balloon',
      title: 'Mood Balloon',
      category: t('nav_mobile'),
      type: 'app',
      image: '/img/mood-balloon.jpg', 
      url: '#', 
      description: t('app_mood_desc'),
      noScroll: true
    }
  ];

  const filteredProjects = projects.filter(p => p.type === filter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-[#1A1A1A]">
            {t('works_title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
            {t('works_subtitle')}
          </p>
          
          {/* Filter Tabs */}
          <div className="flex gap-8 border-b border-gray-200">
            <button 
              onClick={() => setFilter('web')}
              className={`pb-4 text-lg font-bold transition-colors relative ${filter === 'web' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {t('cat_web')}
              {filter === 'web' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] rounded-t-full" />
              )}
            </button>
            <button 
              onClick={() => setFilter('app')}
              className={`pb-4 text-lg font-bold transition-colors relative ${filter === 'app' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {t('cat_app')}
              {filter === 'app' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] rounded-t-full" />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Card with Scroll Effect */}
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-6 relative shadow-sm border border-gray-100">
                <div className="w-full h-full overflow-hidden relative">
                  {/* Scrolling Image */}
                  <div 
                    className={`w-full absolute top-0 left-0 transition-transform duration-[3000ms] ease-in-out ${project.noScroll ? '' : 'group-hover:translate-y-[calc(-100%+300px)]'}`}
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: project.noScroll ? 'center' : 'top center',
                      height: project.noScroll ? '100%' : '400%', // Assume long image is roughly 4x the card height
                      width: '100%'
                    }}
                  >
                    {/* Fallback img tag if bg image fails or for SEO, but hidden */}
                    <img src={project.image} alt={project.title} className="opacity-0 w-full h-full object-cover" />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4AF37] hover:text-white shadow-lg z-10">
                   <ExternalLink size={20} />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectPreviewModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
