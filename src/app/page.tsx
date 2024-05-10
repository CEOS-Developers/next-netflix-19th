'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixLanding from './netflixLanding.json'

const LandingPage = () => {
  const router = useRouter();
    
  return (
    <div className="flex justify-center items-center h-screen">
    <Lottie
      loop={false}
      animationData={netflixLanding}
      style={{ width: '300px', height: '300px' }}
      play
      onComplete={() => router.push('/main')}
    />
    
  </div>
  );
};

export default LandingPage;
