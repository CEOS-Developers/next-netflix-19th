'use client';

import ComingSoon from '@public/svg/tabComingSoonIcon.svg';
import DownLoads from '@public/svg/tabDownloadIcon.svg';
import Home from '@public/svg/tabHomeIcon.svg';
import Search from '@public/svg/tabSearchIcon.svg';
import More from '@public/svg/tabMoreIcon.svg';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function TabBar() {
  // 해당 path를 받아 필요한 곳에 하얀색으로 만들어주기
  const pathname = usePathname();
  const router = useRouter();

  const homeFillClassName = pathname === '/main' ? 'fill-white' : '';

  const searchFillClassName =
    pathname === '/search' ? 'fill-current text-white' : '';
  const comingSoonFillClassName =
    pathname === '/comingsoon' ? 'fill-current text-white' : '';
  const downloadsFillClassName =
    pathname === '/downloads' ? 'fill-current text-white' : '';
  const moreFillClassName =
    pathname === '/more' ? 'fill-current text-white' : '';

  return (
    <div className="w-full h-[79.7px] flex flex-col absolute bottom-[0] bg-black">
      <div className="w-full h-[53px] flex justify-around items-center pt-2">
        <Home
          className={`hover:cursor-pointer ${homeFillClassName}`}
          onClick={() => router.push('/main')}
        />

        <Search
          className={`hover:cursor-pointer ${searchFillClassName}`}
          onClick={() => router.push('/search')}
        />
        <ComingSoon
          className={`hover:cursor-pointer ${comingSoonFillClassName}`}
          onClick={() => router.push('/comingsoon')}
        />
        <DownLoads
          className={`hover:cursor-pointer ${downloadsFillClassName}`}
          onClick={() => router.push('/downloads')}
        />
        <More
          className={`hover:cursor-pointer ${moreFillClassName}`}
          onClick={() => router.push('/more')}
        />
      </div>
      <div className="w-full h-[26.7]"></div>
    </div>
  );
}
