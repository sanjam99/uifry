import React from 'react'
import Image from 'next/image'
import imageSrc from '../../public/Group 35933 (1).png'
import backgroundImage from '../../public/Group 35930.png'

function Features() {
  return (
    <>
    <div className="relative">
      <div className="absolute w-[593px] h-[385.14px] top-[100px]">
        <Image 
          src={backgroundImage} 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
    <div className="relative">
      <div className="absolute w-[519.49px] h-[719.49px] top-[200px]">
        <Image 
          src={imageSrc} 
          alt="Positioned Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
    </>
  )
}

export default Features