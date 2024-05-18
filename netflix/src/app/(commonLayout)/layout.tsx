import FooterLine from '@/components/common/FooterLine';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="children-container">
      {children}
      <FooterLine />
    </section>
  );
}
