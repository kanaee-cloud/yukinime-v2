import AnimeList from "@/components/AnimeList/index.jsx";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await response.json();
  // console.log(anime)

  return (
    <>
    <section className="p-4">
      <Header title={` Search results for ${decodedKeyword}`} linkHref="/popular" linkTitle="See All" />
      <AnimeList api={searchAnime} />
    </section>
      
    </>
  );
};

export default Page;
