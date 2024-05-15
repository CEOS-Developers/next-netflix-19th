import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoilRootProvider from '@utils/RecoilRootProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Songess-seungwan netlix clone by nextJS',
  description:
    'This website is netlix clone coding using nextJS and themovieDB API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon/netflix.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
