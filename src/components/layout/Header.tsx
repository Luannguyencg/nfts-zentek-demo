'use client';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { navBarMenu } from "../../constants/menu";
import Button from '../ui/Button';
import MobileNav from '../navigation/MobileNav';
// import MobileNav from '../navigation/MobileNav';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu)
  }, [isOpenMenu])

  return (
    <header className="sticky top-0 z-50 shadow-md bg-black text-white flex justify-between px-5 py-4 md:px-10 md:py-5 items-center h-[60px] md:h-20">
      <div className="flex md:hidden">
        <button onClick={toggleMobileMenu} className="cursor-pointer">
          <Image
            src={isOpenMenu ? "/icons/close-icon.svg" : "/icons/menu-mobile.svg"}
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
        <Link href="/" className="mx-6">
          <Image
            aria-hidden
            src="/images/zentek-logo.svg"
            alt="File icon"
            width={71}
            height={39}
          />
        </Link>
      </div>
      <nav className="hidden md:flex">
        <Link href="/" className="mr-6">
          <Image
            aria-hidden
            src="/images/zentek-logo.svg"
            alt="File icon"
            width={71}
            height={39}
          />
        </Link>
        {navBarMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`w-20 h-10 rounded-3xl flex items-center justify-center ${item.isActive(pathname) ? "text-[#FFC700] bg-[#383A42]" : ""
              } hover:bg-gray-600`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-center gap-2">
        <Button variant="primary">SIGN UP</Button>
        <Button variant="secondary">LOG IN</Button>
      </div>
      {isOpenMenu && (
        <MobileNav onClose={() => setIsOpenMenu(false)} />
      )}
    </header>
  );
}
