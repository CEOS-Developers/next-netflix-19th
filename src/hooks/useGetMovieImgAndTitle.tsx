import { getMovieTopRated } from '@apis/getMovieNowPlaying';

export default async function useGetMovieImgAndTitle() {
  const getMovieTopRatedImgAndTitle: { poster_path: string; title: string }[] =
    (await getMovieTopRated()).map((movie: any) => ({
      poster_path: movie.poster_path,
      title: movie.title,
    }));
  return {
    getMovieTopRatedImgAndTitle,
  };
}
