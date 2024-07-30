import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}/characters`);
  console.log(anime);

  return (
    <>
      <section className="p-8">
        <h1>Characters & Voice Actors</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
          {anime.data && anime.data.length > 0 ? (
            anime.data.map((chara, i) => (
              <div key={i} className="flex justify-between neumorphism">
                <div className="flex gap-6 ">
                  <Image
                    src={chara.character.images.jpg.image_url}
                    width={50}
                    height={50}
                    alt={chara.character.name}
                    className="rounded-l-md"
                  />
                  <p className="text-xs py-2">{chara.character.name}</p>
                </div>
                <div>
                  {chara.voice_actors
                    .filter((actor) => actor.language === "Japanese")
                    .map((actor, j) => (
                      <div key={j} className="flex gap-6">
                        <p className="text-xs py-2">{actor.person.name}</p>
                        <Image
                          src={actor.person.images.jpg.image_url}
                          width={50}
                          height={50}
                          alt={actor.person.name}
                          className="rounded-r-md"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p>No characters available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
