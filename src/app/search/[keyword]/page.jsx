import AnimeList from "../../../components/AnimeList/index.jsx";
import Header from "../../../components/AnimeList/Header";
import { getAnimeResponse } from "../../../app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);  
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  // );
  // const searchAnime = await response.json();
  // console.log(anime)

  const searchAnime = await getAnimeResponse(`anime?q=${decodedKeyword}`);

  return (
    <>
    <section className="p-4">
      <Header title={` Search results for ${decodedKeyword}`}/>
      <AnimeList api={searchAnime} />
    </section>
      
    </>
  );
};

export default Page;
