import React from 'react'
import Image from 'next/image'
import image from '../../public/Group 1000002332.png'
import group from '../../public/Group 35917.png'
import backgroundImage from '../../public/Group 35930.png'

function Testinomials() {
  return (
    <>
    <div className='absolute w-[455px] h-[211px] left-[400px] top-[2981.98px]'>
    <div className="inline-flex flex-col space-y-1 items-center justify-end">
    <p className="text-lg font-medium tracking-widest leading-7 text-center uppercase">testimonial</p>
    <p className="text-5xl font-bold leading-10 text-center capitalize">what our users say about us?</p>
</div>
</div>
<div className='absolute w-[455px] h-[211px] left-[700px] top-[3150.98px]'>
<div className="inline-flex flex-col space-y-6 items-start justify-start" style={{width: 442, height: 392,}}>
    <p className="text-3xl font-semibold leading-7 capitalize" style={{width: 442,}}>the best financial accounting app ever!</p>
    <p className="opacity-50 text-lg font-medium leading-7 capitalize" style={{width: 442,}}>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
    <div className="inline-flex space-x-2 items-center justify-end w-48 h-10">
        <div className="relative w-1/5 h-full">
            <div className="w-full h-full bg-red-300 rounded-full" />
        </div>
        <Image src={group} alt='grp'></Image>
    </div>
    <p className="text-lg font-semibold leading-7 capitalize">nick jonas</p>
</div>
</div>
<div className="relative">
      <div className="absolute w-[300px] h-[300.14px] left-[120px] top-[2300.98px]">
        <Image 
          src={backgroundImage} 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div></div>
<div className="absolute w-[455px] h-[211px] left-[90px] top-[3100.98px]">
        <Image 
          src={image} 
          alt="Left Image"
          width={455} // half of the parent width (455px)
          height={105.5} // adjust height as necessary
          className="object-cover"
        />
      </div>
</>
  )
}

export default Testinomials