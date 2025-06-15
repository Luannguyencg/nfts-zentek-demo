'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navBarMenu } from '@/constants/menu';

type Props = {
  onClose: () => void;
};

export default function MobileNav({ onClose }: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed top-[60px] inset-0 z-40 bg-[#121212] px-4 py-6 flex flex-col md:hidden">
      {/* Menu items */}
      <nav className="flex flex-col gap-4 mt-4 text-white">
        {navBarMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block text-center uppercase w-full text-lg font-semibold px-5 py-3 rounded-full ${
              item.isActive(pathname)
                ? 'bg-[#383A42] text-[#FFC700]'
                : 'hover:bg-[#2a2a2a]'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
