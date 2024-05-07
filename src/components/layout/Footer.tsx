import Image from 'next/image';

export default function Footer(): JSX.Element {
  return (
    <>
      <div className="flex items-center justify-center h-[30px] w-full bg-[##121212] absolute bottom-0">
        <div className="w-[121px] h-[4.5px] bg-white"></div>
      </div>
    </>
  );
}
