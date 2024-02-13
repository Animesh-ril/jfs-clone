"use client"
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SlideShow from './components/MultilineCarousel'
import Divider from './components/Divider'


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
