'use client';

import Lottie from 'react-lottie-player';
import netflixAnimation from './netflixAnimation.json';
import { useRouter } from 'next/navigation';
import FooterLine from '../common/FooterLine';

export default function Landing() {
  const router = useRouter();

  return (
    <div>
      <Lottie
        animationData={netflixAnimation}
        style={{ display: 'flex', width: '100vw', height: '80vh', paddingTop: '8rem' }}
        play
        loop={false}
        onComplete={() => router.push('/home')}
      />
      <FooterLine />
    </div>
  );
}
