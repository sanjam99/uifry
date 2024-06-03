import React from 'react'
import Image from 'next/image'
import frameImage from '../../public/iPhone 13 Pro.png'

function Banner() {
  return (
    <div className="absolute w-[990px] h-[458px] left-[120px] top-[4550.71px] bg-black rounded-lg flex items-center justify-between p-8">
      <div className="flex flex-col space-y-4">
        <p className="text-5xl font-bold leading-10 text-white capitalize">Ready to get started?</p>
        <p className="text-lg leading-7 text-white capitalize">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
        <div className="w-52 h-16">
            <button className="flex items-center justify-center flex-1 h-full py-5 px-5 flex space-x-3 items-center justify-end flex-1 h-full bg-white rounded text-lg font-medium leading-7 text-black capitalize hover:bg-red-500 hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Download App
    </button>
        </div>
      </div>
      <div className="relative w-[393px] h-[285.14px]">
        <Image
          src={frameImage}
          alt="Phone Mockup"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Banner
