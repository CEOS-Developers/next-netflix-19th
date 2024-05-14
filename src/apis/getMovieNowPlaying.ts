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

// top-rated 된 영화 데이터를 반환하는 함수 : 기본적으로 page 1에 해당하는 데이터 20개를 보여줌
export async function getMovieTopRated() {
  const topRatedMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.THEMOVIE_API_KEY}`,
    { cache: 'no-store' }
  );

  const topRatedMovieData = await topRatedMovieResponse.json();

  return topRatedMovieData.results;
}

// search page에서 스크롤을 내리면 계속 그 다음으로 유명한 영화 목록들을 끌어올 때 사용하는 함수
export async function getMovieTopRatedByPageNumber(pageNumber: number) {
  const topRatedMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.THEMOVIE_API_KEY}&page=${pageNumber}`,
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

// 영화의 id를 이용해 해당 영화의 정보를 가져올 수 있는 함수
// 특정 영화 아이콘을 눌렀을 때 상세 정보 탭으로 이동하는 경우 이걸 사용해서 상세 페이지를 보여주면 될듯
export async function getMovieInfoByMovieId(movieId: number) {
  const testMovieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.THEMOVIE_API_KEY}`
  );

  return testMovieResponse.json();
}
