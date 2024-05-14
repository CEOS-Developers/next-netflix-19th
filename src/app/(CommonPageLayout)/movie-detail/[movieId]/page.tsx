import { getMovieInfoByMovieId } from '@apis/getMovieNowPlaying';
import ThumbNailImage from '@components/movie-detail/ThumbNailImage';
import PlayButton from '@components/movie-detail/PlayButton';
import PreviewSection from '@components/movie-detail/PreviewSection';

export default async function MovieDetailPage({ params }: any) {
  const { movieId } = params;
  const movieInfo = await getMovieInfoByMovieId(movieId);
  // console.log(movieInfo);

  return (
    <>
      <ThumbNailImage />
      <PlayButton />
      <PreviewSection />
    </>
  );
}
