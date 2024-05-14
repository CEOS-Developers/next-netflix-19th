import PreviewImage from './PreviewImage';
import { movieInfo } from 'types/movie';

interface CardSectionProps {
  title: string;
  movieList: movieInfo[];
}

export default function CardSection({ title, movieList }: CardSectionProps) {
  return (
    <section className="w-full flex flex-col gap-[14px] my-[11px]">
      <p
        className={
          title === 'Previews'
            ? 'text-[26px] leading-[20px] px-4 font-[700]'
            : 'text-[20px] leading-[15px] px-4 font-[700]'
        }
      >
        {title}
      </p>
      <div className="overflow-x-scroll flex gap-[7px]">
        {movieList.map((movie: any) => {
          return (
            <PreviewImage
              imageUrl={`https://image.tmdb.org/t/p/w1280${movie['posterPath']}`}
              square={title === 'Previews' ? false : true}
              key={movie}
              movieId={movie['movieId']}
            />
          );
        })}
      </div>
    </section>
  );
}
