'use client';
import { showingMovie } from '@utils/showingMovieAtom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import SearchMovieCard from './SearchMovieCard';
import { getMovieTopRatedByPageNumber } from '@apis/getMovieNowPlaying';

export default function MovieSection() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(2);
  useEffect(() => {
    searchInputRef.current = document.querySelector<HTMLInputElement>('#input');
  }, []);

  const [showingMovies, setShowingMovies] = useRecoilState(showingMovie);

  useEffect(() => {
    async function fetchMovieData() {
      const res = await getMovieTopRatedByPageNumber(1);
      setShowingMovies(res);
    }
    fetchMovieData();
  }, [setShowingMovies]);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getMovieTopRatedByPageNumber(number);
      const newMovies = res.map((movie: any) => ({
        poster_path: movie.poster_path,
        title: movie.title,
        id: movie.id,
      }));
      setShowingMovies((prev) => [...prev, ...newMovies]);
      setNumber((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to load more movies', error);
    } finally {
      setIsLoading(false);
    }
  }, [number, setShowingMovies]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !isLoading) {
          if (searchInputRef.current && searchInputRef.current.value !== '') {
          } else {
            loadMore();
          }
        }
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, loadMore]);

  return (
    <div className="flex flex-col w-full overflow-scroll gap-1 mb-[86px]">
      {showingMovies.map((movie, idx) => (
        <SearchMovieCard
          key={idx}
          poster_path={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
      <div ref={loaderRef}></div>
    </div>
  );
}
