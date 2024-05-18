'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  ComingsoonIcon,
  DownloadIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  MoreIcon,
  SearchActiveIcon,
  SearchInactiveIcon,
} from '@/public/icon';
import FooterBtn from './FooterBtn';

export default function FooterNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return null;

  return (
    <section className="flex justify-evenly absolute bottom-[31.7px] w-[100%] h-12 pt-1.5 bg-footericon-black">
      <FooterBtn text="Home" isCurrentPage={pathname === '/home'} handleFooterBtn={() => router.push('/home')}>
        {pathname === '/home' ? <HomeActiveIcon /> : <HomeInactiveIcon />}
      </FooterBtn>
      <FooterBtn text="Search" isCurrentPage={pathname === '/search'} handleFooterBtn={() => router.push('/search')}>
        {pathname === '/search' ? <SearchActiveIcon /> : <SearchInactiveIcon />}
      </FooterBtn>
      <FooterBtn text="Coming Soon" isCurrentPage={pathname === '/comingsoon'}>
        <ComingsoonIcon />
      </FooterBtn>
      <FooterBtn text="Downloads" isCurrentPage={pathname === '/downloads'}>
        <DownloadIcon />
      </FooterBtn>
      <FooterBtn text="More" isCurrentPage={pathname === '/more'}>
        <MoreIcon />
      </FooterBtn>
    </section>
  );
}
