'use client';

import { featureMenu } from '@/constants/menu';
import Image from 'next/image';

export default function FeatureMenu() {
  return (
    <section className="bg-[#1b1b1b] w-full py-4">
      <div className="flex justify-between max-w-7xl mx-auto px-[8px] md:px-0">
        {featureMenu.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-white min-w-[50px] max-w-[50px] sm:min-w-[100px]"
          >
            <div className="relative w-7 h-7 sm:w-11 sm:h-11">
              <Image
                src={item.icon}
                alt={item.label}
                fill
                className="object-contain"
              />
              {item.isNew && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-md">
                  NEW
                </span>
              )}
            </div>
            <span className="text-[10px] md:text-xs mt-2 text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
