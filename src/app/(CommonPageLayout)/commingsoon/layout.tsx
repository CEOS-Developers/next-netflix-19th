import TabBar from '@components/all/TabBar';
import HomeIndicatorBar from '@components/all/HomeIndicatorBar';

export default function CommingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-1 w-full overflow-y-scroll">{children}</main>;
}
