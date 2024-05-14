import Search from '@public/svg/search.svg';
import Close from '@public/svg/close.svg';

export default function SearchInput() {
  return (
    <section className="w-full h-[52px] flex items-center gap-5 px-5 bg-[#424242] mt-[52px] shrink-0">
      <Search className="shrink-0" />
      <input
        type="text"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="w-full bg-[#424242] no-underline outline-none"
      />
      <Close className="shrink-0" />
    </section>
  );
}
