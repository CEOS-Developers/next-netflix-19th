import { getMovieTopRated } from '@apis/getMovieNowPlaying';

export default async function useGetMovieImgAndTitleAndId() {
  const getMovieTopRatedImgAndTitle: {
    poster_path: string;
    title: string;
    id: string;
  }[] = (await getMovieTopRated()).map((movie: any) => ({
    poster_path: movie.poster_path,
    title: movie.title,
    id: movie.id,
  }));
  return {
    getMovieTopRatedImgAndTitle,
  };
}
