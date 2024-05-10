import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Netflix clone coding',
  icons: {
    icon: '/logo.png',
  },
};
const pretendard = localFont({
  src: '../lib/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        {/* Full */}
        <div className="w-full h-screen flex justify-center items-start overflow-hidden g-gradient-to-r from-gray-300 via-gray-400 to-gray-600">
          {/* Mobile */}
          <div className="md:w-[375px] w-full h-screen  bg-black overflow-hidden relative md:rounded-xl overflow-y-visible scrollbar-hide">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}