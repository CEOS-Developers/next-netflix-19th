import Search from '@/components/Search/Search';
import Footer from '@/components/layout/Footer';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = '/movie/top_rated';

export default async function SearchPage() {
    const fetchTopRated = await fetchDiscoverMovie(`${apiEndpoints}?page=1`);
    return (
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Search fetchData={fetchTopRated} title="Top Rated Movies" />
        </div>
        <Footer />
      </div>
    );
  }