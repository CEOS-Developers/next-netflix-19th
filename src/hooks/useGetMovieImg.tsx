import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from '@apis/getMovieNowPlaying';

export default async function useGetMovieImg() {
  const getMovieNowPlayingImg = (await getMovieNowPlaying()).map(
    (movie: any) => movie.poster_path
  );
  const getMoviePopularImg = (await getMoviePopular()).map(
    (movie: any) => movie.poster_path
  );
  const getMovieTopRatedImg = (await getMovieTopRated()).map(
    (movie: any) => movie.poster_path
  );
  const getMovieUpComingImg = (await getMovieUpComing()).map(
    (movie: any) => movie.poster_path
  );
  return {
    getMovieNowPlayingImg,
    getMoviePopularImg,
    getMovieTopRatedImg,
    getMovieUpComingImg,
  };
}
