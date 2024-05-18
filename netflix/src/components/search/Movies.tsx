import { PlayCircleIcon } from '@/public/icon';
import Image from 'next/image';
import { MovieTypes } from '@/types/Movie';

interface MoviesProps {
  searchedMovies: MovieTypes[];
}

export default function Movies({ searchedMovies }: MoviesProps) {
  return (
    <div className="flex flex-col w-full gap-2 mb-6">
      {searchedMovies &&
        searchedMovies.map((movie: MovieTypes) => (
          <div key={movie.id} className="flex bg-search-gray">
            <article className={'w-[300px] h-[140px] overflow-hidden relative shrink-0 rounded-r-lg'}>
              {movie.poster_path && (
                <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              )}
            </article>
            <div className="flex justify-between items-center w-full px-4">
              <p className="fonts-searched">{movie.title}</p>
              <PlayCircleIcon />
            </div>
          </div>
        ))}
    </div>
  );
}
