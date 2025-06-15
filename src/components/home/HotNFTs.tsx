'use client';

import Image from 'next/image';

export default function HotNFTs() {
  return (
    <div className="flex flex-col">
      <h2 className="text-yellow-400 text-[24px] md:text-[32px] uppercase italic font-black mb-5">
        HOT NFT
      </h2>
      <div className="rounded-xl overflow-hidden bg-[#1f1f1f]">
        <Image
          src="/images/hot-nft.svg"
          alt="Hot NFT"
          width={240}
          height={240}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
