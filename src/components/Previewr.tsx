import { PreviewrProps } from '@/lib/types';
import Image from 'next/image';

export default function Previewr({ fetchData }: PreviewrProps) {
  console.log('Previewer 컴포넌트');

  return (
    <>
      <div className="w-full px-4">
        <div className="text-[26px] font-bold text-white">Previews</div>

        <div className="flex overflow-x-auto pt-3 gap-x-2 hide-scrollbar">
          {fetchData.results.map((movie, index) => (
            <div key={index} className="inline-block">
              <div className="w-[102px] h-[102px] relative overflow-hidden rounded-full bg-white">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  layout="responsive"
                  width={102}
                  height={102}
                  alt={movie.title}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
