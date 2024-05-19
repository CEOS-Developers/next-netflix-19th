'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const NetflixButton = dynamic(() => import('../components/NetflixButton'), {
  ssr: false,
});

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-black ">
      <div className="flex justify-center items-center ">
        <NetflixButton />
      </div>
    </div>
  );
};

export default LandingPage;
