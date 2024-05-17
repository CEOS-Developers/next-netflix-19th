import Image from 'next/image';
import { Movie } from '../types/movies';
import Link from 'next/link';

interface MainListProps {
  movies: Movie[];
  itemClass: string;
  isCircular: boolean;
}

const MainLists: React.FC<MainListProps> = ({ movies, itemClass, isCircular }) => {
  return (
    <div className="relative mb-[22px] pl-[12px] mt-[14px] flex w-[375px] overflow-x-auto">
      {movies.map((movie) => {
        if (!movie.backdrop_path) {
          return null;
        }

        const imageSize = isCircular ? '103px' : '161px';

        return (
          <div className="mr-[7px] flex-shrink-0" key={movie.id}>
            <div style={{ width: 103, height: imageSize }}>
              {movie.backdrop_path && (
                <div className={`relative h-full w-full overflow-hidden ${itemClass}`}>
                  {/*영화 이미지 클릭 시 해당 영화의 detail 페이지로 이동*/}
                  <Link href={`/detail/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt={movie.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainLists;
