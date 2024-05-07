import MainHeader from "../components/MainHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col h-screen w-[375px]">
          <MainHeader />
        <main className="flex-1 w-full">{children}</main>
        <footer className="bg-transparent w-full flex justify-center items-center">
          <h1>Footer</h1>
        </footer>
      </div>
    </section>
  );
}