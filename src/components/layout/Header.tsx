"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <header className="flex items-center justify-center h-16 px-6 bg-transparent text-white mt-4 mr-2">
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        <Image src="/logos_netflix-icon.svg" alt="Logo" width={56.67} height={57} />
        <span
          className={activeMenu === 'tvshows' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white cursor-pointer'}
          onClick={() => handleMenuClick('tvshows')}
        >
          TV Shows
        </span>
        <span
          className={activeMenu === 'movies' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white cursor-pointer'}
          onClick={() => handleMenuClick('movies')}
        >
          Movies
        </span>
        <span
          className={activeMenu === 'mylist' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white cursor-pointer'}
          onClick={() => handleMenuClick('mylist')}
        >
          My List
        </span>
      </div>
    </header>
  );
}
