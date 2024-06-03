import React from 'react';
import logo from '../../public/Group.jpeg'
import Image from 'next/image';

function Ending() {
  return (
    <div className="absolute w-[1091px] h-[406px] left-[120px] top-[5139.71px] rounded-lg">
      <div className="inline-flex items-center justify-center py-10 px-96 absolute left-0 bottom-0 border" style={{ width: 1090, height: 104 }}>
        <p className="text-base font-medium leading-relaxed capitalize">Copyright 2022 uifry.com all rights reserved by Sanket Jambhulkar</p>
      </div>
      <div className="inline-flex flex-col space-y-4 items-start justify-end absolute" style={{ width: '8rem', height: '10rem', left: 558, top: 0 }}>
        <p className="text-3xl font-medium leading-10 capitalize">product</p>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">take tour</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">live chat</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">reviews</a>
      </div>
      <div className="inline-flex flex-col space-y-4 items-center justify-end absolute" style={{ width: '7rem', height: '10rem', left: 385, top: 0 }}>
        <p className="text-3xl font-medium leading-10 capitalize">legal</p>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">terms of use</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">privacy policy</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">cookie policy</a>
      </div>
      <div className="inline-flex flex-col space-y-4 items-center justify-end absolute" style={{ width: '5rem', height: '13rem', left: 238, top: 0 }}>
        <p className="text-3xl font-medium leading-10 text-center capitalize">links</p>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">home</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">about us</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">bookings</a>
        <a href="#" className="text-base font-medium leading-relaxed capitalize">blog</a>
      </div>
      <div className="inline-flex flex-col space-y-4 items-center justify-end absolute left-0 top-0" style={{ width: '11rem', height: '7rem' }}>
        <div className="inline-flex space-x-0.5 items-start justify-end w-2/3 h-9">
          <div className="flex space-x-1.5 items-center justify-end w-28 h-full">
            <div className="flex items-center justify-center w-8 h-8 px-1">
            </div>
          </div>
          <Image src={logo} width="100" height="50" alt='logo'/>
          <p className="w-2 h-1 text-xs font-medium text-gray-800">TM</p>
        </div>
        <div className="inline-flex space-x-2 items-center justify-end w-full h-6">
          <img className="w-6 h-6 rounded-lg" src="https://via.placeholder.com/24x24" alt="email" />
          <p className="text-base font-medium leading-relaxed capitalize">help@frybix.com</p>
        </div>
        <div className="inline-flex space-x-2 items-center justify-end w-full h-6">
          <img className="w-6 h-6 rounded-lg" src="https://via.placeholder.com/24x24" alt="phone" />
          <p className="text-base font-medium leading-relaxed capitalize">+1 234 456 678 89</p>
        </div>
      </div>
      <div className="inline-flex flex-col space-y-4 items-start justify-start absolute right-0 top-0" style={{ width: '20rem', height: '11rem' }}>
        <p className="text-3xl font-medium leading-10 capitalize">Newsletter</p>
        <p className="text-base font-medium leading-relaxed capitalize">Stay up to date</p>
        <div className="w-full h-20">
          <div className="inline-flex space-x-2 items-start w-full h-6">
<input type="email" className="text-base font-medium leading-relaxed capitalize bg-transparent border-b border-gray-500" placeholder="Your email" />
</div>
<div className="inline-flex space-x-2 items-start w-full h-6">
<button className="text-base font-medium leading-relaxed capitalize bg-black text-white py-1 px-4 rounded">Subscribe</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default Ending;