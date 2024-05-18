import React from 'react';
import { trendingMovies } from '@/core/trendingMovies';

export default function Trending() {
  return (
    <div className="flex flex-col w-full gap-2 mb-6 py-5 px-2.5">
      <div className="flex justify-between items-center">
        <p className="fonts-smalltitle">실시간 인기 검색어</p>
      </div>
      <div className="flex flex-col mt-3 gap-3 pl-1 fonts-input ">
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <div key={movie.rate} className="flex gap-3">
              <p className="w-[20px]">{movie.rate}</p>
              <p>{movie.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
