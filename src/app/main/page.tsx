import PreviewImage from '@components/main/PreviewImage';
import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from './_private/getMovieNowPlaying';
import BackgroundImage from '@components/main/BackgroundImage';
import MovieBar from '@components/main/MovieBar';

export default async function HomePage() {
  const nowPlayingMovieData = await getMovieNowPlaying();
  const random = Math.floor(Math.random() * 10);
  return (
    <section className="max-w-sm flex flex-col items-center h-full overflow-scroll shrink-0">
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w1280${nowPlayingMovieData[random].poster_path}`}
        number={random}
      />
      <MovieBar />
      {nowPlayingMovieData.map((movieData: any) => {
        return (
          <PreviewImage
            imageUrl={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
            square={false}
            key={movieData.id}
          />
        );
      })}
      <div className='h-[86px] shrink-0'></div>
    </section>
  );
}
