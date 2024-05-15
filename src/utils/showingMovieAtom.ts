import { atom } from 'recoil';
import { movieInfowithTitle } from 'types/movie';

export const showingMovie = atom<movieInfowithTitle[]>({
  key: 'showingMovie',
  default: [],
});

export const showingMovieCopy = atom<movieInfowithTitle[]>({
  key: 'showingMovieCopy',
  default: [],
});
