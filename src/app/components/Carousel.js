'use client'; 
import React, { use, useEffect } from "react";
import Image from 'next/image'
import {RxDotFilled} from 'react-icons/rx'
import { useState } from "react";



const slides =[
    {
      url: "https://images.unsplash.com/photo-1602454252462-3fe9e21cc149?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3MlMjBhbmQlMjBjb25zfGVufDB8fDB8fHww",
      plain : 'Protect',
      coloured: ' all that matters'
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/006/430/145/non_2x/technology-background-concept-circuit-board-electronic-system-futuristic-hi-tech-light-on-dark-blue-free-vector.jpg",
      plain: 'Bank',
      coloured: ' anytime anywhere'
    },
    {
      url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
      plain : 'Realise',
      coloured: ' your dreams'
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      plain : 'Manage',
      coloured: ' your finances'
    }
  ]


export default function SlideShow() {

 

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length-1 : currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () =>{
    const isLast = currentIndex === slides.length-1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


  return (
    <div className="max-w-[1500px] h-[650px] w-full m-auto  relative ">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500  transition: ease 1000ms">
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block">
        <div className="mb-10 text-5xl ">
          <h5 className=" text-white font-JioTypeBold">{slides[currentIndex].plain}
          <span  className="text-yellow-500 font-JioTypeBold">{slides[currentIndex].coloured}</span></h5>
        </div>
        <button class="px-4 py-4 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full">Explore Now</button>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide,slideIndex) => (
          <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}