
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>

      <Navbar/>
      <main>
        
        <Card />
      </main>
      <Footer/>
    </div>
  )
}
