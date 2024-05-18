import { SmallSearchIcon, SmallXIcon } from '@/public/icon';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  }

  function handleClearInput() {
    setSearchQuery('');
    onSearch('');
  }

  return (
    <form
      className="flex justify-between items-center w-full h-[52px] py-4 px-5 bg-search-gray"
      onSubmit={handleSubmit}>
      <SmallSearchIcon className="pr-1" />
      <input
        type="text"
        className="block fonts-input bg-transparent px-2 focus:outline-none w-screen"
        placeholder="Search for a show, movie, genre, etc."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <SmallXIcon className="items-center cursor-pointer" onClick={handleClearInput} />
    </form>
  );
}
