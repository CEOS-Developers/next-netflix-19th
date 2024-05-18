import { LogoIcon } from '@/public/icon';

export default function Header() {
  // 메뉴 항목을 배열로 정의
  const menuItems = ["TV Shows", "Movies", "My List"];

  return (
    <section className="fixed flex justify-between w-full h-[57px] mt-6 pl-4 pr-[21px] z-10">
      <div className="flex w-[56.67px] h-[57px]">
        <LogoIcon />
      </div>
      {menuItems.map((item) => (
        <p
          key={item}
          className="flex flex-col items-center w-fit mt-[12.18px] fonts-headline"
        >
          {item}
        </p>
      ))}
    </section>
  );
}
