import React from 'react'
import img from "../../public/assets/not-found.gif"
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Image src={img} className='mt-10' alt='Loading'/>
        <h1 className='font-semibold text-2xl'>Wait for a moment ...</h1>
      </div>
    </div>
    
  )
}

export default Page