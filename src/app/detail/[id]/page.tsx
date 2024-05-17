import { fetchDiscoverMovie } from '@/lib/actions';
import { FetchData } from '@/lib/types';
import MovieDetail from '@/components/MovieDetail';

type MovieDetailProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: MovieDetailProps) {
  const { id } = params;
  const movie: FetchData['results'][0] = await fetchDiscoverMovie(`/movie/${id}`);

  return <MovieDetail movie={movie} />;
}