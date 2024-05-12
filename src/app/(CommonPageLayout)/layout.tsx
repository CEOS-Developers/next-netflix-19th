import TabBar from '@components/all/TabBar';
import HomeIndicatorBar from '@components/all/HomeIndicatorBar';

export default function CommonPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-full relative">
      {children}
      <TabBar />
      <HomeIndicatorBar />
    </div>
  );
}
