import { getAnimeResponse } from "../../../app/libs/api-libs";
import { FaStar, FaBroadcastTower } from "react-icons/fa";
import { PiRankingThin } from "react-icons/pi";
import { MdFavoriteBorder, Md18UpRating } from "react-icons/md";
import { CgStudio } from "react-icons/cg";
import { GrStatusInfo } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Collection from '../../../../public/assets/collection.jpg';
import CommentInput from "../../../components/AnimeList/CommentInput";
import CommentBox from "../../../components/AnimeList/CommentBox";
import CollectionButton from "../../../components/AnimeList/CollectionButton";
import { authUserSession } from "../../libs/auth-libs";
import { FaCircleCheck } from "react-icons/fa6";
import prisma from "../../libs/prisma";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  console.log(collection);

  function formatMembersCount(members) {
    let formattedNumbers = Math.floor(members / 1000);
    return `${formattedNumbers}K`;
  }

  const members = anime.data.members;
  const formattedNumbers = formatMembersCount(members);

  function formatFavoriteCount(favorite) {
    let formattedFavorite = Math.floor(favorite / 1000);
    return `${formattedFavorite}K`;
  }

  const favorite = anime.data.favorites;
  const formattedFavorite = formatFavoriteCount(favorite);

  return (
    <>
      <section className="pb-8">
        <div className="relative w-full h-[60vh]">
          <div className="relative w-full h-full">
            <iframe
              src={anime.data.trailer.embed_url}
              frameBorder="0"
              className="w-full h-full mx-auto object-cover pointer-events-auto z-10"
            ></iframe>
          </div>
        </div>
        <div className="container flex flex-col sm:flex-row flex-wrap py-6 px-5 mx-auto">
          <div className="lg:flex lg:justify-between justify-center items-center w-full">
            <div>
              <h1 className="font-semibold text-xl lg:text-2xl">
                {anime.data.title}
              </h1>
              <p className="text-[10px] lg:text-xs text-color-accent">
                {anime.data.type} | {anime.data.aired.prop.from.year} -{" "}
                {anime.data.aired.prop.to.year} | {anime.data.episodes} episodes
              </p>
            </div>
            <div className="flex gap-x-8 justify-center mt-5 lg:mt-0 glass-morphism p-3">
              <div className="flex flex-col items-center">
                <p className="text-sm lg:text-center opacity-30">MAL Rating</p>
                <div className="flex items-center gap-x-2">
                  <FaStar size={30} className="text-yellow-400" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">
                      {anime.data.score}
                      <span className="text-xs relative -top-0.5 opacity-30">
                        {" "}
                        /10
                      </span>
                    </p>
                    <p className="text-xs">{formattedNumbers}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm lg:text-center opacity-30">Popularity</p>
                <div className="flex items-center gap-x-2">
                  <PiRankingThin size={40} className="text-yellow-400" />
                  <p className="font-semibold text-sm">
                    {anime.data.popularity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm lg:text-center opacity-30">Favorite</p>
                <div className="flex items-center gap-x-2">
                  <MdFavoriteBorder size={35} className="text-yellow-400 " />
                  <p className="font-semibold text-sm">{formattedFavorite}</p>
                </div>
              </div>
            </div>
            {user ? (
              <div className="mt-3 lg:mt-0">
                {!collection ? (
                  <CollectionButton
                    anime_mal_id={id}
                    user_email={user?.email}
                    anime_image={anime.data.images.jpg.large_image_url}
                    anime_name={anime.data.title}
                  />
                ) : (
                  <p className="bg-[#f9d949] text-[#0c0a24] flex items-center text-sm px-4 py-2 gap-x-2 rounded-lg font-semibold">
                    <FaCircleCheck />
                    Added to Collection
                  </p>
                )}
              </div>
            ) : (
              <Link
                href="/api/auth/signin"
                className="bg-[#f9d949] text-[#0c0a24] font-semibold flex items-center text-sm px-4 py-2 gap-x-2 rounded-lg"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
        <div className="container flex flex-col justify-between lg:flex-row mx-auto px-5 gap-5">
          <div className="flex justify-center lg:justify-start lg:w-[350px] lg:h-[350px]">
            <Image
              src={anime.data.images.jpg.large_image_url}
              width={350}
              height={350}
              className="rounded-md object-cover w-full h-full"
              alt={`Cover for ${anime.data.title}`}
            />
          </div>
          <div className="flex flex-col lg:w-full">
            <div className="flex gap-x-2 justify-center lg:justify-start text-md">
              {anime.data.genres.map((genre, i) => (
                <a
                  href="#"
                  key={i}
                  className="border border-color-accent transition-all hover:bg-color-accent rounded-lg text-sm px-3 py-1"
                >
                  {genre.name}
                </a>
              ))}
            </div>
            <div className="overflow-y-auto lg:overflow-hidden mt-5 scroll-container">
              <p className="text-sm text-justify pr-3">{anime.data.synopsis}</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center glass-morphism p-3 mt-8 gap-4">
              <div className="flex items-center p-4 gap-x-3">
                <CgStudio size={30} className="text-yellow-400" />
                {anime.data.studios.map((studio, i) => (
                  <p key={i} className="text-sm text-justify">
                    {studio.name}
                  </p>
                ))}
              </div>
              <div className="flex items-center p-4 gap-x-3">
                <FaBroadcastTower size={30} className="text-yellow-400" />
                <p className="text-sm">{anime.data.broadcast.string}</p>
              </div>
              <div className="flex items-center p-4 gap-x-3">
                <GrStatusInfo size={30} className="text-yellow-400" />
                <p className="text-sm text-justify">{anime.data.status}</p>
              </div>
              <div className="flex items-center p-4 gap-x-3">
                <Md18UpRating size={30} className="text-yellow-400" />
                <p className="text-sm text-justify">{anime.data.rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 mt-10">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-center grid-cols-1 gap-6 mt-6">
            <div className="p-8 flex items-center">
              <Link href={`/anime/${anime.data.mal_id}/episodes`}>
                <div className="flex flex-col gap-y-2 bg-[#070d1b] hover:bg-gray-500 transition-colors duration-300 p-4 rounded-lg">
                  <Image
                    src={Collection}
                    alt="Episodes"
                    className="w-44 rounded-lg"
                  />
                  <h1 className="text-sm">Episodes</h1>
                </div>
              </Link>
            </div>
            <div className="p-8 flex items-center">
              <Link href={`/anime/${anime.data.mal_id}/streaming`}>
                <div className="flex flex-col gap-y-2 bg-[#070d1b] hover:bg-gray-700 transition-colors duration-300 p-4 rounded-lg">
                  <Image
                    src={Collection}
                    alt="Streaming"
                    className="w-44 rounded-lg"
                  />
                  <h1 className="text-sm">Streaming</h1>
                </div>
              </Link>
            </div>
            <div className="p-8 flex items-center">
              <Link href={`/anime/${anime.data.mal_id}/characters`}>
                <div className="flex flex-col gap-y-2 bg-[#070d1b] hover:bg-gray-700 transition-colors duration-300 p-4 rounded-lg">
                  <Image
                    src={Collection}
                    alt="Character"
                    className="w-44 rounded-lg"
                  />
                  <h1 className="text-sm">Characters</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 container mx-auto items-center gap-y-6 flex flex-col">
          {user ? (
            <CommentInput
              anime_mal_id={id}
              user_email={user?.email}
              username={user?.name}
              user_image={user?.image}
              anime_name={anime.data.title}
            />
          ) : null}
          <CommentBox anime_mal_id={id} />
        </div>
      </section>
    </>
  );
};

export default Page;