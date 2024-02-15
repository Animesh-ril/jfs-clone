
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/Carousel'
import Divider from './components/Divider'
import Cards from './components/Cards'
import FooterDivider from './components/FooterDivider'
import Resource from './components/Resources'
import AboutJio from './components/AboutJio'
import Script from "next/script";

//vids


export default function Home() {
  return (
    <>
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-carousel.js" />
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-storyblock.js" />
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-video-grid.js" />
      <div>
        <Navbar />
        <SlideShow />
        <Cards />
        <div className='bg-gray-100 p-10'>
        <h1 className='font-JioTypeBlack text-navtitlecolor -mt-7 mb-10 text-5xl text-center'>Learn about Finance & Investments</h1>
        <je-carousel playlist-id="IXF-104" tenant-id="649ed93966cbc10030401517" tags={false} user-id="dummy_id"></je-carousel>
        </div>
        <Divider />
        <AboutJio />
        <Resource />
        <div className='p-10 bg-resourcebg'>

        <je-storyblock playlist-id="IXF-104" tenant-id="649ed93966cbc10030401517"  user-id="dummy_id"></je-storyblock>
        </div>
        <FooterDivider />
        <div className=' p-10'>
        <h1 className='font-JioTypeBlack text-navtitlecolor -mt-10 mb-10 text-5xl text-center'>Lets learn to Invest</h1>
        <je-video-grid playlist-id="IXF-104" tenant-id="649ed93966cbc10030401517" tags={false}  user-id="dummy_id"></je-video-grid>
        </div>
        <Footer />
      </div>
    </>

  )
}
