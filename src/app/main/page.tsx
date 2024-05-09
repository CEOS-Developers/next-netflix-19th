import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from './_private/getMovieNowPlaying';
import BackgroundImage from '@components/main/BackgroundImage';
import MovieBar from '@components/main/MovieBar';
import CardSection from '@components/main/CardSection';

export default async function HomePage() {
  const nowPlayingMovies = (await getMovieNowPlaying()).map(
    (movie: any) => movie.poster_path
  );
  const popularMovies = (await getMoviePopular()).map(
    (movie: any) => movie.poster_path
  );
  const topRatedMovies = (await getMovieTopRated()).map(
    (movie: any) => movie.poster_path
  );
  const upComingMovies = (await getMovieUpComing()).map(
    (movie: any) => movie.poster_path
  );
  const MoviesList = [
    { title: 'Previews', movieList: nowPlayingMovies },
    { title: 'Popular on NetFlix', movieList: popularMovies },
    { title: 'Trending Now', movieList: topRatedMovies },
    { title: 'UpComing Movies', movieList: upComingMovies },
  ];

  console.log(nowPlayingMovies);
  const random = Math.floor(Math.random() * 10) + 1;
  return (
    <section className="max-w-sm flex flex-col items-center h-full overflow-scroll shrink-0">
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w1280${nowPlayingMovies[random]}`}
        number={random}
      />
      <MovieBar />
      {MoviesList.map((movielist, idx) => {
        return (
          <CardSection
            movieList={movielist.movieList}
            title={movielist.title}
            key={idx}
          />
        );
      })}
      <div className="h-[86px] shrink-0"></div>
    </section>
  );
}
