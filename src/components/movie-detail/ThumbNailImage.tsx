import Image from 'next/image';

interface ThumbNailImageProp {
  imageUrl: string;
}

export default function ThumbNailImage({ imageUrl }: ThumbNailImageProp) {
  return (
    <article className="w-[375px] h-[415px] overflow-hidden relative">
      <Image
        alt="This is ThumbNailImage of Moive"
        src={imageUrl}
        fill
        className="object-cover"
      />
      ;
    </article>
  );
}
