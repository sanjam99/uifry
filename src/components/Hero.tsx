import React from 'react'
import Image from 'next/image'
import linkphone from '../../public/Group 1000004721.jpeg'
import banner from '../../public/Group 35924.jpeg'
import backgroundImage from '../../public/Group 35896.png'


function Hero() {
  return (
    <>
    <div className="absolute w-[517px] h-[430px] top-[25px] bg-center">
      <Image 
        src={backgroundImage} 
        layout="fill" 
        objectFit="cover" 
        alt="Background Image"
        className="rounded-lg" // Optional, for rounded corners
      />
      <div className="absolute w-[317px] h-[230px] top-[220px]">
      <h1 className="text-6xl font-bold leading-10 capitalize w-[618px]">make the best financial decisions</h1>
      </div>
    </div>
    <div className="absolute w-[638px] h-[56px] top-[367px] text-black font-clash-display text-[18px] font-medium leading-[28px] tracking-[0%] text-left capitalize opacity-50">
      Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
    </div>
    <div className="absolute w-[373px] h-[60px] top-[447px] flex space-x-4">
      <button className="w-[500px] h- [42px] flex items-center justify-center flex-1 h-full py-4 px-12 bg-black rounded text-lg font-medium leading-7 text-white capitalize hover:bg-red-500 hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        Get started
      </button>
      <button className="w-[180px] h-full bg-white text-black py-2 px-4 rounded">
        watch video
      </button>
    </div>
    <div className="absolute w-[505.31px] h-[313.92px] top-[523.75px]">
    <Image src={banner} width="1000" height="1050" alt='banner'/>
    </div>
    <div className="relative w-[610.24px] h-[794.14px] left-[715px] top-[79px]">
      <Image 
        src={linkphone} 
        alt="Hero"
        layout="fill" 
        objectFit="cover"
      />
    </div>
    <div className="absolute w-[638px] h-[464px] left-[684px] top-[1111px] inline-flex flex-col space-y-8 items-start justify-end">
      <div className="flex flex-col space-y-1 items-start justify-end w-full">
        <p className="text-lg font-medium tracking-widest leading-7 text-red-500 uppercase">features</p>
        <p className="text-5xl font-bold leading-10 capitalize">uifry premium</p>
      </div>
      <div className="flex flex-col space-y-3 items-start justify-end w-full">
        <div className="inline-flex space-x-2 items-center justify-start w-1/3">
          <img className="w-6 h-6 rounded-lg" src="https://via.placeholder.com/24x24" alt="icon" />
          <p className="text-lg font-semibold leading-7 capitalize">budgeting intervals</p>
        </div>
        <p className="opacity-50 text-lg font-medium leading-7 capitalize w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="flex flex-col space-y-3 items-start justify-end w-full">
        <div className="inline-flex space-x-2 items-center justify-start w-1/3">
          <img className="w-6 h-6 rounded-lg" src="https://via.placeholder.com/24x24" alt="icon" />
          <p className="text-lg font-semibold leading-7 capitalize">budgeting intervals</p>
        </div>
        <p className="opacity-50 text-lg font-medium leading-7 capitalize w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="flex flex-col space-y-3 items-start justify-end w-full">
        <div className="inline-flex space-x-2 items-center justify-start w-1/3">
          <img className="w-6 h-6 rounded-lg" src="https://via.placeholder.com/24x24" alt="icon" />
          <p className="text-lg font-semibold leading-7 capitalize">budgeting intervals</p>
        </div>
        <p className="opacity-50 text-lg font-medium leading-7 capitalize w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
    </>
  )
}

export default Hero