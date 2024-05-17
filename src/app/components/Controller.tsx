'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Top10 from '../../public/icons/top10.svg';
import Plus from '../../public/icons/plus.svg';
import Info from '../../public/icons/info.svg';
import Play from '../../public/icons/play.svg';
import { Movie } from '../types/movies';

interface ControllerProps {
  movies: Movie[];
  currentMovieIndex: number;
}

function Controller({ movies, currentMovieIndex }: ControllerProps) {
  const [rank, setRank] = useState((currentMovieIndex % 10) + 1);

  useEffect(() => {
    setRank((currentMovieIndex % 10) + 1);
  }, [currentMovieIndex]);

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="mb-[43px] flex w-[375px] flex-col items-center">
      <div className="mb-[11px] flex space-x-[5px]">
        <Image src={Top10} alt="top10" width={15} height={15} />
        {currentMovie && (
          <span className="text-cont1 font-bold">
            #{rank} {currentMovie.title}
          </span>
        )}
      </div>
      <div className="flex space-x-[42px]">
        <button className="flex flex-col items-center">
          <Image src={Plus} alt="plus" width={24} height={24} />
          <span className="text-cont2 font-normal">My List</span>
        </button>
        <button className="flex h-11 w-28 cursor-pointer items-center justify-center gap-2.5 rounded-md border-none bg-[#C4C4C4]">
          <Image src={Play} alt="play" width={18} height={21.6} />
          <span className="text-play font-semibold text-[#000000]">Play</span>
        </button>
        <button className="flex flex-col items-center">
          <Image src={Info} alt="info" width={24} height={24} />
          <span className="text-cont2 font-normal">Info</span>
        </button>
      </div>
    </div>
  );
}

export default Controller;
