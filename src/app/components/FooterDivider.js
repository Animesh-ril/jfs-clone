'use client';
import React, { use, useEffect } from "react";




export default function FooterDivider() {

    const slides =[
        {
          url: "/assets/home/career-hero-desk.webp",
         
        }
      ]

  


  return (
    
    <div className="max-w-[1250px] h-[650px] w-full m-auto py-16 px-4 bg-white-700">
     
      <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full bg-center bg-cover rounded-3xl">
      <div className=" py-20 px-4 text-left ">
        <div className="mb-10 mt-5">
          <h5 className=" text-white text-6xl font-JioTypeBold">Work, learn and</h5>
          <h5  className=" text-white text-6xl font-JioTypeBold">grow</h5>
          <p  className="text-white text-l mt-5 font-JioTypeMedium">Join our diverse workforce to explore learning opportunities</p>
          <p className="text-white text-l font-JioTypeMedium"> and experience continuous growth. </p>
        </div>
        <button class="px-4 py-4 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full">Explore Now</button>
        </div>
      
      </div>
 
    </div>

    
      

  
  )
}