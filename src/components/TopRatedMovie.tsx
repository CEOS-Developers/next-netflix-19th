import { TopRatedProps } from '@/lib/types';
import Image from 'next/image';
import Play from './layout/Play';
import Link from 'next/link';

export default function TopRatedMovies({ fetchData }: TopRatedProps) {
  const top10Movies = fetchData.results.slice(0, 10);
  const randomIndex = Math.floor(Math.random() * top10Movies.length);
  const movie = top10Movies[randomIndex];
  
  return (
    <div className="w-full">
      <div className="text-center relative w-full h-[415px] overflow-hidden">
        <Link href={`/detail/${movie.id}`}>
          <div className="relative w-full h-full cursor-pointer block">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fill
              style={{ objectFit: 'cover' }}
              alt={movie.title}
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
        </Link>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex items-center justify-center space-x-2">
            <Image src="/Top10Icon.svg" alt="Top 10 Icon" width={15} height={15} />
            <span className="text-white font-bold text-[13.72px] leading-[20px] tracking-[-0.041em]">
              #{randomIndex + 1} in Korea
            </span>
          </div>
        </div>
      </div>
      <Play />
    </div>
  );
}
