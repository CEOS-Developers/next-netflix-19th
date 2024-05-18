'use client';
import Search from '@public/svg/search.svg';
import Close from '@public/svg/close.svg';
import { useRecoilState } from 'recoil';
import { showingMovie } from '@utils/showingMovieAtom';
import { useEffect, useState } from 'react';

export default function SearchInput() {
  const [showingMovies, setShowingMovies] = useRecoilState(showingMovie);
  const [allMovies, setAllMovies] = useState(showingMovies);
  useEffect(() => {
    if (showingMovies.length > 0 && allMovies.length === 0) {
      setAllMovies(showingMovies);
    }
  }, [showingMovies]);
  const HandleInput = () => {
    const searchInput = document.querySelector<HTMLInputElement>('#input');
    if (searchInput) {
      const searchValue = searchInput.value;
      const searchResult = showingMovies.filter((movie) => {
        return movie.title.includes(searchValue);
      });

      if (searchValue === '') {
        setShowingMovies(allMovies);
      } else {
        setShowingMovies(searchResult);
      }
    } else setShowingMovies(allMovies);
  };
  return (
    <section className="w-full h-[52px] flex items-center gap-5 px-5 bg-[#424242] mt-[52px] shrink-0">
      <Search className="shrink-0" />
      <input
        type="text"
        id="input"
        placeholder="Search for a show, movie, genre, e.t.c."
        className="w-full bg-[#424242] no-underline outline-none"
        onChange={HandleInput}
      />
      <Close className="shrink-0" />
    </section>
  );
}
