'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { slides } from '../../constants/slider';

export default function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[180px] sm:h-[350px] lg:h-[450px] 2xl:h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover 2xl:hidden"
                priority
              />
              <Image
                src={slide.imageDestop}
                alt={slide.title}
                fill
                className="object-cover hidden 2xl:block"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 sm:w-6 h-1 rounded-full border transition-all ${
              activeIndex === index
                ? 'bg-yellow-400 border-yellow-400 scale-125'
                : 'bg-transparent border-white opacity-50 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
