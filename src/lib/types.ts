export interface FetchData {
  page: number;
  results: Array<{
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    adult: boolean;
    original_language: string;
    original_title: string;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }>;
}

export interface PreviewrProps {
  fetchData: FetchData;
}

export interface PosterProps {
  title: string;
  fetchData: FetchData;
}

export interface TopRatedProps {
  fetchData: FetchData;
}
