import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  discoverMovies: '/discover/movie?page=1&sort_by=popularity.desc',
};

export default async function Home() {
  const DiscoverRes = await fetchDiscoverMovie(apiEndpoints.discoverMovies);
  console.log(DiscoverRes);
  return (
    <>
      <Previewr DiscoverRes={DiscoverRes} />
    </>
  );
}
