import { PreviewrProps } from '@/lib/types';

export default function Previewr(props: PreviewrProps) {
  console.log(props);
  console.log('!23');
  return (
    <>
      <div className="w-full pl-4">
        <div className="text-[26px] font-bold text-white">Previewer</div>
        <div className="flex pt-3">
          <div className="w-[102px] h-[102px] rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
}
