'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar'; // 경로는 실제 Navbar 컴포넌트의 위치에 따라 조정하세요

export default function Home() {
  const LandingLogo = dynamic(() => import('./components/LandingLogo'), {
    ssr: false,
  });

  const pathname = usePathname();

  const isRoot = pathname === '/'; // 루트 페이지 경로 확인

  return (
    <div className="flex justify-center">
      <LandingLogo />
    </div>
  );
}
