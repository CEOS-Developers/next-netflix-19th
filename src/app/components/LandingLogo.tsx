"use client";

import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import netflix from "../../public/icons/netflix-landing.json";

const LandingLogo = () => {
  const router = useRouter();
  return (
    <Lottie
      animationData={netflix}
      style={{ width: "60%" }}
      play
      loop={false}
      onComplete={() => router.push("/main")}
    />
  );
};

export default LandingLogo;
