'use client';

import { contactInfo, footerLinks } from '@/constants/menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-10 px-4 border-t border-[#383A42]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h4 className="font-black uppercase italic mb-4 text-lg">{section.title}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {section.items.map((item, j) => (
                <li key={j}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CONTACT COLUMN */}
        <div>
          <h4 className="font-black italic uppercase mb-4 text-lg">{contactInfo.title}</h4>
          <ul className="space-y-2 text-sm text-white/80 mb-4">
            {contactInfo.emails.map((email, i) => (
              <li key={i}>{email}</li>
            ))}
          </ul>
          <button className="rounded-md hover:bg-[#333] transition">
            <Image src={contactInfo.buttonIcon} alt="Install App" width={150} height={44} />
          </button>
        </div>
      </div>
    </footer>
  );
}
