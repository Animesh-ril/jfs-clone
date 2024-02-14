
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
    <div>
      <Navbar/>
  
     <SlideShow/>
        <Cards />
        <Divider/>
    
      <AboutJio/>
      <Resource/>
      <FooterDivider/>
      <Footer/>
      
    </div>
  )
}
