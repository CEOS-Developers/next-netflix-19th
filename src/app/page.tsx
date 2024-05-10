'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const NetflixButton = dynamic(() => import('../components/NetflixButton'), {
  ssr: false
});

const LandingPage = () => {
  const router = useRouter();
    
  return (
    <div className="flex justify-center items-center h-screen">
          <NetflixButton />

  </div>
  );
};

export default LandingPage;
