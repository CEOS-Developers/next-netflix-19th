"use client"

import Lottie from "react-lottie-player"
import netflixLanding from "../../public/json/netflixLanding.json"
import { useRouter } from "next/navigation";

export const Landing = () => {
  const router = useRouter();

  return (
    <Lottie
      animationData={netflixLanding}
      play
      style={{ width: 375 }}
      loop={false}
      onComplete={() => router.push("/main")}
    />
  );
};