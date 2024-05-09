import Image from 'next/image';

interface PreviewImageProps {
  imageUrl: string;
  square?: boolean;
}

export default function PreviewImage({
  imageUrl,
  square = false,
}: PreviewImageProps) {
  return (
    <article
      className={
        square
          ? 'w-[103px] h-[161px] overflow-hidden relative shrink-0'
          : 'w-[100px] h-[100px] rounded-full overflow-hidden relative shrink-0'
      }
    >
      <Image
        alt="preview_image"
        src={imageUrl}
        objectFit="cover"
        layout="fill"
      />
    </article>
  );
}
