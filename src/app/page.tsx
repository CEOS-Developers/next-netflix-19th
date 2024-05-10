import BigPoster from '@/components/BigPoster';
import Poster from '@/components/Poster';
import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
  trendingmovies: '/trending/movie/day?language=en-US',
  topratedmovies: '/tv/top_rated',
  ontheairmovies: '/tv/on_the_air',
  nowplayingmovies: '/movie/now_playing',
  upcomingmovies: '/movie/upcoming',
  topRatedMovies: '/movie/top_rated',
};

export default async function Home() {
  const fetchPopular = await fetchDiscoverMovie(apiEndpoints.popularmovies);
  const fetchTrend = await fetchDiscoverMovie(apiEndpoints.trendingmovies);
  const fetchTopRated = await fetchDiscoverMovie(apiEndpoints.topratedmovies);
  const fetchOnAir = await fetchDiscoverMovie(apiEndpoints.ontheairmovies);
  const fetchNowPlaying = await fetchDiscoverMovie(apiEndpoints.nowplayingmovies);
  const fetchUpComing = await fetchDiscoverMovie(apiEndpoints.upcomingmovies);

  return (
    <>
      <div className="pb-3">
        <Previewr fetchData={fetchNowPlaying} />
        <Poster title="Popular on Netflix" fetchData={fetchPopular} />
        <Poster title="Trending Now" fetchData={fetchTrend} />
        <Poster title="Top 10 in Nigeria Today" fetchData={fetchTopRated} />
        <Poster title="Airing Today" fetchData={fetchOnAir} />
        <Poster title="Now Playing" fetchData={fetchNowPlaying} />
        <Poster title="Upcoming" fetchData={fetchUpComing} />
        <BigPoster title="Netflix Originals" fetchData={fetchPopular} />
        <Poster title="Popular on Netflix" fetchData={fetchPopular} />
        <Poster title="Trending Now" fetchData={fetchTrend} />
        <Poster title="Top 10 in Nigeria Today" fetchData={fetchTopRated} />
        <Poster title="Airing Today" fetchData={fetchOnAir} />
      </div>
    </>
  );
}
