import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from '@apis/getMovieNowPlaying';
import BackgroundImage from '@components/main/BackgroundImage';
import MovieBar from '@components/main/MovieBar';
import CardSection from '@components/main/CardSection';

export default async function HomePage() {
  const nowPlayingMovies = (await getMovieNowPlaying()).map((movie: any) => ({
    posterPath: movie.poster_path,
    movieId: movie.id,
  }));
  const popularMovies = (await getMoviePopular()).map((movie: any) => ({
    posterPath: movie.poster_path,
    movieId: movie.id,
  }));
  const topRatedMovies = (await getMovieTopRated()).map((movie: any) => ({
    posterPath: movie.poster_path,
    movieId: movie.id,
  }));
  const upComingMovies = (await getMovieUpComing()).map((movie: any) => ({
    posterPath: movie.poster_path,
    movieId: movie.id,
  }));

  const MoviesList = [
    { title: 'Previews', movieList: nowPlayingMovies },
    { title: 'Popular on NetFlix', movieList: popularMovies },
    { title: 'Trending Now', movieList: topRatedMovies },
    { title: 'UpComing Movies', movieList: upComingMovies },
  ];

  const random = Math.floor(Math.random() * 10);
  return (
    <section className="w-full flex flex-col items-center h-full overflow-scroll shrink-0">
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w1280${nowPlayingMovies[random]['posterPath']}`}
        number={random + 1}
        movieId={nowPlayingMovies[random]['movieId']}
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
