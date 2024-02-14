'use client';
import React, { use, useEffect } from "react";




export default function FooterDivider() {

    const slides =[
        {
          url: "/assets/home/career-hero-desk.webp",
         
        }
      ]
  return (
    
    <div className="max-w-[1200px] h-[650px] w-full m-auto py-16 px-4 bg-white-700">
     
      <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full bg-center bg-cover rounded-3xl">
      <div className=" py-20 px-4 text-left ">
        <div className="mb-10 mt-5 ml-5">
          <h5 className=" text-white text-7xl font-JioTypeBlack">Work, learn and</h5>
          <h5  className=" text-white text-6xl font-JioTypeBlack">grow</h5>
          <p  className="text-white text-l mt-5 font-JioTypeMedium">Join our diverse workforce to explore learning opportunities and experience</p>
          <p className="text-white text-l font-JioTypeMedium"> continuous growth. </p>
        </div>
        <button class="px-4 py-4 ml-5 font-JioTypeBold text-black bg-resourcebtncolor  hover:bg-yellow-700 rounded-full">Explore</button>
        </div>
      </div>
    </div>

    
      

  
  )
}