import { PlayIcon } from '@/public/icon';

interface PlayBtnProps {
  width: number;
  handlePlayBtn?: () => void;
}

export default function PlayBtn(props: PlayBtnProps) {
  const { width, handlePlayBtn } = props;

  return (
    <button
      style={{ width: `${width}rem` }}
      className={`flex justify-center items-center h-[45px] gap-4 rounded-md bg-btn-gray`}
      onClick={handlePlayBtn}>
      <PlayIcon />
      <p className={'fonts-btn'}>Play</p>
    </button>
  );
}

// 이렇게 사용하면 돼 !!
// <PlayBtn width={300}></PlayBtn>
