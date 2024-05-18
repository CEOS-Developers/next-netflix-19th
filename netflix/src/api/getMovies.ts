// now playing 영화 데이터 반환하는 함수.
export async function getNowPlayingMovie() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const nowPlayingMovieResponse = await fetch(url, { cache: 'no-store' });
  
  const nowPlayingMovieData = await nowPlayingMovieResponse.json();
  
  return nowPlayingMovieData.results;
}
  
// popular 영화 데이터 반환하는 함수
export async function getPopularMovie() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const popularMovieResponse = await fetch(url, { cache: 'no-store' });
  const popularMovieData = await popularMovieResponse.json();
  
  return popularMovieData.results;
}
  
// top-rated 영화 데이터 반환하는 함수
export async function getTopRatedMovie() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const topRatedMovieResponse = await fetch(url, { cache: 'no-store' });
  const topRatedMovieData = await topRatedMovieResponse.json();

  return topRatedMovieData.results;
}

// Coming 영화 데이터 반환하는 함수
export async function getUpComingMovie() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const upComingMovieResponse = await fetch(url, { cache: 'no-store' });
  const upComingMovieData = await upComingMovieResponse.json();

  return upComingMovieData.results;
}

// trending 영화 데이터 반환하는 함수
export async function getTrendingMovie() {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const trendingMovieResponse = await fetch(url, { cache: 'no-store' });
  const trendingMovieData = await trendingMovieResponse.json();
  
  return trendingMovieData.results;
}

// horror 영화 데이터 반환하는 함수
export async function getHorrorMovie() {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=27?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`;
  const horrorMovieResponse = await fetch(url, { cache: 'no-store' });
  const horrorMovieData = await horrorMovieResponse.json();
  
  return horrorMovieData.results;
}

// 상세 페이지 영화 데이터 반환하는 함수
export const getMovieDetails = async (movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&language=en-US`;
  const res = await fetch(url);
  const data = await res.json();
  
  return data;
};

// 검색 페이지 영화 데이터 반환하는 함수
export const getSearchedMovies = async (query: string, page: number = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_SEARCH_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  const res = await fetch(url);
  const searchedMoviesData = await res.json();

  return searchedMoviesData;
};
