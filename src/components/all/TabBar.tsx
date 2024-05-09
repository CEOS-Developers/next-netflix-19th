'use client';

import HomeGraySVG from '@public/svg/tabHomeGray.svg';
import HomeWhiteSVG from '@public/svg/tabHomeWhite.svg';
import SearchGraySVG from '@public/svg/tabSearchGray.svg';
import SearchWhiteSVG from '@public/svg/tabSearchWhite.svg';
import CommingSoonGraySVG from '@public/svg/tabCommingSoonGray.svg';
import CommingSoonWhiteSVG from '@public/svg/tabCommingSoonWhite.svg';
import DownloadsGraySVG from '@public/svg/tabDownloadsGray.svg';
import DownloadsWhiteSVG from '@public/svg/tabDownloadsWhite.svg';
import MoreGraySVG from '@public/svg/tabMoreGray.svg';
import MoreWhiteSVG from '@public/svg/tabMoreWhite.svg';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function TabBar() {
  // 해당 path를 받아 필요한 곳에 하얀색으로 만들어주기
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full h-[79.7px] flex flex-col absolute bottom-[0] bg-black">
      <div className="w-full h-[53px] flex justify-around items-center pt-2">
        <div className="tabBarItem" onClick={() => router.push('/main')}>
          {pathname === '/main' ? (
            <HomeWhiteSVG className="tabBarItemSVG" />
          ) : (
            <HomeGraySVG className="tabBarItemSVG" />
          )}
          <span
            className={`tabBarItemSpan ${
              pathname === '/main' ? 'text-white' : 'text-tabBarGray'
            }`}
          >
            Home
          </span>
        </div>

        <div className="tabBarItem" onClick={() => router.push('/search')}>
          {pathname === '/search' ? (
            <SearchWhiteSVG className="tabBarItemSVG" />
          ) : (
            <SearchGraySVG className="tabBarItemSVG" />
          )}
          <span
            className={`tabBarItemSpan ${
              pathname === '/search' ? 'text-white' : 'text-tabBarGray'
            }`}
          >
            Search
          </span>
        </div>

        <div className="tabBarItem" onClick={() => router.push('/commingsoon')}>
          {pathname === '/commingsoon' ? (
            <CommingSoonWhiteSVG className="tabBarItemSVG" />
          ) : (
            <CommingSoonGraySVG className="tabBarItemSVG" />
          )}
          <span
            className={`tabBarItemSpan ${
              pathname === '/commingsoon' ? 'text-white' : 'text-tabBarGray'
            }`}
          >
            Comming Soon
          </span>
        </div>

        <div className="tabBarItem" onClick={() => router.push('/download')}>
          {pathname === '/download' ? (
            <DownloadsWhiteSVG className="tabBarItemSVG" />
          ) : (
            <DownloadsGraySVG className="tabBarItemSVG" />
          )}
          <span
            className={`tabBarItemSpan ${
              pathname === '/download' ? 'text-white' : 'text-tabBarGray'
            }`}
          >
            Downloads
          </span>
        </div>

        <div className="tabBarItem" onClick={() => router.push('/more')}>
          {pathname === '/more' ? (
            <MoreWhiteSVG className="tabBarItemSVG" />
          ) : (
            <MoreGraySVG className="tabBarItemSVG" />
          )}
          <span
            className={`tabBarItemSpan ${
              pathname === '/more' ? 'text-white' : 'text-tabBarGray'
            }`}
          >
            More
          </span>
        </div>
      </div>
      <div className="w-full h-[26.7]"></div>
    </div>
  );
}
