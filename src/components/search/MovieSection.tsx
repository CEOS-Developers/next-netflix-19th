'use client';
import useGetMovieImgAndId from '@hooks/useGetMovieImg';
import useGetMovieImgAndTitleAndId from '@hooks/useGetMovieImgAndTitle';
import { showingMovie } from '@utils/showingMovieAtom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import SearchMovieCard from './SearchMovieCard';

export default function MovieSection() {
  const [showingMovies, setShowingMovies] = useRecoilState(showingMovie);
  useEffect(() => {
    async function fetchMovieData() {
      const { getMovieTopRatedImgAndTitle } =
        await useGetMovieImgAndTitleAndId();
      setShowingMovies(getMovieTopRatedImgAndTitle);
    }
    fetchMovieData();
  }, []);
  return (
    <div className="flex flex-col w-full overflow-scroll gap-1 mb-[86px]">
      {showingMovies.map((movie, idx) => {
        return (
          <SearchMovieCard
            key={idx}
            poster_path={movie.poster_path}
            title={movie.title}
            id={movie.id}
          />
        );
      })}
    </div>
  );
}
