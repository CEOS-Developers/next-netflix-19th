import { Movie } from '../types/movies';

// 중복 제거 위한 함수
export default function removeDuplicates(movies: Movie[]): Movie[] {
    const uniqueMovies = new Map<number, Movie>();
  
    movies.forEach((movie) => {
      if (!uniqueMovies.has(movie.id)) {
        uniqueMovies.set(movie.id, movie);
        console.log(movie.id);
      }
    });
    return Array.from(uniqueMovies.values());
  }