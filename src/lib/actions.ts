import { getErrorMessage } from './utils';

export const fetchDiscoverMovie = async (endpoint: string) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${endpoint}`;
  console.log("Requesting URL:", url); // URL 로깅
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MY_TMDB_API_TOKEN_KEY}`
    }
  });

  if (!res.ok) {
    throw new Error(`API call failed with status: ${res.status}`);
  }

  return await res.json();
};

