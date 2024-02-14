import React from 'react';
import Image from 'next/image';
 
const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="bg-white border-2 border-amber-300 shadow-md rounded-3xl p-6 flex flex-col items-center">
      <h3 className="text-2xl mb-4 text-[rgb(144, 110, 57)] font-JioTypeBold">{title}</h3>
      <p className="text- mb-4 font-JioTypeMedium text-center">{description}</p>
      <div className="flex justify-center">
        <Image src={imageUrl} alt="Card Image" width={200} height={200} />
      </div>
      <button class="px-4 py-4 mt-3 font-JioTypeBold text-black border-2 border-gray  hover:border-gray-600 rounded-full">Explore</button>
    </div>
  );
};
 
export default Card;