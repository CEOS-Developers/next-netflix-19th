import Search from '@public/svg/search.svg';
import Close from '@public/svg/close.svg';

export default function SearchInput() {
  return (
    <section className="w-full h-[52px] flex items-center gap-5 px-5 bg-[#424242] mt-[52px]">
      <Search />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="w-full bg-[#424242]"
      />
      <Close />
    </section>
  );
}
