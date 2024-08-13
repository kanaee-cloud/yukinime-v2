import { getAnimeResponse } from "../../../../app/libs/api-libs";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}/characters`);
  console.log(anime);

  return (
    <>
      <section className="p-8">
        <div className="flex justify-between items-center">
          <Link
            href={`/anime/${id}`}
            className="flex gap-2 items-center transition-all hover:gap-5 hover:text-color-accent  relative"
          >
            <MdNavigateBefore size={30} />
            <h1 className="text-sm lg:text-md">Back</h1>
          </Link>
          <h1 className="font-semibold lg:text-2xl ">
            Characters & Voice Actors
          </h1>
          <Link
            href={`/anime/${id}/episodes`}
            className="flex gap-2 items-center transition-all hover:gap-5 hover:text-color-accent  relative"
          >
            <h1 className=" text-sm lg:text-md">Episodes</h1>
            <MdNavigateNext size={30} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-9">
          {anime.data && anime.data.length > 0 ? (
            anime.data.map((chara, i) => (
              <Link href={`/characters/${chara.character.mal_id}/full`}>
                <div key={i} className="flex justify-between neumorphism">
                  <div className="flex gap-6 ">
                    <Image
                      src={chara.character.images.jpg.image_url}
                      width={50}
                      height={50}
                      alt={chara.character.name}
                      className="rounded-l-md"
                    />
                    <div>
                      <p className="text-sm py-2">{chara.character.name}</p>
                      <p className="text-xs py-2 text-color-accent">
                        {chara.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    {chara.voice_actors
                      .filter((actor) => actor.language === "Japanese")
                      .slice(0, 1)
                      .map((actor, j) => (
                        <div key={j} className="flex gap-6">
                          <div>
                            <p className="text-sm py-2">{actor.person.name}</p>
                            <p className="text-xs py-2 text-right text-color-accent">
                              {actor.language}
                            </p>
                          </div>
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
              </Link>
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
