// 현재 상영 중인 영화 데이터를 반환하는 함수.
export async function getMovieNowPlaying() {
  const previewMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.THEMOVIE_API_KEY}`,
    { cache: 'no-store' }
  );

  const previewMovieData = await previewMovieResponse.json();

  return previewMovieData.results;
}

// 인기 있는 영화 데이터를 반환하는 함수
export async function getMoviePopular() {
  const popularMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIE_API_KEY}`,
    { cache: 'no-store' }
  );

  const popularMovieData = await popularMovieResponse.json();

  return popularMovieData.results;
}

// top-rated 된 영화 데이터를 반환하는 함수
export async function getMovieTopRated() {
  const topRatedMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.THEMOVIE_API_KEY}`,
    { cache: 'no-store' }
  );

  const topRatedMovieData = await topRatedMovieResponse.json();

  return topRatedMovieData.results;
}

export async function getMovieUpComing() {
  const upComingMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.THEMOVIE_API_KEY}`,
    { cache: 'no-store' }
  );

  const upComingMovieData = await upComingMovieResponse.json();

  return upComingMovieData.results;
}
