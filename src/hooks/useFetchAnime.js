"use client"
import { useState, useEffect } from 'react';
import { getAnimeResponse } from '../app/libs/api-libs';

const useFetchAnime = (resource, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeResponse(resource, query);
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [resource, query]);

  return { data, loading };
};

export default useFetchAnime;
