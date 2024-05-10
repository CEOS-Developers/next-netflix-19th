'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import NetflixButton from '../components/NetflixButton';


const LandingPage = () => {
  const router = useRouter();
    
  return (
    <div className="flex justify-center items-center h-screen">
          <NetflixButton />

  </div>
  );
};

export default LandingPage;
