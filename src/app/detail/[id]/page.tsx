import { fetchDiscoverMovie } from '@/lib/actions';
import { FetchData } from '@/lib/types';
import MovieDetail from '@/components/MovieDetail';
import Footer from '@/components/layout/Footer';
type MovieDetailProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: MovieDetailProps) {
  const { id } = params;
  const movie: FetchData['results'][0] = await fetchDiscoverMovie(`/movie/${id}`);

  return (
    <div className="flex flex-col h-screen">
    <div className="flex-1 overflow-auto scrollbar-hide">
        <MovieDetail movie={movie} />
        </div>
        <Footer/>
        </div>);
}