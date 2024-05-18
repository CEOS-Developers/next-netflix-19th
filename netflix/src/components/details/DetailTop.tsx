import Image from 'next/image';

interface DetailTopProps {
  poster_path: string | null;
}

export default function DetailTop({ poster_path }: DetailTopProps) {
  return (
    <section className="w-full h-[415px] relative">
      <div className="absolute inset-0">
        {poster_path && (
          <Image
            fill
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="title"
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
      </div>
      <div className="w-full h-full absolute bg-gradient-to-b from-transparent via-transparent to-black"></div>
    </section>
  )
}
