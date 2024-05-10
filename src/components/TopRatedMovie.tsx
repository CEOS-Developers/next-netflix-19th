import { TopRatedProps } from '@/lib/types';
import Image from 'next/image';
import Play from './layout/Play';


export default function TopRatedMovies({ fetchData }: TopRatedProps) {
  return (
    
    <div className="w-full ">
  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {fetchData.results.slice(0, 10).map((movie, index) => (
          <div key={index} className="snap-center inline-block w-full min-w-full">
            <div className="text-center relative w-full h-[415px] overflow-hidden">
              <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  layout="fill"
                  objectFit="cover"
                  alt={movie.title}
                />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/Top10Icon.svg" alt="Top 10 Icon" width={15} height={15} />
                  <span className="text-white font-bold text-[13.72px] leading-[20px] tracking-[-0.041em]">
                    #{index + 1} {movie.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Play />
    </div>
  );
}