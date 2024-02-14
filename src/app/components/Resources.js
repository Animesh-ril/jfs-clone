'use client';
import React, { use, useEffect } from "react";
import Image from 'next/image'



export default function Resource() {
  const slides = [
    {
      url: "/assets/home/finance.webp",

    },
    {
      url: "/assets/home/policy-doc.webp",
    },
    {
      url: "/assets/home/investor-contact.webp",
    }
  ]

  return (

    <div className=" h-[600px] py-8 bg-yellow-700 items-center">
      <div className="items-center">
        <div className=" items-center ">
          <h1 className=" text-white text-3xl font-JioTypeBold text-center">Find resources related to investor relations here</h1>
          <p className="text-white text-l mt-5 font-JioTypeMedium text-center">JFinancial documents,policies,investors contacts, and more.</p>
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full">
        <div className="w-1/2 h-[470px] py-5 items-center relative">
          <div style={{ backgroundImage: `url(${slides[0].url})` }} className="w-full h-full bg-center bg-cover rounded-3xl relative">
            <div className="flex w-full justify-between absolute bottom-4 left-0 px-8">
              <div className=" mb-15"><h3 className="text-white text-4xl font-JioTypeBold  ">
                Financial Documents
              </h3>
                <p className="text-white text-l mt-4 mb-5 text-left font-JioTypeBold">
                  Access quarterly and annual reports.
                </p>
              </div>
              <div className=" flex items-center ">
                <button className=" px-10 py-4 mx-end  font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full w-fit">Explore Now</button>
              </div>
              {/* <div className="flex "> 
              <button class=" px-10 py-4 mx-end ml-20 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full w-fit">Explore Now</button>
            </div> */}
            </div>
          </div>
          <div>
          </div>
        </div>


        <div className="max-w-[350px] h-[240px] w-full py-5">

          <div style={{ backgroundImage: `url(${slides[1].url})` }} className="w-full h-full my-1 bg-center bg-cover rounded-3xl ">
          <div className="flex w-full justify-between absolute bottom-4 left-0 px-8">
              <div className=" mb-15"><h3 className="text-white text-4xl font-JioTypeBold  ">
                Policy Statements
              </h3>

              </div>
              <div className=" flex items-center ">
                <button className=" px-10 py-4 mx-end  font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full w-fit">Explore Now</button>
              </div>
              {/* <div className="flex "> 
              <button class=" px-10 py-4 mx-end ml-20 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full w-fit">Explore Now</button>
            </div> */}
            </div>
          </div>
          <div style={{ backgroundImage: `url(${slides[2].url})` }} className="w-full h-full my-5 bg-center bg-cover rounded-3xl">
          </div>
        </div>

      </div>


    </div>




  )
}