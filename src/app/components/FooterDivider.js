'use client';
import React, { use, useEffect } from "react";
import Image from 'next/image'



export default function FooterDivider() {

    const slides =[
        {
          url: "/assets/home/career-hero-desk.webp",
         
        }
      ]

  


  return (
    
    <div className="max-w-[1200px] h-[600px] w-full m-auto py-16 px-4 bg-white-700">
     
      <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full bg-center bg-cover duration-500  transition: ease 1000ms">
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block">
        <div className="mb-10 text-5xl ">
          <h5 className=" text-white font-JioTypeBold">
          <span  className="text-yellow-500 font-JioTypeBold"></span></h5>
        </div>
        <button class="px-4 py-4 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full">Explore Now</button>
        </div>
      </div>
 
    </div>

    
      

  
  )
}