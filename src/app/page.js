<<<<<<< HEAD

// // pages/index.js
// import Head from 'next/head'
// import MultiLineCarousel from './components/MultilineCarousel';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Multi-line Carousel</title>
//         <meta name="description" content="Multi-line Carousel Example" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1>Multi-line Carousel Example</h1>
//         <MultiLineCarousel />
//       </main>
//     </div>
//   )
// }
// pages/index.js
import Head from 'next/head'
import Card from './components/Card'
import Footer from './components/Footer'
=======
import Image from "next/image";
import Navbar from "./Components/Navbar";
import "./globals.css"
>>>>>>> beab1f5f7a064960ae5657e667b9f99c634b989c

export default function Home() {
  return (
    <div>
      <Head>
        <title>JFS | Home</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1>Welcome to JFS</h1>
        <Card />
      </main>
      <Footer/>
    </div>
  )
}
