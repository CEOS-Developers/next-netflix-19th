import { PreviewrProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';


export default function Previewr({ fetchData }: PreviewrProps) {
  return (
    <>
      <div className="w-full px-4">
        <div className="text-[26px] font-bold text-white">Previews</div>

        <div className="flex overflow-x-auto pt-1 gap-x-2 scrollbar-hide">
          {fetchData.results.map((movie, index) => (
            <div key={index} className="inline-block">
              <Link href={`/detail/${movie.id}`}>
              <div className="w-[102px] h-[102px] relative overflow-hidden rounded-full bg-white cursor-pointer">
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                       fill 
                       alt={movie.title} 
                       style={{ objectFit: 'cover' }}
                />
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}