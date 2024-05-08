import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
  topRatedMovies: '/movie/top_rated',
};

export default async function Home() {
  const fetchData = await fetchDiscoverMovie(apiEndpoints.topRatedMovies);

  return (
    <>
      <Previewr fetchData={fetchData} />
    </>
  );
}
