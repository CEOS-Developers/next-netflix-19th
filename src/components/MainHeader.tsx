import NetlifxSVG from '../../public/svg/netflix.svg'

export default function MainHeader() {
  return (
    <header className="bg-transparent w-full flex justify-between items-center p-4">
      <NetlifxSVG />
      <p className="text-base leading-8 w-fit">TV Shows</p>
      <p className="text-base leading-8 w-fit">Movies</p>
      <p className="text-base leading-8 w-fit">My List</p>
    </header>
  );
}