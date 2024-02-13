
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/Carousel'
import Divider from './components/Divider'
import Cards from './components/Cards'
import FooterDivider from './components/FooterDivider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
     <SlideShow/>
        <Cards />
        <Divider/>
      </main>
      <FooterDivider/>
      <Footer/>
    </div>
  )
}
