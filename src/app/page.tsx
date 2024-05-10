// components/LandingPage.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '@dotlottie/player-component';

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main');  // 메인 페이지로 리디렉션!
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <dotlottie-player
        src="https://lottie.host/9ff03e8b-41e2-44e6-889f-38028549e162/0iEaJMZOVi.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default LandingPage;
