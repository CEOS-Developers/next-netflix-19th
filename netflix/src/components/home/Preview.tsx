import Link from "next/link";
import Image from 'next/image';
import { getNowPlayingMovie } from '@/api/getMovies';
import { MovieTypes } from '@/types/Movie';

export default async function Preview() {
  const movies = await getNowPlayingMovie();

  return (
    <section className="flex flex-col h-[145px] w-[100%] gap-[23px] pl-3 mt-[43px] mb-[28px]">
      <p className="fonts-bigtitle">Previews</p>
      <div className="flex gap-2 overflow-auto">
        {movies.map((movie: MovieTypes) => (
          <Link 
          key={movie.id} 
          href={`/details/${movie.id}`} 
          passHref
          >
            <div className="min-w-[102px] h-[102px] relative object-cover rounded-full overflow-hidden cursor-pointer">
              <Image
                fill
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
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
