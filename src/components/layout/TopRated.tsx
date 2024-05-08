"use client";
import React, { useEffect, useState } from 'react';
import Previewr from '@/components/Previewr';
import { fetchDiscoverMovie } from '@/lib/actions';

const TopRated = () => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    async function loadData() {
        console.log("URL 환경 변수:", process.env.NEXT_PUBLIC_URL); 
        console.log("API 키 환경 변수:", process.env.NEXT_PUBLIC_MY_TMDB_API_TOKEN_KEY); 
      const data = await fetchDiscoverMovie('/movie/top_rated');
      setFetchData(data);
    }
    loadData();
  }, []);

  return (
    <div>
      {fetchData ? <Previewr fetchData={fetchData} /> : <p>Loading...</p>}
    </div>
  );
};

export default TopRated;
