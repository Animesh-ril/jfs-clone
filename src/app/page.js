import Script from 'next/script'
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/Carousel'
import Divider from './components/Divider'
import Cards from './components/Cards'
import FooterDivider from './components/FooterDivider'
import Resource from './components/Resources'
import AboutJio from './components/AboutJio'

export default function Home() {
  return (
    <>
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-carousel.js" />
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-video-grid.js" />
      <Script type="module" src="https://jioplayalong4.akamaized.net/jiostream-vcom-prod/dist/je-storyblock.js" />

      <div>
        <Navbar />
        <SlideShow />
        <Cards />
        <Divider />
        <AboutJio />
        <Resource />
        <FooterDivider />
        <Footer />
      </div>
    </>
  )
}
