'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef } from 'react';
import { nftDropsCalendar } from '@/constants/slider';
import Promotions from './Promotions';
import HotNFTs from './HotNFTs';

export default function NFTDropsCalendar() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#121212] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 items-start justify-between flex-wrap gap-y-[36px]">
          <div className="relative w-full md:w-[600px]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-yellow-400 text-[24px] md:text-[32px] uppercase italic font-black">
                NFT DROPS CALENDAR
              </h2>
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
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
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
            >
              {nftDropsCalendar.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl overflow-hidden border-2 bg-white">
                    <Image
                      src={src}
                      alt={`NFT Drop ${index + 1}`}
                      width={600}
                      height={240}
                      className="object-cover h-auto w-full md:h-[240px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 🔥 HOT NFT + 🎯 PROMOTION */}
          <div className="flex flex-row gap-6">
            <HotNFTs />
            <Promotions />
          </div>
        </div>
      </div>
    </section>
  );
}
