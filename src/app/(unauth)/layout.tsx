
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ReactNode } from 'react';

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}