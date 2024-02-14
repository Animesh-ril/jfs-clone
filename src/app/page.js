import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
// import SlideShow from './components/MultilineCarousel'
import Divider from './components/Divider'
import AboutJio from './components/AboutJio'
//import MultiLineCarousel from './components/MultilineCarousel'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cards />
      <AboutJio />
      <Footer />
    </div>
  )
}
