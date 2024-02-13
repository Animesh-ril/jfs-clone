// // components/InstantLoans.js
// import React from 'react';

// const Card = () => {
//   return (
    // <section className="bg-gray-100 py-16">
    //   <div className="container mx-auto">
    //     <h2 className="text-3xl font-semibold mb-8 text-center">Instant Loans</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          // <div className="bg-white shadow-md rounded-lg p-6">
          //   <h3 className="text-xl font-semibold mb-4">Personal Loans</h3>
          //   <p className="text-gray-700 mb-4">
          //     Get quick personal loans with low interest rates and flexible repayment options.
          //   </p>
          //   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply Now</button>
          // </div>
          
          // {/* <div className="bg-white shadow-md rounded-lg p-6">
          //   <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
          //   <p className="text-gray-700 mb-4">
          //     Expand your business with our hassle-free business loans tailored to your needs.
          //   </p>
          //   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply Now</button>
          // </div>
          
          // <div className="bg-white shadow-md rounded-lg p-6">
          //   <h3 className="text-xl font-semibold mb-4">Home Loans</h3>
          //   <p className="text-gray-700 mb-4">
          //     Fulfill your dream of owning a home with our competitive home loan options.
          //   </p>
          //   <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply Now</button>
          // </div> */}
    //     </div>
    //   </div>
    // </section>




/// components/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    // <div className="bg-white rounded-lg shadow-md overflow-hidden h-380">
    //   {/* Card Image */}
    //   <Image className="w-full h-40 object-cover object-center" src={imageUrl} alt="Card Image" width="400" height="200" />
      
    //   {/* Card Content */}
    //   <div className="p-6">
    //     <h3 className="text-xl font-semibold mb-2">{title}</h3>
    //     <p className="text-gray-600 mb-4">{description}</p>
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{buttonText}</button>
    //   </div>
    // </div>
    <div className='w-60 h-full bg-white rounded-lg border-2 border-orange-300'>
      <h1 className='font-JioType-Light text-xl font-bold text-center text-yellow-800'>Instant Loans</h1>
      <p className='text-center'>Make your wish come true with a hassle-free instant loan.</p>
      <Image src="/home/nehalsharma/jfs/public/assets/gifs/digital-banking-380-380.gif"/>

    </div>
  );
};

export default Card;
