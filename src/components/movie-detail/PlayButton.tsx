import PlayButtonSVG from '@public/svg/PlayButton.svg';

export default function PlayButton() {
  return (
    <div className="mt-[13px] w-full flex justify-center items-center">
      <div className="w-[303px] h-[45px] rounded-[5.63px] leading-[30px] text-[20.46px] text-black font-semibold flex justify-center items-center gap-x-[15px] bg-buttonGray hover:cursor-pointer hover:bg-buttonHover">
        <PlayButtonSVG />
        <span>Play</span>
      </div>
    </div>
  );
}
