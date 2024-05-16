'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    const currentPath = pathname.split('/').pop();
    if (currentPath) {
      setActiveImage(currentPath);
    }
  }, [pathname]);

  useEffect(() => {
    if (activeImage && !pathname.endsWith(`/${activeImage}`)) {
      router.push(`/${activeImage}`);
    }
  }, [activeImage]);

  const handleImageClick = (image: string) => {
    if (activeImage !== image) {
      setActiveImage(image);
    }
  };

  const getImageSrc = (image: string) => {
    return activeImage === image ? `/${image}-active.svg` : `/${image}.svg`;
  };

  return (
    <>
      <div className="flex flex-col fix bottom-0">
        <div className="flex items-center justify-between h-[48px] w-full bg-[#121212] px-[26px] ">
          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('main')}
              alt="Home"
              width={24}
              height={24}
              onClick={() => handleImageClick('main')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Home
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('search')}
              alt="Search"
              width={24}
              height={24}
              onClick={() => handleImageClick('search')}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Search
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('comingsoon')}
              alt="Coming Soon"
              width={20}
              height={20}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Coming Soon
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('download')}
              alt="Download"
              width={16}
              height={19}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              Download
            </span>
          </div>

          <div className="flex flex-col items-center justify-between h-[35px]">
            <Image
              src={getImageSrc('more')}
              alt="More"
              width={21}
              height={17}
            />
            <span className="text-white" style={{ fontSize: '8.2px' }}>
              More
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center h-[31.7px] w-full bg-[#000000]"> {/*모바일에서는숨기기*/}
          <div className="w-[121px] h-[4.5px] bg-white mt-[13.12px]"></div>
        </div>
      </div>
    </>
  );
}
