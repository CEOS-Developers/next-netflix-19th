import DetailTop from '@/components/details/DetailTop';
import DetailBottom from '@/components/details/DetailBottom';
import PlayBtn from '@/components/common/PlayBtn';
import FooterNav from '@/components/common/FooterNav';
import { getMovieDetails } from '@/api/getMovies';
import { MovieTypes } from '@/types/Movie';

interface DetailPageProps {
  params: { id: string };
}

const Page = async ({ params }: DetailPageProps) => {
  const movie: MovieTypes = await getMovieDetails(params.id);

  return (
    <div>
      <div className="flex flex-col w-full">
        <DetailTop poster_path={movie.poster_path} />
        <div className="pt-3.5 pl-8 pr-8">
          <PlayBtn width={18.9375}/>
          <p className="fonts-bigtitle mt-8">Previews</p>
          <DetailBottom overview={movie.overview} />
        </div>
      </div>
    <FooterNav />
    </div>
  );
};

export default Page;