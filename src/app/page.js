import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
//import MultiLineCarousel from './components/MultilineCarousel'

export default function Home() {
  return (
    <div>

      <Navbar/>
      <main>
     <SlideShow/>
        <Card />
        <Divider/>
      </main>
      <Footer/>
    </div>
  )
}
