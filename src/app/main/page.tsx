import Header from '../components/Header';
import Controller from '../components/Controller';
import Carousel from '../components/Carousel';
import MovieList from '../components/MainLists';
import MovieIndex from '../components/MovieIndex'; 
import { Movie } from '../types/movies';
import { fetchAllCategories } from '../utils/movieAPI';

export default async function Main() {
  const mainListsTitle = [
    'Previews',
    'New Releases',
    'Popular on Netflix ',
    'Top 10 in Korea Today',
  ];

  try {
    const movies = await fetchAllCategories();

    return (
      <div className="h-[768px] w-[375px] overflow-y-auto ">
        <Header />
        {movies[0] && (
          <MovieIndex movies={movies[0]}>
            <Carousel movies={movies[0]} currentMovieIndex={0} />
            <Controller movies={movies[0]} currentMovieIndex={0} />
          </MovieIndex>
        )}
        {movies.map((movieList, index) => (
          <div key={index}>
            <h2 className="ml-[16px] mt-[22px] text-[20.92px] font-bold">
              {mainListsTitle[index]}
            </h2>
            <MovieList
              movies={movieList}
              itemClass={index === 0 ? 'rounded-full' : ''}
              isCircular={index === 0}
            />
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error</div>;
  }
}
