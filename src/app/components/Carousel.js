"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
// import image1 from "../assets/slideshow/homepage-pay-desk.webp"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const slides = [
  {
    url: "/assets/slideshow/homepage-pay-desk.jpg",
    plain: "Manage",
    coloured: " your finances",
  },
  {
    url: "/assets/slideshow/SlideShow1.png",
    // url: "/assets/slideshow/hero-insurance-mobi.jpg",
    // plain: "Protect",
    // coloured: " all that matters",
  },
  {
    url: "/assets/slideshow/SlideShow2.png",
    // url: "/assets/slideshow/hero-digital-banking-mobi.jpg",
    // plain: "Bank",
    // coloured: " anytime anywhere",
  },
  {
    url: "/assets/slideshow/SlideShow3.png",
    // url: "/assets/slideshow/hero-instant-loan-mobi.jpg",
    // plain: "Realise",
    // coloured: " your dreams",
  },
];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1900px] h-[650px] w-full m-auto  relative ">
      <div>
        {/* <Image src={"/assets/slideshow/homepage-pay-desk.webp"} width={1900} height={650} className="object-cover w-full h-[680px]"/> */}
      </div>

      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease",
        }}
        className="w-full h-full bg-center bg-cover duration-500 transition ease-in-out"
      >
        {slides[currentIndex]?.plain && (
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block">
            <div className="mb-10 text-5xl ">
              <h5 className=" text-white font-JioTypeBlack">
                {slides[currentIndex].plain}
                <span className="text-navbgcolor font-JioTypeBlack">
                  {slides[currentIndex].coloured}
                </span>
              </h5>
            </div>
            <button class="px-4 py-4 font-JioTypeBold text-carouseltext bg-navbgcolor  hover:bg-navtitlecolor rounded-full">
              Explore Now
            </button>
          </div>
        )}
      </div>
      <div className="flex top-4 justify-center py-4 gap-x-3">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${
              slideIndex === currentIndex
                ? "bg-[#FAEBD9] min-w-6"
                : "bg-[#b5b5b5] min-w-2"
            } transition-all min-h-2 rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>
      <div></div>
    </div>
  );
}