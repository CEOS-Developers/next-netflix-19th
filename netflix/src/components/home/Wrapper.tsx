'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { getNowPlayingMovie, getPopularMovie, getTopRatedMovie, getUpComingMovie, getTrendingMovie, getHorrorMovie } from '@/api/getMovies';
import { MovieTypes } from '@/types/Movie';

interface WrapperProps {
  title: string;
  fetchType: string; 
}

export default function Wrapper(props: WrapperProps) {
  const { title, fetchType } = props;
  const [movies, setMovies] = useState<MovieTypes[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieFetchFunctions: { [key: string]: Function } = {
          nowPlaying: getNowPlayingMovie,
          popular: getPopularMovie,
          topRated: getTopRatedMovie,
          upComing: getUpComingMovie,
          trending: getTrendingMovie,
          horror: getHorrorMovie,
        };

        // fetchType에 해당하는 함수를 호출하거나, 기본값으로 getPopularMovie을 사용
        const fetchFunction = movieFetchFunctions[fetchType] || movieFetchFunctions.popular;

        const response = await fetchFunction();
        setMovies(response);
        return response;
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [fetchType]);

  return (
    <section className="flex flex-col h-[191px] w-[100%] gap-3.5 pl-3 mb-[22px]">
      <p className="ml-1 fonts-smalltitle">{title}</p>
      <div className="flex gap-2 overflow-auto">
        {movies.map((movie) => (
          <Link 
            key={movie.id} 
            href={`/details/${movie.id}`} 
            passHref
          >
            <div className="min-w-[103px] h-[161px] relative object-cover cursor-pointer">
              <Image
                fill
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title || 'title'} 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}