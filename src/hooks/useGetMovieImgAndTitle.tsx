import { getMovieTopRated } from '@apis/getMovieNowPlaying';
import { movieInfowithTitle } from 'types/movie';

export default async function useGetMovieImgAndTitleAndId() {
  const getMovieTopRatedImgAndTitle: movieInfowithTitle[] = (
    await getMovieTopRated()
  ).map((movie: any) => ({
    poster_path: movie.poster_path,
    title: movie.title,
    id: movie.id,
  }));
  return {
    getMovieTopRatedImgAndTitle,
  };
}
