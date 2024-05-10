"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixLanding from './netflixLanding.json';

const NetflixButton = () => {
    const [play, setPlay] = useState<boolean>(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [audioAndAnimationFinished, setAudioAndAnimationFinished] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && !audio) {
            setAudio(new Audio("/NetflixIntroSound.mp3"));
        }
    }, [audio]);

    useEffect(() => {
        if (play && audio) {
            audio.play().then(() => {
                setAudioAndAnimationFinished(true);
            }).catch((error: Error) => console.error('Playback failed:', error));
        }
    }, [play, audio]);

    const handleClick = () => {
        setIsVisible(false);
        setPlay(true); 
    };

    useEffect(() => {
        if (audioAndAnimationFinished) {
            setTimeout(() => {
                router.push('/main');
            }, 4000);
        }
    }, [audioAndAnimationFinished, router]);

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleClick}
                            style={{
                                width: '150px',
                                height: '150px',
                                backgroundImage: 'url(/logos_netflix-icon.svg)',
                                backgroundSize: 'cover',
                                backgroundColor: 'black',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                                cursor: 'pointer',
                                borderRadius: '20%'
                            }}
                        />
                        <span style={{ color: 'white', fontWeight: '500', marginTop: '10px' }}>
                            Netflix
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
            {play && !isVisible && (
                <Lottie
                    loop={false}
                    animationData={netflixLanding}
                    style={{ width: '300px', height: '300px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    play
                    speed={1.25}
                    onComplete={() => router.push('/main')}
                />
            )}
        </div>
    );
};

export default NetflixButton;






