"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/img/hero-1.jpg', // Placeholder - will need actual images
    title: 'Digital Craftsmanship',
    subtitle: 'We build bespoke digital products that drive growth.'
  },
  {
    id: 2,
    image: '/img/hero-2.jpg',
    title: 'Web & Mobile Apps',
    subtitle: 'Transforming ideas into scalable, high-performance solutions.'
  },
  {
    id: 3,
    image: '/img/hero-3.jpg',
    title: 'Data Intelligence',
    subtitle: 'Turning complex data into actionable insights.'
  }
];

export default function HeroSlider() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#1A1A1A]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            {/* Note: We'll use a placeholder div with gradient if image is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
               {/* Ideally: <Image src={slide.image} alt={slide.title} fill className="object-cover" priority /> */}
            </div>
            
            <div className="relative z-20 h-full container mx-auto px-6 flex flex-col justify-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light">
                  {slide.subtitle}
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
