'use client';
import React, { useEffect, useState } from 'react';
import Previewr from '@/components/TopRatedMovie';
import { fetchDiscoverMovie } from '@/lib/actions';

const TopRated = () => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDiscoverMovie('/movie/top_rated');
      setFetchData(data);
    }
    loadData();
  }, []);

  return <div>{fetchData ? <Previewr fetchData={fetchData} /> : <p>Loading...</p>}</div>;
};

export default TopRated;
