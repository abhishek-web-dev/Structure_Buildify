import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import LayoutContent from '@/components/layout/LayoutContent';

export const metadata: Metadata = {
  title: 'Structure Buildify - Building Your Dreams',
  description: 'Your trusted partner for comprehensive real estate and construction services in Jhansi, Uttar Pradesh.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
