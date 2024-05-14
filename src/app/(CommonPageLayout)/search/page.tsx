import SearchInput from '@components/search/SearchInput';
import SearchMovieCard from '@components/search/SearchMovieCard';
import useGetMovieImgAndTitle from '@hooks/useGetMovieImgAndTitle';

export default async function SearchPage() {
  const { getMovieTopRatedImgAndTitle } = await useGetMovieImgAndTitle();
  return (
    <section className="w-full h-full flex flex-col gap-5">
      <SearchInput />
      <h1 className="text-[26px] leading-[20px] tracking-[-0.07px] p-[10px] font-bold">
        Top Searches
      </h1>
      <div className="flex flex-col w-full overflow-scroll gap-1 mb-[86px]">
        {getMovieTopRatedImgAndTitle.map((movie, idx) => {
          return (
            <SearchMovieCard
              key={idx}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          );
        })}
      </div>
    </section>
  );
}
