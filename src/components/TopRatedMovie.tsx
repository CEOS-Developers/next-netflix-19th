import { PreviewrProps } from '@/lib/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Previewr({ fetchData }: PreviewrProps) {
  console.log('Previewer 컴포넌트');

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {fetchData.results.slice(0, 10).map((movie, index) => ( //딱 10개만 출력
        <SwiperSlide key={movie.id}>
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={375}
              height={415}
              layout="responsive"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex items-center justify-center space-x-2">
                <Image src="/Top10Icon.svg" alt="Top 10 Icon" width={15} height={15} />
                <span className="font-sfpro display text-[13.72px] font-bold leading-[20px] tracking-[-0.041em] text-center text-white">
                  #{index + 1} {movie.title}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}