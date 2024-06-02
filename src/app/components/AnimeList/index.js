import Image from "next/image";
import { FaStar } from 'react-icons/fa';

const AnimeList = ({ title, images, rate, type, episodes }) => {
  return (
    <div className="relative group">
      <Image
        src={images}
        width={600}
        height={600}
        className="h-[32vh] lg:h-[58vh] rounded-lg"
      />
      <div className="absolute p-3 inset-0 bg-gradient-to-t from-black rounded-lg transition-opacity duration-300 flex items-end">
        <div className="w-full">
          <p className="text-sm md:text-[0.9rem] font-semibold truncate">
            
            {title}
          </p>
          <div className="flex items-center gap-x-4 mt-2 w-full">
            <p className="text-[0.7rem] text-[#f9d949] lg:text-sm border border-[#f9d949] rounded-md px-3">{type}</p>
            <p className="text-[0.7rem] lg:text-sm flex items-center">
            <FaStar className="mr-1 text-yellow-400" /> 
              {rate}
            </p>
            <p className="text-[0.7rem] lg:text-sm flex items-center">
              {episodes} eps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
