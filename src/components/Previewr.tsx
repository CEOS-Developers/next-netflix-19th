import { PreviewrProps } from '@/lib/types';
import Image from 'next/image';

export default function Previewr({ fetchData }: PreviewrProps) {
  console.log('Previewer 컴포넌트');

  return (
    <>
      <div className="w-full pl-4">
        <div className="text-[26px] font-bold text-white">Previewer 하는중</div>

        {/* <div className="flex pt-3 overflow-x-hidden">
          {fetchData.results.map((movie, index) => (
            <div key={index} className="w-[102px] h-[102px] rounded-full bg-white">
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={102} height={102} alt="movie" />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
