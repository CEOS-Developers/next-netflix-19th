interface SvgCardProps {
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

export default function SvgCard({ Svg, title }: SvgCardProps) {
  return (
    <section className="flex flex-col items-center">
      <Svg />
      <p className="text-[14px] leading-[20px]">{title}</p>
    </section>
  );
}
