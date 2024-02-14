'use client';
import React, { use, useEffect } from "react";
import Image from 'next/image'
import realtime from '../../../public/assets/svg/realtime.svg';
import robust from '../../../public/assets/svg/robust.svg';
import partner from '../../../public/assets/svg/partner.svg';
import latest from '../../../public/assets/svg/latest.svg';

export default function Divider() {

    const slides =[
        {
          url: "../assets/home/come-be-part-of-this-v4.webp",
         
        }
      ]
  return (
    
    <div className="max-w-[full] h-[550px] grid grid-cols-2 bg-dividerbrown">
       <div className="text-center  my-10 ml-40 py-20 px-50">
        <h3  className="text-white text-4xl text-left font-JioTypeBlack px-10 ml-10">
        Come, be part of this transition to Indias evolving financial life
        </h3>
        <br></br>
        <p  className="text-white text-l text-left font-JioTypeMedium px-10 ml-10">
        Leveraging the latest technology, we empower you to manage your finances in an informed way.
        </p>
        <div class="grid grid-cols-2 gap-5 ml-10 px-10 py-10 text-white text-left  font-JioTypeBold text-xl">
        <div className="flex">
          <Image alt="img" src={realtime} width={30} height={10}/>
          <p className="ml-2">Real-time Transactions</p>
        </div>
        <div className="flex">
          <Image alt="img" src={robust} width={30} height={10}/>
          <p className="ml-2">Robust Security</p>
        </div>
        <div className="flex">
          <Image alt="img" src={partner} width={30} height={10}/>
          <p className="ml-2">Partner Network</p>
        </div>
        <div className="flex">
          <Image alt="img" src={latest} width={30} height={10}/>
          <p className="ml-2">Latest Technology</p>
        </div>
      </div>


      </div>
      <div className="ml-10 my-0">
        <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full   px-200  bg-cover bg-center">
        </div></div>
      
    </div>
  
  )
}