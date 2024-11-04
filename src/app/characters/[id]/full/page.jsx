import { getAnimeResponse } from "../../../../app/libs/api-libs";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  const anime = await getAnimeResponse(`characters/${id}/full`);
  console.log(anime);

  return (
    <>
      <section className="p-4">
        <div className="container flex flex-col sm:flex-row flex-wrap py-6 px-5 gap-5 mx-auto">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={anime.data.images.jpg.image_url}
              width={200}
              height={350}
              alt={`Cover for ${anime.data.name}`}
            />
          </div>
          <div>
            <div>
              <h1 className="font-semibold lg:text-2xl">{anime.data.name}</h1>
              <span>{anime.data.name_kanji}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
