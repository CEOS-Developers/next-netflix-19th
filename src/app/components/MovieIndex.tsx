'use client';
import React, { useEffect, useState } from 'react';
import { Movie } from '../types/movies';

interface MovieIndexProps {
  movies: Movie[];
  children: React.ReactNode;
}

function MovieIndex ({ movies, children }:MovieIndexProps){
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (movies && movies.length > 0) {
        setCurrentMovieIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, { currentMovieIndex })
      )}
    </div>
  );
};

export default MovieIndex;
