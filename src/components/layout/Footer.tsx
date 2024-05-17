'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    const currentPath = pathname.split('/').pop();
    if (currentPath && currentPath !== activeImage) {
      setActiveImage(currentPath);
    }
  }, [pathname, activeImage]);

  const handleImageClick = useCallback(
    (image: string) => {
      if (activeImage !== image) {
        setActiveImage(image);
        router.push(`/${image}`);
      }
    },
    [activeImage, router]
  );

  const getImageSrc = useCallback(
    (image: string) => (activeImage === image ? `/${image}-active.svg` : `/${image}.svg`),
    [activeImage]
  );

  const menuItems = [
    { name: 'main', label: 'Home', width: 24, height: 24 },
    { name: 'search', label: 'Search', width: 24, height: 24 },
    { name: 'comingsoon', label: 'Coming Soon', width: 20, height: 20 },
    { name: 'download', label: 'Download', width: 16, height: 19 },
    { name: 'more', label: 'More', width: 21, height: 17 },
  ];

  return (
    <>
      <div className="flex flex-col fix bottom-0">
        <div className="flex items-center justify-between h-[48px] w-full bg-[#121212] px-[26px]">
          {menuItems.map((item) => (
            <div key={item.name} className="flex flex-col items-center justify-between h-[35px]">
              <Image
                src={getImageSrc(item.name)}
                alt={item.label}
                width={item.width}
                height={item.height}
                onClick={() => handleImageClick(item.name)}
              />
              <span className="text-white" style={{ fontSize: '8.2px' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center h-[31.7px] w-full bg-[#000000]">
          {/*모바일에서는숨기기*/}
          <div className="w-[121px] h-[4.5px] bg-white mt-[13.12px]"></div>
        </div>
      </div>
    </>
  );
}
