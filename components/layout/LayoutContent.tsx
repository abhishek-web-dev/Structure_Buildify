'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import PopupForm from '@/components/common/PopupForm';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <PopupForm />
    </>
  );
}
