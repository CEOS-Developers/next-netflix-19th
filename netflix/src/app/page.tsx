import dynamic from 'next/dynamic';

export default function page() {
  const Landing = dynamic(() => import('@/components/lottie/Landing'), {
    ssr: false,
  });

  return <Landing />;
}
