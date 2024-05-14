import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from '@apis/getMovieNowPlaying';

export default async function useGetMovieImgAndId() {
  const getMovieNowPlayingImgAndId = (await getMovieNowPlaying()).map(
    (movie: any) => ({ posterPath: movie.poster_path, movieId: movie.id })
  );
  const getMoviePopularImgAndId = (await getMoviePopular()).map(
    (movie: any) => ({
      posterPath: movie.poster_path,
      movieId: movie.id,
    })
  );
  const getMovieTopRatedImgAndId = (await getMovieTopRated()).map(
    (movie: any) => ({
      posterPath: movie.poster_path,
      movieId: movie.id,
    })
  );
  const getMovieUpComingImgAndId = (await getMovieUpComing()).map(
    (movie: any) => ({
      posterPath: movie.poster_path,
      movieId: movie.id,
    })
  );
  return {
    getMovieNowPlayingImgAndId,
    getMoviePopularImgAndId,
    getMovieTopRatedImgAndId,
    getMovieUpComingImgAndId,
  };
}
