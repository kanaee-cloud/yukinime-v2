import Header from "@/components/AnimeList/Header.jsx";
import AnimeList from "../components/AnimeList/index.jsx";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();
  // console.log(anime)

  return (
    <>
    <section className="p-4">
      <Header title="Most Popular" linkHref="/popular"/>
      <AnimeList api={topAnime} />
    </section>
      
    </>
  );
};

export default Page;
