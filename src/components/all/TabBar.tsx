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
import TabItem from './TabItem';

export default function TabBar() {
  // 해당 path를 받아 필요한 곳에 하얀색으로 만들어주기
  const pathname = usePathname();

  const tabBarsArray = [
    {
      name: 'Home',
      pathName: '/main',
      currentPath: pathname,
      ActiveIcon: HomeWhiteSVG,
      InactiveIcon: HomeGraySVG,
    },
    {
      name: 'Search',
      pathName: '/search',
      currentPath: pathname,
      ActiveIcon: SearchWhiteSVG,
      InactiveIcon: SearchGraySVG,
    },
    {
      name: 'Comming Soon',
      pathName: '/commingsoon',
      currentPath: pathname,
      ActiveIcon: CommingSoonWhiteSVG,
      InactiveIcon: CommingSoonGraySVG,
    },
    {
      name: 'Downloads',
      pathName: '/download',
      currentPath: pathname,
      ActiveIcon: DownloadsWhiteSVG,
      InactiveIcon: DownloadsGraySVG,
    },
    {
      name: 'more',
      pathName: '/more',
      currentPath: pathname,
      ActiveIcon: MoreWhiteSVG,
      InactiveIcon: MoreGraySVG,
    },
  ];

  return (
    <div className="w-full h-[79.7px] flex flex-col absolute bottom-[0] bg-black">
      <div className="w-full h-[53px] flex justify-around items-center pt-2">
        {tabBarsArray.map((tabBar) => (
          <TabItem key={tabBar.name} {...tabBar} />
        ))}
      </div>
      <div className="w-full h-[26.7]"></div>
    </div>
  );
}
