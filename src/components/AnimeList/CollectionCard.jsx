import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CollectionCard = ({ collect, userEmail}) => {
  return (
    <Link href={`/anime/${collect.anime_mal_id}`} className="cursor-pointer">
    <div 
      className="h-[22vh] relative group neumorphism transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
      <Image
        src={collect.anime_image}
        width={700}
        height={600}
        className="w-full h-full rounded-lg object-cover"
        alt={collect.anime_name}
      />
      <div className="absolute px-4 py-4 inset-0 bg-gradient-to-t from-black rounded-lg transition-opacity duration-300 flex items-end">
        <div className="w-full">
          <p className="text-sm md:text-[0.9rem] font-semibold truncate">
            {collect.anime_name}
          </p>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default CollectionCard