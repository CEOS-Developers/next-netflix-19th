'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '@dotlottie/player-component';

const LandingPage = () => {
  const router = useRouter();
  const [fadeEffect, setFadeEffect] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeEffect('opacity-0');
      setTimeout(() => router.push('/main'), 1000);  // 1초 후에 메인 페이지로 리디렉션!
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`flex justify-center items-center h-screen transition-opacity duration-1000 ${fadeEffect}`}>
      <dotlottie-player
        src="https://lottie.host/9ff03e8b-41e2-44e6-889f-38028549e162/0iEaJMZOVi.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        autoplay
      />
    </div>
  );
};

export default LandingPage;
