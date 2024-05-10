import Image from 'next/image';

interface PreviewImageProps {
  imageUrl: string;
  number: number;
}

export default function BackgroundImage({
  imageUrl,
  number,
}: PreviewImageProps) {
  return (
    <section className="w-full flex flex-col items-center shrink-0">
      <article className="w-[375px] h-[415px] overflow-hidden relative">
        <Image
          alt="background_image"
          src={imageUrl}
          fill
          className="object-cover"
        />
      </article>
      <div className="flex gap-1 items-center mt-2">
        <div className="flex flex-col items-center justify-center border-white border w-[15px] h-[15px]">
          <p className="text-[4px] leading-[5px] font-[800]">Top</p>
          <p className="text-[6px] leading-[6px] font-[800]">10</p>
        </div>
        <p className="text-[13px] leading-[20px] font-[700]">
          #{number} in Korea Today
        </p>
      </div>
    </section>
  );
}
