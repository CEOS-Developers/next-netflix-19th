import Plus from '@public/svg/plus.svg';
import Info from '@public/svg/info.svg';
import RightGo from '@public/svg/rightGo.svg';

export default function MovieBar() {
  return (
    <section className="w-full mt-[12px] mb-[22px] flex justify-evenly shrink-0">
      <div className="flex flex-col items-center basis-12">
        <Plus className="hover:cursor-pointer" />
        <p className="text-[14px] leading-[20px]">My List</p>
      </div>
      <div className="w-[110px] h-[45px] flex gap-4 items-center justify-center bg-[#C4C4C4] rounded-md hover:cursor-pointer">
        <RightGo />
        <p className="text-[20px] font-[600] text-black">Play</p>
      </div>
      <div className="flex flex-col items-center basis-12">
        <Info className="hover:cursor-pointer" />
        <p className="text-[14px] leading-[20px]">Info</p>
      </div>
    </section>
  );
}
