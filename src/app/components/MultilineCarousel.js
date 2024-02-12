// components/MultiLineCarousel.js
import React from "react";
import Image from "next/image";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";

const MultiLineCarousel = () => {
  const params = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <Swiper {...params}>
      <div>
        <Image src="/image1.jpg" alt="Image 1" />
      </div>
      {/* <div>
        <img src="/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/image3.jpg" alt="Image 3" />
      </div> */}
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MultiLineCarousel;
