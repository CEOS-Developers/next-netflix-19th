import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
};

export default async function Home() {
  const fetchData = await fetchDiscoverMovie(apiEndpoints.popularmovies);

  return (
    <>
      <Previewr fetchData={fetchData} />
    </>
  );
}
