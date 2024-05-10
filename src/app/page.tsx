'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const NetflixButton = dynamic(() => import('../components/NetflixButton'), {
  ssr: false
});

const LandingPage = () => {
    
  return (
    <div className="flex justify-center items-center h-screen bg-black" >
      <div className="flex justify-center items-center"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(60px)',
      }}>          
        <NetflixButton />
      </div>
  </div>
  );
};

export default LandingPage;
