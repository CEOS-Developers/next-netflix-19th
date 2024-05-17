'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { PosterProps } from '@/lib/types';
import { fetchDiscoverMovie } from '@/lib/actions';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SearchBar({ fetchData, title }: PosterProps) {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(fetchData.results);
  const [filteredData, setFilteredData] = useState(fetchData.results);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const newPage = page + 1;

    // 데이터 요청을 일정 시간 지연시키기
    setTimeout(async () => {
      const newData = await fetchDiscoverMovie(`/movie/top_rated?page=${newPage}`);

      if (newData.results.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...newData.results]);
        setFilteredData((prevData) => [...prevData, ...newData.results]);
        setPage(newPage);
      }

      setIsLoading(false);
    }, 1000); // 1초 지연
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  useEffect(() => {
    if (inputValue === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((movie) => movie.title.toLowerCase().includes(inputValue.toLowerCase())));
    }
  }, [inputValue, data]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        {
          threshold: 1.0, // 요소가 100% 보일 때 트리거
        },
      );
      if (node) observer.current.observe(node);
    },
    [page, isLoading, hasMore, loadMore],
  );

  return (
    <div className="w-full py-7">
      <div className="w-full h-[52px] bg-[#424242] flex items-center px-4">
        <Image src={'/icons/search.svg'} width={20} height={20} alt="search_icon" />
        <input
          className="outline-none bg-[#424242] flex-grow placeholder:text-[#C4C4C4] text-[#C4C4C4] placeholder:font-normal px-2"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        {inputValue && (
          <button onClick={clearInput} className="ml-2 focus:outline-none">
            <Image src={'/icons/x.svg'} width={15} height={15} alt="clear_icon" />
          </button>
        )}
      </div>
      {/* Top Searches */}
      <div className="flex flex-col pt-5">
        <h1 className="text-white font-bold text-[26.75px] pl-3">{title}</h1>

        {filteredData.map((movie, index) => (
       <Link href={`/detail/${movie.id}`} key={movie.id}>
          <div
            className="w-full flex pt-1 cursor-pointer"
            key={movie.id}
            ref={index === filteredData.length - 1 ? lastElementRef : null}>
            <div className="w-[38%] h-[76px] relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                fill
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                style={{ objectFit: 'cover' }}
                alt={movie.title}
              />
            </div>
            <div className="w-[62%] flex justify-between items-center bg-[#424242] px-5">
              <span className="text-[14.7px] text-white font-normal">{movie.title}</span>
              <Image src={'/icons/play.svg'} width={28} height={28} alt="clear_icon" />
            </div>
          </div>
          </Link>
        ))}
        {isLoading && (
          <motion.div
            className="flex justify-center items-center flex-col py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="flex justify-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <motion.div
                className="w-4 h-4 bg-white rounded-full mr-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut' }}
              />
              <motion.div
                className="w-4 h-4 bg-white rounded-full mr-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.div
                className="w-4 h-4 bg-white rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
              />
            </motion.div>
            <p className="text-white">로딩중 ~</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
