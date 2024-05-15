import { atom } from 'recoil';
import { movieInfowithTitle } from 'types/movie';

export const showingMovieAtom = atom<movieInfowithTitle[]>({
  key: 'showingMovie',
  default: [],
});
