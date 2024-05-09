import PreviewImage from '@components/main/PreviewImage';
import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from './_private/getMovieNowPlaying';

export default async function HomePage() {
  const nowPlayingMovieData = await getMovieNowPlaying();

  return (
    <section className="max-w-sm flex justify-center items-center h-full">
      {nowPlayingMovieData.map((movieData: any) => {
        return (
          <PreviewImage
            imageUrl={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
            square={false}
            key={movieData.id}
          />
        );
      })}
    </section>
  );
}
