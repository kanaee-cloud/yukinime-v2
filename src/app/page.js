import AnimeList from "./components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();
  // console.log(anime)

  return (
    <>
      <div className="p-4">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
          {anime.data.map((data) => {
            return (
              <div key={data.mal_id} className="shadow-xl">
                <AnimeList
                  title={data.title}
                  images={data.images.webp.image_url}
                  rate={data.score}
                  type={data.type}
                  episodes={data.episodes}
                  id={data.mal_id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
