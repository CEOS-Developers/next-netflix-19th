import { Movie } from '../types/movies';

const API_KEY = process.env.TMDB_API_KEY || '';


// 영화 상세 정보 
export const getMovieDetailsById = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  const data = await res.json();

  return data;
};



// -----------------------------------------
//image URL 접근 가능 여부 체크 함수
const checkImage = async (url: string): Promise<boolean> => {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok; // code가 200번대면, 성공적 - >해당 이미지 반환
  } catch (error) {
    console.error(' 이미지 접근 불가 ', error);
    return false; // 이미지 접근 불가 
  }
};

// 카테고리별로 영화 fetch 
export const fetchMoviesData = async (category: string) => {
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();

  if (!data.results) {
    throw new Error(
      `Failed to fetch ${category} movies: ${data.status_message || 'No results found'}`,
    );
  }

  const accessibleMovies = await Promise.all(
    data.results.map(async (movie: Movie) => {
      const imagePath = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
      const isImageOk = await checkImage(imagePath); // 접근 가능한 이미지인지 체크하기 
      return isImageOk ? movie : null;
    }),
  );
// null이 아닌 것만 반환
  return accessibleMovies.filter((movie: Movie | null) => movie !== null);
};

// 카테고리 전체 - fetch 
export const fetchAllCategories = async (): Promise<Movie[][]> => {
  const categories = ['top_rated', 'popular', 'upcoming', 'now_playing'];

  try {
    const movies = await Promise.all(categories.map(fetchMoviesData));
    return movies;
  } catch (error) {
    console.error('Failed to fetch movie data:', error);
    throw error;
  }
};
