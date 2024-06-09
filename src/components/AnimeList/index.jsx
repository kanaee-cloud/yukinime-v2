import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6 ">
      {api.data.map((anime, index) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <div 
              className="relative group neumorphism transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              key={index}
              >
              <Image
                src={anime.images.webp.image_url}
                width={600}
                height={600}
                className="h-[42vh] lg:h-[58vh] rounded-lg"
              />
              <div className="absolute p-3 inset-0 bg-gradient-to-t from-black rounded-lg transition-opacity duration-300 flex items-end">
                <div className="w-full">
                  <p className="text-sm md:text-[0.9rem] font-semibold truncate">
                    {anime.title}
                  </p>
                  <div className="flex items-center gap-x-2 lg:gap-x-4 mt-2 w-full">
                    <p className="text-[0.7rem] text-[#f9d949] lg:text-sm border border-[#f9d949] rounded-md px-3">
                      {anime.type}
                    </p>
                    <p className="text-[0.7rem] lg:text-sm flex items-center">
                      <FaStar className="mr-1 text-yellow-400" />
                      {anime.score}
                    </p>
                    <p className="text-[0.7rem] lg:text-sm flex items-center">
                      {anime.episodes} eps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
