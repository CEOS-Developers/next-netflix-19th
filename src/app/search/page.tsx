import Footer from '@/components/layout/Footer';


export default async function Search() {
   return (
    <div className="flex flex-col h-screen" >
      <div className="flex-1 overflow-auto scrollbar-hide">
        <h1 className="text-white">검색페이지!</h1>
      </div>
      <Footer />
    </div>
  );
}