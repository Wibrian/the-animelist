"use client";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../library/api-lib";
import Loading from "../loading";

export default function Page() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const popularAnime = await getAnimeResponse(`top/anime?page=${page}`);
    setTopAnime(popularAnime);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <Header title={`Popular Anime Page ${page}`} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <AnimeList api={topAnime} />
        </>
      )}
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
}
