import BackgroundImage from '@components/main/BackgroundImage';
import MovieBar from '@components/main/MovieBar';
import CardSection from '@components/main/CardSection';
import useGetMovieImg from '@hooks/useGetMovieImg';

export default async function HomePage() {
  const {
    getMovieNowPlayingImgAndId,
    getMoviePopularImgAndId,
    getMovieTopRatedImgAndId,
    getMovieUpComingImgAndId,
  } = await useGetMovieImg();

  const MoviesList = [
    { title: 'Previews', movieList: getMovieNowPlayingImgAndId },
    { title: 'Popular on NetFlix', movieList: getMoviePopularImgAndId },
    { title: 'Trending Now', movieList: getMovieTopRatedImgAndId },
    { title: 'UpComing Movies', movieList: getMovieUpComingImgAndId },
  ];

  const random = Math.floor(Math.random() * 10);
  return (
    <section className="w-full flex flex-col items-center h-full overflow-scroll shrink-0">
      <BackgroundImage
        imageUrl={`https://image.tmdb.org/t/p/w1280${getMovieNowPlayingImgAndId[random]['posterPath']}`}
        number={random + 1}
        movieId={getMovieNowPlayingImgAndId[random]['movieId']}
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
