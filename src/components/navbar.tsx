import React from 'react';
import logo from '../../public/Group.jpeg'
import Image from 'next/image';
function Navbar() {

  return (
    <div className="inline-flex space-x-96 items-center justify-end" style={{width: 1090, height: 60,}}>
    <div className="flex space-x-10 items-center justify-end pr-0.5" style={{width: 528, height: 34.41,}}>
        <div className="flex space-x-0.5 items-start justify-end w-28 h-full">
            <div className="flex space-x-1.5 items-center justify-end w-28 h-full">
            <Image src={logo} width="100" height="50" alt='logo'/>
            </div>
            <p className="w-2 h-1 text-xs">TM</p>
        </div>
        <div className="flex space-x-6 items-center justify-center">
        <a
        href="#home"
        className="text-xl font-medium leading-relaxed capitalize text-black hover:text-red-500 hover:font-bold"
      >
        home
      </a>
      <a
        href="#about-us"
        className="text-xl font-medium leading-relaxed capitalize text-black hover:text-red-500 hover:font-bold"
      >
        about us
      </a>
      <a
        href="#pricing"
        className="text-xl font-medium leading-relaxed capitalize text-black hover:text-red-500 hover:font-bold"
      >
        pricing
      </a>
      <a
        href="#features"
        className="text-xl font-medium leading-relaxed capitalize text-black hover:text-red-500 hover:font-bold"
      >
        features
      </a>
        </div>
    </div>
    {/* <div className="w-1/6 h-full">
  <div className="flex items-center justify-center flex-1 h-full py-4 px-12 bg-black rounded"> */}
    <button className=" w-1/6 h-full flex items-center justify-center flex-1 h-full py-4 px-12 bg-black rounded text-lg font-medium leading-7 text-white capitalize hover:bg-red-500 hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      download
    </button>
  {/* </div>
</div> */}
</div>
  )
}

export default Navbar