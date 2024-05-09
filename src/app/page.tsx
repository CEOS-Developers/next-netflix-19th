import Poster from '@/components/Poster';
import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const apiEndpoints = {
  popularmovies: '/movie/popular',
};

export default async function Home() {
  const fetchData = await fetchDiscoverMovie(apiEndpoints.popularmovies);

  return (
    <>
      <div className="pb-3">
        <Previewr fetchData={fetchData} />
        <Poster title="Popular on Netflix" fetchData={fetchData} />
        <Poster title="Trending Now" fetchData={fetchData} />
        <Poster title="Top 10 in Nigeria Today" fetchData={fetchData} />
        <Poster title="My List" fetchData={fetchData} />
      </div>
    </>
  );
}
