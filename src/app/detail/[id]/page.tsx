// ./app/detail/[id]/page.tsx

import { getMovieDetailsById } from '../../utils/movieAPI';
import { Movie } from '../../types/movies';
import Image from 'next/image';
import Play from '@/public/icons/play.svg'

interface DetailProps {
  params: { id: string };
}

export async function Detail({ params }: DetailProps) {
  const movieDetail: Movie = await getMovieDetailsById(params.id);
  const url = `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`;

  //ex) interstella : http://localhost:3000/detail/157336
  return (
    <div className='w-[375px] h-[768px]'>
      {/*<h1>Movie ID: {params.id}</h1>*/}
      <div className="w-[375px] h-[415px] overflow-hidden relative">
      <>
        <Image
          src={movieDetail.backdrop_path ? url : ''}
          alt="movie poster"
          fill
          sizes="100vw"
          className="object-cover"
          />
          { /* 그라데이션 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '40%',
              backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
            }}
          ></div>
          </>
      </div>
      <button className='flex items-center justify-center bg-[#C4C4C4] rounded-md w-[303px] h-[45px] gap-2.5 cursor-pointer border-none mx-auto mt-[13px] mb-[32px]'>
        <Image
        src={Play}
        alt='play'
        width={18}
        height={21.6}/>
        <span className='font-semibold text-[#000000] text-play'>Play</span>
      </button>
      <h2 className="ml-[32px] text-[26.75px] font-bold">{movieDetail.title}</h2>
      <div className='mt-[24px] mx-auto w-[311px] h-[170px] overflow-y-auto text-[11.14px]/[14.17px] font-normal'>{movieDetail.overview}</div>
      {/* ID에 따른 정보 렌더링 */}
    </div>
  );
}

export default Detail;
