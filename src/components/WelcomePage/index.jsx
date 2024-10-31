
import Image from "next/image";
import React from "react";
import SwiperSlide from "./SwiperItem";
import { getAnimeResponse } from "../../app/libs/api-libs";

import "swiper/css";
const WelcomePage = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=5");

  return (
    <section className="h-screen flex flex-col md:flex-row justify-between items-center py-6 px-8">
      <div className="w-full md:w-1/2 text-left p-4">
        <a href="#" className="font-semibold  text-[1.2rem] lg:text-4xl">
          Yuki<span className="text-color-accent">nime!</span>
        </a>
        <p className="text-sm opacity-60">
         Komponen disini!
        </p>
      </div>

      <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
        <SwiperSlide api={topAnime} />
      </div>
    </section>
  );
};

export default WelcomePage;
