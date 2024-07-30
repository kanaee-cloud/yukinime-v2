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

  return (
    <>
    <section className="p-4">
      <Header title="Most Popular" linkHref="/popular" linkTitle="See All"/>
      <AnimeList api={topAnime} />
    </section>
      
    </>
  );
};

export default Page;
