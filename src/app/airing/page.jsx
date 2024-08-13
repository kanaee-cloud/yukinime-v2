"use client";
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '../libs/api-libs';
import AnimeList from '../../components/AnimeList';
import HeaderMenu from '../../components/Utilities/HeaderMenu';
import Pagination from '../../components/Utilities/Pagination';


const Page = () => {
  const [page, setPage] = useState(1);
  const [airAnime, setAirAnime] = useState([]);

  const fetchData = async () => {
    const airingAnime = await getAnimeResponse('seasons/now', `page=${page}`);
    setAirAnime(airingAnime);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <section className='p-4'>
        <HeaderMenu title='Airing' from='By Yukinime' href={'/popular'} next={'Popular'}/>
        <AnimeList api={airAnime} />
        <Pagination page={page} lastPage={airAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </>
  )
}

export default Page