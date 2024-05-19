'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixLanding from './netflixLanding.json';

const NetflixButton = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/NetflixIntroSound.mp3');
    }
  }, []);


  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play().catch((error: Error) => {
        console.error('Playback failed:', error);
      });
    }
  }, [play]);

  const handleClick = () => {
    setIsVisible(false);
    setPlay(true);
  };

  const handleAnimationComplete = () => {
      router.push('/main');
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              className="w-[150px] h-[150px] bg-black cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClick}
              style={{
                backgroundImage: 'url(/logos_netflix-icon.svg)',
                backgroundSize: 'cover',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                borderRadius: '20%',
              }}
            />
            <span className="text-white font-semibold mt-2 text-lg">Netflix</span>
          </motion.div>
        )}
      </AnimatePresence>
      {play && !isVisible && (
        <Lottie
          loop={false}
          animationData={netflixLanding}
          className="w-[300px] h-[300px] absolute top-1/2 left-1/2"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          play
          speed={1.25}
          onComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
};

export default NetflixButton;
