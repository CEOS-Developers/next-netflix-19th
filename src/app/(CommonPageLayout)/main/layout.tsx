import MainHeader from '@components/main/MainHeader';
import HomeIndicatorBar from '@components/all/HomeIndicatorBar';
import TabBar from '@components/all/TabBar';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex items-center justify-center absolute top-[24px]">
        <MainHeader />
      </div>
      <main className="flex-1 w-full overflow-y-scroll">{children}</main>
    </>
  );
}
