import TopRatedMovie from '@/components/TopRatedMovie';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
  topRatedMovies: '/movie/top_rated',
};

export default async function Home() {
  const fetchData = await fetchDiscoverMovie(apiEndpoints.topRatedMovies);

  return (
    <>
      <TopRatedMovie fetchData={fetchData} />
    </>
  );
}
