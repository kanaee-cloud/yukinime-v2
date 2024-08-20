import Image from "next/image";
import Link from "next/link";
import { authUserSession } from "../../../libs/auth-libs";
import Background from "../../../../assets/collection-bg.jpg";
import Collection from "../../../../assets/collection.jpg";
import prisma from "../../../libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  console.log(collection);

  return (
    <>
      <section className="">
        <div className="relative w-full h-[30vh] lg:h-[40vh] md:h-[40vh]">
          <div className="relative w-full h-full">
            <Image
              src={Background}
              alt="Profile Background"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(153deg,rgba(0,0,0,0.83)_0%,rgba(0,0,0,0.41)_20%)] pointer-events-none">
            <div className="flex flex-row items-center  p-4 gap-x-4 h-full px-6 md:px-10">
              <Image
                src={Collection}
                alt="User Image"
                className="w-32 h-32 md:w-44 md:h-44 rounded-md shadow-lg"
              />
              <div className="flex flex-col gap-y-2 md:gap-y-3 md:text-left">
                <p className="text-xs">Collection</p>
                <p className="text-3xl md:text-5xl font-bold">
                  Anime Collection
                </p>
                <p className="text-xs md:text-sm opacity-70">by {user.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-4 p-4">
          <div className="gap-4 items-center sm:grid-cols-1 lg:grid-cols-2 grid">
            {collection.map((collect, index) => {
              return (
                <div
                  key={index}
                  className="glassmorphism w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <Link href={`/anime/${collect.anime_mal_id}`}>
                    <div className="flex">
                      <Image
                        src={collect.anime_image}
                        alt=""
                        width={350}
                        height={350}
                        className="w-32 rounded-l-[20px]"
                      />
                      <div className="p-4">
                        <h1 className="font-semibold  text-sm text-justify">
                          {collect.anime_name}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
