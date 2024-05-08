import { getErrorMessage } from './utils';

export const fetchDiscoverMovie = async (endpoint: string) => {
  const res = await fetch(`${process.env.URL}${endpoint}`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MY_TMDB_API_TOKEN_KEY}`,
    },
  });
  if (!res.ok) {
    console.log(getErrorMessage(res));
  }
  return res.json();
};
