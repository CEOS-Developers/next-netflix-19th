'use client';
import Image from 'next/image';
import { useState, useCallback } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = useCallback((menu: string) => {
    setActiveMenu(menu);
  }, []);

  const menuItems = [
    { name: 'tvshows', label: 'TV Shows' },
    { name: 'movies', label: 'Movies' },
    { name: 'mylist', label: 'My List' },
  ];


  return (
    <header className="flex items-center justify-center h-16 px-6 bg-transparent text-white mt-4 mr-2 absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        <Image src="/logos_netflix-icon.svg" alt="Logo" width={56.67} height={57} />
        {menuItems.map((item) => (
          <span
            key={item.name}
            className={`text-white cursor-pointer ${activeMenu === item.name ? 'font-semibold' : 'hover:text-white'}`}
            onClick={() => handleMenuClick(item.name)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </header>
  );
}
