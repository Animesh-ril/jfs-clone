import React from 'react';
import Image from 'next/image';


const AboutJio = () => {
    return (
        <><div className="flex flex-col items-center">
            <h1 className="text-black text-4xl font-JioTypeBlack text-center py-10">About Jio Financial Services Limited</h1>
            <p className='text-gray-700 text-center font-JioTypeMedium text-l'>Jio Financial Services Limited focuses mainly on crucial customer groups, reaching out to</p>
            <p className='text-gray-700 text-center font-JioTypeMedium text-l'>individuals and small businesses often untapped in urban, semi-urban, and rural areas of</p>
            <p className='text-gray-700 text-center font-JioTypeMedium text-l'>India. Our goal is to provide easy-to-use, transparent financial products that cater to the </p>
            <p className='text-gray-700 text-center font-JioTypeMedium text-l'>rapidly evolving financial needs of India.</p>
            <button class="my-10 px-4 py-4 font-JioTypeBold text-black bg-navbgcolor  hover:bg-yellow-700 rounded-full">Learn more about us</button>
        </div>
            <div className="flex justify-center items-center mb-20">
                <div className="grid grid-rows-2 grid-flow-col items-center gap-3">
                    <div className="row-span-3 rounded-3xl w-full h-full flex justify-end">
                        <Image src="/assets/aboutjio/about-jio-finance-desk1.webp" className='rounded-3xl' alt='image' width={200} height={450} />
                    </div>
                    <div className="col-span-2 rounded-3xl w-48 h-40">
                        <Image src="/assets/aboutjio/about-jio-finance-desk2.webp" className='rounded-3xl' alt='image' width={295} height={100} />
                    </div>
                    <div className="col-span-2 rounded-3xl w-48 h-40">
                        <Image src="/assets/aboutjio/about-jio-finance-desk3.webp" className='rounded-3xl' alt='image' width={295} height={200} />
                    </div>
                    <div className="row-span-3 rounded-3xl w-full h-full flex justify-start">
                        <Image src="/assets/aboutjio/about-jio-finance-desk4.webp" className='rounded-3xl' alt='image' width={200} height={450} />
                    </div>
                </div>
            </div>


        </>
    );
};

export default AboutJio;