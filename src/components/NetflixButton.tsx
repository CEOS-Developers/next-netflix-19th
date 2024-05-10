"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixLanding from './netflixLanding.json'

const NetflixButton = () => {
    const [play, setPlay] = useState<boolean>(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [audioAndAnimationFinished, setAudioAndAnimationFinished] = useState<boolean>(false);

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
        setPlay(true);
    };

    const handleAnimationComplete = () => {
        setAudioAndAnimationFinished(true);
    };

    useEffect(() => {
        if (audioAndAnimationFinished) {
            setTimeout(() => {
                router.push('/main');
            }, 6000); 
        }
    }, [audioAndAnimationFinished, router]);


    if (play) {
        return (
            <Lottie
                loop={false}
                animationData={netflixLanding}
                style={{ width: '300px', height: '300px' }}
                play
                onComplete={() => router.push('/main')}
        />
        );
    }

    return (
        <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
            }}
            onClick={handleClick}
            style={{
                width: '100px',
                height: '100px',
                backgroundImage: 'url(/logo.png)',
                backgroundSize: 'cover',
                borderRadius: '50%',
                cursor: 'pointer',
            }}
        />
    );
};

export default NetflixButton;