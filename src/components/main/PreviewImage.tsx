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
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </article>
  );
}
