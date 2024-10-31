"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Background from "../../../../../public/assets/collection-bg.jpg";
import Collection from "../../../../../public/assets/collection.jpg";
import CollectionItem from "../../../../components/AnimeList/CollectionItem";

const Page = () => {
  const [collection, setCollection] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/collection");
        const data = await response.json();
        setCollection(data.collection || []);
        setUser(data.user || null);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  if (!user) return <p>Loading...</p>; // Optional loading state

  return (
    <>
      <main className="h-screen">
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
            <div className="flex flex-row items-center p-4 gap-x-4 h-full px-6 md:px-10">
              <Image
                src={Collection}
                alt="User Image"
                className="w-32 h-32 md:w-44 md:h-44 rounded-md shadow-lg"
              />
              <div className="flex flex-col gap-y-2 md:gap-y-3 md:text-left">
                <p className="text-xs">Collection</p>
                <p className="text-3xl md:text-5xl font-bold">Anime Collection</p>
                <p className="text-xs md:text-sm opacity-70">by {user.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-4 p-4">
          <div className="gap-4 items-center sm:grid-cols-1 lg:grid-cols-2 grid">
            {collection.map((collect, index) => (
              <CollectionItem
                key={index}
                collect={collect}
                userEmail={user.email}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
