import MovieSection from '@components/search/MovieSection';
import SearchInput from '@components/search/SearchInput';

export default async function SearchPage() {
  return (
    <section className="w-full h-full flex flex-col gap-5">
      <SearchInput />
      <h1 className="text-[26px] leading-[20px] tracking-[-0.07px] p-[10px] font-bold">
        Top Searches
      </h1>
      <MovieSection />
    </section>
  );
}
