import React from 'react';
import Image from 'next/image';
 
const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="bg-white border-2 border-yellow shadow-md rounded-3xl p-6 flex flex-col items-center">
      <h3 className="text-2xl mb-4 text-lightbrown font-JioTypeBlack">{title}</h3>
      <p className="text- mb-4 font-JioTypeMedium text-center">{description}</p>
      <div className="flex justify-center">
        <Image src={imageUrl} alt="Card Image" width={200} height={200} />
      </div>
      <button class="px-4 py-3 mt-3 font-JioTypeBold text-brown border-2 border-lightblue  hover:border-lightbrown rounded-full">Explore</button>
    </div>
  );
};
 
export default Card;