'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef } from 'react';
import { nfts } from '@/constants/slider';

export default function NewCollections() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="bg-[#121212] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-yellow-400 text-[24px] md:text-[32px] uppercase italic font-black">New NFT Collections</h2>
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="swiper-prev-btn w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#333] text-white text-sm flex items-center justify-center cursor-pointer">
              <Image
                src={"/icons/prev-btn.svg"}
                alt={`Previous`}
                width={8}
                height={14}
              />
            </button>
            <button
              ref={nextRef}
              className="swiper-next-btn w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#333] text-white text-sm flex items-center justify-center cursor-pointer">
              <Image
                src={"/icons/next-btn.svg"}
                alt={`Next`}
                width={8}
                height={14}
              />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={3.4}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 16 },
            768: { slidesPerView: 4.2 },
            1024: { slidesPerView: 5.2 },
          }}
          onInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== 'boolean' &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="relative"
        >
          {nfts.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1f1f1f] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`NFT ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
