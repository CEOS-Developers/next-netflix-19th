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
      {fetchData.results.map((movie) => (
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
            <h3 className="text-lg font-semibold mt-2 z-10">{movie.title}</h3>
            <p className="text-sm text-white z-10">{movie.overview}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
