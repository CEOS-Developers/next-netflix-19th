import Search from '@/components/Search/Search';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = '/movie/top_rated';

export default async function SearchPage() {
  const fetchTopRated = await fetchDiscoverMovie(`${apiEndpoints}?page=1`);
  return (
    <div>
      <Search fetchData={fetchTopRated} title="Top Rated Movies" />
    </div>
  );
}
