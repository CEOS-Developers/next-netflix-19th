import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movies";
import playIcon from '@/public/icons/play-circle.svg'

interface SearchListProps {
  movie: Movie;
}

function SearchLists({ movie }: SearchListProps) {
  return (
    <div className="mb-[3px] bg-[#424242]">
        {movie.backdrop_path && (
            <Link href={`/detail/${movie.id}`} className="flex flex-row">
            <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                width={146}
                height = {76}
            />
            <div className="flex flex-row w-full items-center">
                <span className="text-[14.25px] font-normal px-[10px] w-4/5">{movie.title}</span>
                <div className="flex w-1/5 justify-center"><Image src={playIcon} alt="play" width={28} height={28}/></div>
            </div>
            </Link>
        )}
    </div>
  );
}

export default SearchLists;