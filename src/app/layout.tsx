import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar'; 

export const metadata: Metadata = {
  title: 'next-netflix-19',
  description: 'ceos19',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
