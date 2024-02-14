'use client';
import React, { use, useEffect } from "react";
import Image from 'next/image'



export default function Divider() {

    const slides =[
        {
          url: "../assets/home/come-be-part-of-this-v4.webp",
         
        }
      ]

  


  return (
    
    <div className="max-w-[full] h-[480px] grid grid-cols-2 bg-yellow-700">
       <div className="text-center  my-10 ml-40 py-10 px-50">
        <h3  className="text-white text-4xl text-left font-JioTypeBold">
        Come, be part of this transition to India's evolving financial life
        </h3>
        <br></br>
        <p  className="text-white text-l text-left font-JioTypeBold">
        Leveraging the latest technology, we empower you to manage your finances in an informed way.
        </p>
        <div class="grid grid-cols-2 gap-5 py-10 text-white text-left  font-JioTypeMedium text-xl">
        <div>Real-time Transactions</div>
        <div>Robust Security</div>
        <div>Partner Network</div>
        <div>Latest Technology</div>
      </div>


      </div>
      <div className="ml-10 my-0">
        <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full   px-200  bg-cover bg-center">
        </div></div>
      
    </div>
  
  )
}