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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
 
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loan Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Instant Loans</h3>
            <p className="text-gray-700 mb-4">
              Get quick personal loans with low interest rates and flexible repayment options.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore</button>
          </div>
          {/* Loan Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Insurance Plans</h3>
            <p className="text-gray-700 mb-4">
              Expand your business with our hassle-free business loans tailored to your needs.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore</button>
          </div>
          {/* Loan Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Digital Banking</h3>
            <p className="text-gray-700 mb-4">
              Fulfill your dream of owning a home with our competitive home loan options.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore</button>
          </div>
               {/* Loan Card 4 */}
               <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Insurance Plans</h3>
            <p className="text-gray-700 mb-4">
              Expand your business with our hassle-free business loans tailored to your needs.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
