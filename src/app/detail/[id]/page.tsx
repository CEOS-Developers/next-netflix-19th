'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchDiscoverMovie } from '@/lib/actions';
import { FetchData } from '@/lib/types';
import Image from 'next/image';

const MovieDetail = () => {
  const { id } = useParams() as { id: string };
  const [movie, setMovie] = useState<FetchData['results'][0] | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchMovie = async () => {
      const data = await fetchDiscoverMovie(`/movie/${id}`);
      console.log('Fetched Movie Data:', data); // 로그 추가
      setMovie(data);
    };
    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (!isClient || !movie) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white">
      <div className="relative w-full h-[415px] overflow-hidden mb-4">
        <div className="relative w-full h-full">
        <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            fill
            style={{ objectFit: 'cover' }}
            alt={movie.title}
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
      </div>
      <div className="flex flex-col mx-5 my-3">
        <div className="mb-8 px-1">
          <button className="flex flex-col items-center justify-center bg-customGray rounded-lg w-full hover:bg-gray-400 py-2">
            <Image src="/play.svg" alt="Play Video" width={72} height={30} />
          </button>
        </div>
        <h1 className="text-[26.75px] font-bold leading-[20px] mb-6">Previews</h1>
        <p className="text-[11.14px] text-left">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
