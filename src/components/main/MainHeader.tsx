import NetflixSVG from '@public/svg/netflix.svg';

export default function MainHeader() {
  return (
    <header className="bg-transparent w-[338px] h-[57px] flex justify-between items-center">
      <NetflixSVG />
      <p className="text-base leading-8 w-fit hover:cursor-pointer">TV Shows</p>
      <p className="text-base leading-8 w-fit hover:cursor-pointer">Movies</p>
      <p className="text-base leading-8 w-fit hover:cursor-pointer">My List</p>
    </header>
  );
}
