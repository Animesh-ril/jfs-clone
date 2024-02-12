<<<<<<< HEAD
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
=======

import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
>>>>>>> c30a5dbe962272d76a2dd049dc6d6895d7e2c9bc

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
