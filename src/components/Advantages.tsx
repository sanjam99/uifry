import React from 'react';
import Image from 'next/image';

import backgroundImage1 from '../../public/Group 35931.png';
import foregroundImage from '../../public/Group 35935.png';
import imageSrc from '@/../public/On Hold.png';

import imageSrc2 from '../../public/Group 35937.png'
import card from '../../public/Group.png'
import star from '../../public/star-05.png'
import bell from '../../public/bell-02.png'

function Advantages() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-[627px] h-[437.26px] left-[700px] top-[1000px]">
          <Image 
            src={backgroundImage1} 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      <div className="absolute w-[719.49px] h-[719.49px] left-[649px] top-[1718.49px]">
        <Image 
          src={foregroundImage} 
          alt="Foreground Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute w-[301px] h-[91.47px] left-[996px] top-[2000.71px]">
        <Image 
          src={imageSrc} 
          alt="Third Positioned Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute w-[535px] h-[323px] md:left-[2%] lg:left-[2%] top-[1916.49px]">
  <div className="inline-flex flex-col space-y-8 items-start justify-end" style={{ width: '535px', height: '323px' }}>
    <div className="flex flex-col space-y-1 items-start justify-end" style={{ width: '452px', height: '80px' }}>
      <p className="text-left text-lg font-medium tracking-widest leading-7 text-red-500 uppercase">advantages</p>
      <p className="text-left text-5xl font-bold leading-10 capitalize">why choose Uifry?</p>
    </div>
    <div className="flex flex-col space-y-6 items-start justify-end" style={{ width: '535px', height: '211px' }}>
      <div className="inline-flex space-x-4 items-center justify-end w-80 h-12">
        <div className="relative" style={{ width: '48px', height: '48px' }}>
          <div className="w-12 h-12 bg-red-500 rounded-full"></div>
          <img className="w-6 h-6 absolute right-0 bottom-0 rounded-lg" src={bell.src} alt="icon" />
        </div>
        <p className="text-left text-3xl font-semibold leading-7 capitalize">clever notifications</p>
      </div>
      <p className="text-left opacity-50 text-lg font-medium leading-7 capitalize" style={{ width: '535px' }}>
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
      </p>
    </div>
  </div>
</div>
<div className="absolute w-[562px] h-[211px] left-[730px] top-[2475.98px]">
  <div className="inline-flex flex-col space-y-6 items-start justify-end w-full h-full">
    <div className="inline-flex space-x-4 items-center justify-end w-80 h-12">
      <div className="relative w-12 h-12 bg-red-500 rounded-full">
        <img className="w-6 h-6 absolute right-0 bottom-0 rounded-lg" src={star.src} alt="icon" />
      </div>
      <p className="text-3xl font-semibold leading-7 capitalize">fully customizable</p>
    </div>
    <p className="opacity-50 text-lg font-medium leading-7 capitalize w-full">
      Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
    </p>
  </div>
</div>

<div className="relative">
        <div className="absolute w-[627px] h-[437.26px] top-[1500.55px]">
          <Image 
            src={backgroundImage1} 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
<div className="absolute w-[510.49px] h-[719.49px] top-[2221.98px]">
      <Image 
        src={imageSrc2} 
        alt="Positioned Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className="absolute w-[260.07px] h-[159.28px] left-[170px] top-[2500.98px] rounded-xl bg-black">
      <Image 
        src={card} 
        alt="Rectangle Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="rounded-xl"
      />
    </div>
    </>
  );
}

export default Advantages;
