'use client';
import React, { use, useEffect } from "react";
import Image from 'next/image'
import { RxArrowRight } from 'react-icons/rx'


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

    <div className=" h-[750px] py-8 bg-resourcebg items-center">
      <div className="items-center ">
        <div className=" items-center ">
          <h1 className=" text-white text-4xl font-JioTypeBlack text-center mt-10">Find resources related to investor</h1>
          <h1 className=" text-white text-4xl font-JioTypeBlack text-center">relations here</h1>
          <p className="text-white text-xl mt-5 font-JioTypeMedium text-center mb-10">Financial documents, policies, investors contacts, and more.</p>
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full">
        <div className="w-[800px] h-[500px] py-5 items-center relative">
          <div style={{ backgroundImage: `url(${slides[0].url})` }} className="w-full h-full bg-center bg-cover rounded-3xl relative">
            <div className="flex w-full justify-between absolute bottom-4 left-0 px-8">
              <div className=" mb-15"><h3 className="text-white text-4xl font-JioTypeBlack ">
                Financial Documents
              </h3>
                <p className="text-white text-l mt-4 mb-5 text-left font-JioTypeMedium">
                  Access quarterly and annual reports.
                </p>
              </div>
              <div className=" flex items-center ">
                <button className=" flex items-center  px-5 py-4 mx-end  font-JioTypeBold text-black bg-resourcebtncolor  hover:bg-yellow-700 rounded-full w-50">
                Explore   <RxArrowRight className="ml-3"/></button>
              </div>
              {/* <div className="flex "> 
              <button class=" px-10 py-4 mx-end ml-20 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full w-fit">Explore Now</button>
            </div> */}
            </div>
          </div>
          <div>
          </div>
        </div>


        <div className="max-w-[350px] h-[255px] w-full py-5">

          <div style={{ backgroundImage: `url(${slides[1].url})` }} className="w-full h-full my-1 bg-center relative bg-cover rounded-3xl ">
            <div className="flex w-full justify-between absolute bottom-4 left-0 px-8">
              <div className="flex box-content mb-15">
                <h3 className="text-white text-2xl font-JioTypeBold">
                Policy Statments
              </h3>
              <div className=" flex box-content items-center ml-10 mb-3">
                <button className=" flex items-center  px-3 py-3 font-JioTypeBold text-black bg-resourcebtncolor  hover:bg-yellow-700 rounded-full w-50">
                <RxArrowRight size={20}/></button>
              </div>
              </div>

            </div>
          </div>
          <div style={{ backgroundImage: `url(${slides[2].url})` }} className="w-full h-full my-5 bg-center relative bg-cover rounded-3xl">
            <div className="flex w-full justify-between absolute bottom-4 left-0 px-8">
              <div className=" flex box-content mb-15"><h3 className="text-white text-2xl font-JioTypeBold  ">
                Investor Contacts
              </h3>
              <div className=" flex box-content items-center ml-10 mb-3">
                <button className=" flex items-center  px-3 py-3 font-JioTypeBold text-black bg-resourcebtncolor  hover:bg-yellow-700 rounded-full w-50">
                <RxArrowRight size={20}/></button>
              </div>
              </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}