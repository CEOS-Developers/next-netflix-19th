import TabBar from '@components/all/TabBar';
import HomeIndicatorBar from '@components/all/HomeIndicatorBar';

export default function MoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-full relative">
      <main className="flex-1 w-full overflow-y-scroll">{children}</main>
      <TabBar />
      <HomeIndicatorBar />
    </div>
  );
}
