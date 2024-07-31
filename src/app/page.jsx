import Header from "@/components/AnimeList/Header.jsx";
import AnimeList from "../components/AnimeList/index.jsx";
import { getAnimeResponse } from "./libs/api-libs.js";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=5`
  // );
  // const topAnime = await response.json();
  // console.log(anime)

  const topAnime = await getAnimeResponse("top/anime", "limit=5");
  const seasonAnime = await getAnimeResponse("seasons/now", "limit=5");

  return (
    <>
      <section className="p-4">
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>
      <section className="p-4">
        <Header
          title="Airing Now"
          linkHref="/airing"
          linkTitle="See All"
        />
        <AnimeList api={seasonAnime} />
      </section>
    </>
  );
};

export default Page;
