import {
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpComing,
} from '@apis/getMovieNowPlaying';
import BackgroundImage from '@components/main/BackgroundImage';
import MovieBar from '@components/main/MovieBar';
import CardSection from '@components/main/CardSection';
import useGetMovieImg from '@hooks/useGetMovieImg';

export default async function HomePage() {
  const {
    getMovieNowPlayingImg,
    getMoviePopularImg,
    getMovieTopRatedImg,
    getMovieUpComingImg,
  } = await useGetMovieImg();
  const MoviesList = [
    { title: 'Previews', movieList: getMovieNowPlayingImg },
    { title: 'Popular on NetFlix', movieList: getMoviePopularImg },
    { title: 'Trending Now', movieList: getMovieTopRatedImg },
    { title: 'UpComing Movies', movieList: getMovieUpComingImg },
  ];

  const random = Math.floor(Math.random() * 10);
  return (
    <section className="w-full flex flex-col items-center h-full overflow-scroll shrink-0">
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w1280${getMovieNowPlayingImg[random]}`}
        number={random + 1}
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
