import ComingSoon from '@public/svg/tabComingSoonIcon.svg';
import DownLoads from '@public/svg/tabDownloadIcon.svg';
import Home from '@public/svg/tabHomeIcon.svg';
import Search from '@public/svg/tabHomeIcon.svg';
import More from '@public/svg/tabMoreIcon.svg';

export default function TabBar() {
  return (
    <div className="w-full h-[79.7px] flex flex-col">
      <div className="w-full h-[53px] flex justify-evenly items-center">
        <Home className="hover:cursor-pointer" />
        <Search className="hover:cursor-pointer" />
        <ComingSoon className="hover:cursor-pointer" />
        <DownLoads className="hover:cursor-pointer" />
        <More className="hover:cursor-pointer" />
      </div>
      <div className="w-full h-[26.7]"></div>
    </div>
  );
}
