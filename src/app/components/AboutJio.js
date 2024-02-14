import React from 'react';
import Image from 'next/image';

const AboutJio = () => {
    return (
        <><div className="flex flex-col items-center">
            <h1 className="text-black text-4xl text-left font-JioTypeBold text-center my-8">About Jio Financial Services Limited</h1>
            <p className='text-gray-700 text-center '>Jio Financial Services Limited focuses mainly on crucial customer groups, reaching out to</p>
            <p className='text-gray-700 text-center'>individuals and small businesses often untapped in urban, semi-urban, and rural areas of</p>
            <p className='text-gray-700 text-center'>India. Our goal is to provide easy-to-use, transparent financial products that cater to the </p>
            <p className='text-gray-700 text-center'>rapidly evolving financial needs of India.</p>
            <button class="my-4 px-4 py-4 font-JioTypeBold text-black bg-yellow-500  hover:bg-yellow-700 rounded-full">Learn more about us</button>
        </div>
            <div class="flex justify-center items-center h-screen">
                <div class="grid grid-rows-2 grid-flow-col flex flexrounded-3xl items-center gap-3 w-full md:w-3/4 lg:w-1/2">
                    <div class="row-span-3">
                        <Image src="/assets/aboutjio/about-jio-finance-desk1.webp" alt='image' width={400} height={300} />
                    </div>
                    <div class="col-span-2">
                        <Image src="/assets/aboutjio/about-jio-finance-desk2.webp" alt='image' width={295} height={200} />
                    </div>
                    <div class="row-span-2 col-span-2">
                        <Image src="/assets/aboutjio/about-jio-finance-desk3.webp" alt='image' width={295} height={200} />
                    </div>
                    <div class="row-span-3">
                        <Image src="/assets/aboutjio/about-jio-finance-desk4.webp" alt='image' width={400} height={300} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutJio;
