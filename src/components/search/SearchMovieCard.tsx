import Image from 'next/image';
import PlayCircle from '@public/svg/playCircle.svg';
import Link from 'next/link';

interface SearchMovieCardProps {
  poster_path: string;
  title: string;
  id: string;
}

export default function SearchMovieCard({
  poster_path,
  title,
  id,
}: SearchMovieCardProps) {
  return (
    <Link
      className="w-full h-[76px] flex bg-[#424242] cursor-pointer"
      href={`/movie-detail/${id}`}
    >
      <div className="w-[146px] h-[76px] overflow-hidden relative shrink-0">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex p-3 justify-between items-center w-full">
        <span className="text-[14px] leading-[30px]">{title}</span>
        <PlayCircle className="shrink-0" />
      </div>
    </Link>
  );
}
