import Image from 'next/image';
import { getTopRatedMovie } from '@/api/getMovies';
import TopNImg from '@/public/icon/topN.svg';
import PlusImg from '@/public/icon/plus.svg';
import PlayBtn from '@/components/common/PlayBtn';
import InfoImg from '@/public/icon/info.svg';

export default async function Today() {
  const moviesData = await getTopRatedMovie();
  const randomIndex = Math.floor(Math.random() * moviesData.length); // 랜덤 인덱스 생성
  const randomMovie = moviesData[randomIndex]; // 랜덤 영화 선택

  return (
    <div>
      <div className="w-full h-[415px] relative">
        <div className="absolute inset-0">
          {randomMovie && (
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`}
              alt={randomMovie.title}
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>
      <section className="flex flex-row justify-center gap-[5px] pt-0.5">
        <TopNImg />
        {randomIndex !== null && (
          <div className="fonts-today">Top {randomIndex + 1} in Korea Today</div>
        )}
      </section>
      <section className="flex justify-between w-full h-[45px] mt-[11px] pl-[54px] pr-[62px]">
        <div className="flex flex-col items-center">
          <PlusImg />
          <div className="fonts-mainicon">My List</div>
        </div>
        <PlayBtn width={6.91406} />
        <div className="flex flex-col items-center">
          <InfoImg />
          <div className="fonts-mainicon">Info</div>
        </div>
      </section>
    </div>
  );
}