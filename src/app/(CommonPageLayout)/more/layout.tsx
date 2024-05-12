export default function MoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-1 w-full overflow-y-scroll">{children}</main>;
}
